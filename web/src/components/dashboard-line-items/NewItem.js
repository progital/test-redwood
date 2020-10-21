import { useMutation, useFlash } from '@redwoodjs/web';
import { priceToCents } from 'utils/helpers';
import OrderLineItemForm from 'components/dashboard-line-items/ItemCreateForm';

const CREATE_ORDER_LINE_ITEM_MUTATION = gql`
  mutation CreateOrderLineItemMutation($input: CreateOrderLineItemInput!) {
    createOrderLineItem(input: $input) {
      id
    }
  }
`;

const NewOrderLineItem = ({ orderId, actions }) => {
  const { addMessage } = useFlash();
  const [createOrderLineItem, { loading, error }] = useMutation(
    CREATE_ORDER_LINE_ITEM_MUTATION,
    {
      onCompleted: () => {
        actions.back();
        addMessage('Line Item created.', { classes: 'rw-flash-success' });
      },
    }
  );

  const onSave = (input) => {
    if (!input.productId) {
      return;
    }
    const castInput = Object.assign(input, {
      orderId,
      productId: parseInt(input.productId),
      productPrice: priceToCents(input.productPrice),
    });
    createOrderLineItem({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment" sx={{ mt: 3 }}>
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Line Item</h2>
      </header>
      <div className="rw-segment-main">
        <OrderLineItemForm
          onSave={onSave}
          loading={loading}
          error={error}
          actions={actions}
        />
      </div>
    </div>
  );
};

export default NewOrderLineItem;
