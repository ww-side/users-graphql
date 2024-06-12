import create from "zustand";
import type { UserType } from "@/types/user.ts";

type UserStore = {
  users: UserType[];
  addUser: (user: UserType) => void;
  removeUser: (id: string) => void;
  setUsers: (users: UserType[]) => void;
};

const useUserStore = create<UserStore>((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
  setUsers: (users) => set({ users }),
}));

export default useUserStore;
