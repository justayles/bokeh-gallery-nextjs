import AuthButton from '../components/buttons/auth/AuthButton';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Login: NextPageWithLayout = () => {
  return (
    <section>
      <h1>Login</h1>
      <p>
        Lorem ipsum dipsunm etc Lorem ipsum dipsunm etc Lorem ipsum dipsunm etc
        Lorem ipsum dipsunm etc
      </p>
      <h3>Try it out</h3>
      <p>
        Lorem ipsum dipsunm etc Lorem ipsum dipsunm etc Lorem ipsum dipsunm etc
        Lorem ipsum dipsunm etc
      </p>
      <p>
        Lorem ipsum dipsunm etc Lorem ipsum dipsunm etc Lorem ipsum dipsunm etc
        Lorem ipsum dipsunm etc
      </p>
      <AuthButton />
    </section>
  );
};

export default Login;

Login.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
