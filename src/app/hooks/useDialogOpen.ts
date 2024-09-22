import { useEffect, useRef } from "react";
import { useDialogRefStore } from "./stores/useDialogRefStore";

const useDialogOpen = () => {
	const { dialogRef, isActive, setDialogRef, setIsActive } =
		useDialogRefStore();
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (!dialogRef) {
			setDialogRef(ref);
		}
	}, [dialogRef, setDialogRef]);

	return { dialogRef, isActive, setIsActive };
};

export { useDialogOpen };
