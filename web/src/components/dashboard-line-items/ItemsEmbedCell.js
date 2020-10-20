import OrderLineItems from 'components/dashboard-line-items/ItemsList';

export const QUERY = gql`
  query ORDER_LINE_ITEMS($orderId: Int!) {
    orderLineItems(orderId: $orderId) {
      id
      orderId
      productId
      productPrice
      productName
      quantity
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = ({ actions }) => {
  return (
    <div className="rw-text-center" sx={{ mb: 3 }}>
      {'No line items found. '}
    </div>
  );
};

export const Success = ({ orderLineItems }) => {
  return <OrderLineItems orderLineItems={orderLineItems} embedded />;
};
