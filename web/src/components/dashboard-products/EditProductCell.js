import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import ProductForm from 'components/dashboard-products/ProductForm';
import { priceToCents } from 'utils/helpers';

export const QUERY = gql`
  query FIND_PRODUCT_BY_ID($id: Int!) {
    product: product(id: $id) {
      id
      name
      description
      price
    }
  }
`;
const UPDATE_PRODUCT_MUTATION = gql`
  mutation UpdateProductMutation($id: Int!, $input: UpdateProductInput!) {
    updateProduct(id: $id, input: $input) {
      id
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ product }) => {
  const { addMessage } = useFlash();
  const [updateProduct, { loading, error }] = useMutation(
    UPDATE_PRODUCT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.products());
        addMessage('Product updated.', { classes: 'rw-flash-success' });
      },
    }
  );

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      price: priceToCents(input.price),
    });
    updateProduct({ variables: { id, input: castInput } });
  };

  return (
    <div
      className="rw-segment"
      sx={{ width: 900, maxWidth: '94%', margin: '20px auto 0' }}
    >
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit {product.name}</h2>
      </header>
      <div className="rw-segment-main">
        <ProductForm
          product={product}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
