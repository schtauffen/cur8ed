const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Query {
    hello: String
    dogPhotoUrl: String
  }
`

const resolvers = {
  Query: {
    hello: (root, args, context) => 'Hello, world!',
    dogPhotoUrl: (root, args, context) => 'https://images.dog.ceo/breeds/pomeranian/n02112018_1090.jpg',
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})

exports.handler = server.createHandler()
