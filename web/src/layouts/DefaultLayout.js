import React from 'react';
import Header from 'components/header';
import { ThemeProvider, merge, Flex } from 'theme-ui';
import { swiss } from '@theme-ui/presets';

const theme = merge(swiss, {
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
  },
  variants: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
    },
  },
});

const DefaultLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Flex sx={{ height: '100vh', flexDirection: 'column' }}>
        <Header />
        {children}
      </Flex>
    </ThemeProvider>
  );
};

export default DefaultLayout;
