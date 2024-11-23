// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import {
// 	Rocket,
// 	Star,
// 	Zap,
// 	Menu,
// 	Globe,
// 	Trophy,
// 	HelpCircle,
// 	Sparkles,
// 	Gift,
// 	User,
// 	LogOut,
// 	Phone,
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
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
// 	Accordion,
// 	AccordionContent,
// 	AccordionItem,
// 	AccordionTrigger,
// } from "@/components/ui/accordion";
// import { getPageDetails } from "@lib/data";

// export default function Component() {
// 	const [gameState, setGameState] = useState("start");
// 	const [selectedCategory, setSelectedCategory] = useState("Space");
// 	const [currentQuestion, setCurrentQuestion] = useState(0);
// 	const [score, setScore] = useState(0);
// 	const [timeLeft, setTimeLeft] = useState(100);
// 	const [language, setLanguage] = useState("en");
// 	const [streak, setStreak] = useState(0);
// 	const [showFeedback, setShowFeedback] = useState(false);
// 	const [isCorrect, setIsCorrect] = useState(false);
// 	const [highScore, setHighScore] = useState(0);
// 	const [isSubscribed, setIsSubscribed] = useState(false);
// 	const [showPayment, setShowPayment] = useState(false);
// 	const [translations, setTranslations] = useState<any>(null as any);
// 	const [questions, setQuestions] = useState<any>(null);
// 	const [categories, setCategories] = useState<any>(null);
// 	const [languageNames, setLanguageNames] = useState<any>(null);
// 	const [winners, setWinners] = useState<any>([]);
// 	const [prizes, setPrizes] = useState<any>([]);
// 	const [faqItems, setFaqItems] = useState<any>([]);

// 	const prizeListRef = useRef(null);

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
// 		const storedHighScore = localStorage.getItem("highScore");
// 		if (storedHighScore) {
// 			setHighScore(parseInt(storedHighScore));
// 		}
// 		const getPageData = await getPageDetails();
// 		console.log({ getPageData });
// 		setTranslations(getPageData.translations);
// 		setCategories(getPageData.categories);
// 		setQuestions(getPageData.questions);
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
// 		if (isSubscribed) {
// 			setGameState("playing");
// 			setCurrentQuestion(0);
// 			setScore(0);
// 			setTimeLeft(100);
// 			setStreak(0);
// 		} else {
// 			setShowPayment(true);
// 		}
// 	};

// 	const selectCategory = (category: string) => {
// 		setSelectedCategory(category);
// 		setGameState("playing");
// 		setCurrentQuestion(0);
// 		setScore(0);
// 		setTimeLeft(100);
// 		setStreak(0);
// 	};

// 	const handleAnswer = (selectedAnswer: number) => {
// 		const correct =
// 			selectedAnswer ===
// 			questions[language][selectedCategory][currentQuestion].answer;
// 		setIsCorrect(correct);
// 		setShowFeedback(true);

// 		if (correct) {
// 			setScore((prevScore) => prevScore + 1);
// 			setStreak((prevStreak) => prevStreak + 1);
// 		} else {
// 			setStreak(0);
// 		}

// 		setTimeout(() => {
// 			setShowFeedback(false);
// 			if (currentQuestion < questions[language][selectedCategory].length - 1) {
// 				setCurrentQuestion((prevQuestion) => prevQuestion + 1);
// 			} else {
// 				setGameState("end");
// 			}
// 		}, 1000);
// 	};

// 	useEffect(() => {
// 		if (gameState === "end") {
// 			if (score > highScore) {
// 				setHighScore(score);
// 				localStorage.setItem("highScore", score.toString());
// 			}
// 		}
// 	}, [gameState, score, highScore]);

// 	const handleSubscribe = () => {
// 		// Simulating a successful subscription
// 		setIsSubscribed(true);
// 		setShowPayment(false);
// 	};

// 	const handleLogout = () => {
// 		setIsSubscribed(false);
// 		setGameState("start");
// 	};

// 	if (!translations || !questions) {
// 		return (
// 			<div className="w-full h-full flex justify-start items-center">
// 				Loading...
// 			</div>
// 		);
// 	}

