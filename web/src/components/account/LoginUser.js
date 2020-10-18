import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import LoginForm from 'components/account/LoginForm';

const LOGIN_USER_MUTATION = gql`
  mutation LoginUserMutation($input: LoginUserInput!) {
    loginUser(input: $input) {
      user {
        id
        displayName
        email
      }
      token
    }
  }
`;

const LoginUser = () => {
  const { addMessage } = useFlash();
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER_MUTATION, {
    onCompleted: () => {
      navigate(routes.dashboard());
      // addMessage('User logged in.', { classes: 'rw-flash-success' });
    },
  });

  const onSave = async (input) => {
    try {
      await loginUser({ variables: { input } });
    } catch (e) {
      console.log('Login error', e);
    }
  };

  return <LoginForm onSave={onSave} loading={loading} error={error} />;
};

export default LoginUser;
