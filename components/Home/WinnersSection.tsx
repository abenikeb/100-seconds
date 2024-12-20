"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const WinnersSection = ({ winners, translations, language }: any) => {
	const [activeTab, setActiveTab] = useState("instant");

	const WinnerCard = ({ winner, index }: any) => (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}>
			<Card className="overflow-hidden">
				<CardContent className="p-6">
					<div className="flex items-center mb-4">
						<Avatar className="h-16 w-16 border-4 border-white shadow-lg">
							<AvatarImage
								src={`https://i.pravatar.cc/150?img=${index + 1}`}
								alt={winner.name}
							/>
							<AvatarFallback>
								{winner.name
									.split(" ")
									.map((n: string) => n[0])
									.join("")}
							</AvatarFallback>
						</Avatar>
						<div className="ml-4">
							<h3 className="text-xl font-semibold text-blue-800">
								{winner.name}
							</h3>
							<p className="text-sm text-purple-600">{winner.phone}</p>
						</div>
					</div>
					<div className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-lg">
						<p className="text-lg font-medium text-blue-700 flex items-center">
							<Gift className="mr-2" />
							{translations[language].prize}:{" "}
							<Badge
								variant="secondary"
								className="ml-2 text-purple-600 font-bold">
								{winner.prize}
							</Badge>
						</p>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* <motion.h1
					className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					<Trophy className="inline-block mr-2 mb-1" />
					{translations[language].winners}
				</motion.h1> */}
				<Tabs defaultValue="instant" className="w-full">
					<TabsList className="grid w-full grid-cols-2 mb-8">
						<TabsTrigger
							value="instant"
							onClick={() => setActiveTab("instant")}>
							{translations[language].instantWinners}
						</TabsTrigger>
						<TabsTrigger value="weekly" onClick={() => setActiveTab("weekly")}>
							{translations[language].weeklyWinners}
						</TabsTrigger>
					</TabsList>
					<TabsContent value="instant">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{winners.instant.map((winner: any, index: number) => (
								<WinnerCard key={index} winner={winner} index={index} />
							))}
						</div>
					</TabsContent>
					<TabsContent value="weekly">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{winners.weekly.map((winner: any, index: number) => (
								<WinnerCard key={index} winner={winner} index={index} />
							))}
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
};
