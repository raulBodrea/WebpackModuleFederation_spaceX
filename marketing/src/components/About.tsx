import { useQuery } from '@apollo/client';
import React from 'react';
import { Box, Text } from 'boneyard';

const About = ({ query, title }) => {
  const { data } = useQuery(query);

  const getData = (): string => {
    if (data) {
      const newData = { ...data.company };
      delete newData.__typename;
      return JSON.stringify(newData, null, 4);
    }
    return '';
  };

  return (
    <Box backgroundColor="gray100" width="100%" height="100%" p={20}>
      <Text fontSize="5">{title}</Text>

      <Box width="100%" height="100%" mt="10">
        <Text size="4">Launch Data:</Text>
        <Box
          backgroundColor="black"
          px="4"
          py="2"
          borderRadius="10px"
          border="2px solid white"
          mt="2"
        >
          <Text
            as="pre"
            sizw="3"
            style={{ whiteSpace: 'pre-wrap' }}
            color="white"
          >
            {getData()}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
