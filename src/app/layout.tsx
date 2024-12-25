import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// importing local font
const anotherSans = localFont({
	src: [
		{
			path: "../assets/font/another-sans.woff2",
			weight: "100 900",
			style: "normal",
		},
		{
			path: "../assets/font/another-sans.woff",
			weight: "100 900",
			style: "normal",
		},
		{
			path: "../assets/font/another-sans.ttf",
			weight: "100 900",
			style: "normal",
		},
	],
	display: "swap",
	variable: "--font-another-sans",
});

// metadata
export const metadata: Metadata = {
	title: "SC Backcountry",
	description: "Guide to backcountry in Southern California",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={anotherSans.className}>{children}</body>
		</html>
	);
}
