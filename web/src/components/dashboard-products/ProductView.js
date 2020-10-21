import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes, navigate } from '@redwoodjs/router';
import { priceFromCents } from 'utils/helpers';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProductMutation($id: Int!) {
    deleteProduct(id: $id) {
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

const ProductView = ({ product }) => {
  const { addMessage } = useFlash();
  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION, {
    onCompleted: () => {
      navigate(routes.products());
      addMessage('Product deleted.', { classes: 'rw-flash-success' });
    },
  });

  const onDeleteClick = (id, name) => {
    if (confirm('Are you sure you want to delete product ' + name + '?')) {
      deleteProduct({ variables: { id } });
    }
  };

  return (
    <>
      <div
        className="rw-segment"
        sx={{ width: 900, maxWidth: '94%', margin: '20px auto 0' }}
      >
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Product {product.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{product.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{product.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{product.description}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{priceFromCents(product.price)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link to={routes.products()} className="rw-button">
          Back
        </Link>
        <Link
          to={routes.editProduct({ id: product.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <span
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(product.id, product.name)}
        >
          Delete
        </span>
      </nav>
    </>
  );
};

export default ProductView;
