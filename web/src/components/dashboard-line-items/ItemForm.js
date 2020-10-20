import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms';
import { useQuery } from '@redwoodjs/web';
import { priceFromCents } from 'utils/helpers';

const GET_PRODUCTS = gql`
  query PRODUCTS {
    products {
      id
      name
      description
      price
    }
  }
`;

const OrderLineItemForm = ({ actions, ...props }) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.orderLineItem?.id);
  };

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  let products = data ? data?.products : null;

  let ProductSelect = () => null;

  if (loading) {
    ProductSelect = () => (
      <input
        type="text"
        className="rw-input"
        readOnly
        value="Loading products..."
      />
    );
  }

  if (error || !data) {
    ProductSelect = () => (
      <input
        type="text"
        className="rw-input"
        readOnly
        value="Failed to load products..."
      />
    );
  }

  if (data) {
    if (!Array.isArray(products)) {
      products = [];
    }
    ProductSelect = () => (
      <select name="productName" className="rw-input">
        {products.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name} - {priceFromCents(item.price)}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div className="rw-form-wrapper">
      <div error={props.error}>
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
          Product
        </Label>
        <ProductSelect />
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
          defaultValue={props.orderLineItem?.productPrice}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="productPrice" className="rw-field-error" />

        <input
          type="hidden"
          name="productId"
          defaultValue={props.orderLineItem?.productId}
        />

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
          transformValue="Float"
        />
        <FieldError name="quantity" className="rw-field-error" />

        <div className="rw-button-group">
          <span className="rw-button" onClick={actions.back}>
            Back
          </span>
          <button
            onClick={onSubmit}
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderLineItemForm;
