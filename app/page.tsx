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

const translations = {
	en: {
		title: "100 Seconds",
		start: "Start Quiz",
		ready:
			"Answer 10 questions in 100 seconds. Are you ready to explore the cosmos?",
		timeLeft: "Time left",
		question: "Question",
		of: "of",
		complete: "Quiz Complete!",
		score: "Your Score",
		playAgain: "Play Again",
		home: "Home",
		faq: "FAQ",
		winners: "Winners",
		language: "Language",
	},
	am: {
		title: "የ100 ሰኮንድ ጨዋታ",
		start: "ጨዋታ ጀምር",
		ready: "በ100 ሰከንዶች ውስጥ 10 ጥያቄዎችን መልስ። ኮዞስን ለመ ዝግጁ ነህ?",
		timeLeft: "የቀረ ጊዜ",
		question: "ጥያቄ",
		of: "ከ",
		complete: "ጨዋታ ተጠናቅቋል!",
		score: "የአንተ ውጤት",
		playAgain: "እንደገና ጫወት",
		home: "መነሻ ገጽ",
		faq: "ተደጋጋሚ ጥያቄዎች",
		winners: "አሸናፊዎች",
		language: "ቋንቋ",
	},
	om: {
		title: "Taphi Qorannoo Qilleensaa",
		start: "Taphicha Jalqabi",
		ready:
			"Gaaffiilee 10 sekoondii 100 keessatti deebisi. Cosmos sakatta'uuf qophii dha?",
		timeLeft: "Yeroo hafe",
		question: "Gaaffii",
		of: "kan",
		complete: "Qormaanni Xumurameera!",
		score: "Qabxii Kee",
		playAgain: "Ammas Taphadhu",
		home: "Gara Jalqabaatti",
		faq: "Gaaffilee Yeroo Hedduu Gaafataman",
		winners: "Injifattoota",
		language: "Afaan",
	},
	ti: {
		title: "ናይ ጠፈር ፈተና ጸወታ",
		start: "ጸወታ ጀምር",
		ready: "ኣብ 100 ካልኢታት 10 ሕቶታት መልሲ። ኮዝሞስ ንምርመር ድሉው ዲኻ?",
		timeLeft: "ዝተረፈ ግዜ",
		question: "ሕቶ",
		of: "ካብ",
		complete: "ጸወታ ተዛዚሙ!",
		score: "ናትካ ውጽኢት",
		playAgain: "ከም ብሓድሽ ጻወት",
		home: "መበገሲ ገጽ",
		faq: "ተደጋጋሚ ሕቶታት",
		winners: "ተዓወትቲ",
		language: "ቋንቋ",
	},
	so: {
		title: "Ciyaarta Imtixaanka Hawada",
		start: "Bilow Ciyaarta",
		ready:
			"Ka jawaab 10 su'aalood 100 ilbiriqsi gudaheed. Ma diyaar u tahay inaad sahamiso cosmos?",
		timeLeft: "Waqtiga haray",
		question: "Su'aal",
		of: "ka mid ah",
		complete: "Imtixaanka waa la dhammeeyey!",
		score: "Dhibcahaaga",
		playAgain: "Mar kale ciyaar",
		home: "Bogga Hore",
		faq: "Su'aalaha Inta Badan La Isweydiiyo",
		winners: "Guuleystayaasha",
		language: "Luqadda",
	},
} as any;

