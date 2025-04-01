import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

// metadata
export const metadata: Metadata = {
	title: "SoCal Backcountry",
	description: "SoCal Backcountry is dedicated to backcountry skiing and mountaineering safety in the Southern California winter backcountry. Updated and detailed condition reports, weather forecasts, backcountry resources, and information on Southern California's most popular backcountry skiing and mountaineering routes are provided.",
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
