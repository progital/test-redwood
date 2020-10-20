export const schema = gql`
  type OrderLineItem {
    id: Int!
    order: Order!
    orderId: Int!
    product: Product!
    productId: Int!
    productPrice: Int!
    productName: String!
    quantity: Float!
    createdAt: DateTime!
  }

  type Query {
    orderLineItems(orderId: Int): [OrderLineItem!]!
    orderLineItem(id: Int!): OrderLineItem
  }

  input CreateOrderLineItemInput {
    orderId: Int!
    productId: Int!
    productPrice: Int!
    productName: String!
    quantity: Float!
  }

  input UpdateOrderLineItemInput {
    orderId: Int
    productId: Int
    productPrice: Int
    productName: String
    quantity: Float
  }

  type Mutation {
    createOrderLineItem(input: CreateOrderLineItemInput!): OrderLineItem!
    updateOrderLineItem(
      id: Int!
      input: UpdateOrderLineItemInput!
    ): OrderLineItem!
    deleteOrderLineItem(id: Int!): OrderLineItem!
  }
`;
