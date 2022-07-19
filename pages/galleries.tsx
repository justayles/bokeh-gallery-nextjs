import { GetServerSideProps } from 'next';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SearchResult from '../components/utility/search-result/SearchResult';
import { ISearchData } from '../lib/search/types';
import { IApiSearchResponseData } from './api/search';
import { NextPageWithLayout } from './page';

export interface IResults {
  galleryResults: ISearchData[];
}

export const getServerSideProps: GetServerSideProps<IResults> = async ({
  query,
}) => {
  let galleryResults: IApiSearchResponseData = [];
  const searchTerm = query.search;
  if (searchTerm && searchTerm.length > 0) {
    const response = await fetch('http://localhost:3000/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchTerm }),
    });

    galleryResults = await response.json();
  }

  return {
    props: {
      galleryResults,
    },
  };
};

const Galleries: NextPageWithLayout<IResults> = ({ galleryResults }) => {
  const hasResults = galleryResults.length > 0;

  return (
    <section>
      <h1 className="h1">Hello Gallery Viewer</h1>
      <p className="para">Check out some of our offerings below...</p>
      {hasResults ? (
        <div className={`flex flex-col space-y-8`}>
          {galleryResults.map((result, idx) => {
            return <SearchResult key={idx} {...result} />;
          })}
        </div>
      ) : (
        <p className="para">No results found.</p>
      )}
    </section>
  );
};

export default Galleries;

Galleries.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