const questions = {
	en: [
		{
			question: "What is the closest planet to the Sun?",
			options: ["Venus", "Mercury", "Mars", "Earth"],
			answer: 1,
		},
		{
			question: "How many moons does Mars have?",
			options: ["0", "1", "2", "4"],
			answer: 2,
		},
		{
			question: "Who won the FIFA World Cup in 2018?",
			options: ["Brazil", "Germany", "France", "Argentina"],
			answer: 2,
		},
		{
			question: "What is the capital of Japan?",
			options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
			answer: 1,
		},
		{
			question: "Who is known as the first president of the United States?",
			options: [
				"Abraham Lincoln",
				"George Washington",
				"John Adams",
				"Thomas Jefferson",
			],
			answer: 1,
		},
	],
	am: [
		{
			question: "ከፀሐይ በጣም የቀረበው ፕላኔት የትኛው ነው?",
			options: ["ቬነስ", "ሜርኩሪ", "ማርስ", "ምድር"],
			answer: 1,
		},
		{
			question: "ማርስ ስንት ጨረቃዎች አሉት?",
			options: ["0", "1", "2", "4"],
			answer: 2,
		},
		{
			question: "የ2018 ዓ.ም የእግር ኳስ ዓለም ዋንጫ የማሸነፈው ሃገር የትኛው ነበር?",
			options: ["ብራዚል", "ጀርመን", "ፈረንሳይ", "አርጀንቲና"],
			answer: 2,
		},
		{
			question: "የጃፓን ከተማ ዋና ከተማ ማን ነው?",
			options: ["ሶል", "ቶኪዮ", "ቤዂንግ", "ባንኮክ"],
			answer: 1,
		},
		{
			question: "አሜሪካን ከፍተኛ ስራ ያረገው የመጀመሪያው ፕሬዝዳንት ማን ነው?",
			options: ["አብራሃም ሊንኮልን", "ጆርጅ ዋሽንግተን", "ጆን አዳምስ", "ቶማስ ጀፈርሰን"],
			answer: 1,
		},
	],
	om: [
		{
			question: "Addunyaa Biiftuu irraa dhihoo kami?",
			options: ["Venus", "Mercury", "Mars", "Dachee"],
			answer: 1,
		},
		{
			question: "Mars ji'oota meeqa qaba?",
			options: ["0", "1", "2", "4"],
			answer: 2,
		},
		{
			question: "Guddichi tapha Kubbaa Miillaa 2018 moo'ate kam?",
			options: ["Biraaziil", "Jarmanii", "Faransaayii", "Arjentiinaa"],
			answer: 2,
		},
		{
			question: "Kaaba Tokkoffaa Jaappaan maali?",
			options: ["Sool", "Tokiyoo", "Beijing", "Baankook"],
			answer: 1,
		},
		{
			question: "Prezidaantii Amerikaa jalqabaa eenyu dha?",
			options: [
				"Abrahaam Liinkoolin",
				"George Washington",
				"John Adams",
				"Thomas Jefferson",
			],
			answer: 1,
		},
	],
	ti: [
		{
			question: "ካብ ጸሓይ ዝቐረበ ፕላኔት እንታይ እዩ?",
			options: ["ቬነስ", "መርኩሪ", "ማርስ", "ምድሪ"],
			answer: 1,
		},
		{
			question: "ማርስ ክንደይ ወርሓታት ኣለዋ?",
			options: ["0", "1", "2", "4"],
			answer: 2,
		},
		{
			question: "ኣብ 2018 ዓ.ም ዓለም ዋንጫ ስነተጫወት ዝረኽብ ሃገር እንታይ እያ?",
			options: ["ብራዚል", "ጀርመን", "ፈረንሳይ", "አርጀንቲና"],
			answer: 2,
		},
		{
			question: "ናይ ጃፓን ዋና ከተማ ስም እንታይ እዩ?",
			options: ["ሶል", "ቶኪዮ", "ቤጂንግ", "ባንኮክ"],
			answer: 1,
		},
		{
			question: "ንኢድ ዩናይትድ ስቴትስ ቀዳማይ ፕሬዝደንት ማን እዩ?",
			options: ["አብርሃም ሊንኮልን", "ጆርጅ ዋሽንግተን", "ጆን አዳምስ", "ቶማስ ጄፈርሰን"],
			answer: 1,
		},
	],
	so: [
		{
			question: "Meesha ugu dhow qorraxda waa kee?",
			options: ["Venus", "Mercury", "Mars", "Dhulka"],
			answer: 1,
		},
		{
			question: "Mars waxay leedahay imisa dayax?",
			options: ["0", "1", "2", "4"],
			answer: 2,
		},
		{
			question: "Yaa qaaday koobkii adduunka ee FIFA 2018?",
			options: ["Brazil", "Germany", "France", "Argentina"],
			answer: 2,
		},
		{
			question: "Caasimada Japan waa tee?",
			options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
			answer: 1,
		},
		{
			question: "Madaxweynihii ugu horreeyay ee Mareykanka waa kuma?",
			options: [
				"Abraham Lincoln",
				"George Washington",
				"John Adams",
				"Thomas Jefferson",
			],
			answer: 1,
		},
	],
} as any;

const languageNames = {
	en: "English",
	am: "አማርኛ",
	om: "Afaan Oromoo",
	ti: "ትግርኛ",
	so: "Af-Soomaali",
};

