import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import { useAuth } from '@redwoodjs/auth';
import OrderForm from 'components/dashboard/OrderForm';

export const QUERY = gql`
  query FIND_ORDER_BY_ID($id: Int!) {
    order: order(id: $id) {
      id
      userId
      total
      createdAt
      OrderLineItem {
        id
        productId
        productName
        productPrice
        quantity
      }
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
  const { currentUser } = useAuth();
  const { addMessage } = useFlash();
  const [updateOrder, { loading, error }] = useMutation(UPDATE_ORDER_MUTATION, {
    onCompleted: () => {
      navigate(routes.dashboard());
      addMessage('Order updated.', { classes: 'rw-flash-success' });
    },
  });

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      userId: currentUser.id,
      total: 0,
    });
    updateOrder({ variables: { id, input: castInput } });
  };

  return (
    <div
      className="rw-segment"
      sx={{ width: 900, maxWidth: '94%', margin: '20px auto 0' }}
    >
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Order #{order.id}
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
