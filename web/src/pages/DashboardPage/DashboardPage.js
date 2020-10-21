import { useState } from 'react';
import { Flex, Box } from 'theme-ui';
import Button from 'components/ui/ButtonOutline';
import DefaultLayout from 'layouts/DefaultLayout';
import OrdersLayout from 'components/dashboard/OrdersLayout';

import NewOrder from 'components/dashboard/NewOrder';
import { useAuth } from '@redwoodjs/auth';
import { Link, routes } from '@redwoodjs/router';

const DashboardPage = () => {
  // default, neworder
  const [status, setStatus] = useState('default');
  const { logOut, currentUser } = useAuth();
  let ActionComponent = null;

  const headerHandler = () => {
    logOut();
  };

  const newOrder = () => {
    setStatus('neworder');
  };

  const actions = {
    newOrder,
  };

  switch (status) {
    case 'default': {
      ActionComponent = () => (
        <OrdersLayout actions={actions} userId={currentUser.id} />
      );
      break;
    }
    case 'neworder': {
      ActionComponent = () => <NewOrder />;
      break;
    }
  }

  return (
    <DefaultLayout
      headerAction={() => (
        <>
          <Link to={routes.products()} className="rw-button">
            Products
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

export default DashboardPage;
