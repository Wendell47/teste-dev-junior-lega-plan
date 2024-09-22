import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/header/Header";

export const metadata: Metadata = {
	title: "Focal Point",
	description: "Aplicativo de tarefas",
};
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<body className={inter.className}>
				<Header />

				{children}
			</body>
		</html>
	);
}
