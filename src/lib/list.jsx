import create from "zustand";

export const listStore = create((set) => ({
  users: ["John Doe", "Jane Doe"],
  addUser: (person) => set((state) => ({ users: [...state.users, person] })),
}));
