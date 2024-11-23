"use client";

import { useState, useEffect, useRef } from "react";
import React from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Rocket,
	Star,
	Zap,
	Menu,
	Globe,
	Trophy,
	HelpCircle,
	Sparkles,
	Gift,
	User,
	LogOut,
	Phone,
} from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { getPageDetails } from "@lib/data";

const footer = () => {
	const [translations, setTranslations] = useState<any>(null as any);
	const [language, setLanguage] = useState("en");
	const [faqItems, setFaqItems] = useState<any>([]);
	const [winners, setWinners] = useState<any>([]);
	const getGameData = async () => {
		const getPageData = await getPageDetails();
		console.log({ getPageData });
		setTranslations(getPageData.translations);

		setWinners(getPageData.winners);

		setFaqItems(getPageData.faqItems);
	};

	useEffect(() => {
		getGameData();
	}, []);

	if (!translations) {
		return (
			<div className="w-full h-full flex justify-start items-center"></div>
		);
	}
	return (
		<footer className="w-full bg-white p-4 text-blue-600 text-center">
			<Dialog>
				<DialogTrigger asChild>
					<button className="mx-2 hover:text-blue-800 transition-colors">
						<HelpCircle className="inline-block mr-1" />{" "}
						{translations[language].faq}
					</button>
				</DialogTrigger>
				<DialogContent className="bg-white">
					<DialogHeader>
						<DialogTitle className="text-blue-600">
							{translations[language].faq}
						</DialogTitle>
					</DialogHeader>
					<Accordion type="single" collapsible className="w-full">
						{faqItems.map((item: any, index: any) => (
							<AccordionItem value={`item-${index}`} key={index}>
								<AccordionTrigger>{item.question}</AccordionTrigger>
								<AccordionContent>{item.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</DialogContent>
			</Dialog>
			<Dialog>
				<DialogTrigger asChild>
					<button className="mx-2 hover:text-blue-800 transition-colors">
						<Trophy className="inline-block mr-1" />{" "}
						{translations[language].winners}
					</button>
				</DialogTrigger>
				<DialogContent className="bg-white">
					<DialogHeader>
						<DialogTitle className="text-blue-600">
							{translations[language].winners}
						</DialogTitle>
					</DialogHeader>
					<div className="mt-4">
						<table className="w-full">
							<thead>
								<tr className="bg-blue-100">
									<th className="text-left p-2">
										{translations[language].name}
									</th>
									<th className="text-left p-2">
										{translations[language].phoneNumber}
									</th>
									<th className="text-left p-2">
										{translations[language].prizes}
									</th>
								</tr>
							</thead>
							<tbody>
								{winners.map((winner: any, index: any) => (
									<tr key={index} className="border-t border-blue-200">
										<td className="p-2">{winner.name}</td>
										<td className="p-2">{winner.phone}</td>
										<td className="p-2">{winner.prize}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</DialogContent>
			</Dialog>
			<a href="#" className="mx-2 hover:text-blue-800 transition-colors">
				<Globe className="inline-block mr-1" />{" "}
				{translations[language].language}
			</a>
		</footer>
	);
};

export default footer;
