import { useQuery } from '@apollo/client';
import { Box } from 'boneyard';
import React from 'react';
import { useParams } from 'react-router-dom';
import Text from './components/Text';
import { GET_FLIGHT } from './graphql/getFlight';

type Launch = {
  launch: {
    details: string;
    id: number;
    upcoming: boolean;
    rocket: {
      rocket_type: string;
    };
    mission_id: string[];
    mission_name: string;
    launch_site: {
      site_name_long: string;
    };
    launch_success: boolean;
    launch_date_utc: string;
  };
};

const Flight = () => {
  const { launchId } = useParams();
  const { data } = useQuery<Launch | undefined>(GET_FLIGHT, {
    variables: { launchId },
  });

  const getData = (): string => {
    if (data) {
      const newData = { ...data.launch };
      delete newData.__typename;
      return JSON.stringify(newData, null, 4);
    }
    return '';
  };

  return (
    <Box backgroundColor="gray100" width="100%" height="100%" p={20}>
      <Text fontSize="5">
        Flight {launchId}
        {data && `: ${data.launch.mission_name}`}
      </Text>

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
          <Text as="pre" sizw="3" style={{ whiteSpace: 'pre-wrap' }}>
            {getData()}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Flight;
