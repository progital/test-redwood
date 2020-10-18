export const schema = gql`
  type User {
    id: Int!
    email: String!
    displayName: String
    userName: String
    createdAt: DateTime!
    Order: [Order]!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
  }

  type LoginResponse {
    user: User!
    token: String!
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

  input LoginUserInput {
    email: String
    password: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    loginUser(input: LoginUserInput!): LoginResponse
    logoutUser: Boolean
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`;
