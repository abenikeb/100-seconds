"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, DollarSign, Clock } from "lucide-react";
import Link from "next/link";

export default function CreditPage() {
	const [credits, setCredits] = useState(100);
	const [history, setHistory] = useState([
		{ amount: 50, type: "Purchase", date: "2024-11-24" },
		{ amount: 20, type: "Used", date: "2024-11-23" },
		{ amount: 100, type: "Purchase", date: "2024-11-22" },
	]);

	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-3xl mx-auto">
				<Card className="bg-white shadow-xl rounded-2xl overflow-hidden">
					<CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
						<CardTitle className="text-3xl font-bold flex items-center">
							<CreditCard className="mr-2" /> Your Credits
						</CardTitle>
					</CardHeader>
					<CardContent className="p-6">
						<div className="text-center mb-8">
							<h2 className="text-5xl font-bold text-blue-600">{credits}</h2>
							<p className="text-gray-600 mt-2">Available Credits</p>
						</div>
						<div className="mb-8">
							<h3 className="text-xl font-semibold mb-4 text-gray-800">
								Credit History
							</h3>
							<div className="space-y-4">
								{history.map((item, index) => (
									<div
										key={index}
										className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
										<div className="flex items-center">
											{item.type === "Purchase" ? (
												<DollarSign className="text-green-500 mr-2" />
											) : (
												<Clock className="text-red-500 mr-2" />
											)}
											<div>
												<p className="font-medium text-gray-800">{item.type}</p>
												<p className="text-sm text-gray-600">{item.date}</p>
											</div>
										</div>
										<Badge
											variant={
												item.type === "Purchase" ? "default" : "destructive"
											}>
											{item.type === "Purchase" ? "+" : "-"}
											{item.amount}
										</Badge>
									</div>
								))}
							</div>
						</div>
						<div className="flex justify-center space-x-4">
							<Button asChild>
								<Link href="/purchase">Buy More Credits</Link>
							</Button>
							<Button asChild variant="outline">
								<Link href="/">Back to Quiz</Link>
							</Button>
						</div>
					</CardContent>
				</Card>
			</motion.div>
		</div>
	);
}
