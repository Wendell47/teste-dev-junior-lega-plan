"use client";
import Header from "./components/header/Header";
import Summary from "./components/summary/summary";
import Welcome from "./components/Welcome/Welcome";
import styles from "./page.module.scss";
import { useGetUser } from "./hooks/useGetUser";
export default function Home() {
	const { user, isLoading } = useGetUser();

	return (
		<main>
			{isLoading ? null : user ? (
				<>
					<Header />
					<div className={`${styles.container} ${styles.flex}`}>
						<Summary />
					</div>
				</>
			) : (
				<Welcome />
			)}
		</main>
	);
}
