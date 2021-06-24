const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const { schema, root } = require('./graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});


//Construct a schema, using GraphQL schema language
//console.log(schema);

// const schema = buildSchema(`
//   type Query {
//     hello: String
//     age: Int
//     user: Person
//     heroes(id: Int!): Hero
//   }

//   type Person {
//     id: String
//     name: String
//   }

//   type Hero {
//     id: Int!
//     name: String
//     username: String
//     address: Address
//   }

//   type Address {
//     street: String
//     suite: String
//     city: String
//     zipcode: String
//     geo: Geo
//   }

//   type Geo {
//     lat: Float,
//     lng: Float
//   }
// `);


// The root provides a resolver function for each API endpoint
// const root = {
//   hello: () => {
//     return 'Hello world!';
//   },
//   name: () => {
//     return 'Alexander';
//   },
//   age: () => {
//     return Math.floor(Math.random() * 100);
//   },
//   user: () =>  {
//     return {id: 1, name: "Username"}
//   },
//   heroes: async ({ id }) => {
//     const candidate = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//     console.log(candidate.data);
//     return candidate.data
//   }
// };