// 	return (
// 		<div className="min-h-screen bg-gradient-to-b from-sky-200 via-blue-100 to-indigo-100 flex flex-col">
// 			<header className="w-full bg-transparent shadow-md p-3">
// 				<div className="max-w-6xl mx-auto flex justify-between items-center">
// 					<div className="flex items-center space-x-2">
// 						<Zap className="h-8 w-8 text-lime-500" />
// 						<h1 className="text-2xl font-bold text-blue-600">
// 							{translations[language].title}
// 						</h1>
// 					</div>
// 					<nav className="hidden md:flex items-center space-x-4">
// 						<a
// 							href="#"
// 							className="text-blue-600 hover:text-blue-800 transition-colors">
// 							{translations[language].home}
// 						</a>
// 						<Dialog>
// 							<DialogTrigger asChild>
// 								<button className="text-blue-600 hover:text-blue-800 transition-colors">
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
// 									{faqItems.map((item: any, index: any) => (
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
// 											{winners.map((winner: any, index: any) => (
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
// 							<SelectTrigger className="w-[120px] bg-white text-blue-600 border-blue-300">
// 								<SelectValue placeholder={translations[language].language} />
// 							</SelectTrigger>
// 							<SelectContent>
// 								{Object.entries(languageNames as any).map(([code, name]) => (
// 									<SelectItem key={code} value={code}>
// 										{name as any}
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
// 								{isSubscribed && (
// 									<div className="flex items-center space-x-2 mb-4">
// 										<User className="h-6 w-6 text-blue-600" />
// 										<span className="text-blue-600 font-semibold">
// 											{translations[language].profile}
// 										</span>
// 									</div>
// 								)}
// 								<a
// 									href="#"
// 									className="text-lg text-blue-600 hover:text-blue-800 transition-colors">
// 									{translations[language].home}
// 								</a>
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
// 											{faqItems.map((item: any, index: any) => (
// 												<AccordionItem value={`item-${index}`} key={index}>
// 													<AccordionTrigger>{item.question}</AccordionTrigger>
// 													<AccordionContent>{item.answer}</AccordionContent>
// 												</AccordionItem>
// 											))}
// 										</Accordion>
// 									</DialogContent>
// 								</Dialog>
// 								<Dialog>
// 									<DialogTrigger asChild>
// 										<button className="text-lg text-left text-blue-600 hover:text-blue-800 transition-colors">
// 											{translations[language].winners}
// 										</button>
// 									</DialogTrigger>
// 									<DialogContent className="bg-white">
// 										<DialogHeader>
// 											<DialogTitle className="text-blue-600">
// 												{translations[language].winners}
// 											</DialogTitle>
// 										</DialogHeader>
// 										<div className="mt-4">
// 											<table className="w-full">
// 												<thead>
// 													<tr className="bg-blue-100">
// 														<th className="text-left p-2">
// 															{translations[language].name}
// 														</th>
// 														<th className="text-left p-2">
// 															{translations[language].phoneNumber}
// 														</th>
// 														<th className="text-left p-2">
// 															{translations[language].prizes}
// 														</th>
// 													</tr>
// 												</thead>
// 												<tbody>
// 													{winners.map((winner: any, index: any) => (
// 														<tr
// 															key={index}
// 															className="border-t border-blue-200">
// 															<td className="p-2">{winner.name}</td>
// 															<td className="p-2">{winner.phone}</td>
// 															<td className="p-2">{winner.prize}</td>
// 														</tr>
// 													))}
// 												</tbody>
// 											</table>
// 										</div>
// 									</DialogContent>
// 								</Dialog>
// 								<Select onValueChange={(value) => setLanguage(value)}>
// 									<SelectTrigger className="w-full bg-white text-blue-600 border-blue-300">
// 										<SelectValue
// 											placeholder={translations[language].language}
// 										/>
// 									</SelectTrigger>
// 									<SelectContent>
// 										{Object.entries(languageNames).map(([code, name]) => (
// 											<SelectItem key={code} value={code}>
// 												{name as any}
// 											</SelectItem>
// 										))}
// 									</SelectContent>
// 								</Select>
// 								{isSubscribed && (
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

// 			<main className="flex-grow flex items-center justify-center p-4 relative overflow-hidden">
// 				<div className="absolute inset-0 overflow-hidden pointer-events-none">
// 					<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
// 					<div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
// 					<div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
// 					<Star className="absolute top-1/4 right-1/4 w-24 h-24 text-yellow-400 opacity-20 animate-pulse" />
// 					<Sparkles className="absolute top-1/5 left-1/2 w-20 h-20 text-blue-400 opacity-20 animate-spin-slow" />
// 					<Zap className="absolute bottom-1/4 right-1/4 w-16 h-16 text-pink-400 opacity-20 animate-bounce" />
// 				</div>

