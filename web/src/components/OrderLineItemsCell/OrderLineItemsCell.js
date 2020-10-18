import { Link, routes } from '@redwoodjs/router';

import OrderLineItems from 'src/components/OrderLineItems';

export const QUERY = gql`
  query ORDER_LINE_ITEMS {
    orderLineItems {
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

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No orderLineItems yet. '}
      <Link to={routes.newOrderLineItem()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Success = ({ orderLineItems }) => {
  return <OrderLineItems orderLineItems={orderLineItems} />;
};
