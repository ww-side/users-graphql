import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      username
    }
  }
`;

export const GET_ONE_USER = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      position
    }
  }
`;
