import { gql } from '@apollo/client';
export const GET_COMPANY_INFO = gql`
  query company {
    company {
      valuation
      summary
      founded
      founder
      launch_sites
      links {
        elon_twitter
        flickr
        twitter
        website
      }
      name
    }
  }
`;

export const GET_CONTACT_INFO = gql`
  query company {
    company {
      headquarters {
        address
        city
        state
      }
    }
  }
`;

export const GET_TEAM_INFO = gql`
  query company {
    company {
      ceo
      coo
      cto
      employees
    }
  }
`;
