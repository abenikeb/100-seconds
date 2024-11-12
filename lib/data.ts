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

	return {
		translations,
		questions,
	};
};
