import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  HiddenField,
  Submit,
} from '@redwoodjs/forms';
import { priceFromCents } from 'utils/helpers';

const ItemEditForm = ({ actions, ...props }) => {
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
          name="productPrice"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product price
        </Label>
        <NumberField
          name="productPrice"
          defaultValue={priceFromCents(props.orderLineItem?.productPrice)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          transformValue="Float"
          step="0.01"
        />
        <FieldError name="productPrice" className="rw-field-error" />

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
          <span className="rw-button" onClick={actions.back}>
            Back
          </span>
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default ItemEditForm;
