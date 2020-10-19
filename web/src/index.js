import { AuthProvider } from '@redwoodjs/auth';
import ReactDOM from 'react-dom';
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web';
import FatalErrorPage from 'src/pages/FatalErrorPage';
import CustomClient from 'auth/CustomClient';

import Routes from 'src/Routes';

import './scaffold.css';
import './index.css';

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={CustomClient} type="custom">
      <RedwoodProvider>
        <Routes />
      </RedwoodProvider>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
);
