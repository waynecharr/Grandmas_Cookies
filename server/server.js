const express = require('express');
// import ApolloServer
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { authMiddleware } = require('./utils/auth');

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3011;
// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const path = require('path');

// Create a new instance of an Apollo server with the GraphQL schema
const startServer = async (typeDefs, resolvers) => {
  await server.start();

  // integrate our Apollo server with the Express application as middleware
  // server.applyMiddleware({ app });

  // Serve up static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist/')));

  app.use('/graphql', expressMiddleware (server, {context: authMiddleware}));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startServer().catch((error) => {
  console.error('Error starting the server:', error);
});




// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.use(routes);

// db.once('open', () => {
//   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });
