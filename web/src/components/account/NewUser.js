import { useMutation } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import CreateAccountForm from 'components/account/CreateAccountForm';

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`;

const NewUser = () => {
  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      navigate(routes.dashboard());
    },
  });

  const onSave = async (input) => {
    try {
      await createUser({ variables: { input } });
    } catch (e) {
      console.log('User creation error', e);
    }
  };

  return <CreateAccountForm onSave={onSave} loading={loading} error={error} />;
};

export default NewUser;
