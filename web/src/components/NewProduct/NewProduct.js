import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import ProductForm from 'src/components/ProductForm';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProductMutation($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
    }
  }
`;

const NewProduct = () => {
  const { addMessage } = useFlash();
  const [createProduct, { loading, error }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.products());
        addMessage('Product created.', { classes: 'rw-flash-success' });
      },
    }
  );

  const onSave = (input) => {
    createProduct({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Product</h2>
      </header>
      <div className="rw-segment-main">
        <ProductForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewProduct;
