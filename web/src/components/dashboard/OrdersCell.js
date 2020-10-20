import OrdersList from 'components/dashboard/OrdersList';

export const QUERY = gql`
  query ORDERS(
    $userId: Int!
    $startTotal: Int
    $endTotal: Int
    $startDate: DateTime
    $endDate: DateTime
  ) {
    orders(
      userId: $userId
      startTotal: $startTotal
      endTotal: $endTotal
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      userId
      total
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = ({ actions }) => {
  return (
    <div className="rw-text-center">
      {'No orders yet. '}
      <span className="rw-link" onClick={actions.newOrder}>
        Create one?
      </span>
    </div>
  );
};

export const Success = ({ orders }) => {
  return <OrdersList orders={orders} />;
};
