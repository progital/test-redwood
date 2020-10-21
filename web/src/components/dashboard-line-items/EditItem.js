import { useMutation, useFlash } from '@redwoodjs/web';
import EditItemCell from 'components/dashboard-line-items/EditItemCell';

const EditOrderLineItem = ({ id, actions }) => {
  return <EditItemCell id={id} actions={actions} />;
};

export default EditOrderLineItem;