// 				<Card className="max-w-4xl w-full bg-white/60 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl py-8 px-5 z-10">
// 					<CardContent>
// 						{gameState === "start" && (
// 							<motion.div
// 								initial={{ opacity: 0, y: 20 }}
// 								animate={{ opacity: 1, y: 0 }}
// 								exit={{ opacity: 0, y: -20 }}
// 								className="text-center">
// 								<h2 className="text-4xl font-bold mb-6 text-blue-600">
// 									{translations[language].title}
// 								</h2>
// 								<p className="text-xl mb-6 text-gray-700">
// 									{translations[language].ready}
// 								</p>
// 								<Button
// 									onClick={startGame}
// 									className="text-lg px-8 py-4 bg-lime-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 h-12">
// 									{translations[language].start} <Rocket className="ml-2" />
// 								</Button>
// 								<div className="mt-8">
// 									<h3 className="text-2xl font-semibold mb-4 text-blue-600">
// 										{translations[language].prizes}
// 									</h3>
// 									<div className="overflow-hidden" ref={prizeListRef}>
// 										<div className="flex space-x-4 pb-4 animate-scroll">
// 											{[...prizes, ...prizes].map((prize, index) => (
// 												<div
// 													key={index}
// 													className="bg-blue-100 p-4 rounded-lg flex-shrink-0 w-64">
// 													<prize.icon className="h-8 w-8 text-lime-600 mb-2" />
// 													<h4 className="text-lg font-semibold text-blue-800">
// 														{
// 															translations[language][
// 																prize.name.toLowerCase().replace(" ", "")
// 															]
// 														}
// 													</h4>
// 													<p className="text-blue-600">{prize.value}</p>
// 												</div>
// 											))}
// 										</div>
// 									</div>
// 								</div>
// 								<div className="mt-6">
// 									<h3 className="text-2xl font-semibold mb-2 text-blue-600">
// 										High Score: {highScore}
// 									</h3>
// 								</div>
// 							</motion.div>
// 						)}

// 						{gameState === "category" && (
// 							<motion.div
// 								initial={{ opacity: 0, y: 20 }}
// 								animate={{ opacity: 1, y: 0 }}
// 								exit={{ opacity: 0, y: -20 }}
// 								className="text-center">
// 								<h2 className="text-3xl font-bold mb-6 text-blue-600">
// 									{translations[language].selectCategory}
// 								</h2>
// 								<div className="grid grid-cols-2 gap-4">
// 									{categories[language].map((category: any, index: number) => (
// 										<Button
// 											key={index}
// 											onClick={() => selectCategory(category.name)}
// 											className="text-lg py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 flex items-center justify-center">
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
// 										className="h-3 bg-blue-200"
// 									/>
// 									<div className="flex justify-between mt-2">
// 										<p className="text-blue-600">
// 											{translations[language].timeLeft}: {timeLeft}s
// 										</p>
// 										<Badge
// 											variant="secondary"
// 											className="bg-blue-100 text-blue-800">
// 											Streak: {streak} 🔥
// 										</Badge>
// 									</div>
// 								</div>
// 								<h2 className="text-2xl font-semibold mb-4 text-blue-800">
// 									{
// 										questions[language][selectedCategory][currentQuestion]
// 											.question
// 									}
// 								</h2>
// 								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// 									{questions[language][selectedCategory][
// 										currentQuestion
// 									].options.map((option: any, index: any) => (
// 										<Button
// 											key={index}
// 											onClick={() => handleAnswer(index)}
// 											className={`text-lg py-4 ${
// 												showFeedback
// 													? index ===
// 													  questions[language][selectedCategory][
// 															currentQuestion
// 													  ].answer
// 														? "bg-green-500 hover:bg-green-600"
// 														: "bg-red-500 hover:bg-red-600"
// 													: "bg-blue-500 hover:bg-blue-600"
// 											} text-white rounded-lg transition-colors duration-300`}
// 											disabled={showFeedback}>
// 											{option}
// 										</Button>
// 									))}
// 								</div>
// 								<motion.div
// 									initial={{ opacity: 0, y: 20 }}
// 									animate={{
// 										opacity: showFeedback ? 1 : 0,
// 										y: showFeedback ? 0 : 20,
// 									}}
// 									className="mt-4 text-center">
// 									{showFeedback && (
// 										<p
// 											className={`text-xl font-bold ${
// 												isCorrect ? "text-green-600" : "text-red-600"
// 											}`}>
// 											{isCorrect ? "Correct! 🎉" : "Incorrect. Try again! 💪"}
// 										</p>
// 									)}
// 								</motion.div>
// 								<p className="mt-4 text-xl text-blue-600">
// 									{translations[language].question} {currentQuestion + 1}{" "}
// 									{translations[language].of}{" "}
// 									{questions[language][selectedCategory].length}
// 								</p>
// 							</motion.div>
// 						)}

