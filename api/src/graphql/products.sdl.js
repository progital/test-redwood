export const schema = gql`
  type Product {
    id: Int!
    name: String!
    description: String
    price: Int!
    deleted: Boolean
    deletedAt: DateTime
    createdAt: DateTime!
    OrderLineItem: [OrderLineItem]!
  }

  type Query {
    products: [Product!]!
    product(id: Int!): Product
  }

  input CreateProductInput {
    name: String!
    description: String
    price: Int!
  }

  input UpdateProductInput {
    name: String
    description: String
    price: Int
    deleted: Boolean
    deletedAt: DateTime
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product!
    updateProduct(id: Int!, input: UpdateProductInput!): Product!
    deleteProduct(id: Int!): Product!
  }
`;
