import React from 'react';
import { Box } from 'boneyard';
import { useQuery } from '@apollo/client';
import { GET_FLIGHTS } from './graphql/getFlights';
import Text from './components/Text';

const FlightCard = ({ id, launch_date_utc, mission_name, details }) => {
  const handleClick = () => {
    window.location.href = `${window.location.origin}/launches/${id}`;
  };
  return (
    <Box
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
      backgroundColor="black"
      as="li"
      display="flex"
      alignItems="center"
      flexDirection="column"
      border="2px solid white"
      borderRadius="10px"
      width="45%"
      p="2"
      my="2"
      justifyContent="space-between"
    >
      <Text fontSize="3" textAlign="center">
        {mission_name}
      </Text>
      <Box mt="2" display="flex" alignItems="center" flexDirection="column">
        <Text fontSize="1"> ID: {id} </Text>
        <Text fontSize="1"> Date: {launch_date_utc} </Text>
      </Box>
    </Box>
  );
};

const Flights = () => {
  const { data, loading } = useQuery(GET_FLIGHTS);
  return (
    <Box backgroundColor="gray100" width="100%" height="100%" p={20}>
      <Text fontSize="5">Flights:</Text>

      <Box
        as="ul"
        display="flex"
        width="100%"
        height="100%"
        flexWrap="wrap"
        justifyContent="space-between"
        pl="0"
      >
        {!loading && data.launches.map(FlightCard)}
      </Box>
    </Box>
  );
};

export default Flights;
