import * as React from 'react'
import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import './App.css'

const client = new ApolloClient({
  uri: '/.netlify/functions/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Query query={gql`{ hello }`}>
        {({ data }: any) => <div>Server says: {data.hello}</div>}
      </Query>
    </ApolloProvider>
  );
}

export default App;
