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
      <Query query={gql`{ hello, dogPhotoUrl }`}>
        {({ data }: any) => (
          <div>
            Server says: {data.hello}<br />
            <img alt="a dog" src={data.dogPhotoUrl} />
          </div>
        )}
      </Query>
    </ApolloProvider>
  );
}

export default App;
