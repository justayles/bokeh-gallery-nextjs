import AuthButton from 'components/buttons/Button';
import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../types/page';

const Login: NextPageWithLayout = () => {
  return (
    <section>
      <h1 className="h1">Hello lets log you in !</h1>
      <p className="para">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
        explicabo quaerat voluptas corporis quidem tenetur voluptate numquam,
        beatae amet doloribus facere quisquam iusto odio fuga! Recusandae
        delectus distinctio ratione natus.
      </p>
      <h2 className="h2">Sub Headline</h2>
      <p className="para">
        Impedit reprehenderit quis enim, perferendis nesciunt iusto.
        Reprehenderit, fugiat excepturi? Placeat suscipit quaerat, error, nam
        facilis nulla obcaecati commodi fuga ratione consequuntur iure quas
        laboriosam ducimus dolorum consequatur tempore! Libero.
      </p>
      <AuthButton className="mt-4" />
    </section>
  );
};

export default Login;

Login.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
