import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_ORDER_LINE_ITEM_MUTATION = gql`
  mutation DeleteOrderLineItemMutation($id: Int!) {
    deleteOrderLineItem(id: $id) {
      id
    }
  }
`;

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
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

const OrderLineItem = ({ orderLineItem }) => {
  const { addMessage } = useFlash();
  const [deleteOrderLineItem] = useMutation(DELETE_ORDER_LINE_ITEM_MUTATION, {
    onCompleted: () => {
      navigate(routes.orderLineItems());
      addMessage('OrderLineItem deleted.', { classes: 'rw-flash-success' });
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete orderLineItem ' + id + '?')) {
      deleteOrderLineItem({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            OrderLineItem {orderLineItem.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{orderLineItem.id}</td>
            </tr>
            <tr>
              <th>Order id</th>
              <td>{orderLineItem.orderId}</td>
            </tr>
            <tr>
              <th>Product id</th>
              <td>{orderLineItem.productId}</td>
            </tr>
            <tr>
              <th>Product price</th>
              <td>{orderLineItem.productPrice}</td>
            </tr>
            <tr>
              <th>Product name</th>
              <td>{orderLineItem.productName}</td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td>{orderLineItem.quantity}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(orderLineItem.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editOrderLineItem({ id: orderLineItem.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(orderLineItem.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default OrderLineItem;
