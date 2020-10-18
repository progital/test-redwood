import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import OrderLineItemForm from 'src/components/OrderLineItemForm';

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

export const Success = ({ orderLineItem }) => {
  const { addMessage } = useFlash();
  const [updateOrderLineItem, { loading, error }] = useMutation(
    UPDATE_ORDER_LINE_ITEM_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.orderLineItems());
        addMessage('OrderLineItem updated.', { classes: 'rw-flash-success' });
      },
    }
  );

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      orderId: parseInt(input.orderId),
      productId: parseInt(input.productId),
    });
    updateOrderLineItem({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit OrderLineItem {orderLineItem.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <OrderLineItemForm
          orderLineItem={orderLineItem}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
