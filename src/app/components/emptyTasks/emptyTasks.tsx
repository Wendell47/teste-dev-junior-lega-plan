import { ArrowDownFromLine } from "lucide-react";
import style from "./emptyTasks.module.scss";
export default function EmptyTasks() {
	return (
		<div className={style.empty_tasks}>
			<p>Começe adicionando algumas metas no botão abaixo </p>
			<span>
				<ArrowDownFromLine />
			</span>
		</div>
	);
}
