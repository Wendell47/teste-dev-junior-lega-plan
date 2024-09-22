import { create } from "zustand";
import { type RefObject, useRef } from "react";
type props = {
	dialogRef: RefObject<HTMLDialogElement> | null;
	isActive: boolean;
	setIsActive: (isActive: boolean) => void;
	setDialogRef: (dialogRef: RefObject<HTMLDialogElement>) => void;
};
const useDialogRefStore = create<props>((set) => ({
	dialogRef: null,
	isActive: false,
	setIsActive: (isActive) => set({ isActive: isActive }),
	setDialogRef: (dialogRef) => set({ dialogRef: dialogRef }),
}));

export { useDialogRefStore };
