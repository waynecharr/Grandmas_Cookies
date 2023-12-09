import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      cookieCount
      savedCookies {
        cookieId
        cookieName
        description
        image
        price
      }
    }
  }
`;