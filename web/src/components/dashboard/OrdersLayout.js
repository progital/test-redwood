import { Flash } from '@redwoodjs/web';

const OrdersLayout = ({ actions, ...props }) => {
  return (
    <>
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <span sx={{ color: 'secondary' }}>Orders</span>
        </h1>
        <button
          onClick={actions.newOrder}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Order
        </button>
      </header>
      <main className="rw-main">{props.children}</main>
    </>
  );
};

export default OrdersLayout;
