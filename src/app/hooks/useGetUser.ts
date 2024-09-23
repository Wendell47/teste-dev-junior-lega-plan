import { useEffect, useState } from "react";
import { useUserStore } from "./stores/useUserStore";

const useGetUser = () => {
	const { user, setUser } = useUserStore();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const storedUser = localStorage.getItem("User");
		console.log(storedUser);
		if (storedUser) {
			try {
				const userParsed = JSON.parse(storedUser);
				setUser(userParsed);
			} catch (error) {
				console.error("Erro ao analisar os dados do localStorage:", error);
			}
		}

		setIsLoading(false);
	}, [setUser]);

	useEffect(() => {
		if (!isLoading) {
			localStorage.setItem("User", JSON.stringify(user));
		}
	}, [user, isLoading]);

	return { user, isLoading };
};

export { useGetUser };
