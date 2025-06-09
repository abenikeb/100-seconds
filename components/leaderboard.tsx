"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Award, Star, Flame, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeaderboardProps {
	translations: any;
	language: string;
	className?: string;
}

export function Leaderboard({
	translations,
	language,
	className,
}: LeaderboardProps) {
	const [activeTab, setActiveTab] = useState("week");

	// Mock data for demonstration - in real app, this would come from your API
	const leaderboardData = {
		week: [
			{ rank: 1, name: "Abebe Tesfaye", score: 2850, avatar: 1, streak: 7 },
			{ rank: 2, name: "Sirewdink Tewd", score: 2720, avatar: 2, streak: 5 },
			{ rank: 3, name: "Dinkaye Degsew", score: 2680, avatar: 3, streak: 4 },
			{ rank: 4, name: "Emanueal Tezera", score: 2540, avatar: 4, streak: 6 },
			{ rank: 5, name: "Dawit Molalgn", score: 2420, avatar: 5, streak: 3 },
		],
		month: [
			{ rank: 1, name: "Sirewdink Tewd", score: 12850, avatar: 2, streak: 15 },
			{ rank: 2, name: "Abebe Tesfaye", score: 11720, avatar: 1, streak: 12 },
			{ rank: 3, name: "Emanueal Tezera", score: 10680, avatar: 4, streak: 18 },
			{ rank: 4, name: "Dinkaye Degsew", score: 9540, avatar: 3, streak: 8 },
			{ rank: 5, name: "Dawit Molalgn", score: 8420, avatar: 5, streak: 10 },
		],
		allTime: [
			{ rank: 1, name: "Emanueal Tezera", score: 54680, avatar: 4, streak: 32 },
			{ rank: 2, name: "Sirewdink Tewd", score: 48920, avatar: 2, streak: 28 },
			{ rank: 3, name: "Abebe Tesfaye", score: 45760, avatar: 1, streak: 25 },
			{ rank: 4, name: "Dawit Molalgn", score: 38540, avatar: 5, streak: 22 },
			{ rank: 5, name: "Dinkaye Degsew", score: 32680, avatar: 3, streak: 19 },
		],
	};

	const currentData =
		leaderboardData[activeTab as keyof typeof leaderboardData];

	const getRankIcon = (rank: number) => {
		switch (rank) {
			case 1:
				return <Trophy className="h-5 w-5 text-yellow-500" />;
			case 2:
				return <Medal className="h-5 w-5 text-gray-400" />;
			case 3:
				return <Award className="h-5 w-5 text-amber-600" />;
			default:
				return <Star className="h-4 w-4 text-lime-500" />;
		}
	};

	const getAvatarBorder = (rank: number) => {
		switch (rank) {
			case 1:
				return "ring-4 ring-yellow-400 ring-offset-2";
			case 2:
				return "ring-4 ring-gray-300 ring-offset-2";
			case 3:
				return "ring-4 ring-amber-500 ring-offset-2";
			default:
				return "ring-2 ring-lime-200 ring-offset-1";
		}
	};

	return (
		<div
			className={cn(
				"bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg border border-lime-200 overflow-hidden",
				className
			)}>
			<div className="relative">
				{/* Background decorative elements */}
				<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-lime-400/20 to-green-500/20 rounded-t-2xl"></div>
				<div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-2xl"></div>
				<div className="absolute top-5 right-10 w-16 h-16 bg-green-400/20 rounded-full blur-xl"></div>

				{/* Header */}
				<div className="relative pt-8 pb-4 text-center px-6">
					<div className="flex justify-center items-center gap-2 mb-2">
						<Trophy className="h-8 w-8 text-yellow-500" />
						<h3 className="text-3xl font-bold bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent">
							Leaderboard
						</h3>
					</div>
					<p className="text-gray-600 mb-6">
						Compete with players around the country!
					</p>

					{/* Tab Navigation */}
					<div className="flex justify-center mb-6">
						<div className="bg-white rounded-full p-1 shadow-md">
							<button
								onClick={() => setActiveTab("week")}
								className={`px-6 py-2 rounded-full transition-all duration-300 ${
									activeTab === "week"
										? "bg-gradient-to-r from-lime-500 to-green-600 text-white shadow-md"
										: "text-gray-600 hover:text-lime-600"
								}`}>
								This Week
							</button>
							<button
								onClick={() => setActiveTab("month")}
								className={`px-6 py-2 rounded-full transition-all duration-300 ${
									activeTab === "month"
										? "bg-gradient-to-r from-lime-500 to-green-600 text-white shadow-md"
										: "text-gray-600 hover:text-lime-600"
								}`}>
								This Month
							</button>
							<button
								onClick={() => setActiveTab("allTime")}
								className={`px-6 py-2 rounded-full transition-all duration-300 ${
									activeTab === "allTime"
										? "bg-gradient-to-r from-lime-500 to-green-600 text-white shadow-md"
										: "text-gray-600 hover:text-lime-600"
								}`}>
								All Time
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Top 3 Players - Special Display */}
			<div className="px-6">
				<div className="flex justify-center items-end gap-4 mb-8">
					{/* 2nd Place */}
					{currentData.length > 1 && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="flex flex-col items-center">
							<div className="relative">
								<Avatar className={cn("h-20 w-20", getAvatarBorder(2))}>
									{/* <AvatarImage
										src={`https://i.pravatar.cc/150?img=${currentData[1].avatar}`}
										alt={currentData[1].name}
									/> */}
									<AvatarImage
										src="https://www.gravatar.com/avatar/?d=mp"
										alt="Anonymous User"
									/>
									<AvatarFallback className="bg-gradient-to-r from-gray-300 to-gray-400 text-white text-xl">
										{currentData[1].name
											.split(" ")
											.map((n: string) => n[0])
											.join("")}
									</AvatarFallback>
								</Avatar>
								<div className="absolute -bottom-2 -right-2 bg-gray-300 rounded-full p-1 shadow-md">
									<Medal className="h-6 w-6 text-white" />
								</div>
							</div>
							<div className="mt-3 text-center">
								<p className="font-semibold text-gray-700">
									{currentData[1].name}
								</p>
								<p className="text-xl font-bold text-gray-500">
									{currentData[1].score.toLocaleString()}
								</p>
							</div>
						</motion.div>
					)}

					{/* 1st Place */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="flex flex-col items-center -mt-6">
						<div className="relative">
							<div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
								<Sparkles className="h-8 w-8 text-yellow-400" />
							</div>
							<Avatar className={cn("h-24 w-24", getAvatarBorder(1))}>
								{/* <AvatarImage
									src={`https://i.pravatar.cc/150?img=${currentData[0].avatar}`}
									alt={currentData[0].name}
								/> */}
								<AvatarImage
									src="https://www.gravatar.com/avatar/?d=mp"
									alt="Anonymous User"
								/>
								<AvatarFallback className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-2xl">
									{currentData[0].name
										.split(" ")
										.map((n: string) => n[0])
										.join("")}
								</AvatarFallback>
							</Avatar>
							<div className="absolute -bottom-2 -right-2 bg-yellow-500 rounded-full p-1.5 shadow-md">
								<Trophy className="h-7 w-7 text-white" />
							</div>
						</div>
						<div className="mt-3 text-center">
							<p className="font-semibold text-gray-800">
								{currentData[0].name}
							</p>
							<p className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
								{currentData[0].score.toLocaleString()}
							</p>
							<div className="flex items-center justify-center mt-1 text-amber-600">
								<Flame className="h-4 w-4 mr-1" />
								<span className="text-sm">
									{currentData[0].streak} day streak
								</span>
							</div>
						</div>
					</motion.div>

					{/* 3rd Place */}
					{currentData.length > 2 && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="flex flex-col items-center">
							<div className="relative">
								<Avatar className={cn("h-20 w-20", getAvatarBorder(3))}>
									<AvatarImage
										src="https://www.gravatar.com/avatar/?d=mp"
										alt="Anonymous User"
									/>
									{/* <AvatarImage
										src={`https://i.pravatar.cc/150?img=${currentData[2].avatar}`}
										alt={currentData[2].name}
									/> */}
									<AvatarFallback className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xl">
										{currentData[2].name
											.split(" ")
											.map((n: string) => n[0])
											.join("")}
									</AvatarFallback>
								</Avatar>
								<div className="absolute -bottom-2 -right-2 bg-amber-500 rounded-full p-1 shadow-md">
									<Award className="h-6 w-6 text-white" />
								</div>
							</div>
							<div className="mt-3 text-center">
								<p className="font-semibold text-gray-700">
									{currentData[2].name}
								</p>
								<p className="text-xl font-bold text-amber-600">
									{currentData[2].score.toLocaleString()}
								</p>
							</div>
						</motion.div>
					)}
				</div>
			</div>

			{/* Rest of Leaderboard */}
			<div className="px-6 pb-6">
				<div className="bg-white rounded-xl shadow-md overflow-hidden">
					{currentData.slice(3).map((player, index) => (
						<motion.div
							key={player.rank}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 + index * 0.1 }}
							className={`flex items-center justify-between p-4 ${
								index < currentData.slice(3).length - 1
									? "border-b border-gray-100"
									: ""
							}`}>
							<div className="flex items-center space-x-4">
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-lime-100 text-lime-700 font-semibold">
									{player.rank}
								</div>
								<Avatar className="h-12 w-12 border-2 border-white shadow-sm">
									{/* <AvatarImage
										src={`https://i.pravatar.cc/150?img=${player.avatar}`}
										alt={player.name}
									/> */}
									<AvatarImage
										src="https://www.gravatar.com/avatar/?d=mp"
										alt="Anonymous User"
									/>
									<AvatarFallback className="bg-gradient-to-r from-lime-400 to-green-500 text-white">
										{player.name
											.split(" ")
											.map((n: string) => n[0])
											.join("")}
									</AvatarFallback>
								</Avatar>
								<div>
									<h4 className="font-semibold text-gray-800">{player.name}</h4>
									<div className="flex items-center text-sm text-gray-500">
										<Flame className="h-3 w-3 mr-1 text-orange-400" />
										<span>{player.streak} day streak</span>
									</div>
								</div>
							</div>
							<div className="text-right">
								<div className="text-xl font-bold text-lime-600">
									{player.score.toLocaleString()}
								</div>
								<div className="text-xs text-gray-500">points</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* View All Button */}
			<div className="text-center pb-6">
				<Button
					variant="outline"
					className="bg-white hover:bg-lime-50 text-lime-600 border-lime-300 hover:border-lime-400">
					View Full Leaderboard
				</Button>
			</div>
		</div>
	);
}
