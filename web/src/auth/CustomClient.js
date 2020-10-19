import jwt from 'jsonwebtoken';
import ApolloError from 'errors/ApolloError';

// const lsKey = 'testFstappTkn';

// const LOGIN_USER_MUTATION = gql`
//   mutation LoginUserMutation($input: LoginUserInput!) {
//     loginUser(input: $input) {
//       user {
//         id
//         displayName
//         email
//       }
//       token
//     }
//   }
// `;

const CustomClient = (() => {
  let token = null;
  const type = 'custom';

  // localStorage.getItem(lsKey);

  function getCurrentUser() {
    if (!token) {
      return null;
    }

    const user = jwt.decode(token);
    console.log('My token', token);
    console.log('Decoded', user);
    return user;
  }

  return {
    type,
    restoreAuthState: async () => {
      // what is it?
    },
    login: async (input) => {
      const query = `mutation LoginUserMutation($input: LoginUserInput!) {
        loginUser(input: $input) {
          token
        }
      }`;

      const response = await window.fetch(
        `${window.__REDWOOD__API_PROXY_PATH}/graphql`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            query,
            variables: {
              input,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Could not login: ${response.statusText} (${response.status})`
        );
      }
      console.log(response);
      const { data, errors } = await response.json();

      if (errors) {
        console.log('errors', errors);
        const err = new ApolloError({ graphQLErrors: errors });
        throw err;
      }

      token = data?.loginUser?.token || null;
      return getCurrentUser();
    },
    logout: async (options) => {
      console.warn('Not implemented yet');
    },
    signup: async (options) => {
      console.warn('Not implemented yet');
    },
    getToken: () => {
      return token;
    },
    // current user should probably be dynamic
    currentUser: getCurrentUser,
    // while this gets saved value
    getUserMetadata: async () => {
      const user = getCurrentUser();
      return user || null;
    },
  };
})();

export default CustomClient;
