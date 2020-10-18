import OrderLineItemsLayout from 'src/layouts/OrderLineItemsLayout';
import NewOrderLineItem from 'src/components/NewOrderLineItem';

const NewOrderLineItemPage = () => {
  return (
    <OrderLineItemsLayout>
      <NewOrderLineItem />
    </OrderLineItemsLayout>
  );
};

export default NewOrderLineItemPage;
