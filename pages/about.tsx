import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h1>About</h1>
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
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
