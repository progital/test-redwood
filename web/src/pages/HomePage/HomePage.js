import { Flex } from 'theme-ui';
import DefaultLayout from 'layouts/DefaultLayout';
import LoginForm from 'components/LoginForm';

const HomePage = () => {
  return (
    <DefaultLayout>
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1 1 auto',
        }}
        as="main"
      >
        <LoginForm />
      </Flex>
    </DefaultLayout>
  );
};

export default HomePage;
