import { useEffect, useState } from "react";
import { useTaskStore } from "./stores/useTaskStore";

const useHandleLocalStorage = () => {
	const { tasks, setTasks } = useTaskStore();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const storedTasks = localStorage.getItem("Tasks");

		if (storedTasks) {
			try {
				const parsedTasks = JSON.parse(storedTasks);
				setTasks(parsedTasks);
			} catch (error) {
				console.error("Erro ao analisar os dados do localStorage:", error);
			}
		}

		setIsLoading(false);
	}, [setTasks]);

	useEffect(() => {
		if (!isLoading) {
			localStorage.setItem("Tasks", JSON.stringify(tasks));
		}
	}, [tasks, isLoading]);

	return { isLoading };
};

export { useHandleLocalStorage };
