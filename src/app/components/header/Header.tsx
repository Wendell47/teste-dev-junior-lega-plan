import dayjs from "dayjs";
import Image from "next/image";
import style from "./header.module.scss";
import ptBR from "dayjs/locale/pt-br";

dayjs.locale(ptBR);

export default function Header() {
	const date = dayjs().locale("pt").format("dddd[,] D [de] MMMM [de] YYYY");

	return (
		<header className={style.header}>
			<Image
				src={"/logo.svg"}
				alt="logo focal point"
				height={100}
				width={100}
			/>
			<h1>Bem-vindo de Volta, Marcus</h1>
			<p>{date}</p>
		</header>
	);
}
