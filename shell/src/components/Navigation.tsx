import { Box } from 'boneyard';
import React from 'react';
import Logo from './navigation/Logo';
import NavigationItem from './navigation/NavigationItem';

const navigationItems = [
  { route: '/', label: 'Home' },
  { route: '/info', label: 'About Us' },
  { route: '/info/team', label: 'Team' },
  { route: '/info/contact', label: 'Contact' },
];

const Navigation = () => {
  return (
    <Box width="300px" backgroundColor="gray400" padding="5">
      <Logo />
      <Box
        as="ul"
        style={{ listStyle: 'none' }}
        mt="10"
        pl="0"
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
      >
        {navigationItems.map(NavigationItem)}
      </Box>
    </Box>
  );
};

export default Navigation;
