"use client";
import { Check, Trash } from "lucide-react";
import style from "./style.module.scss";
import { useTaskStore } from "@/app/hooks/stores/useTaskStore";

type goalItemProps = {
	goal: string;
	id: string;
	completed?: boolean;
	deleteTask?: () => void;
};

export default function TaskItem({
	goal,
	id,
	completed,
	deleteTask,
}: goalItemProps) {
	const { completeTask } = useTaskStore();

	const handleCheck = () => {
		completeTask(id);
	};

	return (
		<div
			className={`${style.goal_item} ${completed ? style.goal_completed : ""}`}
		>
			<div>
				<button
					type="button"
					role="checkbox"
					aria-checked={completed}
					title="checkGoal"
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
				<label htmlFor={id}>{goal}</label>
			</div>

			<button
				title="delete Goal"
				type="button"
				className={style.delete_goal_button}
				onClick={deleteTask}
			>
				<Trash size={24} />
			</button>
		</div>
	);
}
