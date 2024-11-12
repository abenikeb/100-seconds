export const getPageDetails = async () => {
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
		{ name: "Abebe Bikila", phone: "0911234567", prize: "Daily Prize" },
		{ name: "Tirunesh Dibaba", phone: "0922345678", prize: "Weekly Prize" },
		{ name: "Haile Gebrselassie", phone: "0933456789", prize: "Monthly Prize" },
		{ name: "Derartu Tulu", phone: "0944567890", prize: "Daily Prize" },
		{ name: "Kenenisa Bekele", phone: "0955678901", prize: "Weekly Prize" },
	];

	// const prizes = [
	// 	{ name: "Daily Prize", value: "500 ETB Airtime", icon: Gift },
	// 	{ name: "Weekly Prize", value: "5000 ETB Cash", icon: Zap },
	// 	{ name: "Monthly Prize", value: "Samsung Galaxy S21", icon: Star },
	// ];

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
			question:
				"What happens if I lose my internet connection during the quiz?",
			answer:
				"If you lose connection during the quiz, your progress will be saved. You can resume from where you left off when you reconnect.",
		},
	];

	return {
		translations,
		questions,
	};
};
