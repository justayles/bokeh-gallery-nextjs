// import { useAuth } from 'context/auth-context';
// import useAsync from 'hooks/use-async';
import Button from 'components/buttons/Button';
import Form from 'components/forms//Form';
import ErrorMessage from 'components/forms/error/ErrorMessage';
import Input from 'components/forms/input/Input';
import { IRegisterForm, TypedFormEvent } from 'types/form';

export interface IRegisterFormProps {}

const RegisterForm: React.FC<IRegisterForm> = () => {
  // const { isLoading, isError, error, run } = useAsync();
  // const { register } = useAuth();
  const isLoading = false;
  const isError = false;
  const error = 'some error';

  function nameChecker(val: string): string | boolean {
    return val !== 'invalid' ? true : 'This field is shit';
  }

  function handleSubmit(event: TypedFormEvent<IRegisterForm>) {
    event.preventDefault();
    const { elements } = event.currentTarget;
    // run(
    //   register({
    //     title: elements.title.value,
    //     name: elements.name.value,
    //     email: elements.email.value,
    //     phone: elements.phone.value,
    //     admin: elements.admin.value,
    //     username: elements.username.value,
    //     password: elements.password.value,
    //     newsletter: elements.newsletter.value,
    //     terms: elements.terms.value,
    //   })
    // );
  }

  return (
    <>
      <Form onSubmit={handleSubmit} isLoading={isLoading}>
        <Input
          type="email"
          name="email"
          label="Email"
          required={true}
          validationPattern="^.{3,}$"
          validationMessage="Please enter a valid email"
        />
        <Input
          type="text"
          name="username"
          label="Username"
          required={true}
          validationPattern="^.{3,}$"
          validationMessage="Please enter a valid username"
          // validationFunction={nameChecker}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          required={true}
          validationPattern="^.{3,}$"
          validationMessage="Please enter a valid password"
        />
        <Input
          type="password"
          name="passwordconfirm"
          label="Confirm Password"
          required={true}
          validationPattern="^.{3,}$"
          validationMessage="Passwords must match"
        />
        <Input type="hidden" name="admin" value="false" />
        <Button loading={isLoading}>Register</Button>
      </Form>
      {isError && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default RegisterForm;
