import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../types/page';

const Home: NextPageWithLayout = () => {
  //const { locale } = useRouter();

  return (
    <section>
      <h1 className="h1">Hello Humble Default User</h1>
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
      <p className="para">
        Consequuntur, dolorem facilis. Laborum vitae voluptate cupiditate error
        architecto culpa pariatur quidem suscipit earum minus perferendis
        eveniet aspernatur sint, doloremque magnam consequuntur, blanditiis
        consequatur ratione soluta tempora debitis quibusdam voluptas.
      </p>
      <h2 className="h2">Sub Headline</h2>
      <p className="para">
        Repellat doloremque suscipit ad, sapiente velit iure culpa dolorum at
        impedit enim quibusdam officiis assumenda eius neque, voluptatum tempore
        odit nostrum, eligendi ducimus dolores nihil repellendus necessitatibus
        eum. Soluta, itaque!
      </p>
      <p className="para">
        Quos nemo aperiam quisquam veritatis, corporis nihil velit dolores autem
        a culpa, fugit numquam aspernatur nobis quia repellendus nisi totam
        magnam fugiat distinctio excepturi magni explicabo! Saepe quos cumque
        earum?
      </p>
      <p className="para">
        Quae odit omnis sequi quia, molestias unde maxime facilis eos vel sint
        hic! Vel deserunt perspiciatis, harum, minus illo ratione debitis amet
        veniam, vitae eos sit in nihil. Omnis, repellat?
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