// 						{/* {gameState === "playing" && (
// 							<motion.div
// 								key={currentQuestion}
// 								initial={{ x: 300, opacity: 0 }}
// 								animate={{ x: 0, opacity: 1 }}
// 								exit={{ x: -300, opacity: 0 }}
// 								transition={{ type: "spring", stiffness: 260, damping: 20 }}>
// 								<div className="mb-6">
// 									<Progress
// 										value={(timeLeft / 100) * 100}
// 										className="h-3 bg-blue-200"
// 									/>
// 									<div className="flex justify-between mt-2">
// 										<p className="text-blue-600">
// 											{translations[language].timeLeft}: {timeLeft}s
// 										</p>
// 										<Badge
// 											variant="secondary"
// 											className="bg-blue-100 text-blue-800">
// 											Streak: {streak} 🔥
// 										</Badge>
// 									</div>
// 								</div>
// 								<h2 className="text-2xl font-semibold mb-4 text-blue-800">
// 									{questions[language][currentQuestion].question}
// 								</h2>
// 								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// 									{questions[language][currentQuestion].options.map(
// 										(option: any, index: any) => (
// 											<Button
// 												key={index}
// 												onClick={() => handleAnswer(index)}
// 												className={`text-lg py-4 ${
// 													showFeedback
// 														? index ===
// 														  questions[language][currentQuestion].answer
// 															? "bg-green-500 hover:bg-green-600"
// 															: "bg-red-500 hover:bg-red-600"
// 														: "bg-blue-500 hover:bg-blue-600"
// 												} text-white rounded-lg transition-colors duration-300`}
// 												disabled={showFeedback}>
// 												{option}
// 											</Button>
// 										)
// 									)}
// 								</div>
// 								<motion.div
// 									initial={{ opacity: 0, y: 20 }}
// 									animate={{
// 										opacity: showFeedback ? 1 : 0,
// 										y: showFeedback ? 0 : 20,
// 									}}
// 									className="mt-4 text-center">
// 									{showFeedback && (
// 										<p
// 											className={`text-xl font-bold ${
// 												isCorrect ? "text-green-600" : "text-red-600"
// 											}`}>
// 											{isCorrect ? "Correct! 🎉" : "Incorrect. Try again! 💪"}
// 										</p>
// 									)}
// 								</motion.div>
// 								<p className="mt-4 text-xl text-blue-600">
// 									{translations[language].question} {currentQuestion + 1}{" "}
// 									{translations[language].of} {questions[language].length}
// 								</p>
// 							</motion.div>
// 						)} */}

// 						{gameState === "end" && (
// 							<motion.div
// 								initial={{ opacity: 0, scale: 0.8 }}
// 								animate={{ opacity: 1, scale: 1 }}
// 								exit={{ opacity: 0, scale: 0.8 }}
// 								className="text-center">
// 								<h2 className="text-3xl font-bold mb-4 text-blue-600">
// 									{translations[language].complete}
// 								</h2>
// 								<p className="text-2xl mb-6 text-blue-800">
// 									{translations[language].score}: {score}{" "}
// 									{translations[language].of} {questions[language].length}
// 								</p>
// 								{score > highScore && (
// 									<motion.p
// 										initial={{ opacity: 0, y: 20 }}
// 										animate={{ opacity: 1, y: 0 }}
// 										className="text-xl mb-6 text-green-600 font-bold">
// 										New High Score! 🏆
// 									</motion.p>
// 								)}
// 								<div className="flex justify-center space-x-4">
// 									<Button
// 										onClick={startGame}
// 										className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300">
// 										{translations[language].playAgain} <Star className="ml-2" />
// 									</Button>
// 									<Button
// 										onClick={() => setGameState("start")}
// 										className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors duration-300">
// 										{translations[language].home} <Gift className="ml-2" />
// 									</Button>
// 								</div>
// 							</motion.div>
// 						)}
// 					</CardContent>
// 				</Card>

