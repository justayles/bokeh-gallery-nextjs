// import { useAuth } from 'context/auth-context';
// import useAsync from 'hooks/use-async';
import Button from 'components/buttons/Button';
import Input from 'components/forms/input/Input';
import { ILoginForm, TypedFormEvent } from 'types/form';
import ErrorMessage from '../error/ErrorMessage';
import Form from '../Form';

export interface ILoginFormProps {}

const error = 'some error';
const isError = false;
const isLoading = false;

const LoginForm: React.FC<ILoginForm> = () => {
  // const { isLoading, isError, error, run } = useAsync();
  // const { login } = useAuth();

  function handleSubmit(event: TypedFormEvent<ILoginForm>) {
    event.preventDefault();
    const { elements } = event.currentTarget;
    // run(
    //   login({
    //     username: elements.username.value,
    //     password: elements.password.value,
    //   })
    // );
  }

  return (
    <>
      <Form onSubmit={handleSubmit} isLoading={isLoading}>
        <Input
          type="text"
          name="username"
          label="Username"
          required={true}
          validationPattern="^.{3,}$"
          validationMessage="Please enter a valid username"
        />
        <Input
          type="password"
          name="password"
          label="Password"
          required={true}
          validationPattern="^.{3,}$"
          validationMessage="Please enter a valid password"
        />
        <Button loading={isLoading}>Login</Button>
      </Form>
      {isError && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default LoginForm;
