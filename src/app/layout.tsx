import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
