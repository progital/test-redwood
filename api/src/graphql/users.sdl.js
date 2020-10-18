export const schema = gql`
  type User {
    id: Int!
    email: String!
    password: String!
    displayName: String
    userName: String
    createdAt: DateTime!
    Order: [Order]!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
  }

  input CreateUserInput {
    email: String!
    password: String!
    displayName: String
    userName: String
  }

  input UpdateUserInput {
    email: String
    password: String
    displayName: String
    userName: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`;
