export const schema = gql`
  type Order {
    id: Int!
    user: User!
    userId: Int!
    total: Int!
    createdAt: DateTime!
    OrderLineItem: [OrderLineItem]!
  }

  type Query {
    orders(userId: Int): [Order!]!
    order(id: Int!): Order
  }

  input CreateOrderInput {
    userId: Int!
    total: Int!
  }

  input UpdateOrderInput {
    userId: Int
    total: Int
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order!
    updateOrder(id: Int!, input: UpdateOrderInput!): Order!
    deleteOrder(id: Int!): Order!
  }
`;
