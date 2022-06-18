import create from "zustand";

// call to a some db update state and render state on fetching.jsx

// http swapi.dev/api/planets/

export const useStore = create((set) => ({
  planets: [],
  setPlanets: (planet) =>
    set((state) => ({ planets: [...state.planets, planet] })),
}));
