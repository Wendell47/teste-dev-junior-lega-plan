import dayjs from "dayjs";
import Image from "next/image";
import style from "./header.module.scss";
import ptBR from "dayjs/locale/pt-br";
import { useUserStore } from "@/app/hooks/stores/useUserStore";

dayjs.locale(ptBR);

export default function Header() {
	const date = dayjs().locale("pt").format("dddd[,] D [de] MMMM [de] YYYY");

	const { user } = useUserStore();

	return (
		<header className={style.header}>
			<Image
				src={"/logo.svg"}
				alt="logo focal point"
				height={100}
				width={100}
			/>
			<h1>{`Bem-vindo de Volta, ${user}`}</h1>
			<p>{date}</p>
		</header>
	);
}
