import React, { useRef, useState } from 'react';
import { IElementPayload, InputTypes, PayloadFunctionType } from 'types/form';
import ErrorMessage from '../error/ErrorMessage';

export interface IInputProps {
  children?: React.ReactNode;
  type: InputTypes;
  name: string;
  label?: string;
  required?: boolean;
  value?: string;
  placeholder?: string;
  validationPattern?: string;
  validationMessage?: string;
  // eslint-disable-next-line no-unused-vars
  validationFunction?: (val: string) => boolean | string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (payload: IElementPayload) => void;
  // eslint-disable-next-line no-unused-vars
  onBlur?: (payload: IElementPayload) => void;
}

const Input: React.FC<IInputProps> = React.memo(
  ({
    children,
    type = 'text',
    name,
    label = '',
    required = false,
    placeholder = '',
    value = '',
    validationPattern,
    validationMessage = '',
    validationFunction,
    onChange,
    onBlur,
  }: IInputProps) => {
    const inputElement = useRef<HTMLInputElement>(null);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isDirty, setIsDirty] = useState(false);
    const [error, setError] = useState(validationMessage);

    // default validation as enforced by validationPattern and required=true
    const handleValidation = (val: string): boolean => {
      if (
        !required ||
        !isDirty ||
        !validationPattern ||
        validationPattern === ''
      )
        return true;
      const regex = new RegExp(validationPattern);
      return regex.test(val);
    };

    // nb: this only exists to broadcast change value up the tree,
    // in case it is needed for some ui thingy
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ): PayloadFunctionType | void => {
      // 1. set the input to touched/dirty
      setIsDirty(true);
      // 2. If no func, just return
      if (!onChange) return;
      // 3. return func callback up the chain for info purposes
      const payload = {
        name: e.target.name,
        value: e.target.value,
      };
      return onChange(payload);
    };

    // by default, on blur we validate and tell form result !
    // if we have custom validationFunction, we still validate on blur,
    // but also validate the given function as well
    const handleBlur = (
      e: React.FocusEvent<HTMLInputElement>
    ): PayloadFunctionType | void => {
      if (!onBlur) return;
      setError(validationMessage);
      // 1. return value of default validation function
      let isValid = handleValidation(e.currentTarget.value);
      // 2 If valid check for a custom function as well...
      // Eg maybe we want to check an api for a specific email/username not being taken, etc
      if (isValid && validationFunction) {
        const isCustomValid = validationFunction(e.currentTarget.value);
        if (typeof isCustomValid === 'boolean') {
          isValid = isCustomValid;
        } else {
          isValid = false;
          setError(isCustomValid);
        }
      }
      // 3. set state var
      setIsInvalid(!isValid);
      // 4 return func callback up the chain to tell form validity status of input
      const payload: IElementPayload = {
        name: e.target.name,
        value: e.target.value,
        isValid,
      };
      return onBlur(payload);
    };

    return (
      <div className="w-full mb-3">
        <label htmlFor={name} className="inline-block py-2">
          {label}
        </label>
        {children}
        <input
          ref={inputElement}
          type={type}
          name={name}
          id={name}
          defaultValue={value}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full border rounded-md ${
            isInvalid ? 'border-red-800' : 'border-slate-600'
          } p-3`}
        />
        {isInvalid && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
