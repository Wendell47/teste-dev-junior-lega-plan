"use client";
import Image from "next/image";
import Input from "@/app/components//input/input";
import Button from "@/app/components/button/button";
import { useState, type FormEvent } from "react";
import style from "./Welcome.module.scss";
import { type userProps, useUserStore } from "@/app/hooks/stores/useUserStore";

export default function Welcome() {
	const [name, setName] = useState<userProps>();
	const { user, setUser } = useUserStore();

	function handleUser(e: FormEvent) {
		e.preventDefault();
		console.log(user);
		if (name) {
			setUser(name);
		}
	}
	return (
		<div className={style.welcome}>
			<Image src={"/logo.svg"} width={100} height={100} alt="Logo" />

			<h1>Bem-vindo</h1>
			<form onSubmit={(e) => handleUser(e)}>
				<Input
					name="Qual seu nome"
					placeholder="Marcus"
					required
					onChange={(e) => setName(e.target.value)}
				/>

				<Button title="Entrar" type="submit" />
			</form>
		</div>
	);
}
