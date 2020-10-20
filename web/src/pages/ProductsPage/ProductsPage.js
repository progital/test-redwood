import { useState } from 'react';
import { Flex, Box } from 'theme-ui';
import Button from 'components/ui/ButtonOutline';
import DefaultLayout from 'layouts/DefaultLayout';
import ProductsLayout from 'components/dashboard-products/ProductsLayout';
import ProductsCell from 'components/dashboard-products/ProductsCell';
import NewProduct from 'components/dashboard-products/NewProduct';
import { useAuth } from '@redwoodjs/auth';
import { Link, routes } from '@redwoodjs/router';

const ProductsPage = () => {
  // default, newproduct
  const [status, setStatus] = useState('default');
  const { logOut, currentUser } = useAuth();
  let ActionComponent = null;

  const headerHandler = () => {
    logOut();
  };

  const newProduct = () => {
    setStatus('newproduct');
  };

  const actions = {
    newProduct,
  };

  switch (status) {
    case 'default': {
      ActionComponent = () => (
        <ProductsLayout actions={actions}>
          <ProductsCell actions={actions} />
        </ProductsLayout>
      );
      break;
    }
    case 'newproduct': {
      ActionComponent = () => <NewProduct />;
      break;
    }
  }

  return (
    <DefaultLayout
      headerAction={() => (
        <>
          <Link to={routes.dashboard()} className="rw-button">
            Orders
          </Link>
          <Box mx="auto" />
          <Button onClick={headerHandler}>Log out</Button>
        </>
      )}
    >
      <Flex
        as="section"
        sx={{ flexDirection: 'column', flex: '1 0 auto', pt: 2 }}
        className="rw-scaffold"
      >
        <ActionComponent />
      </Flex>
    </DefaultLayout>
  );
};

export default ProductsPage;
