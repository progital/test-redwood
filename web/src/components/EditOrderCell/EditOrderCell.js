import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import OrderForm from 'src/components/OrderForm';

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
const UPDATE_ORDER_MUTATION = gql`
  mutation UpdateOrderMutation($id: Int!, $input: UpdateOrderInput!) {
    updateOrder(id: $id, input: $input) {
      id
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ order }) => {
  const { addMessage } = useFlash();
  const [updateOrder, { loading, error }] = useMutation(UPDATE_ORDER_MUTATION, {
    onCompleted: () => {
      navigate(routes.orders());
      addMessage('Order updated.', { classes: 'rw-flash-success' });
    },
  });

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId) });
    updateOrder({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Order {order.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <OrderForm
          order={order}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
