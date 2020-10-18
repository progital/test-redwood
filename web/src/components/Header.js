import React from 'react';
import { Flex, Text, Box, Link } from 'theme-ui';

const Header = (props) => {
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
      <Text sx={{ p: 2, fontWeight: 'bold', fontSize: 24 }}>Test</Text>
      <Box mx="auto" />
      <Link
        href="#!"
        sx={{
          color: 'secondary',
          textDecoration: 'none',
          p: 2,
          border: '1px solid rgba(0,0,0,0.5)',
          borderRadius: '4px',
          '&:hover': {
            bg: 'text',
            color: 'background',
            borderColor: 'text',
          },
        }}
      >
        Create Account
      </Link>
    </Flex>
  );
};

export default Header;
