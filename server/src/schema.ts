import { buildSchema } from 'graphql/utilities';

export const schema = buildSchema(`
    type User {
      id: ID
      username: String
      position: String
    }
    
    input UserInput {
      id: ID
      username: String
      position: String
    }
  
    type Query {
      getUsers: [User]
      getUser(id: ID!): User
    }
    
    type Mutation {
      createUser(input: UserInput): User  
      updateUser(id: ID!, input: UserInput): User
      deleteUser(id: ID!): User
    }
`);
