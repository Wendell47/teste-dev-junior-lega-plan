import { Loader2 } from "lucide-react";
import style from "./loading.module.scss";
export default function Loading() {
	return (
		<div className={style.loading_wrapper}>
			<Loader2 />
		</div>
	);
}
