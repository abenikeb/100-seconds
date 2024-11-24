"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CreditCard, Repeat, Zap } from "lucide-react";
import Link from "next/link";

export default function PurchasePage() {
	const [paymentType, setPaymentType] = useState("onetime");
	const [selectedPlan, setSelectedPlan] = useState("");

	const onetimePlans = [
		{ credits: 100, price: 3 },
		{ credits: 500, price: 6 },
		{ credits: 1000, price: 10 },
	];

	const subscriptionPlans = [
		{ name: "Daily", credits: 50, price: 20 },
		{ name: "Weekly", credits: 200, price: 100 },
		{ name: "Monthly", credits: 1000, price: 350 },
	];

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
							<CreditCard className="mr-2" /> Purchase Credits
						</CardTitle>
					</CardHeader>
					<CardContent className="p-6">
						<RadioGroup
							className="mb-6 flex space-x-4"
							onValueChange={setPaymentType}
							value={paymentType}>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="onetime" id="onetime" />
								<Label htmlFor="onetime" className="flex items-center">
									<Zap className="mr-2" /> One-time Purchase
								</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="subscription" id="subscription" />
								<Label htmlFor="subscription" className="flex items-center">
									<Repeat className="mr-2" /> Subscription
								</Label>
							</div>
						</RadioGroup>

						{paymentType === "onetime" ? (
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
								{onetimePlans.map((plan, index) => (
									<Card
										key={index}
										className={`cursor-pointer transition-all duration-300 ${
											selectedPlan === `onetime-${index}`
												? "ring-2 ring-blue-500"
												: ""
										}`}
										onClick={() => setSelectedPlan(`onetime-${index}`)}>
										<CardContent className="p-4 text-center">
											<h3 className="text-2xl font-bold text-blue-600">
												{plan.credits}
											</h3>
											<p className="text-gray-600">Credits</p>
											<p className="text-lg font-semibold mt-2">
												{plan.price} ETB
											</p>
										</CardContent>
									</Card>
								))}
							</div>
						) : (
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
								{subscriptionPlans.map((plan, index) => (
									<Card
										key={index}
										className={`cursor-pointer transition-all duration-300 ${
											selectedPlan === `subscription-${index}`
												? "ring-2 ring-blue-500"
												: ""
										}`}
										onClick={() => setSelectedPlan(`subscription-${index}`)}>
										<CardContent className="p-4 text-center">
											<h3 className="text-xl font-bold text-blue-600">
												{plan.name}
											</h3>
											<p className="text-2xl font-bold text-gray-800 mt-2">
												{plan.credits}
											</p>
											<p className="text-gray-600">
												Credits / {plan.name.toLowerCase()}
											</p>
											<p className="text-lg font-semibold mt-2">
												{plan.price} ETB/{plan.name.toLowerCase().charAt(0)}
											</p>
										</CardContent>
									</Card>
								))}
							</div>
						)}

						<div className="flex justify-center space-x-4">
							<Button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white">
								Continue with Telebirr
							</Button>
							<Button asChild variant="outline" className="w-full md:w-auto">
								<Link href="/">Back to Quiz</Link>
							</Button>
						</div>
					</CardContent>
				</Card>
			</motion.div>
		</div>
	);
}
