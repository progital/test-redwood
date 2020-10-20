import ProductsList from 'components/dashboard-products/ProductsList';

export const QUERY = gql`
  query PRODUCTS {
    products {
      id
      name
      description
      price
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = ({ actions }) => {
  return (
    <div className="rw-text-center">
      {'No products yet. '}
      <span className="rw-link" onClick={actions.newProduct}>
        Create one?
      </span>
    </div>
  );
};

export const Success = ({ products }) => {
  return <ProductsList products={products} />;
};
