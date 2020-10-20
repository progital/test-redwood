import { useMutation, useFlash } from '@redwoodjs/web';
import { priceToCents } from 'utils/helpers';
import OrderLineItemForm from 'components/dashboard-line-items/ItemEditForm';

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
const UPDATE_ORDER_LINE_ITEM_MUTATION = gql`
  mutation UpdateOrderLineItemMutation(
    $id: Int!
    $input: UpdateOrderLineItemInput!
  ) {
    updateOrderLineItem(id: $id, input: $input) {
      id
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ orderLineItem, actions }) => {
  const { addMessage } = useFlash();
  const [updateOrderLineItem, { loading, error }] = useMutation(
    UPDATE_ORDER_LINE_ITEM_MUTATION,
    {
      onCompleted: () => {
        actions.back();
        addMessage('Line item updated.', { classes: 'rw-flash-success' });
      },
    }
  );

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      orderId: orderLineItem.orderId,
      productId: orderLineItem.productId,
      productPrice: priceToCents(input.productPrice),
    });
    updateOrderLineItem({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment" sx={{ mt: 3 }}>
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Line Item #{orderLineItem.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <OrderLineItemForm
          orderLineItem={orderLineItem}
          onSave={onSave}
          error={error}
          loading={loading}
          actions={actions}
        />
      </div>
    </div>
  );
};
