import { create } from "zustand";
import { IUser } from "@/api/types";

interface AuthState {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  removeAccessToken: () => void;
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  removeUser: () => void;
  resetAuth: () => void;
}

const useAuthStore = create<AuthState>((set) => {
  const storedAccessToken = localStorage.getItem("accessToken");
  const initialAccessToken = storedAccessToken || null;

  const storedUserData = localStorage.getItem("userData");
  const initialUser = storedUserData ? JSON.parse(storedUserData) : null;

  return {
    accessToken: initialAccessToken,
    setAccessToken: (token) => {
      localStorage.setItem("accessToken", token || "");
      set({ accessToken: token });
    },
    removeAccessToken: () => {
      localStorage.removeItem("accessToken");
      set({ accessToken: null });
    },
    user: initialUser,
    setUser: (user) => {
      localStorage.setItem("userData", JSON.stringify(user));
      set({ user });
    },
    removeUser: () => {
      localStorage.removeItem("userData");
      set({ user: null });
    },
    resetAuth: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userData");
      set({
        accessToken: null,
        user: null,
      });
    },
  };
});

export default useAuthStore;
