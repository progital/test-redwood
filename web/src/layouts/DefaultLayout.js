import React from 'react';
import Header from 'components/header';
import { ThemeProvider, merge, Flex } from 'theme-ui';
import { swiss } from '@theme-ui/presets';

const theme = merge(swiss, {
  buttons: {
    primary: {
      mt: 3,
    },
  },
});

const DefaultLayout = ({ children, headerAction, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <Flex sx={{ height: '100vh', flexDirection: 'column' }} {...props}>
        <Header action={headerAction} />
        {children}
      </Flex>
    </ThemeProvider>
  );
};

export default DefaultLayout;
