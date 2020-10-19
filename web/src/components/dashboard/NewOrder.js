import { useMutation, useFlash } from '@redwoodjs/web';
import { useAuth } from '@redwoodjs/auth';
import { navigate, routes } from '@redwoodjs/router';
import OrderForm from 'components/dashboard/OrderForm';

const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrderMutation($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
    }
  }
`;

const NewOrder = () => {
  const { currentUser } = useAuth();
  const { addMessage } = useFlash();
  const [createOrder, { loading, error }] = useMutation(CREATE_ORDER_MUTATION, {
    onCompleted: () => {
      navigate(routes.dashboard());
      addMessage('Order created.', { classes: 'rw-flash-success' });
    },
  });

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      userId: currentUser.id,
      total: 0,
    });
    createOrder({ variables: { input: castInput } });
  };

  return (
    <div
      className="rw-segment"
      sx={{ width: 900, maxWidth: '94%', margin: '20px auto 0' }}
    >
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Order</h2>
      </header>
      <div className="rw-segment-main">
        <OrderForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewOrder;
