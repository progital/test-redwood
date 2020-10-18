import React from 'react';
import { Flex, Text, Box, Link } from 'theme-ui';

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      sx={{
        color: 'secondary',
        fontSize: 24,
        backgroundColor: 'muted',
        alignItems: 'center',
        px: 2,
        boxShadow: '0px 4px 5px 0px rgba(0,0,0,0.2)',
      }}
    >
      <Text p={2} fontWeight="bold">
        Rebass
      </Text>
      <Box mx="auto" />
      <Link p={2} href="#!" sx={{ color: 'secondary', textDecoration: 'none' }}>
        Profile
      </Link>
    </Flex>
  );
};

export default Header;
