import { Flash } from '@redwoodjs/web';

const ProductsLayout = ({ actions, ...props }) => {
  return (
    <>
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <span sx={{ color: 'secondary' }}>Products</span>
        </h1>
        <button
          onClick={actions.newProduct}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Product
        </button>
      </header>
      <main className="rw-main">{props.children}</main>
    </>
  );
};

export default ProductsLayout;