const winners = [
	{ name: "Abebe Bikila", phone: "0911234567", prize: "Daily Prize" },
	{ name: "Tirunesh Dibaba", phone: "0922345678", prize: "Weekly Prize" },
	{ name: "Haile Gebrselassie", phone: "0933456789", prize: "Monthly Prize" },
	{ name: "Derartu Tulu", phone: "0944567890", prize: "Daily Prize" },
	{ name: "Kenenisa Bekele", phone: "0955678901", prize: "Weekly Prize" },
];

const prizes = [
	{ name: "Daily Prize", value: "500 ETB Airtime", icon: Gift },
	{ name: "Weekly Prize", value: "5000 ETB Cash", icon: Zap },
	{ name: "Monthly Prize", value: "Samsung Galaxy S21", icon: Star },
];

const faqItems = [
	{
		question: "How does the 100 Seconds Quiz work?",
		answer:
			"The 100 Seconds Quiz challenges you to answer 10 questions about space and astronomy in just 100 seconds. You'll need quick thinking and cosmic knowledge to succeed!",
	},
	{
		question: "How do I win prizes?",
		answer:
			"Prizes are awarded daily, weekly, and monthly based on the highest scores. The more you play and the better you perform, the higher your chances of winning!",
	},
	{
		question: "Can I play the quiz multiple times?",
		answer:
			"Yes! You can play the quiz as many times as you like to improve your score and increase your chances of winning prizes.",
	},
	{
		question: "How do I subscribe to play?",
		answer:
			"To subscribe, click the 'Start Quiz' button and enter your phone number for Telebirr payment. Once subscribed, you can play the quiz immediately.",
	},
	{
		question: "What happens if I lose my internet connection during the quiz?",
		answer:
			"If you lose connection during the quiz, your progress will be saved. You can resume from where you left off when you reconnect.",
	},
];

export default function Component() {
	const [gameState, setGameState] = useState("start");
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

	useEffect(() => {
		const storedHighScore = localStorage.getItem("highScore");
		if (storedHighScore) {
			setHighScore(parseInt(storedHighScore));
		}
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
			setGameState("playing");
			setCurrentQuestion(0);
			setScore(0);
			setTimeLeft(100);
			setStreak(0);
		} else {
			setShowPayment(true);
		}
	};

	const handleAnswer = (selectedAnswer: number) => {
		const correct =
			selectedAnswer === questions[language][currentQuestion].answer;
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
			if (currentQuestion < questions[language].length - 1) {
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

	return (
		<div className="min-h-screen bg-gradient-to-b from-sky-200 via-blue-100 to-indigo-100 flex flex-col">
			<header className="w-full bg-white shadow-md p-4">
				<div className="max-w-6xl mx-auto flex justify-between items-center">
					<div className="flex items-center space-x-2">
						<Zap className="h-8 w-8 text-orange-600" />
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
									{faqItems.map((item, index) => (
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
											{winners.map((winner, index) => (
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
										{name}
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
											{faqItems.map((item, index) => (
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
													{winners.map((winner, index) => (
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
												{name}
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

				<Card className="max-w-4xl w-full bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-8 z-10">
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
									className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 h-12">
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
													<prize.icon className="h-8 w-8 text-blue-600 mb-2" />
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
								<div className="mt-8">
									<h3 className="text-2xl font-semibold mb-4 text-blue-600">
										High Score: {highScore}
									</h3>
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
									{questions[language][currentQuestion].question}
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{questions[language][currentQuestion].options.map(
										(option: any, index: any) => (
											<Button
												key={index}
												onClick={() => handleAnswer(index)}
												className={`text-lg py-4 ${
													showFeedback
														? index ===
														  questions[language][currentQuestion].answer
															? "bg-green-500 hover:bg-green-600"
															: "bg-red-500 hover:bg-red-600"
														: "bg-blue-500 hover:bg-blue-600"
												} text-white rounded-lg transition-colors duration-300`}
												disabled={showFeedback}>
												{option}
											</Button>
										)
									)}
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
									{translations[language].of} {questions[language].length}
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
									{translations[language].of} {questions[language].length}
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
										onClick={startGame}
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
							{faqItems.map((item, index) => (
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
									{winners.map((winner, index) => (
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
		</div>
	);
}
