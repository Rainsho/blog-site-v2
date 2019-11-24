import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { withApollo } from '../lib/apollo';
import { Context } from '../global';
import Header from '../components/Header';
import BlogList from '../components/BlogList';

const QUERY_BLOGS = gql`
  {
    blogs {
      id
      name
      summary
    }
  }
`;

const IndexPage = () => {
  const { loading, data = {} } = useQuery(QUERY_BLOGS);
  const { user } = useContext(Context);

  return (
    <>
      <Header />
      <BlogList loading={loading} blogs={data.blogs || []} me={user} />
    </>
  );
};

export default withApollo(IndexPage);
