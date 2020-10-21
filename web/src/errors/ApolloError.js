function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

// Sets the error message on this error according to the
// the GraphQL and network errors that are present.
// If the error message has already been set through the
// constructor or otherwise, this function is a nop.
const generateErrorMessage = (err) => {
  let message = '';
  // If we have GraphQL errors present, add that to the error message.
  if (isNonEmptyArray(err.graphQLErrors)) {
    err.graphQLErrors.forEach((graphQLError) => {
      const errorMessage = graphQLError
        ? graphQLError.message
        : 'Error message not found.';
      message += `${errorMessage}\n`;
    });
  }

  if (err.networkError) {
    message += `${err.networkError.message}\n`;
  }

  // strip newline from the end of the message
  message = message.replace(/\n$/, '');
  return message;
};

export default class ApolloError extends Error {
  message;
  graphQLErrors;
  networkError;

  // An object that can be used to provide some additional information
  // about an error, e.g. specifying the type of error this is. Used
  // internally within Apollo Client.
  extraInfo;

  // Constructs an instance of ApolloError given a GraphQLError
  // or a network error. Note that one of these has to be a valid
  // value or the constructed error will be meaningless.
  constructor({ graphQLErrors, networkError, errorMessage, extraInfo }) {
    super(errorMessage);
    this.graphQLErrors = graphQLErrors || [];
    this.networkError = networkError || null;
    this.message = errorMessage || generateErrorMessage(this);
    this.extraInfo = extraInfo;

    // We're not using `Object.setPrototypeOf` here as it isn't fully
    // supported on Android (see issue #3236).
    this.__proto__ = ApolloError.prototype;
  }
}
