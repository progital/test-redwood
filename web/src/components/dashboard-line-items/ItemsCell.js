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
    <div className="rw-text-center">
      {'No line items yet. '}
      <span className="rw-link" onClick={actions.newItem}>
        Create one?
      </span>
    </div>
  );
};

export const Success = ({ orderLineItems }) => {
  return <OrderLineItems orderLineItems={orderLineItems} />;
};
