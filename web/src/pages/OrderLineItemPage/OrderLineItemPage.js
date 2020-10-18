import OrderLineItemsLayout from 'src/layouts/OrderLineItemsLayout';
import OrderLineItemCell from 'src/components/OrderLineItemCell';

const OrderLineItemPage = ({ id }) => {
  return (
    <OrderLineItemsLayout>
      <OrderLineItemCell id={id} />
    </OrderLineItemsLayout>
  );
};

export default OrderLineItemPage;
