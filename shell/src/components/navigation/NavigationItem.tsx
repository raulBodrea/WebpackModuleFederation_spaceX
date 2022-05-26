import { Box, Text } from 'boneyard';
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = ({ route, label }) => {
  return (
    <Box as="li" mb="4" key={route}>
      <Link to={route} style={{ textDecoration: 'none' }}>
        <Text fontSize="4">{label}</Text>
      </Link>
    </Box>
  );
};

export default NavigationItem;
