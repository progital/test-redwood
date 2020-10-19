import React from 'react';
import { Flex, Text, Box, Link } from 'theme-ui';

const Header = ({ action, ...props }) => {
  return (
    <Flex
      sx={{
        color: 'secondary',
        backgroundColor: 'muted',
        alignItems: 'center',
        pl: 2,
        pr: 4,
        py: 1,
        boxShadow: '0px 4px 5px 2px rgba(0,0,0,0.2)',
      }}
      as="nav"
    >
      <Link
        href="/"
        sx={{
          p: 2,
          fontWeight: 'bold',
          fontSize: 24,
          textDecoration: 'none',
          color: 'primary',
        }}
      >
        Test
      </Link>
      <Box mx="auto" />
      {action()}
    </Flex>
  );
};

export default Header;
