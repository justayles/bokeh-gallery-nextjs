import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const AdminHome: NextPageWithLayout = () => {
  // const { locale } = useRouter();

  return (
    <section className="container">
      <h1>Hello Senor aAdministrator</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
        voluptatibus cumque asperiores, impedit incidunt ex mollitia quibusdam,
        dicta amet pariatur aperiam vel molestiae corrupti fugiat! Autem id
        quisquam ipsam modi.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
        voluptatibus cumque asperiores, impedit incidunt ex mollitia quibusdam,
        dicta amet pariatur aperiam vel molestiae corrupti fugiat! Autem id
        quisquam ipsam modi.
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
        voluptatibus cumque asperiores, impedit incidunt ex mollitia quibusdam,
        dicta amet pariatur aperiam vel molestiae corrupti fugiat! Autem id
        quisquam ipsam modi.
      </p>
    </section>
  );
};

export default AdminHome;

AdminHome.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
