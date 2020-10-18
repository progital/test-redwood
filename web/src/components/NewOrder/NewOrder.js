import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import OrderForm from 'src/components/OrderForm';

const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrderMutation($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
    }
  }
`;

const NewOrder = () => {
  const { addMessage } = useFlash();
  const [createOrder, { loading, error }] = useMutation(CREATE_ORDER_MUTATION, {
    onCompleted: () => {
      navigate(routes.orders());
      addMessage('Order created.', { classes: 'rw-flash-success' });
    },
  });

  const onSave = (input) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId) });
    createOrder({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment">
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
