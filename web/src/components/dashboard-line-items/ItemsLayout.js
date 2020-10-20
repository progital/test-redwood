import { Link, routes } from '@redwoodjs/router';
import { Flash } from '@redwoodjs/web';

const OrderLineItemsLayout = ({ actions, ...props }) => {
  return (
    <>
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <span sx={{ color: 'secondary' }}>Line Items</span>
        </h1>
        <button onClick={actions.newItem} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Line Item
        </button>
      </header>
      <main className="rw-main">{props.children}</main>
    </>
  );
};

export default OrderLineItemsLayout;