// 				<Dialog open={showPayment} onOpenChange={setShowPayment}>
// 					<DialogContent className="bg-white">
// 						<DialogHeader>
// 							<DialogTitle className="text-blue-600">
// 								{translations[language].payment}
// 							</DialogTitle>
// 						</DialogHeader>
// 						<div className="mt-4 space-y-4">
// 							<div>
// 								<Label htmlFor="phone-number">
// 									{translations[language].phoneNumber}
// 								</Label>
// 								<Input id="phone-number" placeholder="09xxxxxxxx" />
// 							</div>
// 							<Button
// 								onClick={handleSubscribe}
// 								className="w-full bg-blue-600 hover:bg-blue-700 text-white">
// 								{translations[language].subscribeNow} <Phone className="ml-2" />
// 							</Button>
// 						</div>
// 					</DialogContent>
// 				</Dialog>
// 			</main>
// 		</div>
// 	);
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { getPageDetails } from "@lib/data";

export default function Component() {
	const [gameState, setGameState] = useState("start");
	const [selectedCategory, setSelectedCategory] = useState("Space");
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [timeLeft, setTimeLeft] = useState(100);
	const [language, setLanguage] = useState("en");
	const [streak, setStreak] = useState(0);
	const [showFeedback, setShowFeedback] = useState(false);
	const [isCorrect, setIsCorrect] = useState(false);
	const [highScore, setHighScore] = useState(0);
	const [isSubscribed, setIsSubscribed] = useState(false);
	const [showPayment, setShowPayment] = useState(false);
	const [translations, setTranslations] = useState<any>(null as any);
	const [questions, setQuestions] = useState<any>(null);
	const [categories, setCategories] = useState<any>(null);
	const [languageNames, setLanguageNames] = useState<any>(null);
	const [winners, setWinners] = useState<any>([]);
	const [prizes, setPrizes] = useState<any>([]);
	const [faqItems, setFaqItems] = useState<any>([]);

	const prizeListRef = useRef(null);

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
		const storedHighScore = localStorage.getItem("highScore");
		if (storedHighScore) {
			setHighScore(parseInt(storedHighScore));
		}
		const getPageData = await getPageDetails();
		console.log({ getPageData });
		setTranslations(getPageData.translations);
		setCategories(getPageData.categories);
		setQuestions(getPageData.questions);
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
		if (isSubscribed) {
			setGameState("category");
		} else {
			setShowPayment(true);
		}
	};

	const selectCategory = (category: string) => {
		setSelectedCategory(category);
		setGameState("playing");
		setCurrentQuestion(0);
		setScore(0);
		setTimeLeft(100);
		setStreak(0);
	};

	const handleAnswer = (selectedAnswer: number) => {
		const correct =
			selectedAnswer ===
			questions[language][selectedCategory][currentQuestion].answer;
		setIsCorrect(correct);
		setShowFeedback(true);

		if (correct) {
			setScore((prevScore) => prevScore + 1);
			setStreak((prevStreak) => prevStreak + 1);
		} else {
			setStreak(0);
		}

		setTimeout(() => {
			setShowFeedback(false);
			if (currentQuestion < questions[language][selectedCategory].length - 1) {
				setCurrentQuestion((prevQuestion) => prevQuestion + 1);
			} else {
				setGameState("end");
			}
		}, 1000);
	};

	useEffect(() => {
		if (gameState === "end") {
			if (score > highScore) {
				setHighScore(score);
				localStorage.setItem("highScore", score.toString());
			}
		}
	}, [gameState, score, highScore]);

	const handleSubscribe = () => {
		// Simulating a successful subscription
		setIsSubscribed(true);
		setShowPayment(false);
	};

	const handleLogout = () => {
		setIsSubscribed(false);
		setGameState("start");
	};

	if (!translations) {
		return (
			<div className="w-full h-full flex justify-center items-center">
				<p className="text-2xl text-blue-600">Loading...</p>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-sky-200 via-blue-100 to-indigo-100 flex flex-col">
			<header className="w-full bg-transparent shadow-md p-3">
				<div className="max-w-6xl mx-auto flex justify-between items-center">
					<div className="flex items-center space-x-2">
						<Zap className="h-8 w-8 text-lime-500" />
						<h1 className="text-2xl font-bold text-blue-600">
							{translations[language].title}
						</h1>
					</div>
					<nav className="hidden md:flex items-center space-x-4">
						<a
							href="#"
							className="text-blue-600 hover:text-blue-800 transition-colors">
							{translations[language].home}
						</a>
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
								{isSubscribed && (
									<div className="flex items-center space-x-2 mb-4">
										<User className="h-6 w-6 text-blue-600" />
										<span className="text-blue-600 font-semibold">
											{translations[language].profile}
										</span>
									</div>
								)}
								<a
									href="#"
									className="text-lg text-blue-600 hover:text-blue-800 transition-colors">
									{translations[language].home}
								</a>
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
								<Dialog>
									<DialogTrigger asChild>
										<button className="text-lg text-left text-blue-600 hover:text-blue-800 transition-colors">
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
														<tr
															key={index}
															className="border-t border-blue-200">
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
								{isSubscribed && (
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

			<main className="flex-grow flex items-center justify-center p-4 relative overflow-hidden">
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
					<div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
					<div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
					<Star className="absolute top-1/4 right-1/4 w-24 h-24 text-yellow-400 opacity-20 animate-pulse" />
					<Sparkles className="absolute top-1/5 left-1/2 w-20 h-20 text-blue-400 opacity-20 animate-spin-slow" />
					<Zap className="absolute bottom-1/4 right-1/4 w-16 h-16 text-pink-400 opacity-20 animate-bounce" />
				</div>

				<Card className="max-w-4xl w-full bg-white/60 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl py-8 px-5 z-10">
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
								<div className="mt-8">
									<h3 className="text-2xl font-semibold mb-4 text-blue-600">
										{translations[language].prizes}
									</h3>
									<div className="overflow-hidden" ref={prizeListRef}>
										<div className="flex space-x-4 pb-4 animate-scroll">
											{[...prizes, ...prizes].map((prize, index) => (
												<div
													key={index}
													className="bg-blue-100 p-4 rounded-lg flex-shrink-0 w-64">
													<prize.icon className="h-8 w-8 text-lime-600 mb-2" />
													<h4 className="text-lg font-semibold text-blue-800">
														{
															translations[language][
																prize.name.toLowerCase().replace(" ", "")
															]
														}
													</h4>
													<p className="text-blue-600">{prize.value}</p>
												</div>
											))}
										</div>
									</div>
								</div>
								<div className="mt-6">
									<h3 className="text-2xl font-semibold mb-2 text-blue-600">
										High Score: {highScore}
									</h3>
								</div>
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
											Streak: {streak} 🔥
										</Badge>
									</div>
								</div>
								<h2 className="text-2xl font-semibold mb-4 text-blue-800">
									{
										questions[language][selectedCategory][currentQuestion]
											.question
									}
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{questions[language][selectedCategory][
										currentQuestion
									].options.map((option: string, index: number) => (
										<Button
											key={index}
											onClick={() => handleAnswer(index)}
											className={`text-lg py-4 ${
												showFeedback
													? index ===
													  questions[language][selectedCategory][
															currentQuestion
													  ].answer
														? "bg-green-500 hover:bg-green-600"
														: "bg-red-500 hover:bg-red-600"
													: "bg-blue-500 hover:bg-blue-600"
											} text-white rounded-lg transition-colors duration-300`}
											disabled={showFeedback}>
											{option}
										</Button>
									))}
								</div>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{
										opacity: showFeedback ? 1 : 0,
										y: showFeedback ? 0 : 20,
									}}
									className="mt-4 text-center">
									{showFeedback && (
										<p
											className={`text-xl font-bold ${
												isCorrect ? "text-green-600" : "text-red-600"
											}`}>
											{isCorrect ? "Correct! 🎉" : "Incorrect. Try again! 💪"}
										</p>
									)}
								</motion.div>
								<p className="mt-4 text-xl text-blue-600">
									{translations[language].question} {currentQuestion + 1}{" "}
									{translations[language].of}{" "}
									{questions[language][selectedCategory].length}
								</p>
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
								{score > highScore && (
									<motion.p
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										className="text-xl mb-6 text-green-600 font-bold">
										New High Score! 🏆
									</motion.p>
								)}
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

				<Dialog open={showPayment} onOpenChange={setShowPayment}>
					<DialogContent className="bg-white">
						<DialogHeader>
							<DialogTitle className="text-blue-600">
								{translations[language].payment}
							</DialogTitle>
						</DialogHeader>
						<div className="mt-4 space-y-4">
							<div>
								<Label htmlFor="phone-number">
									{translations[language].phoneNumber}
								</Label>
								<Input id="phone-number" placeholder="09xxxxxxxx" />
							</div>
							<Button
								onClick={handleSubscribe}
								className="w-full bg-blue-600 hover:bg-blue-700 text-white">
								{translations[language].subscribeNow} <Phone className="ml-2" />
							</Button>
						</div>
					</DialogContent>
				</Dialog>
			</main>
		</div>
	);
}
