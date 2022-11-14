import "./globals.css";
import { Rubik } from "@next/font/google";

const font = Rubik();

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={font.className}>
			<head />
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
}
