"use client";

import { useState, useEffect, useRef } from "react";
import { motion, Reorder } from "framer-motion";

import { signOut, useSession } from "next-auth/react";
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
	ArrowUpDown,
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
import { getPageDetails } from "@lib/data";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Leaderboard } from "@/components/leaderboard";

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

	const floatingStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(1deg); }
    66% { transform: translateY(5px) rotate(-1deg); }
  }
  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-float-delayed { animation: float 6s ease-in-out infinite 2s; }
  .animate-float-slow { animation: float 8s ease-in-out infinite 1s; }
`;

	return (
		<div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 flex flex-col relative">
			<style dangerouslySetInnerHTML={{ __html: floatingStyles }} />
			<header className="w-full bg-gradient-to-r from-lime-500 via-green-500 to-emerald-600 shadow-xl px-3 py-3 relative overflow-hidden">
				{/* Add subtle pattern */}
				<div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
				<div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
					<div className="-mr-6">
						<Image
							src="/assets/images/tele-logo.png"
							alt="logo"
							width={110}
							height={50}
						/>
					</div>
					<div className="flex items-center space-x-1">
						<Zap className="h-7 w-7 text-white" />

						<h1 className="text-xl font-bold text-white">
							{translations[language].title}
						</h1>
					</div>
					<nav className="hidden md:flex items-center space-x-4">
						<Link
							href="/"
							className="text-white hover:text-lime-200 transition-colors">
							{translations[language].home}
						</Link>
						<Link
							href="/credit"
							className="text-white hover:text-lime-200 transition-colors">
							{translations[language].credits}
						</Link>
						<Link
							href="/purchase"
							className="text-white hover:text-lime-200 transition-colors">
							{translations[language].buyCredits}
						</Link>
						<Dialog>
							<DialogTrigger asChild>
								<button className="text-white hover:text-lime-200 transition-colors">
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
							<SelectTrigger className="w-[120px] bg-white/80 text-lime-700 border-lime-300">
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
					{/* Animated gradient orbs */}
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-lime-300 to-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
					<div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-green-200 to-lime-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
					<div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-lime-100 to-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>

					{/* Floating icons */}
					<Star className="absolute top-1/4 right-1/4 w-8 h-8 text-yellow-400 opacity-30 animate-pulse" />
					<Star className="absolute top-1/6 left-1/3 w-6 h-6 text-yellow-300 opacity-25 animate-pulse animation-delay-1000" />
					<Sparkles className="absolute top-1/5 left-1/2 w-10 h-10 text-lime-400 opacity-25 animate-spin-slow" />
					<Sparkles className="absolute bottom-1/3 right-1/3 w-8 h-8 text-green-400 opacity-20 animate-spin-slow animation-delay-3000" />
					<Zap className="absolute bottom-1/4 right-1/4 w-7 h-7 text-lime-500 opacity-25 animate-bounce" />
					<Gift className="absolute top-1/3 left-1/5 w-6 h-6 text-green-400 opacity-20 animate-bounce animation-delay-2000" />
				</div>
				{session?.user && (
					<div className="w-full mb-6 p-4 bg-white/70 rounded-lg shadow-md flex justify-between items-center z-50 border-l-4 border-lime-500">
						<div>
							<p className="text-lime-800 font-semibold">
								{translations[language].credit}: {userCredit}
							</p>
							<p className="text-lime-600">{session?.user.email as any}</p>
						</div>
						<div className="space-x-2">
							<Button
								asChild
								className="bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white">
								<Link href="/purchase">
									<CreditCard className="mr-2 h-4 w-4" />{" "}
									{translations[language].requestCredit}
								</Link>
							</Button>
						</div>
					</div>
				)}

				<Card className="max-w-4xl w-full bg-white/85 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl py-8 px-0 z-10 border-t-4 border-lime-500 relative overflow-hidden">
					{/* Add subtle pattern overlay */}
					<div className="absolute inset-0 bg-gradient-to-br from-lime-50/20 to-green-50/20 rounded-3xl"></div>
					<CardContent className="relative z-10">
						{gameState === "start" && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								className="text-center">
								<h2 className="text-4xl font-bold mb-6 text-lime-600">
									{translations[language].title}
								</h2>
								<p className="text-xl mb-6 text-gray-700">
									{translations[language].ready}
								</p>
								<Button
									onClick={startGame}
									className="text-lg px-8 py-4 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white rounded-full transition-colors duration-300 h-12 shadow-lg">
									{translations[language].start} <Rocket className="ml-2" />
								</Button>

								{/* Replace the old leaderboard with the new component */}
								<Leaderboard
									translations={translations}
									language={language}
									className="mt-10"
								/>
							</motion.div>
						)}

						{gameState === "category" && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								className="text-center">
								<h2 className="text-3xl font-bold mb-6 text-lime-600">
									{translations[language].selectCategory}
								</h2>
								<div className="grid grid-cols-2 gap-4">
									{categories[language].map((category: any, index: number) => (
										<Button
											key={index}
											onClick={() => selectCategory(category.name)}
											className="text-lg py-4 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center shadow-md">
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
										className="h-3 bg-lime-100"
										// indicatorClassName="bg-gradient-to-r from-lime-500 to-green-600"
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
								<h2 className="text-2xl font-semibold mb-4 text-lime-800">
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
														].imageUrl || "/placeholder.svg"
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
													className="text-lg py-4 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white rounded-lg transition-colors duration-300 shadow-md">
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
													<div className="bg-lime-100 p-3 rounded-lg cursor-move flex items-center justify-between border border-lime-300">
														<span>{item}</span>
														<ArrowUpDown className="text-lime-500" />
													</div>
												</Reorder.Item>
											))}
										</Reorder.Group>
										<Button
											onClick={() => handleAnswer(arrangeItems)}
											className="mt-4 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white shadow-md">
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
								<h2 className="text-3xl font-bold mb-4 text-lime-600">
									{translations[language].complete}
								</h2>
								<p className="text-2xl mb-6 text-blue-800">
									{translations[language].score}: {score}{" "}
									{translations[language].of}{" "}
									{questions[language][selectedCategory].length}
								</p>
								<div className="flex justify-center space-x-4">
									<Button
										onClick={() => setGameState("category")}
										className="text-lg px-8 py-4 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white rounded-full transition-colors duration-300 shadow-md">
										{translations[language].playAgain} <Star className="ml-2" />
									</Button>
									<Button
										onClick={() => setGameState("start")}
										className="text-lg px-8 py-4 bg-gradient-to-r from-lime-400 to-lime-600 hover:from-lime-500 hover:to-lime-700 text-white rounded-full transition-colors duration-300 shadow-md">
										{translations[language].home} <Gift className="ml-2" />
									</Button>
								</div>
							</motion.div>
						)}
					</CardContent>
				</Card>
			</main>
		</div>
	);
}

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, Reorder } from "framer-motion";

// import { signOut, useSession } from "next-auth/react";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import {
// 	Rocket,
// 	Star,
// 	Zap,
// 	Menu,
// 	Sparkles,
// 	Gift,
// 	User,
// 	LogOut,
// 	ArrowUpDown,
// 	CreditCard,
// } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select";
// import {
// 	Dialog,
// 	DialogContent,
// 	DialogHeader,
// 	DialogTitle,
// 	DialogTrigger,
// } from "@/components/ui/dialog";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
// 	Accordion,
// 	AccordionContent,
// 	AccordionItem,
// 	AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { getPageDetails } from "@lib/data";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";

// export default function Component() {
// 	const [gameState, setGameState] = useState("start");
// 	const [selectedCategory, setSelectedCategory] = useState("");
// 	const [currentQuestion, setCurrentQuestion] = useState(0);
// 	const [score, setScore] = useState(0);
// 	const [timeLeft, setTimeLeft] = useState(100);
// 	const [language, setLanguage] = useState("en");
// 	const [translations, setTranslations] = useState<any>(null);
// 	const [questions, setQuestions] = useState<any>(null);
// 	const [categories, setCategories] = useState<any>(null);
// 	const [languageNames, setLanguageNames] = useState<any>(null);
// 	const [winners, setWinners] = useState<any>([]);
// 	const [prizes, setPrizes] = useState<any>([]);
// 	const [faqItems, setFaqItems] = useState<any>([]);
// 	const [userAnswers, setUserAnswers] = useState<any[]>([]);
// 	const [arrangeItems, setArrangeItems] = useState<string[]>([]);
// 	const [userCredit, setUserCredit] = useState(100);
// 	const { data: session } = useSession<any>();

// 	const prizeListRef = useRef(null);
// 	const router = useRouter();

// 	useEffect(() => {
// 		let timer: NodeJS.Timeout;
// 		if (gameState === "playing" && timeLeft > 0) {
// 			timer = setInterval(() => {
// 				setTimeLeft((prevTime) => prevTime - 1);
// 			}, 1000);
// 		} else if (timeLeft === 0) {
// 			setGameState("end");
// 		}
// 		return () => clearInterval(timer);
// 	}, [gameState, timeLeft]);

// 	const getGameData = async () => {
// 		const getPageData = await getPageDetails();
// 		setTranslations(getPageData.translations);
// 		setQuestions(getPageData.questions);
// 		setCategories(getPageData.categories);
// 		setLanguageNames(getPageData.languageNames);
// 		setWinners(getPageData.winners);
// 		setPrizes(getPageData.prizes);
// 		setFaqItems(getPageData.faqItems);
// 	};

// 	useEffect(() => {
// 		getGameData();
// 	}, []);

// 	useEffect(() => {
// 		if (prizeListRef.current) {
// 			const scrollContainer: any = prizeListRef.current;
// 			let scrollAmount = 0;
// 			const step = 1;
// 			const scrollInterval = setInterval(() => {
// 				scrollContainer.scrollLeft += step;
// 				scrollAmount += step;
// 				if (scrollAmount >= scrollContainer.scrollWidth / 2) {
// 					scrollContainer.scrollLeft = 0;
// 					scrollAmount = 0;
// 				}
// 			}, 50);

// 			return () => clearInterval(scrollInterval);
// 		}
// 	}, []);

// 	const startGame = () => {
// 		if (session?.user?.name && userCredit >= 10) {
// 			setGameState("category");
// 			setUserCredit(userCredit - 10);
// 		} else if (!session?.user?.name) {
// 			// setShowPayment(true);
// 			router.push("/login");
// 		} else {
// 			alert(translations[language].insufficientCredit);
// 		}
// 	};

// 	const selectCategory = (category: string) => {
// 		setSelectedCategory(category);
// 		setGameState("playing");
// 		setCurrentQuestion(0);
// 		setScore(0);
// 		setTimeLeft(100);
// 		setUserAnswers([]);
// 		if (questions[language][category][0].type === "arrange") {
// 			setArrangeItems(
// 				shuffleArray([...questions[language][category][0].items])
// 			);
// 		}
// 	};

// 	const handleAnswer = (selectedAnswer: number | string[]) => {
// 		const currentQuestionData =
// 			questions[language][selectedCategory][currentQuestion];
// 		let isCorrect = false;

// 		if (
// 			["multipleChoice", "image", "sound"].includes(currentQuestionData.type)
// 		) {
// 			isCorrect = selectedAnswer === currentQuestionData.answer;
// 		} else if (currentQuestionData.type === "arrange") {
// 			isCorrect =
// 				JSON.stringify(selectedAnswer) ===
// 				JSON.stringify(currentQuestionData.items);
// 		}

// 		setUserAnswers([
// 			...userAnswers,
// 			{ question: currentQuestion, answer: selectedAnswer, correct: isCorrect },
// 		]);

// 		if (isCorrect) {
// 			setScore((prevScore) => prevScore + 1);
// 		}

// 		if (currentQuestion < questions[language][selectedCategory].length - 1) {
// 			setCurrentQuestion((prevQuestion) => {
// 				const nextQuestion = prevQuestion + 1;
// 				if (
// 					questions[language][selectedCategory][nextQuestion].type === "arrange"
// 				) {
// 					setArrangeItems(
// 						shuffleArray([
// 							...questions[language][selectedCategory][nextQuestion].items,
// 						])
// 					);
// 				}
// 				return nextQuestion;
// 			});
// 		} else {
// 			setGameState("end");
// 		}
// 	};

// 	const handleLogout = () => {
// 		signOut();
// 		setGameState("start");
// 	};

// 	const requestCredit = () => {
// 		alert(translations[language].creditRequested);
// 	};

// 	const shuffleArray = (array: any[]) => {
// 		for (let i = array.length - 1; i > 0; i--) {
// 			const j = Math.floor(Math.random() * (i + 1));
// 			[array[i], array[j]] = [array[j], array[i]];
// 		}
// 		return array;
// 	};

// 	if (!translations) {
// 		return (
// 			<div className="w-full h-full flex justify-center items-center mt-[50%]">
// 				<p className="text-2xl text-blue-600">Loading...</p>
// 			</div>
// 		);
// 	}

// 	const LeaderboardSection = ({ winners, translations, language }: any) => {
// 		const [activeTab, setActiveTab] = useState("week");

// 		// Mock data for demonstration - in real app, this would come from your API
// 		const leaderboardData = {
// 			week: [
// 				{ rank: 1, name: "Alex Johnson", score: 2850, avatar: 1, streak: 7 },
// 				{ rank: 2, name: "Sarah Chen", score: 2720, avatar: 2, streak: 5 },
// 				{ rank: 3, name: "Mike Rodriguez", score: 2680, avatar: 3, streak: 4 },
// 				{ rank: 4, name: "Emma Wilson", score: 2540, avatar: 4, streak: 6 },
// 				{ rank: 5, name: "David Kim", score: 2420, avatar: 5, streak: 3 },
// 			],
// 			month: [
// 				{ rank: 1, name: "Sarah Chen", score: 12850, avatar: 2, streak: 15 },
// 				{ rank: 2, name: "Alex Johnson", score: 11720, avatar: 1, streak: 12 },
// 				{ rank: 3, name: "Emma Wilson", score: 10680, avatar: 4, streak: 18 },
// 				{ rank: 4, name: "Mike Rodriguez", score: 9540, avatar: 3, streak: 8 },
// 				{ rank: 5, name: "David Kim", score: 8420, avatar: 5, streak: 10 },
// 			],
// 		};

// 		const currentData =
// 			leaderboardData[activeTab as keyof typeof leaderboardData];

// 		return (
// 			<div className="mt-10 bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-2xl shadow-lg border border-lime-200">
// 				<div className="text-center mb-6">
// 					<h3 className="text-3xl font-bold bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent mb-2">
// 						🏆 Leaderboard
// 					</h3>
// 					<p className="text-gray-600">Compete with players worldwide!</p>
// 				</div>

// 				{/* Tab Navigation */}
// 				<div className="flex justify-center mb-6">
// 					<div className="bg-white rounded-full p-1 shadow-md">
// 						<button
// 							onClick={() => setActiveTab("week")}
// 							className={`px-6 py-2 rounded-full transition-all duration-300 ${
// 								activeTab === "week"
// 									? "bg-gradient-to-r from-lime-500 to-green-600 text-white shadow-md"
// 									: "text-gray-600 hover:text-lime-600"
// 							}`}>
// 							This Week
// 						</button>
// 						<button
// 							onClick={() => setActiveTab("month")}
// 							className={`px-6 py-2 rounded-full transition-all duration-300 ${
// 								activeTab === "month"
// 									? "bg-gradient-to-r from-lime-500 to-green-600 text-white shadow-md"
// 									: "text-gray-600 hover:text-lime-600"
// 							}`}>
// 							This Month
// 						</button>
// 					</div>
// 				</div>

// 				{/* Leaderboard */}
// 				<div className="space-y-3">
// 					{currentData.map((player, index) => (
// 						<motion.div
// 							key={player.rank}
// 							initial={{ opacity: 0, y: 20 }}
// 							animate={{ opacity: 1, y: 0 }}
// 							transition={{ delay: index * 0.1 }}
// 							className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:shadow-md ${
// 								player.rank <= 3
// 									? "bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200"
// 									: "bg-white border border-gray-200"
// 							}`}>
// 							<div className="flex items-center space-x-4">
// 								{/* Rank Badge */}
// 								<div
// 									className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
// 										player.rank === 1
// 											? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
// 											: player.rank === 2
// 											? "bg-gradient-to-r from-gray-300 to-gray-500 text-white"
// 											: player.rank === 3
// 											? "bg-gradient-to-r from-orange-400 to-orange-600 text-white"
// 											: "bg-gradient-to-r from-lime-100 to-green-100 text-lime-700"
// 									}`}>
// 									{player.rank <= 3
// 										? player.rank === 1
// 											? "👑"
// 											: player.rank === 2
// 											? "🥈"
// 											: "🥉"
// 										: player.rank}
// 								</div>

// 								{/* Avatar */}
// 								<Avatar className="h-12 w-12 border-2 border-white shadow-md">
// 									<AvatarImage
// 										src={`https://i.pravatar.cc/150?img=${player.avatar}`}
// 										alt={player.name}
// 									/>
// 									<AvatarFallback className="bg-gradient-to-r from-lime-400 to-green-500 text-white">
// 										{player.name
// 											.split(" ")
// 											.map((n) => n[0])
// 											.join("")}
// 									</AvatarFallback>
// 								</Avatar>

// 								{/* Player Info */}
// 								<div>
// 									<h4 className="font-semibold text-gray-800">{player.name}</h4>
// 									<div className="flex items-center space-x-2 text-sm text-gray-600">
// 										<span>🔥 {player.streak} day streak</span>
// 									</div>
// 								</div>
// 							</div>

// 							{/* Score */}
// 							<div className="text-right">
// 								<div className="text-2xl font-bold bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent">
// 									{player.score.toLocaleString()}
// 								</div>
// 								<div className="text-sm text-gray-500">points</div>
// 							</div>
// 						</motion.div>
// 					))}
// 				</div>

// 				{/* View All Button */}
// 				<div className="text-center mt-6">
// 					<Button
// 						variant="outline"
// 						className="bg-white hover:bg-lime-50 text-lime-600 border-lime-300 hover:border-lime-400">
// 						View Full Leaderboard
// 					</Button>
// 				</div>
// 			</div>
// 		);
// 	};

// 	const floatingStyles = `
//   @keyframes float {
//     0%, 100% { transform: translateY(0px) rotate(0deg); }
//     33% { transform: translateY(-10px) rotate(1deg); }
//     66% { transform: translateY(5px) rotate(-1deg); }
//   }
//   .animate-float { animation: float 6s ease-in-out infinite; }
//   .animate-float-delayed { animation: float 6s ease-in-out infinite 2s; }
//   .animate-float-slow { animation: float 8s ease-in-out infinite 1s; }
// `;

// 	return (
// 		<div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 flex flex-col relative">
// 			<style dangerouslySetInnerHTML={{ __html: floatingStyles }} />
// 			<header className="w-full bg-gradient-to-r from-lime-500 via-green-500 to-emerald-600 shadow-xl px-3 py-3 relative overflow-hidden">
// 				{/* Add subtle pattern */}
// 				<div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
// 				<div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
// 					<div className="-mr-6">
// 						<Image
// 							src="/assets/images/tele-logo.png"
// 							alt="logo"
// 							width={110}
// 							height={50}
// 						/>
// 					</div>
// 					<div className="flex items-center space-x-1">
// 						<Zap className="h-7 w-7 text-white" />

// 						<h1 className="text-xl font-bold text-white">
// 							{translations[language].title}
// 						</h1>
// 					</div>
// 					<nav className="hidden md:flex items-center space-x-4">
// 						<Link
// 							href="/"
// 							className="text-white hover:text-lime-200 transition-colors">
// 							{translations[language].home}
// 						</Link>
// 						<Link
// 							href="/credit"
// 							className="text-white hover:text-lime-200 transition-colors">
// 							{translations[language].credits}
// 						</Link>
// 						<Link
// 							href="/purchase"
// 							className="text-white hover:text-lime-200 transition-colors">
// 							{translations[language].buyCredits}
// 						</Link>
// 						<Dialog>
// 							<DialogTrigger asChild>
// 								<button className="text-white hover:text-lime-200 transition-colors">
// 									{translations[language].faq}
// 								</button>
// 							</DialogTrigger>
// 							<DialogContent className="bg-white">
// 								<DialogHeader>
// 									<DialogTitle className="text-blue-600">
// 										{translations[language].faq}
// 									</DialogTitle>
// 								</DialogHeader>
// 								<Accordion type="single" collapsible className="w-full">
// 									{faqItems.map((item: any, index: number) => (
// 										<AccordionItem value={`item-${index}`} key={index}>
// 											<AccordionTrigger>{item.question}</AccordionTrigger>
// 											<AccordionContent>{item.answer}</AccordionContent>
// 										</AccordionItem>
// 									))}
// 								</Accordion>
// 							</DialogContent>
// 						</Dialog>
// 						<Dialog>
// 							<DialogTrigger asChild>
// 								<button className="text-blue-600 hover:text-blue-800 transition-colors">
// 									{translations[language].winners}
// 								</button>
// 							</DialogTrigger>
// 							<DialogContent className="bg-white">
// 								<DialogHeader>
// 									<DialogTitle className="text-blue-600">
// 										{translations[language].winners}
// 									</DialogTitle>
// 								</DialogHeader>
// 								<div className="mt-4">
// 									<table className="w-full">
// 										<thead>
// 											<tr className="bg-blue-100">
// 												<th className="text-left p-2">
// 													{translations[language].name}
// 												</th>
// 												<th className="text-left p-2">
// 													{translations[language].phoneNumber}
// 												</th>
// 												<th className="text-left p-2">
// 													{translations[language].prizes}
// 												</th>
// 											</tr>
// 										</thead>
// 										<tbody>
// 											{winners.map((winner: any, index: number) => (
// 												<tr key={index} className="border-t border-blue-200">
// 													<td className="p-2">{winner.name}</td>
// 													<td className="p-2">{winner.phone}</td>
// 													<td className="p-2">{winner.prize}</td>
// 												</tr>
// 											))}
// 										</tbody>
// 									</table>
// 								</div>
// 							</DialogContent>
// 						</Dialog>
// 						<Select onValueChange={(value) => setLanguage(value)}>
// 							<SelectTrigger className="w-[120px] bg-white/80 text-lime-700 border-lime-300">
// 								<SelectValue placeholder={translations[language].language} />
// 							</SelectTrigger>
// 							<SelectContent>
// 								{Object.entries(languageNames).map(([code, name]) => (
// 									<SelectItem key={code} value={code}>
// 										{name as string}
// 									</SelectItem>
// 								))}
// 							</SelectContent>
// 						</Select>
// 					</nav>
// 					<Sheet>
// 						<SheetTrigger asChild>
// 							<Button variant="outline" size="icon" className="md:hidden">
// 								<Menu className="h-6 w-6" />
// 								<span className="sr-only">Toggle menu</span>
// 							</Button>
// 						</SheetTrigger>
// 						<SheetContent side="right" className="w-[250px] bg-white">
// 							<nav className="flex flex-col space-y-4">
// 								{session?.user?.name && (
// 									<div className="flex items-center space-x-2 mb-4">
// 										<User className="h-6 w-6 text-blue-600" />
// 										<span className="text-blue-600 font-semibold">
// 											{session.user.name}
// 											{translations[language].profile} {session.user.email}
// 										</span>
// 									</div>
// 								)}
// 								<Link
// 									href="/"
// 									className="text-blue-600 hover:text-blue-800 transition-colors">
// 									{translations[language].home}
// 								</Link>
// 								{session?.user?.name && (
// 									<>
// 										{" "}
// 										<Link
// 											href="/credit"
// 											className="text-blue-600 hover:text-blue-800 transition-colors">
// 											{translations[language].credits}
// 										</Link>
// 										<Link
// 											href="/purchase"
// 											className="text-blue-600 hover:text-blue-800 transition-colors">
// 											{translations[language].buyCredits}
// 										</Link>
// 									</>
// 								)}

// 								<Dialog>
// 									<DialogTrigger asChild>
// 										<button className="text-lg text-left text-blue-600 hover:text-blue-800 transition-colors">
// 											{translations[language].faq}
// 										</button>
// 									</DialogTrigger>
// 									<DialogContent className="bg-white">
// 										<DialogHeader>
// 											<DialogTitle className="text-blue-600">
// 												{translations[language].faq}
// 											</DialogTitle>
// 										</DialogHeader>
// 										<Accordion type="single" collapsible className="w-full">
// 											{faqItems.map((item: any, index: number) => (
// 												<AccordionItem value={`item-${index}`} key={index}>
// 													<AccordionTrigger>{item.question}</AccordionTrigger>
// 													<AccordionContent>{item.answer}</AccordionContent>
// 												</AccordionItem>
// 											))}
// 										</Accordion>
// 									</DialogContent>
// 								</Dialog>
// 								<a
// 									href="/winners"
// 									className="text-lg text-blue-600 hover:text-blue-800 transition-colors">
// 									{translations[language].winners}
// 								</a>

// 								<Select onValueChange={(value) => setLanguage(value)}>
// 									<SelectTrigger className="w-full bg-white text-blue-600 border-blue-300">
// 										<SelectValue
// 											placeholder={translations[language].language}
// 										/>
// 									</SelectTrigger>
// 									<SelectContent>
// 										{Object.entries(languageNames).map(([code, name]) => (
// 											<SelectItem key={code} value={code}>
// 												{name as string}
// 											</SelectItem>
// 										))}
// 									</SelectContent>
// 								</Select>

// 								{session?.user?.name && (
// 									<Button
// 										onClick={handleLogout}
// 										variant="outline"
// 										className="mt-4">
// 										<LogOut className="h-4 w-4 mr-2" />
// 										{translations[language].logout}
// 									</Button>
// 								)}
// 							</nav>
// 						</SheetContent>
// 					</Sheet>
// 				</div>
// 			</header>

// 			<main className="flex-grow flex flex-col items-center justify-start p-4 relative overflow-hidden">
// 				<div className="absolute inset-0 overflow-hidden pointer-events-none">
// 					{/* Animated gradient orbs */}
// 					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-lime-300 to-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
// 					<div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-green-200 to-lime-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
// 					<div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-lime-100 to-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>

// 					{/* Floating icons */}
// 					<Star className="absolute top-1/4 right-1/4 w-8 h-8 text-yellow-400 opacity-30 animate-pulse" />
// 					<Star className="absolute top-1/6 left-1/3 w-6 h-6 text-yellow-300 opacity-25 animate-pulse animation-delay-1000" />
// 					<Sparkles className="absolute top-1/5 left-1/2 w-10 h-10 text-lime-400 opacity-25 animate-spin-slow" />
// 					<Sparkles className="absolute bottom-1/3 right-1/3 w-8 h-8 text-green-400 opacity-20 animate-spin-slow animation-delay-3000" />
// 					<Zap className="absolute bottom-1/4 right-1/4 w-7 h-7 text-lime-500 opacity-25 animate-bounce" />
// 					<Gift className="absolute top-1/3 left-1/5 w-6 h-6 text-green-400 opacity-20 animate-bounce animation-delay-2000" />
// 				</div>
// 				{session?.user && (
// 					<div className="w-full mb-6 p-4 bg-white/70 rounded-lg shadow-md flex justify-between items-center z-50 border-l-4 border-lime-500">
// 						<div>
// 							<p className="text-lime-800 font-semibold">
// 								{translations[language].credit}: {userCredit}
// 							</p>
// 							<p className="text-lime-600">{session?.user.email as any}</p>
// 						</div>
// 						<div className="space-x-2">
// 							<Button
// 								asChild
// 								className="bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white">
// 								<Link href="/purchase">
// 									<CreditCard className="mr-2 h-4 w-4" />{" "}
// 									{translations[language].requestCredit}
// 								</Link>
// 							</Button>
// 						</div>
// 					</div>
// 				)}

// 				<Card className="max-w-4xl w-full bg-white/85 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl py-8 px-0 z-10 border-t-4 border-lime-500 relative overflow-hidden">
// 					{/* Add subtle pattern overlay */}
// 					<div className="absolute inset-0 bg-gradient-to-br from-lime-50/20 to-green-50/20 rounded-3xl"></div>
// 					<CardContent className="relative z-10">
// 						{gameState === "start" && (
// 							<motion.div
// 								initial={{ opacity: 0, y: 20 }}
// 								animate={{ opacity: 1, y: 0 }}
// 								exit={{ opacity: 0, y: -20 }}
// 								className="text-center">
// 								<h2 className="text-4xl font-bold mb-6 text-lime-600">
// 									{translations[language].title}
// 								</h2>
// 								<p className="text-xl mb-6 text-gray-700">
// 									{translations[language].ready}
// 								</p>
// 								<Button
// 									onClick={startGame}
// 									className="text-lg px-8 py-4 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white rounded-full transition-colors duration-300 h-12 shadow-lg">
// 									{translations[language].start} <Rocket className="ml-2" />
// 								</Button>
// 								<LeaderboardSection
// 									winners={winners}
// 									translations={translations}
// 									language={language}
// 								/>
// 							</motion.div>
// 						)}

// 						{gameState === "category" && (
// 							<motion.div
// 								initial={{ opacity: 0, y: 20 }}
// 								animate={{ opacity: 1, y: 0 }}
// 								exit={{ opacity: 0, y: -20 }}
// 								className="text-center">
// 								<h2 className="text-3xl font-bold mb-6 text-lime-600">
// 									{translations[language].selectCategory}
// 								</h2>
// 								<div className="grid grid-cols-2 gap-4">
// 									{categories[language].map((category: any, index: number) => (
// 										<Button
// 											key={index}
// 											onClick={() => selectCategory(category.name)}
// 											className="text-lg py-4 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center shadow-md">
// 											<category.icon className="mr-2" />
// 											{category.name}
// 										</Button>
// 									))}
// 								</div>
// 							</motion.div>
// 						)}

// 						{gameState === "playing" && (
// 							<motion.div
// 								key={currentQuestion}
// 								initial={{ x: 300, opacity: 0 }}
// 								animate={{ x: 0, opacity: 1 }}
// 								exit={{ x: -300, opacity: 0 }}
// 								transition={{ type: "spring", stiffness: 260, damping: 20 }}>
// 								<div className="mb-6">
// 									<Progress
// 										value={(timeLeft / 100) * 100}
// 										className="h-3 bg-lime-100"
// 										// indicatorClassName="bg-gradient-to-r from-lime-500 to-green-600"
// 									/>
// 									<div className="flex justify-between mt-2">
// 										<p className="text-blue-600">
// 											{translations[language].timeLeft}: {timeLeft}s
// 										</p>
// 										<Badge
// 											variant="secondary"
// 											className="bg-blue-100 text-blue-800">
// 											{translations[language].question} {currentQuestion + 1}{" "}
// 											{translations[language].of}{" "}
// 											{questions[language][selectedCategory].length}
// 										</Badge>
// 									</div>
// 								</div>
// 								<h2 className="text-2xl font-semibold mb-4 text-lime-800">
// 									{
// 										questions[language][selectedCategory][currentQuestion]
// 											.question
// 									}
// 								</h2>
// 								{["multipleChoice", "image", "sound"].includes(
// 									questions[language][selectedCategory][currentQuestion].type
// 								) && (
// 									<>
// 										{questions[language][selectedCategory][currentQuestion]
// 											.type === "image" && (
// 											<div className="mb-4">
// 												<img
// 													src={
// 														questions[language][selectedCategory][
// 															currentQuestion
// 														].imageUrl || "/placeholder.svg"
// 													}
// 													alt="Question Image"
// 													className="mx-auto max-w-full h-auto rounded-lg shadow-md"
// 												/>
// 											</div>
// 										)}
// 										{questions[language][selectedCategory][currentQuestion]
// 											.type === "sound" && (
// 											<div className="mb-4">
// 												<audio controls className="w-full">
// 													<source
// 														src={
// 															questions[language][selectedCategory][
// 																currentQuestion
// 															].audioUrl
// 														}
// 														type="audio/mpeg"
// 													/>
// 													Your browser does not support the audio element.
// 												</audio>
// 											</div>
// 										)}
// 										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// 											{questions[language][selectedCategory][
// 												currentQuestion
// 											].options.map((option: string, index: number) => (
// 												<Button
// 													key={index}
// 													onClick={() => handleAnswer(index)}
// 													className="text-lg py-4 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white rounded-lg transition-colors duration-300 shadow-md">
// 													{option}
// 												</Button>
// 											))}
// 										</div>
// 									</>
// 								)}
// 								{questions[language][selectedCategory][currentQuestion].type ===
// 									"arrange" && (
// 									<>
// 										<Reorder.Group
// 											axis="y"
// 											values={arrangeItems}
// 											onReorder={setArrangeItems}
// 											className="space-y-2">
// 											{arrangeItems.map((item) => (
// 												<Reorder.Item key={item} value={item}>
// 													<div className="bg-lime-100 p-3 rounded-lg cursor-move flex items-center justify-between border border-lime-300">
// 														<span>{item}</span>
// 														<ArrowUpDown className="text-lime-500" />
// 													</div>
// 												</Reorder.Item>
// 											))}
// 										</Reorder.Group>
// 										<Button
// 											onClick={() => handleAnswer(arrangeItems)}
// 											className="mt-4 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white shadow-md">
// 											{translations[language].submit}
// 										</Button>
// 									</>
// 								)}
// 							</motion.div>
// 						)}

// 						{gameState === "end" && (
// 							<motion.div
// 								initial={{ opacity: 0, scale: 0.8 }}
// 								animate={{ opacity: 1, scale: 1 }}
// 								exit={{ opacity: 0, scale: 0.8 }}
// 								className="text-center">
// 								<h2 className="text-3xl font-bold mb-4 text-lime-600">
// 									{translations[language].complete}
// 								</h2>
// 								<p className="text-2xl mb-6 text-blue-800">
// 									{translations[language].score}: {score}{" "}
// 									{translations[language].of}{" "}
// 									{questions[language][selectedCategory].length}
// 								</p>
// 								{/* <div className="mb-6">
// 									{userAnswers.map((answer, index) => (
// 										<div
// 											key={index}
// 											className={`mb-2 p-2 rounded ${
// 												answer.correct ? "bg-green-100" : "bg-red-100"
// 											}`}>
// 											<p className="font-semibold">
// 												{
// 													questions[language][selectedCategory][answer.question]
// 														.question
// 												}
// 											</p>
// 											<p>{answer.correct ? "✅ Correct" : "❌ Incorrect"}</p>
// 										</div>
// 									))}
// 								</div> */}
// 								<div className="flex justify-center space-x-4">
// 									<Button
// 										onClick={() => setGameState("category")}
// 										className="text-lg px-8 py-4 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white rounded-full transition-colors duration-300 shadow-md">
// 										{translations[language].playAgain} <Star className="ml-2" />
// 									</Button>
// 									<Button
// 										onClick={() => setGameState("start")}
// 										className="text-lg px-8 py-4 bg-gradient-to-r from-lime-400 to-lime-600 hover:from-lime-500 hover:to-lime-700 text-white rounded-full transition-colors duration-300 shadow-md">
// 										{translations[language].home} <Gift className="ml-2" />
// 									</Button>
// 								</div>
// 							</motion.div>
// 						)}
// 					</CardContent>
// 				</Card>
// 			</main>
// 			{/*  Winners Section */}
// 			{/* <WinnersSection
// 				winners={winners}
// 				translations={translations}
// 				language={language}
// 			/> */}
// 		</div>
// 	);
// }
