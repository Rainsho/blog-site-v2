import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Link from 'next/link';
import { withApollo } from '../lib/apollo';

const query = gql`
  {
    blogs {
      id
      name
      summary
    }
    me {
      id
      name
    }
  }
`;

const IndexPage = () => {
  const { loading, error, data } = useQuery(query);

  if (error) return <p>error!!!</p>;

  if (loading) return <p>loading...</p>;

  const { blogs, me } = data;

  return (
    <div>
      <p>{`me is ${me && me.name}`}</p>
      {blogs.map(({ id, name }) => (
        <p key={id}>
          <Link href={`/blog/${id}`}>
            <a>{name}</a>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default withApollo(IndexPage);
