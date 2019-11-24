import React from 'react';
import App from 'next/app';
import { Provider } from '../global';

export default props => (
  <Provider>
    <App {...props} />
  </Provider>
);
