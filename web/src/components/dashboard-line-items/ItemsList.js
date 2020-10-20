import { useMutation, useFlash } from '@redwoodjs/web';
import { priceFromCents } from 'utils/helpers';

const DELETE_ORDER_LINE_ITEM_MUTATION = gql`
  mutation DeleteOrderLineItemMutation($id: Int!) {
    deleteOrderLineItem(id: $id) {
      id
    }
  }
`;

const MAX_STRING_LENGTH = 150;

const truncate = (text) => {
  let output = text;
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...';
  }
  return output;
};

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2));
};

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  );
};

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />;
};

const OrderLineItemsList = ({ orderLineItems, actions, embedded }) => {
  const { addMessage } = useFlash();
  const [deleteOrderLineItem] = useMutation(DELETE_ORDER_LINE_ITEM_MUTATION, {
    onCompleted: () => {
      addMessage('Line Item deleted.', { classes: 'rw-flash-success' });
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete Line Item #' + id + '?')) {
      deleteOrderLineItem({
        variables: { id },
        refetchQueries: ['ORDER_LINE_ITEMS'],
      });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Product price</th>
            <th>Product name</th>
            <th>Quantity</th>
            {!embedded && <th>&nbsp;</th>}
          </tr>
        </thead>
        <tbody>
          {orderLineItems.map((orderLineItem) => (
            <tr key={orderLineItem.id}>
              <td>{truncate(orderLineItem.id)}</td>
              <td>{priceFromCents(orderLineItem.productPrice)}</td>
              <td>{truncate(orderLineItem.productName)}</td>
              <td>{truncate(orderLineItem.quantity)}</td>
              {!embedded && (
                <td>
                  <nav className="rw-table-actions">
                    <span
                      onClick={() => {
                        actions.editItem(orderLineItem.id);
                      }}
                      title={'Edit orderLineItem ' + orderLineItem.id}
                      className="rw-button rw-button-small rw-button-blue"
                    >
                      Edit
                    </span>
                    <span
                      title={'Delete orderLineItem ' + orderLineItem.id}
                      className="rw-button rw-button-small rw-button-red"
                      onClick={() => onDeleteClick(orderLineItem.id)}
                    >
                      Delete
                    </span>
                  </nav>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderLineItemsList;
