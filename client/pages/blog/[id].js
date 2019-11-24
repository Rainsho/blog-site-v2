import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import { withApollo } from '../../lib/apollo';
import { Context } from '../../global';
import Header from '../../components/Header';

const BLOG_QUERY = gql`
  query getBlog($id: ID!) {
    blog(where: { id: $id }) {
      name
      summary
      content
      createdAt
      user {
        name
      }
    }
  }
`;

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(BLOG_QUERY, {
    variables: { id },
  });

  const { user: me } = useContext(Context);

  console.log('me in blog', me);

  if (loading || error) return <p>{loading || error}</p>;

  const { name, summary, content } = data.blog;

  return (
    <div>
      <Header />
      <Link href="/">
        <a>back</a>
      </Link>
      <h1>{name}</h1>
      <h2>{summary}</h2>
      <p>{content}</p>
    </div>
  );
};

export default withApollo(Blog);
