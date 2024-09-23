import { useState } from "react";
import { useDialogOpen } from "./useDialogOpen";

const useTaskDialog = () => {
	const { dialogRef } = useDialogOpen();
	const [taskId, setTaskId] = useState("");
	const [isDeleteDialog, setIsDeleteDialog] = useState(false);

	function handleNewTaskDialog() {
		setIsDeleteDialog(false);
		dialogRef?.current?.showModal();
	}

	function handleDeleteDialog(id: string) {
		setIsDeleteDialog(true);
		setTaskId(id);
		dialogRef?.current?.showModal();
	}

	return { taskId, isDeleteDialog, handleNewTaskDialog, handleDeleteDialog };
};

export { useTaskDialog };
