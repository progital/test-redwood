import React from 'react';
import Header from 'components/header';
import { ThemeProvider, merge } from 'theme-ui';
import { swiss } from '@theme-ui/presets';

const theme = merge(swiss, {});

const DefaultLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default DefaultLayout;
