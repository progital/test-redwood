import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes, navigate } from '@redwoodjs/router';
import ItemsEmbedCell from 'components/dashboard-line-items/ItemsEmbedCell';

const DELETE_ORDER_MUTATION = gql`
  mutation DeleteOrderMutation($id: Int!) {
    deleteOrder(id: $id) {
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

const OrderView = ({ order }) => {
  const { addMessage } = useFlash();
  const [deleteOrder] = useMutation(DELETE_ORDER_MUTATION, {
    onCompleted: () => {
      navigate(routes.dashboard());
      addMessage('Order deleted.', { classes: 'rw-flash-success' });
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete order ' + id + '?')) {
      deleteOrder({ variables: { id } });
    }
  };

  return (
    <>
      <div
        className="rw-segment"
        sx={{ width: 900, maxWidth: '94%', margin: '20px auto 0' }}
      >
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Order #{order.id}</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{order.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{order.userId}</td>
            </tr>
            <tr>
              <th>Total</th>
              <td>{order.total}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(order.createdAt)}</td>
            </tr>
          </tbody>
        </table>

        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            <span sx={{ color: 'secondary' }}>Line Items</span>
          </h1>
        </header>
        <ItemsEmbedCell orderId={order.id} />
      </div>

      <nav className="rw-button-group">
        <Link to={routes.dashboard()} className="rw-button">
          Back
        </Link>
        <Link
          to={routes.editOrder({ id: order.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <span
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(order.id)}
        >
          Delete
        </span>
      </nav>
    </>
  );
};

export default OrderView;
