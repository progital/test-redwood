import { useState } from 'react';
import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms';
import { Link, routes } from '@redwoodjs/router';
import LineItemsLayout from 'components/dashboard-line-items/ItemsLayout';
import ItemsCell from 'components/dashboard-line-items/ItemsCell';
import NewItem from 'components/dashboard-line-items/NewItem';
import EditItem from 'components/dashboard-line-items/EditItem';

const OrderForm = (props) => {
  // default, newitem, viewitem, edititem
  const [status, setStatus] = useState('default');
  const [selectedItemId, setSelectedId] = useState(0);
  const onSubmit = (data) => {
    props.onSave(data, props?.order?.id);
  };
  let ActionComponent = () => null;

  const actions = {
    newItem: () => {
      setStatus('newitem');
    },
    editItem: (id) => {
      setStatus('edititem');
      setSelectedId(id);
    },
    back: () => {
      setStatus('default');
    },
  };

  switch (status) {
    case 'default': {
      ActionComponent = () => (
        <LineItemsLayout actions={actions}>
          <ItemsCell actions={actions} orderId={props?.order?.id} />
        </LineItemsLayout>
      );
      break;
    }
    case 'newitem': {
      ActionComponent = () => (
        <NewItem actions={actions} orderId={props?.order?.id} />
      );
      break;
    }
    case 'edititem': {
      ActionComponent = () => (
        <EditItem actions={actions} id={selectedItemId} />
      );
      break;
    }
  }

  return (
    <div className="rw-form-wrapper">
      <ActionComponent />
      {status === 'default' ? (
        <div className="rw-button-group">
          <Link to={routes.dashboard()} className="rw-button">
            Back
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default OrderForm;
