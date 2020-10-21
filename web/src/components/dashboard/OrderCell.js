import Order from 'components/dashboard/OrderView';

export const QUERY = gql`
  query FIND_ORDER_BY_ID($id: Int!) {
    order: order(id: $id) {
      id
      userId
      total
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Order not found</div>;

export const Success = ({ order }) => {
  return <Order order={order} />;
};
