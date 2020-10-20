import { Form, FormError, Submit } from '@redwoodjs/forms';
import { Link, routes } from '@redwoodjs/router';

const OrderForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.order?.id);
  };

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <div className="rw-button-group">
          <Link to={routes.dashboard()} className="rw-button">
            Back
          </Link>
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Create
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default OrderForm;
