import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from './user.resolver';

export const root = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
