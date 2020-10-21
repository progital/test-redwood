import Product from 'components/dashboard-products/ProductView';

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

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Product not found</div>;

export const Success = ({ product }) => {
  return <Product product={product} />;
};
