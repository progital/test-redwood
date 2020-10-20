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
import { useQuery } from '@redwoodjs/web';
import { priceFromCents } from 'utils/helpers';
import { useState } from 'react';

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

const ItemCreateForm = ({ actions, ...props }) => {
  const [productId, setProductId] = useState(
    props.orderLineItem?.productId || 0
  );
  const [productPrice, setProductPrice] = useState(
    props.orderLineItem?.productPrice || 0
  );
  const [productName, setProductName] = useState(
    props.orderLineItem?.productName || ''
  );
  const onSubmit = (data) => {
    props.onSave(data, props?.orderLineItem?.id);
  };

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  let products = data ? data?.products : null;
  if (!Array.isArray(products)) {
    products = [];
  }

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
    ProductSelect = () => (
      <select
        className="rw-input"
        onChange={handleSelect}
        value={productName}
        required
      >
        <option value="">Select product...</option>
        {products.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name} - {priceFromCents(item.price)}
          </option>
        ))}
      </select>
    );
  }

  const handleSelect = (event) => {
    const value = event.target.value;
    const selected = products.find((elem) => elem.name === value);
    setProductPrice(priceFromCents(selected.price));
    setProductId(selected.id);
    setProductName(value);
  };

  const handlePriceInput = (event) => {
    setProductPrice(event.target.value);
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
          value={productPrice}
          onChange={handlePriceInput}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          transformValue="Float"
          step="0.01"
        />
        <FieldError name="productPrice" className="rw-field-error" />

        <HiddenField name="productId" value={productId} />
        <HiddenField name="productName" value={productName} />

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
          step="0.001"
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
      </Form>
    </div>
  );
};

export default ItemCreateForm;
