import OrderLineItem from 'src/components/OrderLineItem';

export const QUERY = gql`
  query FIND_ORDER_LINE_ITEM_BY_ID($id: Int!) {
    orderLineItem: orderLineItem(id: $id) {
      id
      orderId
      productId
      productPrice
      productName
      quantity
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>OrderLineItem not found</div>;

export const Success = ({ orderLineItem }) => {
  return <OrderLineItem orderLineItem={orderLineItem} />;
};
