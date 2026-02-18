import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
    token: string | null;
    setToken: (token: string) => void;
    clearToken: () => void;
};

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            setToken: (token) => set({ token }),
            clearToken: () => set({ token: null }),
        }),
        {
            name: "auth_store", // localStorage key
            partialize: (state) => ({ token: state.token }),
        }
    )
);
