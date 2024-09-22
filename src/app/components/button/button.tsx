import type { ComponentProps } from "react";
import style from "./button.module.scss";

type buttonProps = ComponentProps<"button"> & {
	title: string;
	variable?: "primary" | "secondary" | "delete";
};
export default function Button({
	title,
	variable = "primary",
	...props
}: buttonProps) {
	const Variable =
		(variable === "primary" && style.primary) ||
		(variable === "secondary" && style.secondary) ||
		(variable === "delete" && style.delete);
	return (
		<button
			className={`${style.button} ${Variable}`}
			type="button"
			title={title}
			{...props}
		>
			{title}
		</button>
	);
}
