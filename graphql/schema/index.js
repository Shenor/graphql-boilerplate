const { buildSchema } = require('graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const firstType = require('./firstSchema.gql');
const secondType = require('./secondSchema.gql');

module.exports = buildSchema(`${firstType} ${secondType}`)

// module.exports = makeExecutableSchema({
//     typeDefs: [firstType, secondType]
// })