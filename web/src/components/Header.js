import React from 'react';
import { Flex } from 'theme-ui';
import { routes, Link } from '@redwoodjs/router';

const Header = ({ action = () => null, ...props }) => {
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
        zIndex: 10,
      }}
      as="nav"
      {...props}
    >
      <Link
        to={routes.home()}
        sx={{
          p: 2,
          fontWeight: 'bold',
          fontSize: 24,
          textDecoration: 'none',
          color: 'primary',
          lineHeight: 1,
          mr: 3,
        }}
      >
        Test
      </Link>

      {action()}
    </Flex>
  );
};

export default Header;
