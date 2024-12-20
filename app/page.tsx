"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";

import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CardHeader } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
	Rocket,
	Star,
	Zap,
	Menu,
	Sparkles,
	Gift,
	User,
	LogOut,
	Phone,
	ArrowUpDown,
	PlusCircle,
	CreditCard,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPageDetails } from "@lib/data";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Component() {
	const [gameState, setGameState] = useState("start");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [timeLeft, setTimeLeft] = useState(100);
	const [language, setLanguage] = useState("en");
	const [translations, setTranslations] = useState<any>(null);
	const [questions, setQuestions] = useState<any>(null);
	const [categories, setCategories] = useState<any>(null);
	const [languageNames, setLanguageNames] = useState<any>(null);
	const [winners, setWinners] = useState<any>([]);
	const [prizes, setPrizes] = useState<any>([]);
	const [faqItems, setFaqItems] = useState<any>([]);
	const [userAnswers, setUserAnswers] = useState<any[]>([]);
	const [arrangeItems, setArrangeItems] = useState<string[]>([]);
	const [userCredit, setUserCredit] = useState(100);
	const { data: session } = useSession<any>();

	const prizeListRef = useRef(null);
	const router = useRouter();

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (gameState === "playing" && timeLeft > 0) {
			timer = setInterval(() => {
				setTimeLeft((prevTime) => prevTime - 1);
			}, 1000);
		} else if (timeLeft === 0) {
			setGameState("end");
		}
		return () => clearInterval(timer);
	}, [gameState, timeLeft]);

	const getGameData = async () => {
		const getPageData = await getPageDetails();
		setTranslations(getPageData.translations);
		setQuestions(getPageData.questions);
		setCategories(getPageData.categories);
		setLanguageNames(getPageData.languageNames);
		setWinners(getPageData.winners);
		setPrizes(getPageData.prizes);
		setFaqItems(getPageData.faqItems);
	};

	useEffect(() => {
		getGameData();
	}, []);

	useEffect(() => {
		if (prizeListRef.current) {
			const scrollContainer: any = prizeListRef.current;
			let scrollAmount = 0;
			const step = 1;
			const scrollInterval = setInterval(() => {
				scrollContainer.scrollLeft += step;
				scrollAmount += step;
				if (scrollAmount >= scrollContainer.scrollWidth / 2) {
					scrollContainer.scrollLeft = 0;
					scrollAmount = 0;
				}
			}, 50);

			return () => clearInterval(scrollInterval);
		}
	}, []);

	const startGame = () => {
		if (session?.user?.name && userCredit >= 10) {
			setGameState("category");
			setUserCredit(userCredit - 10);
		} else if (!session?.user?.name) {
			// setShowPayment(true);
			router.push("/login");
		} else {
			alert(translations[language].insufficientCredit);
		}
	};

	const selectCategory = (category: string) => {
		setSelectedCategory(category);
		setGameState("playing");
		setCurrentQuestion(0);
		setScore(0);
		setTimeLeft(100);
		setUserAnswers([]);
		if (questions[language][category][0].type === "arrange") {
			setArrangeItems(
				shuffleArray([...questions[language][category][0].items])
			);
		}
	};

	const handleAnswer = (selectedAnswer: number | string[]) => {
		const currentQuestionData =
			questions[language][selectedCategory][currentQuestion];
		let isCorrect = false;

		if (
			["multipleChoice", "image", "sound"].includes(currentQuestionData.type)
		) {
			isCorrect = selectedAnswer === currentQuestionData.answer;
		} else if (currentQuestionData.type === "arrange") {
			isCorrect =
				JSON.stringify(selectedAnswer) ===
				JSON.stringify(currentQuestionData.items);
		}

		setUserAnswers([
			...userAnswers,
			{ question: currentQuestion, answer: selectedAnswer, correct: isCorrect },
		]);

		if (isCorrect) {
			setScore((prevScore) => prevScore + 1);
		}

		if (currentQuestion < questions[language][selectedCategory].length - 1) {
			setCurrentQuestion((prevQuestion) => {
				const nextQuestion = prevQuestion + 1;
				if (
					questions[language][selectedCategory][nextQuestion].type === "arrange"
				) {
					setArrangeItems(
						shuffleArray([
							...questions[language][selectedCategory][nextQuestion].items,
						])
					);
				}
				return nextQuestion;
			});
		} else {
			setGameState("end");
		}
	};

	const handleLogout = () => {
		signOut();
		setGameState("start");
	};

	const requestCredit = () => {
		alert(translations[language].creditRequested);
	};

	const shuffleArray = (array: any[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	if (!translations) {
		return (
			<div className="w-full h-full flex justify-center items-center mt-[50%]">
				<p className="text-2xl text-blue-600">Loading...</p>
			</div>
		);
	}

	const PrizeSection = ({ prizes, translations, language }: any) => {
		return (
			<div className="mt-10 bg-gradient-to-r from-blue-500 to-purple-600 p-2 m-auto rounded-xl shadow-lg">
				<h3 className="text-3xl font-bold mb-4 text-white">
					{translations[language].prizes}
				</h3>
				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					className="w-full">
					<CarouselContent>
						{prizes.map((prize: any, index: any) => (
							<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
								<div className="p-1">
									<Card>
										<CardContent className="flex flex-col items-center justify-center p-6">
											<prize.icon className="h-12 w-12 text-purple-600 mb-2" />
											<h4 className="text-xl font-semibold text-blue-800 mb-2">
												{
													translations[language][
														prize.name.toLowerCase().replace(" ", "")
													]
												}
											</h4>
											<p className="text-purple-600 font-bold text-2xl">
												{prize.value}
											</p>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		);
	};

	const WinnersSection = ({ winners, translations, language }: any) => {
		return (
			<section className="bg-gradient-to-r from-blue-50 to-purple-50 py-3">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center mb-3">
						<h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
							{translations[language].winners}
						</h2>
						<Link href="/winners" passHref>
							<Button
								variant="outline"
								className="bg-white/50 hover:bg-white/80 text-blue-600 hover:text-blue-700 border-blue-300">
								{translations[language].seeAll}
							</Button>
						</Link>
					</div>
					<ScrollArea className="w-full whitespace-nowrap rounded-xl">
						<div className="flex space-x-4 pb-4">
							{winners.map((winner: any, index: any) => (
								<Card
									key={index}
									className="w-[300px] flex-shrink-0 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
									<CardContent className="p-4">
										<div className="flex items-center space-x-4 mb-3">
											<Avatar className="h-12 w-12 border-2 border-white shadow-md">
												<AvatarImage
													src={`https://i.pravatar.cc/150?img=${index + 1}`}
													alt={winner.name}
												/>
												<AvatarFallback>
													{winner.name
														.split(" ")
														.map((n: any) => n[0])
														.join("")}
												</AvatarFallback>
											</Avatar>
											<div>
												<h3 className="text-lg font-semibold text-blue-800 leading-tight">
													{winner.name}
												</h3>
												<p className="text-sm text-purple-600">
													{winner.phone}
												</p>
											</div>
										</div>
										<div className="bg-white/70 p-3 rounded-lg shadow-inner">
											<p className="text-sm font-medium text-blue-700">
												{translations[language].prize}:{" "}
												<span className="text-purple-600 font-bold">
													{winner.prize}
												</span>
											</p>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
						<ScrollBar orientation="horizontal" />
					</ScrollArea>
				</div>
			</section>
		);
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-sky-200 via-blue-100 to-indigo-100 flex flex-col">
			<header className="w-full bg-transparent shadow-md px-3 py-2">
				<div className="max-w-7xl mx-auto flex justify-between items-center">
					<div className="-mr-6">
						<Image
							src="/assets/images/tele-logo.png"
							alt="logo"
							width={110}
							height={50}
						/>
					</div>
					<div className="flex items-center space-x-1">
						<Zap className="h-7 w-7 text-lime-500" />

						<h1 className="text-xl font-bold text-blue-600">
							{translations[language].title}
						</h1>
					</div>
					<nav className="hidden md:flex items-center space-x-4">
						<Link
							href="/"
							className="text-blue-600 hover:text-blue-800 transition-colors">
							{translations[language].home}
						</Link>
						<Link
							href="/credit"
							className="text-blue-600 hover:text-blue-800 transition-colors">
							{translations[language].credits}
						</Link>
						<Link
							href="/purchase"
							className="text-blue-600 hover:text-blue-800 transition-colors">
							{translations[language].buyCredits}
						</Link>
						<Dialog>
							<DialogTrigger asChild>
								<button className="text-blue-600 hover:text-blue-800 transition-colors">
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
									{faqItems.map((item: any, index: number) => (
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
								<button className="text-blue-600 hover:text-blue-800 transition-colors">
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
											{winners.map((winner: any, index: number) => (
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
						<Select onValueChange={(value) => setLanguage(value)}>
							<SelectTrigger className="w-[120px] bg-white text-blue-600 border-blue-300">
								<SelectValue placeholder={translations[language].language} />
							</SelectTrigger>
							<SelectContent>
								{Object.entries(languageNames).map(([code, name]) => (
									<SelectItem key={code} value={code}>
										{name as string}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</nav>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline" size="icon" className="md:hidden">
								<Menu className="h-6 w-6" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[250px] bg-white">
							<nav className="flex flex-col space-y-4">
								{session?.user?.name && (
									<div className="flex items-center space-x-2 mb-4">
										<User className="h-6 w-6 text-blue-600" />
										<span className="text-blue-600 font-semibold">
											{session.user.name}
											{translations[language].profile} {session.user.email}
										</span>
									</div>
								)}
								<Link
									href="/"
									className="text-blue-600 hover:text-blue-800 transition-colors">
									{translations[language].home}
								</Link>
								{session?.user?.name && (
									<>
										{" "}
										<Link
											href="/credit"
											className="text-blue-600 hover:text-blue-800 transition-colors">
											{translations[language].credits}
										</Link>
										<Link
											href="/purchase"
											className="text-blue-600 hover:text-blue-800 transition-colors">
											{translations[language].buyCredits}
										</Link>
									</>
								)}

								<Dialog>
									<DialogTrigger asChild>
										<button className="text-lg text-left text-blue-600 hover:text-blue-800 transition-colors">
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
											{faqItems.map((item: any, index: number) => (
												<AccordionItem value={`item-${index}`} key={index}>
													<AccordionTrigger>{item.question}</AccordionTrigger>
													<AccordionContent>{item.answer}</AccordionContent>
												</AccordionItem>
											))}
										</Accordion>
									</DialogContent>
								</Dialog>
								<a
									href="/winners"
									className="text-lg text-blue-600 hover:text-blue-800 transition-colors">
									{translations[language].winners}
								</a>

								<Select onValueChange={(value) => setLanguage(value)}>
									<SelectTrigger className="w-full bg-white text-blue-600 border-blue-300">
										<SelectValue
											placeholder={translations[language].language}
										/>
									</SelectTrigger>
									<SelectContent>
										{Object.entries(languageNames).map(([code, name]) => (
											<SelectItem key={code} value={code}>
												{name as string}
											</SelectItem>
										))}
									</SelectContent>
								</Select>

								{session?.user?.name && (
									<Button
										onClick={handleLogout}
										variant="outline"
										className="mt-4">
										<LogOut className="h-4 w-4 mr-2" />
										{translations[language].logout}
									</Button>
								)}
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</header>

			<main className="flex-grow flex flex-col items-center justify-start p-4 relative overflow-hidden">
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
					<div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
					<div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
					<Star className="absolute top-1/4 right-1/4 w-24 h-24 text-yellow-400 opacity-20 animate-pulse" />
					<Sparkles className="absolute top-1/5 left-1/2 w-20 h-20 text-blue-400 opacity-20 animate-spin-slow" />
					<Zap className="absolute bottom-1/4 right-1/4 w-16 h-16 text-pink-400 opacity-20 animate-bounce" />
				</div>
				{session?.user && (
					<div className="w-full mb-6 p-4 bg-gray-100/50 rounded-lg shadow-inner flex justify-between items-center z-50">
						<div>
							<p className="text-blue-800 font-semibold">
								{translations[language].credit}: {userCredit}
							</p>
							<p className="text-blue-600">{session?.user.email as any}</p>
						</div>
						<div className="space-x-2">
							<Button
								asChild
								className="bg-blue-500 hover:bg-blue-600 text-white">
								<Link href="/purchase">
									<CreditCard className="mr-2 h-4 w-4" />{" "}
									{translations[language].requestCredit}
								</Link>
							</Button>
						</div>
					</div>
				)}

				<Card className="max-w-4xl w-full bg-white/60 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl py-8 px-0 z-10">
					<CardContent>
						{gameState === "start" && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								className="text-center">
								<h2 className="text-4xl font-bold mb-6 text-blue-600">
									{translations[language].title}
								</h2>
								<p className="text-xl mb-6 text-gray-700">
									{translations[language].ready}
								</p>
								<Button
									onClick={startGame}
									className="text-lg px-8 py-4 bg-lime-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 h-12">
									{translations[language].start} <Rocket className="ml-2" />
								</Button>
								<PrizeSection
									prizes={prizes}
									translations={translations}
									language={language}
								/>
							</motion.div>
						)}

						{gameState === "category" && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								className="text-center">
								<h2 className="text-3xl font-bold mb-6 text-blue-600">
									{translations[language].selectCategory}
								</h2>
								<div className="grid grid-cols-2 gap-4">
									{categories[language].map((category: any, index: number) => (
										<Button
											key={index}
											onClick={() => selectCategory(category.name)}
											className="text-lg py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 flex items-center justify-center">
											<category.icon className="mr-2" />
											{category.name}
										</Button>
									))}
								</div>
							</motion.div>
						)}

						{gameState === "playing" && (
							<motion.div
								key={currentQuestion}
								initial={{ x: 300, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: -300, opacity: 0 }}
								transition={{ type: "spring", stiffness: 260, damping: 20 }}>
								<div className="mb-6">
									<Progress
										value={(timeLeft / 100) * 100}
										className="h-3 bg-blue-200"
									/>
									<div className="flex justify-between mt-2">
										<p className="text-blue-600">
											{translations[language].timeLeft}: {timeLeft}s
										</p>
										<Badge
											variant="secondary"
											className="bg-blue-100 text-blue-800">
											{translations[language].question} {currentQuestion + 1}{" "}
											{translations[language].of}{" "}
											{questions[language][selectedCategory].length}
										</Badge>
									</div>
								</div>
								<h2 className="text-2xl font-semibold mb-4 text-blue-800">
									{
										questions[language][selectedCategory][currentQuestion]
											.question
									}
								</h2>
								{["multipleChoice", "image", "sound"].includes(
									questions[language][selectedCategory][currentQuestion].type
								) && (
									<>
										{questions[language][selectedCategory][currentQuestion]
											.type === "image" && (
											<div className="mb-4">
												<img
													src={
														questions[language][selectedCategory][
															currentQuestion
														].imageUrl
													}
													alt="Question Image"
													className="mx-auto max-w-full h-auto rounded-lg shadow-md"
												/>
											</div>
										)}
										{questions[language][selectedCategory][currentQuestion]
											.type === "sound" && (
											<div className="mb-4">
												<audio controls className="w-full">
													<source
														src={
															questions[language][selectedCategory][
																currentQuestion
															].audioUrl
														}
														type="audio/mpeg"
													/>
													Your browser does not support the audio element.
												</audio>
											</div>
										)}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											{questions[language][selectedCategory][
												currentQuestion
											].options.map((option: string, index: number) => (
												<Button
													key={index}
													onClick={() => handleAnswer(index)}
													className="text-lg py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300">
													{option}
												</Button>
											))}
										</div>
									</>
								)}
								{questions[language][selectedCategory][currentQuestion].type ===
									"arrange" && (
									<>
										<Reorder.Group
											axis="y"
											values={arrangeItems}
											onReorder={setArrangeItems}
											className="space-y-2">
											{arrangeItems.map((item) => (
												<Reorder.Item key={item} value={item}>
													<div className="bg-blue-100 p-3 rounded-lg cursor-move flex items-center justify-between">
														<span>{item}</span>
														<ArrowUpDown className="text-blue-500" />
													</div>
												</Reorder.Item>
											))}
										</Reorder.Group>
										<Button
											onClick={() => handleAnswer(arrangeItems)}
											className="mt-4 bg-green-500 hover:bg-green-600 text-white">
											{translations[language].submit}
										</Button>
									</>
								)}
							</motion.div>
						)}

						{gameState === "end" && (
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.8 }}
								className="text-center">
								<h2 className="text-3xl font-bold mb-4 text-blue-600">
									{translations[language].complete}
								</h2>
								<p className="text-2xl mb-6 text-blue-800">
									{translations[language].score}: {score}{" "}
									{translations[language].of}{" "}
									{questions[language][selectedCategory].length}
								</p>
								{/* <div className="mb-6">
									{userAnswers.map((answer, index) => (
										<div
											key={index}
											className={`mb-2 p-2 rounded ${
												answer.correct ? "bg-green-100" : "bg-red-100"
											}`}>
											<p className="font-semibold">
												{
													questions[language][selectedCategory][answer.question]
														.question
												}
											</p>
											<p>{answer.correct ? "✅ Correct" : "❌ Incorrect"}</p>
										</div>
									))}
								</div> */}
								<div className="flex justify-center space-x-4">
									<Button
										onClick={() => setGameState("category")}
										className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300">
										{translations[language].playAgain} <Star className="ml-2" />
									</Button>
									<Button
										onClick={() => setGameState("start")}
										className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors duration-300">
										{translations[language].home} <Gift className="ml-2" />
									</Button>
								</div>
							</motion.div>
						)}
					</CardContent>
				</Card>
			</main>
			{/*  Winners Section */}
			<WinnersSection
				winners={winners}
				translations={translations}
				language={language}
			/>
		</div>
	);
}
