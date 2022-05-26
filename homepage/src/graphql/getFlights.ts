import { gql } from '@apollo/client';
export const GET_FLIGHTS = gql`
  query launches {
    launches {
      id
      launch_date_utc
      mission_name
      details
    }
  }
`;
