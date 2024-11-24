"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const HeaderWinner = ({ translations, language }: any) => {
	const router = useRouter();

	return (
		<header className="bg-white shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
				<Button
					variant="ghost"
					size="sm"
					className="mr-4"
					onClick={() => router.back()}>
					<ArrowLeft className="mr-2 h-4 w-4" />
					{translations[language].back}
				</Button>
				<h1 className="text-2xl font-bold text-blue-600">
					{translations[language].winners}
				</h1>
			</div>
		</header>
	);
};
