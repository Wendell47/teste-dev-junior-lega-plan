import { create } from "zustand";

export type taskProps = {
	id: string;
	task: string;
	isCompleted: boolean;
};
type useTaskStoreProps = {
	tasks: taskProps[];
	setTask: (task: taskProps) => void;
	setTasks: (tasks: taskProps[]) => void;
	removeTask: (id: string) => void;
	completeTask: (id: string) => void;
};

const useTaskStore = create<useTaskStoreProps>((set) => ({
	tasks: [],
	setTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
	setTasks: (tasks) => set(() => ({ tasks: tasks })),
	removeTask: (id) =>
		set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
	completeTask: (id) =>
		set((state) => ({
			tasks: state.tasks.map((task) =>
				task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
			),
		})),
}));

export { useTaskStore };
