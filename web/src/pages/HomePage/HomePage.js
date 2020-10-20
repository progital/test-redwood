import { Flex, Box } from 'theme-ui';
import Button from 'components/ui/ButtonOutline';
import DefaultLayout from 'layouts/DefaultLayout';
import NewUser from 'components/account/NewUser';
import LoginUser from 'components/account/LoginUser';
import { useState } from 'react';
import { Redirect, routes } from '@redwoodjs/router';
import { useAuth } from '@redwoodjs/auth';

const HomePage = () => {
  // login, newuser
  const [status, setStatus] = useState('login');
  const { isAuthenticated } = useAuth();
  let actionLabel = null;
  let ActionForm = null;

  switch (status) {
    case 'login': {
      actionLabel = 'Create Account';
      ActionForm = LoginUser;
      break;
    }
    case 'newuser': {
      actionLabel = 'Sign In';
      ActionForm = NewUser;
      break;
    }
  }

  const actionHanlder = () => {
    switch (status) {
      case 'login': {
        setStatus('newuser');
        break;
      }
      case 'newuser': {
        setStatus('login');
        break;
      }
    }
  };

  if (isAuthenticated) {
    return <Redirect to={routes.dashboard()} />;
  }

  return (
    <DefaultLayout
      headerAction={() => (
        <>
          <Box mx="auto" />
          <Button onClick={actionHanlder}>{actionLabel}</Button>
        </>
      )}
    >
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1 1 auto',
        }}
        as="main"
      >
        <ActionForm />
      </Flex>
    </DefaultLayout>
  );
};

export default HomePage;
