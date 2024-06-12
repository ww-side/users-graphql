import User from '../models/user.model';
import type { UserType } from '../types/user';

export const getUsers = async () => {
  try {
    return await User.find();
  } catch (e) {
    throw new Error('Failed to fetch users');
  }
};

export const createUser = async ({ input }: { input: UserType }) => {
  try {
    const newUser = new User(input);
    await newUser.save();
    return newUser;
  } catch (e) {
    throw new Error('Failed to create user');
  }
};

export const getUser = async ({ id }: { id: string }) => {
  try {
    return await User.findById({ _id: id });
  } catch (e) {
    throw new Error('Failed to fetch user');
  }
};

export const updateUser = async ({
  id,
  input,
}: {
  id: string;
  input: UserType;
}) => {
  try {
    return await User.findByIdAndUpdate(id, input, { new: true });
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update user');
  }
};

export const deleteUser = async ({ id }: { id: string }) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Failed to delete user');
  }
};
