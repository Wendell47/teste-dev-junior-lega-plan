"use client";
import Button from "../button/button";
import TaskItem from "../taskItem/tasklItem";
import style from "./summary.module.scss";
import NewTaskFormDialog from "../taskFormDialog/taskFormDialog";
import { useTaskStore } from "@/app/hooks/stores/useTaskStore";
import EmptyTasks from "../emptyTasks/emptyTasks";
import Loading from "../loading/loading";
import { useHandleLocalStorage } from "@/app/hooks/useHandleLocalStorage";
import { useTaskDialog } from "@/app/hooks/useTaskDialog";

export default function Summary() {
	const { tasks } = useTaskStore();
	const { taskId, isDeleteDialog, handleDeleteDialog, handleNewTaskDialog } =
		useTaskDialog();
	const { isLoading } = useHandleLocalStorage();

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
												<TaskItem
													key={item.id}
													completed={item.isCompleted}
													task={item.task}
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
			<Button title="Adicionar nova tarefa" onClick={handleNewTaskDialog} />

			<NewTaskFormDialog
				DialogMode={!isDeleteDialog ? "Adicionar Tarefa" : "Deletar Tarefa"}
				DeleteTaskId={taskId}
			/>
		</>
	);
}
