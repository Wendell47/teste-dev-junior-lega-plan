import Summary from "./components/summary/summary";
import styles from "./page.module.css";
export default function Home() {
	return (
		<main className={styles.main}>
			<div className={`${styles.container} ${styles.flex}`}>
				<Summary />
			</div>
		</main>
	);
}
