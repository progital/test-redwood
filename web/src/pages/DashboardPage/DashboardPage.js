import { useState } from 'react';
import { Flex } from 'theme-ui';
import Button from 'components/ui/ButtonOutline';
import DefaultLayout from 'layouts/DefaultLayout';
import Orders from 'components/dashboard/Orders';
import OrdersCell from 'components/dashboard/OrdersCell';
import NewOrder from 'components/dashboard/NewOrder';
import { useAuth } from '@redwoodjs/auth';

const DashboardPage = () => {
  // default, neworder, editorder, showorder
  const [status, setStatus] = useState('default');
  const [orderId, setOrderId] = useState(null);
  const { logOut, currentUser } = useAuth();
  let ActionComponent = null;

  const headerHandler = () => {
    logOut();
  };

  const newOrder = () => {
    setStatus('neworder');
  };

  const actions = {
    selectOrder: setOrderId,
    newOrder,
  };

  switch (status) {
    case 'default': {
      ActionComponent = () => (
        <Orders actions={actions}>
          <OrdersCell actions={actions} userId={currentUser.id} />
        </Orders>
      );
      break;
    }
    case 'neworder': {
      ActionComponent = () => <NewOrder actions={actions} />;
      break;
    }
  }

  return (
    <DefaultLayout
      headerAction={() => <Button onClick={headerHandler}>Log out</Button>}
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
