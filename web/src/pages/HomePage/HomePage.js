import { Flex, Button } from 'theme-ui';
import DefaultLayout from 'layouts/DefaultLayout';
import NewUser from 'components/account/NewUser';
import LoginUser from 'components/account/LoginUser';
import { useState } from 'react';

const HomePage = () => {
  // login, newuser
  const [status, setStatus] = useState('login');
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

  return (
    <DefaultLayout
      headerAction={() => (
        <Button
          sx={{
            bg: 'transparent',
            cursor: 'pointer',
            color: 'secondary',
            textDecoration: 'none',
            p: 2,
            border: '1px solid rgba(0,0,0,0.5)',
            borderRadius: '4px',
            '&:hover': {
              bg: 'text',
              color: 'background',
              borderColor: 'text',
            },
          }}
          onClick={actionHanlder}
        >
          {actionLabel}
        </Button>
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
