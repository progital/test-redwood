import OrderLineItemsLayout from 'src/layouts/OrderLineItemsLayout';
import EditOrderLineItemCell from 'src/components/EditOrderLineItemCell';

const EditOrderLineItemPage = ({ id }) => {
  return (
    <OrderLineItemsLayout>
      <EditOrderLineItemCell id={id} />
    </OrderLineItemsLayout>
  );
};

export default EditOrderLineItemPage;
