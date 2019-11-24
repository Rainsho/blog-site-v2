/**
 * @doc
 *
 * It's not a PageComponent, so SSR might not work for this component.
 * Which is fine, for the Header is just used for login and so on.
 */
import React, { useContext, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Context } from '../global';
import { withApollo } from '../lib/apollo';

const QUERY_ME = gql`
  {
    me {
      id
      name
      image
      admin
    }
  }
`;

const Header = () => {
  const { user, setUser } = useContext(Context);
  const {
    loading,
    data: { me },
  } = useQuery(QUERY_ME);

  useEffect(() => {
    if (me && me !== user) setUser(me);
  });

  if (loading) return <div>loading...</div>;

  if (me) return <div>welcome {me.name}</div>;

  return <div>TODO LOGIN</div>;
};

export default withApollo(Header);
