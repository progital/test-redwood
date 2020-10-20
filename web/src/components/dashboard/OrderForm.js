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

const OrderForm = (props) => {
  // default, newitem
  const [status, setStatus] = useState('default');
  const onSubmit = (data) => {
    props.onSave(data, props?.order?.id);
  };
  let ActionComponent = () => null;

  const actions = {
    newItem: () => {
      setStatus('newitem');
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
      ActionComponent = () => <NewItem actions={actions} />;
      break;
    }
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <ActionComponent />
        {status !== 'newitem' ? (
          <div className="rw-button-group">
            <Link to={routes.dashboard()} className="rw-button">
              Back
            </Link>
            <Submit
              disabled={props.loading}
              className="rw-button rw-button-blue"
            >
              Save
            </Submit>
          </div>
        ) : null}
      </Form>
    </div>
  );
};

export default OrderForm;
