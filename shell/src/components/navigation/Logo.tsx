import React from 'react';
import { Box, Text } from 'boneyard';
import { config } from '../../../config';

const Logo = () => {
  return (
    <Box
      as="a"
      href="/"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-end"
      style={{ textDecoration: 'none' }}
    >
      <Box
        as="img"
        src={`${config.boneyardBaseUrl}/logo.svg`}
        alt="logo"
        width="100px"
        height="100px"
      />
      <Text fontSize="6" color="black">
        SpaceX
      </Text>
    </Box>
  );
};

export default Logo;
