import type { Metadata } from "next";
import { Raleway as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@components/Home/footer";
import Provider from "@/components/Provider";
import "./globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Quizcroll Mobile Marketplace",
	description: "Generated by Ab",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Provider session={undefined}>
				<body
					className={cn(
						"min-h-screen bg-background font-sans antialiased mb-[7vh]",
						fontSans.variable
					)}>
					{children}
					<Footer />
				</body>
			</Provider>
		</html>
	);
}
