import React, { useCallback } from 'react';
import { FormHashMap, IElementPayload } from 'types/form';

interface IFormProps {
  children: JSX.Element[];
  isLoading: boolean;
  onSubmit: (event: any) => void;
}

const Form: React.FC<IFormProps> = ({ onSubmit, isLoading, children }) => {
  const [, setFormState] = React.useState<FormHashMap>({});
  const [formIsInvalid, setFormIsInvalid] = React.useState(true);
  const disabled = isLoading || formIsInvalid;

  React.useEffect(() => {
    const initialFormState: FormHashMap = {};
    React.Children.map(children, (child) => {
      if (
        child.props.type === 'text' ||
        child.props.type === 'password' ||
        child.props.type === 'email' ||
        child.props.type === 'hidden' ||
        child.props.type === 'select' ||
        child.props.type === 'radio'
      ) {
        initialFormState[child.props.name] = {
          type: child.props.type,
          required: child.props.required || false,
          value: '',
          valid: false,
        };
      }
    });
    setFormState(initialFormState);
  }, [children]);

  const validateForm = (state: FormHashMap) => {
    const isInvalid = Object.keys(state).some((key) => {
      return state[key].required && !state[key].valid;
    });
    setFormIsInvalid(isInvalid);
  };

  const updateFormState = useCallback((payload: IElementPayload) => {
    setFormState((prevState) => {
      const currentKey = payload.name;
      const currentItem: any = prevState[currentKey];
      const newFormItemState = {
        [currentKey]: {
          ...currentItem,
          value: payload.value,
        },
      };
      if (payload.isValid) newFormItemState[currentKey].valid = payload.isValid;
      const newFormState = { ...prevState, ...newFormItemState };
      validateForm(newFormState);
      return newFormState;
    });
  }, []);

  // generic input change handler for form if needed
  // can be passed in from above on a specific input basis as well
  // lets wrap in useCallback to avoid re-rendering Inputs everytime
  const onChange = useCallback(
    (payload: IElementPayload): void => {
      const { name, value } = payload;
      console.log(`Form Component: onChange: ${name} ${value}`);
      updateFormState(payload);
    },
    [updateFormState]
  );

  // generic input blur handler for form used for validation
  // could also be passed in from above on a specific input basis as well
  // lets wrap in useCallback to avoid re-rendering Inputs everytime
  const onBlur = useCallback(
    (payload: IElementPayload): void => {
      const { name, value } = payload;
      console.log(`Form Component: onBlur: ${name} ${value}`);
      updateFormState(payload);
    },
    [updateFormState]
  );

  return (
    <form onSubmit={onSubmit}>
      {React.Children.map(children, (child) => {
        let elementType = child.props.type;
        // if we have options prop then assign a type of select
        if (child.props.options) elementType = 'select';
        switch (elementType) {
          case 'text':
          case 'password':
          case 'email':
          case 'hidden':
          case 'textarea':
            return React.cloneElement(child, {
              onChange: child.props.onChange ? child.props.onChange : onChange,
              onBlur: child.props.onBlur ? child.props.onBlur : onBlur,
            });
          case 'select':
          case 'radio':
          case 'checkbox':
            return React.cloneElement(child, {
              onChange: child.props.onChange ? child.props.onChange : onChange,
            });
          case 'submit':
            return React.cloneElement(child, {
              disabled: disabled,
            });
          default:
            return child;
        }
      })}
    </form>
  );
};

export default Form;
