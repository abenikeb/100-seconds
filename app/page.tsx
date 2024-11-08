"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
	Rocket,
	Star,
	Moon,
	Menu,
	X,
	Globe,
	Trophy,
	HelpCircle,
	Atom,
	// Comet,
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

// Sample questions - replace with your own and add translations
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
		// ... add more questions
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
		// ... add more questions in Amharic
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
		// ... add more questions in Oromifa
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
		// ... add more questions in Tigrigna
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
		// ... add more questions in Somali
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
	{ name: "Abebe Bikila", phone: "0911234567" },
	{ name: "Tirunesh Dibaba", phone: "0922345678" },
	{ name: "Haile Gebrselassie", phone: "0933456789" },
	{ name: "Derartu Tulu", phone: "0944567890" },
	{ name: "Kenenisa Bekele", phone: "0955678901" },
];

export default function Component() {
	const [gameState, setGameState] = useState("start");
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [timeLeft, setTimeLeft] = useState(100);
	const [language, setLanguage] = useState("en");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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

	const startGame = () => {
		setGameState("playing");
		setCurrentQuestion(0);
		setScore(0);
		setTimeLeft(100);
	};

	const handleAnswer = (selectedAnswer: number) => {
		if (selectedAnswer === questions[language][currentQuestion].answer) {
			setScore((prevScore) => prevScore + 1);
		}
		if (currentQuestion < questions[language].length - 1) {
			setCurrentQuestion((prevQuestion) => prevQuestion + 1);
		} else {
			setGameState("end");
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-lime-700 to-lime-600 flex flex-col">
			<header className="w-full bg-lime-800 p-4 shadow-md">
				<div className="max-w-6xl mx-auto flex justify-between items-center">
					<div className="flex items-center space-x-2">
						<Rocket className="h-8 w-8 text-lime-300" />
						<h1 className="text-2xl font-bold text-white">
							{translations[language].title}
						</h1>
					</div>
					<Select onValueChange={(value) => setLanguage(value)}>
						<SelectTrigger className="w-[120px] bg-lime-700 text-white">
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
					<nav className="hidden md:flex items-center space-x-4">
						<a href="#" className="text-white hover:text-lime-300">
							{translations[language].home}
						</a>
						<a href="#" className="text-white hover:text-lime-300">
							{translations[language].faq}
						</a>
						<Dialog>
							<DialogTrigger asChild>
								<button className="text-white hover:text-lime-300">
									{translations[language].winners}
								</button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>
										{translations[language].winnersList}
									</DialogTitle>
								</DialogHeader>
								<div className="mt-4">
									<table className="w-full">
										<thead>
											<tr>
												<th className="text-left">
													{translations[language].name}
												</th>
												<th className="text-left">
													{translations[language].phone}
												</th>
											</tr>
										</thead>
										<tbody>
											{winners.map((winner, index) => (
												<tr key={index}>
													<td>{winner.name}</td>
													<td>{winner.phone}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</DialogContent>
						</Dialog>
						<Select onValueChange={(value) => setLanguage(value)}>
							<SelectTrigger className="w-[120px] bg-lime-700 text-white">
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
						<SheetContent
							side="right"
							className="w-[250px] bg-lime-800 text-white">
							<nav className="flex flex-col space-y-4">
								<a href="#" className="text-lg hover:text-lime-300">
									{translations[language].home}
								</a>
								<a href="#" className="text-lg hover:text-lime-300">
									{translations[language].faq}
								</a>
								<Dialog>
									<DialogTrigger asChild>
										<button className="text-lg text-left hover:text-lime-300">
											{translations[language].winners}
										</button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>
												{translations[language].winnersList}
											</DialogTitle>
										</DialogHeader>
										<div className="mt-4">
											<table className="w-full">
												<thead>
													<tr>
														<th className="text-left">
															{translations[language].name}
														</th>
														<th className="text-left">
															{translations[language].phone}
														</th>
													</tr>
												</thead>
												<tbody>
													{winners.map((winner, index) => (
														<tr key={index}>
															<td>{winner.name}</td>
															<td>{winner.phone}</td>
														</tr>
													))}
												</tbody>
											</table>
										</div>
									</DialogContent>
								</Dialog>
								<Select onValueChange={(value) => setLanguage(value)}>
									<SelectTrigger className="w-full bg-lime-700 text-white">
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
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</header>

			<main className="flex-grow flex items-center justify-center p-4 relative overflow-hidden">
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lime-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
					<div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
					<div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
					<Moon className="absolute top-1/4 right-1/4 w-24 h-24 text-white opacity-10 animate-spin-slow" />
					<Star className="absolute top-1/5 left-1/2 w-20 h-20 text-white opacity-10 animate-spin-slow" />
					<Atom className="absolute bottom-1/4 right-1/4 w-12 h-12 text-white opacity-50 animate-pulse" />
					{/* <img
						src="/placeholder.svg?height=200&width=200"
						alt="Astronaut"
						className="absolute top-1/4 right-1/4 w-32 h-32 animate-float"
					/>
					<img
						src="/placeholder.svg?height=200&width=200"
						alt="Rocket"
						className="absolute bottom-1/4 left-1/4 w-24 h-24 animate-float animation-delay-2000"
					/> */}
				</div>

				<div className="max-w-4xl w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-8 text-white z-10">
					{gameState === "start" && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="text-center">
							<p className="text-xl mb-6">{translations[language].ready}</p>
							<Button
								onClick={startGame}
								className="text-lg px-8 py-4 bg-blue-800 hover:bg-blue-600 text-white h-12">
								{translations[language].start} <Rocket className="ml-2" />
							</Button>
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
									className="h-3 bg-lime-900"
									indicatorClassName="bg-lime-400"
								/>
								<p className="text-right mt-2">
									{translations[language].timeLeft}: {timeLeft}s
								</p>
							</div>
							<h2 className="text-2xl font-semibold mb-4">
								{questions[language][currentQuestion].question}
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{questions[language][currentQuestion].options.map(
									(option: any, index: any) => (
										<Button
											key={index}
											onClick={() => handleAnswer(index)}
											className="text-lg py-4 bg-lime-600 hover:bg-lime-700 text-white">
											{option}
										</Button>
									)
								)}
							</div>
							<p className="mt-4 text-xl">
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
							<h2 className="text-3xl font-bold mb-4">
								{translations[language].complete}
							</h2>
							<p className="text-2xl mb-6">
								{translations[language].score}: {score}{" "}
								{translations[language].of} {questions[language].length}
							</p>
							<Button
								onClick={startGame}
								className="text-lg px-8 py-4 bg-lime-500 hover:bg-lime-600 text-black">
								{translations[language].playAgain} <Star className="ml-2" />
							</Button>
						</motion.div>
					)}
				</div>
			</main>

			<footer className="w-full bg-lime-800 p-4 text-white text-center">
				<a href="#" className="mx-2 hover:text-lime-300">
					<HelpCircle className="inline-block mr-1" />{" "}
					{translations[language].faq}
				</a>
				<Dialog>
					<DialogTrigger asChild>
						<button className="mx-2 hover:text-lime-300">
							<Trophy className="inline-block mr-1" />{" "}
							{translations[language].winners}
						</button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>{translations[language].winnersList}</DialogTitle>
						</DialogHeader>
						<div className="mt-4">
							<table className="w-full">
								<thead>
									<tr>
										<th className="text-left">{translations[language].name}</th>
										<th className="text-left">
											{translations[language].phone}
										</th>
									</tr>
								</thead>
								<tbody>
									{winners.map((winner, index) => (
										<tr key={index}>
											<td>{winner.name}</td>
											<td>{winner.phone}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</DialogContent>
				</Dialog>
				<a href="#" className="mx-2 hover:text-lime-300">
					<Globe className="inline-block mr-1" />{" "}
					{translations[language].language}
				</a>
			</footer>
		</div>
	);
}
