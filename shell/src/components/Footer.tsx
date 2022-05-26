import { Box, Button, Text } from 'boneyard';
import React from 'react';

const Footer = () => {
  return (
    <Box
      position="absolute"
      left="0"
      bottom="0"
      backgroundColor="black"
      width="100%"
      display="flex"
      padding="2"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="white" textAlign="center">
        Brisket jerky ground round, pastrami capicola jowl salami chicken ham
        hock cupim kielbasa ribeye prosciutto tenderloin. Strip steak ground
        round pork belly pork chop fatback.
      </Text>
      <Button zIndex="100" m="2">
        Accept
      </Button>
      <Button zIndex="100" m="2" backgroundColor="green">
        Accept In Green
      </Button>
    </Box>
  );
};

export default Footer;
