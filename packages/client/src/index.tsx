import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloProvider} from '@apollo/client';

import {createApolloClient} from "./lib/client";
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={createApolloClient()}>
      <App/>
    </ApolloProvider>
  </React.StrictMode>
);
