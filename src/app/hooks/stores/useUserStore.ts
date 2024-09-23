import { create } from "zustand";

export type userProps = string | null;

type useTaskStoreProps = {
	user: userProps;
	setUser: (user: userProps) => void;
};

const useUserStore = create<useTaskStoreProps>((set) => ({
	user: null,
	setUser: (user) => set({ user: user }),
}));

export { useUserStore };
