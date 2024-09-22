import type { ComponentProps } from "react";
import style from "./input.module.scss";
type inputProps = ComponentProps<"input"> & {
	name: string;
};
export default function Input({ name, ...rest }: inputProps) {
	return (
		<div className={style.input_wrapper}>
			<label htmlFor={`input-${name}`}>{name}</label>
			<input id={`input-${name}`} className={style.input} {...rest} />
		</div>
	);
}
