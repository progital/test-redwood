import { useAuth } from '@redwoodjs/auth';
import { navigate, routes } from '@redwoodjs/router';
import LoginForm from 'components/account/LoginForm';
import { useState } from 'react';

const LoginUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { logIn } = useAuth();

  const onSave = async (input) => {
    try {
      setError(null);
      setLoading(true);
      await logIn(input);
      // setLoading(false);
      navigate(routes.dashboard());
    } catch (e) {
      setLoading(false);
      setError(e);
      console.log('Login error', e);
    }
  };

  return <LoginForm onSave={onSave} loading={loading} error={error} />;
};

export default LoginUser;
