import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

// metadata
export const metadata: Metadata = {
	title: "SoCal Backcountry",
	description: "Southern California Backcountry Conditions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<GlobalProvider>{children}</GlobalProvider>
			</body>
		</html>
	);
}
