import { DialogHTMLAttributes, forwardRef } from "react";
import style from "./dialog.module.scss";

type dialogModalProps = {
	children: React.ReactNode;
};
type dialogContentProps = dialogModalProps & {
	className?: string;
};
const DialogContent = ({ children, className }: dialogContentProps) => (
	<div className={`${style.dialog_content} ${className}`}>{children}</div>
);

const Dialog = forwardRef<HTMLDialogElement, dialogModalProps>(
	({ children }, ref) => {
		return (
			<dialog id="dialog" className={style.dialog} ref={ref}>
				{children}
			</dialog>
		);
	},
);

const DialogRoot = ({ children }: dialogModalProps) => {
	return <>{children}</>;
};

DialogRoot.Dialog = Dialog;
DialogRoot.DialogContent = DialogContent;

export { DialogRoot };
