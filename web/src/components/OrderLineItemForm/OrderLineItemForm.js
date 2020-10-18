import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms';

const OrderLineItemForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.orderLineItem?.id);
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

        <Label
          name="orderId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Order id
        </Label>
        <NumberField
          name="orderId"
          defaultValue={props.orderLineItem?.orderId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="orderId" className="rw-field-error" />

        <Label
          name="productId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product id
        </Label>
        <NumberField
          name="productId"
          defaultValue={props.orderLineItem?.productId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="productId" className="rw-field-error" />

        <Label
          name="productPrice"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product price
        </Label>
        <NumberField
          name="productPrice"
          defaultValue={props.orderLineItem?.productPrice}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="productPrice" className="rw-field-error" />

        <Label
          name="productName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product name
        </Label>
        <TextField
          name="productName"
          defaultValue={props.orderLineItem?.productName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="productName" className="rw-field-error" />

        <Label
          name="quantity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quantity
        </Label>
        <TextField
          name="quantity"
          defaultValue={props.orderLineItem?.quantity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          dataType="Float"
        />
        <FieldError name="quantity" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default OrderLineItemForm;
