import jwt from 'jsonwebtoken';
import ApolloError from 'errors/ApolloError';

const lsKey = '_testFstappTkn';
const type = 'custom';
let token = retrieveToken() || null;

function saveToken(token) {
  try {
    localStorage.setItem(lsKey, token);
  } catch (e) {
    // failed
  }
}

function retrieveToken() {
  if (isLocalStorageAvail()) {
    return localStorage.getItem(lsKey);
  }
  return null;
}

function getCurrentUser() {
  if (!token) {
    return null;
  }

  const user = jwt.decode(token);
  console.log('My token', token);
  console.log('Decoded', user);
  return user;
}

function isLocalStorageAvail() {
  const key = 'local_storage_test';
  try {
    localStorage.setItem(key, key);
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
}

const CustomClient = {
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
      const err = new ApolloError({ graphQLErrors: errors });
      throw err;
    }

    token = data?.loginUser?.token || null;
    saveToken(token);

    return getCurrentUser();
  },
  logout: async () => {
    token = null;
    saveToken(token);
  },
  signup: async (options) => {
    console.log('client.signup is not implemented yet');
  },
  getToken: () => {
    return token;
  },
  currentUser: getCurrentUser,
  getUserMetadata: async () => {
    const user = getCurrentUser();
    return user || null;
  },
};

export default CustomClient;
