"use client";
import Button from "../button/button";
import GoalItem from "../taskItem/tasklItem";
import style from "./summary.module.scss";
import NewTaskFormDialog from "../addNewTask/newTaskFormDialog";
import { useEffect, useState } from "react";
import { useDialogOpen } from "@/app/hooks/useDialogOpen";
import { type taskProps, useTaskStore } from "@/app/hooks/stores/useTaskStore";
import EmptyTasks from "../emptyTasks/emptyTasks";
import Loading from "../loading/loading";

export default function Summary() {
	const { dialogRef } = useDialogOpen();
	const { tasks, setTasks } = useTaskStore();
	const [isLoading, setIsLoading] = useState(true);
	const [isDeleteDialog, setIsDeleteDialog] = useState(false);
	const [TaskId, setTaskId] = useState("");

	useEffect(() => {
		function fetchLocalStorageData() {
			const storedTasks = localStorage.getItem("Tasks");

			if (storedTasks) {
				try {
					const parsedTasks: taskProps[] = JSON.parse(storedTasks);
					setTasks(parsedTasks);
				} catch (error) {
					console.error("Erro ao analisar os dados do localStorage:", error);
				}
			}
			setIsLoading(false);
		}
		fetchLocalStorageData();
	}, [setTasks]);

	function handleNewGoal() {
		console.log(tasks);
		setIsDeleteDialog(false);
		dialogRef?.current?.showModal();
	}

	function handleDeleteDialog(id: string) {
		setIsDeleteDialog(true);
		setTaskId(id);
		dialogRef?.current?.showModal();
	}

	const filteredTasks = [
		{
			title: "Suas tarefas de hoje",
			tasks: tasks.filter((item) => !item.isCompleted),
		},
		{
			title: "Tarefas Finalizadas",
			tasks: tasks.filter((item) => item.isCompleted),
		},
	];

	return (
		<>
			<div className={style.summary_wrapper}>
				{!isLoading ? (
					tasks.length > 0 ? (
						filteredTasks.map(
							(item) =>
								item.tasks.length > 0 && (
									<div key={item.title}>
										<p>{item.title}</p>

										<div className={style.goals_wrapper}>
											{item.tasks.map((item) => (
												<GoalItem
													key={item.id}
													completed={item.isCompleted}
													goal={item.task}
													deleteTask={() => handleDeleteDialog(item.id)}
													id={item.id}
												/>
											))}
										</div>
									</div>
								),
						)
					) : (
						<EmptyTasks />
					)
				) : (
					<Loading />
				)}
			</div>
			<Button title="Adicionar nova tarefa" onClick={handleNewGoal} />

			<NewTaskFormDialog
				DialogMode={!isDeleteDialog ? "Adicionar Tarefa" : "Deletar Tarefa"}
				DeleteTaskId={TaskId}
			/>
		</>
	);
}
