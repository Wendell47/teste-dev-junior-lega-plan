"use client";
import { useDialogOpen } from "@/app/hooks/useDialogOpen";
import { DialogRoot } from "../dialog/dialog";
import Button from "../button/button";
import Input from "../input/input";
import style from "./newTaskFormDialog.module.scss";
import { type taskProps, useTaskStore } from "@/app/hooks/stores/useTaskStore";
import { v4 as uuid } from "uuid";
import { type FormEvent, useState } from "react";

type props = {
	DialogMode?: "Adicionar Tarefa" | "Deletar Tarefa";
	DeleteTaskId?: string;
};

export default function NewTaskFormDialog({
	DialogMode = "Adicionar Tarefa",
	DeleteTaskId,
}: props) {
	const { dialogRef } = useDialogOpen();
	const [newTask, setNewTask] = useState("");
	const { setTask, removeTask } = useTaskStore();

	function CloseModal() {
		dialogRef?.current?.close();
	}

	function DeleteTask() {
		removeTask(DeleteTaskId as string);
		dialogRef?.current?.close();
	}

	function addNewTask(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (newTask.trim() === "") {
			return;
		}

		const id = uuid();

		const task: taskProps = {
			id: id,
			isCompleted: false,
			task: newTask,
		};
		setTask(task);

		setNewTask("");
		dialogRef?.current?.close();
	}

	return (
		<DialogRoot>
			<DialogRoot.Dialog ref={dialogRef}>
				<DialogRoot.DialogContent className={style.form_wrapper}>
					<h1>{DialogMode}</h1>
					<form onSubmit={addNewTask}>
						{DialogMode === "Adicionar Tarefa" && (
							<>
								<Input
									name="Titulo"
									placeholder="Digite"
									required
									value={newTask}
									onChange={(current) => setNewTask(current.target.value)}
								/>
								<div className={style.buttons_wrapper}>
									<Button
										title="Cancelar"
										variable="secondary"
										onClick={CloseModal}
									/>
									<Button title="Adicionar" type="submit" />
								</div>
							</>
						)}
						{DialogMode === "Deletar Tarefa" && (
							<>
								<p>Tem certeza que você deseja deletar essa tarefa?</p>
								<div className={style.buttons_wrapper}>
									<Button
										title="Cancelar"
										variable="secondary"
										autoFocus
										onClick={CloseModal}
									/>
									<Button
										title="Deletar"
										variable="delete"
										onClick={DeleteTask}
									/>
								</div>
							</>
						)}
					</form>
				</DialogRoot.DialogContent>
			</DialogRoot.Dialog>
		</DialogRoot>
	);
}
