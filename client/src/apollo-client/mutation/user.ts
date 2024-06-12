import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
      id
      username
      position
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      username
    }
  }
`;
