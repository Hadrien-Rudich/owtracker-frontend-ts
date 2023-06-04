import { create } from "zustand";
import { HeaderStore } from "./types/headerTypes";

const headerStore = create<HeaderStore>()(() => ({
  locations: [
    { label: "game", url: "/game" },
    { label: "history", url: "/history" },
    { label: "stats", url: "/stats" },
    { label: "profiles", url: "/profiles" },
  ],
}));

export { headerStore };
