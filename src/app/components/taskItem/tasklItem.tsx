"use client";
import { Check, Trash } from "lucide-react";
import style from "./style.module.scss";
import { useTaskStore } from "@/app/hooks/stores/useTaskStore";

type taskItemProps = {
	task: string;
	id: string;
	completed?: boolean;
	deleteTask?: () => void;
};

export default function TaskItem({
	task,
	id,
	completed,
	deleteTask,
}: taskItemProps) {
	const { completeTask } = useTaskStore();

	const handleCheck = () => {
		completeTask(id);
	};

	return (
		<div
			className={`${style.task_item} ${completed ? style.task_completed : ""}`}
		>
			<div>
				<button
					type="button"
					role="checkbox"
					aria-checked={completed}
					title="checktask"
					onClick={handleCheck}
					className={`${style.button_check} ${completed ? style.checked : ""}`}
				>
					<Check size={20} />
				</button>
				<input
					type="checkbox"
					aria-hidden="false"
					id={id}
					className={style.input_check}
					onChange={handleCheck}
					checked={completed}
				/>
				<label htmlFor={id}>{task}</label>
			</div>

			<button
				title="delete task"
				type="button"
				className={style.delete_task_button}
				onClick={deleteTask}
			>
				<Trash size={24} />
			</button>
		</div>
	);
}
