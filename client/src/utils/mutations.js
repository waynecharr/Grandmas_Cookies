import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
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
  }
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
      email
    }
  }
}
`;

export const SAVE_COOKIE = gql`
  mutation saveCookie($input: cookieInput!) {
    saveCookie(input: $input) {
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

export const REMOVE_COOKIE = gql`
  mutation removeCookie ($cookieId: ID!) {
    removeCookie(bookId: $cookieId) {
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