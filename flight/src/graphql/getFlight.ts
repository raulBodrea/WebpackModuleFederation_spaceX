import { gql } from '@apollo/client';
export const GET_FLIGHT = gql`
  query launch($launchId: ID!) {
    launch(id: $launchId) {
      details
      id
      upcoming
      rocket {
        rocket_type
      }
      mission_id
      mission_name
      launch_year
      launch_site {
        site_name_long
      }
      launch_success
      launch_date_utc
    }
  }
`;
