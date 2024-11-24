import {
	Star,
	Zap,
	Gift,
	Globe,
	Book,
	Calculator,
	Music,
	Image,
} from "lucide-react";

export const getPageDetails = async () => {
	const translations = {
		en: {
			title: "Quizcroll",
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
			submit: "Submit Answer",
			credit: "Credit",
			phone: "Phone",
			requestCredit: "Request Credit",
			insufficientCredit:
				"Insufficient credit. Please request more credit to play.",
			creditRequested: "Credit request sent. Please wait for approval.",
			seeAll: "See All",
			credits: "Credits",
			buyCredits: "Buy Credits",
			creditHistory: "Credit History",
			availableCredits: "Available Credits",
			purchaseCredits: "Purchase Credits",
			oneTimePurchase: "One-time Purchase",
			subscription: "Subscription",
			completePurchase: "Complete Purchase",
			backToQuiz: "Back to Quiz",
			continueWithTelebirr: "Continue with Telebirr",
		},
		am: {
			title: "የQuizcroll ጨዋታ",
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
			submit: "መልስ አስገባ",
			credit: "ክሬዲት",
			phone: "ስልክ",
			requestCredit: "ክሬዲት ይጠይቁ",
			insufficientCredit: "በቂ ክሬዲት የለም። እባክዎ ለመጫወት ተጨማሪ ክሬዲት ይጠይቁ።",
			creditRequested: "የክሬዲት ጥያቄ ተልኳል። እባክዎ ለፈቃድ ይጠብቁ።",
			seeAll: "ሁሉንም ተመልከት",
			credits: "ክሬዲቶች",
			buyCredits: "ክሬዲቶችን ይግዙ",
			creditHistory: "የክሬዲት ታሪክ",
			availableCredits: "ያሉ ክሬዲቶች",
			purchaseCredits: "ክሬዲቶችን ይግዙ",
			oneTimePurchase: "አንድ ጊዜ ግዢ",
			subscription: "ደንበኝነት",
			completePurchase: "ግዢውን ያጠናቅቁ",
			backToQuiz: "ወደ ጥያቄው ይመለሱ",
			continueWithTelebirr: "በቴሌብር ይቀጥሉ",
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
			submit: "Deebii Galchi",
			credit: "Kireediitii",
			phone: "Bilbila",
			requestCredit: "Kireediitii Gaafadhu",
			insufficientCredit:
				"Kireediitiin gahaa miti. Maaloo taphachuuf kireediitii dabalaa gaafadhu.",
			creditRequested: "Gaaffiin kireediitii ergameera. Maaloo hayyama eegi.",
			credits: "Kireediitii",
			buyCredits: "Kireediitii Biti",
			creditHistory: "Seenaa Kireediitii",
			availableCredits: "Kireediitii Jiru",
			purchaseCredits: "Kireediitii Biti",
			oneTimePurchase: "Bitaa Yeroo Tokko",
			subscription: "Maamilummaa",
			completePurchase: "Bitaa Xumuri",
			backToQuiz: "Gara Gaaffiitti Deebi'i",
			continueWithTelebirr: "Telebirr waliin itti fufi",
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
			submit: "መልሲ ኣእቱ",
			credit: "ክረዲት",
			phone: "ተሌፎን",
			requestCredit: "ክረዲት ሕተት",
			insufficientCredit: "ዘይኣኻሊ ክረዲት። በጃኹም ንምጽዋት ተወሳኺ ክረዲት ሕተቱ።",
			creditRequested: "ሕቶ ክረዲት ተላኢኹ። በጃኹም ንፍቓድ ተጸበዩ።",

			continueWithTelebirr: "ብቴሌብር ቀጽል",
			credits: "ክረዲታት",
			buyCredits: "ክረዲታት ግዛእ",
			creditHistory: "ታሪኽ ክረዲት",
			availableCredits: "ዘለዉ ክረዲታት",
			purchaseCredits: "ክረዲታት ግዛእ",
			oneTimePurchase: "ሓደ ግዜግዝኢት",
			subscription: "ምዝገባ",
			completePurchase: "ግዝኢት ወድእ",
			backToQuiz: "ናብ ሕቶ ተመለስ",
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
			submit: "Jawaabta Soo Gudbi",
			credit: "Deyn",
			phone: "Telefoon",
			requestCredit: "Codso Deyn",
			insufficientCredit:
				"Deyn aan ku filnayn. Fadlan codso deyn dheeraad ah si aad u ciyaarto.",
			creditRequested: "Codsiga deynta waa la diray. Fadlan sug oggolaansho.",
			credits: "Dheelitaanno",
			buyCredits: "Iibso Dheelitaanno",
			creditHistory: "Taariikhda Dheelitaanka",
			availableCredits: "Dheelitaannada La Heli Karo",
			purchaseCredits: "Iibso Dheelitaanno",
			oneTimePurchase: "Iibsi Hal Mar",
			subscription: "Rukunka",
			completePurchase: "Dhammaystir Iibsiga",
			backToQuiz: "Ku Noqo Su'aalaha",
			continueWithTelebirr: "La soco Telebirr",
		},
	} as any;

	const categories = {
		en: [
			{ name: "Space", icon: Star },
			{ name: "Geography", icon: Globe },
			{ name: "History", icon: Book },
			{ name: "Math", icon: Calculator },
			{ name: "Music", icon: Music },
			{ name: "Art", icon: Image },
		],
		am: [
			{ name: "ጠፈር", icon: Star },
			{ name: "ጂኦግራፊ", icon: Globe },
			{ name: "ታሪክ", icon: Book },
			{ name: "ሂሳብ", icon: Calculator },
		],
		om: [
			{ name: "Qilleensa", icon: Star },
			{ name: "Jiograafii", icon: Globe },
			{ name: "Seenaa", icon: Book },
			{ name: "Herrega", icon: Calculator },
		],
		ti: [
			{ name: "ጠፈር", icon: Star },
			{ name: "ጆግራፊ", icon: Globe },
			{ name: "ታሪኽ", icon: Book },
			{ name: "ሒሳብ", icon: Calculator },
		],
		so: [
			{ name: "Hawada", icon: Star },
			{ name: "Juqraafi", icon: Globe },
			{ name: "Taariikh", icon: Book },
			{ name: "Xisaab", icon: Calculator },
		],
	};

	const questions = {
		en: {
			Space: [
				{
					type: "multipleChoice",
					question: "What is the closest planet to the Sun?",
					options: ["Venus", "Mercury", "Mars", "Earth"],
					answer: 1,
				},
				{
					type: "arrange",
					question:
						"Arrange the planets in order from closest to farthest from the Sun:",
					items: ["Mercury", "Venus", "Earth", "Mars", "Jupiter"],
				},
				{
					type: "image",
					question: "What celestial body is shown in this image?",
					imageUrl: "/assets/images/questions/q1.jpeg?height=300&width=300",
					options: ["Earth", "Mars", "Jupiter", "Saturn"],
					answer: 1,
				},
				{
					type: "sound",
					question: "What space phenomenon does this sound represent?",
					audioUrl: "/assets/images/questions/q1-sounds.mp3",
					options: ["Black Hole", "Supernova", "Pulsar", "Solar Wind"],
					answer: 2,
				},
				// ... (add more space questions)
			],
			Music: [
				{
					type: "sound",
					question: "Which instrument is playing in this audio clip?",
					audioUrl: "/instrument-sound.mp3",
					options: ["Piano", "Guitar", "Violin", "Flute"],
					answer: 0,
				},
				{
					type: "image",
					question: "What is the name of this musical notation symbol?",
					imageUrl: "/placeholder.svg?height=100&width=100",
					options: ["Treble Clef", "Bass Clef", "Alto Clef", "Tenor Clef"],
					answer: 0,
				},
			],
			Geography: [
				{
					type: "multipleChoice",
					question: "What is the capital of Japan?",
					options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
					answer: 1,
				},
				{
					type: "arrange",
					question:
						"Arrange these countries from largest to smallest by land area:",
					items: ["Russia", "Canada", "China", "United States", "Brazil"],
				},
				// ... (add more geography questions)
			],
			History: [
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
				// ... (add more history questions)
			],
			Math: [
				{
					question: "What is the square root of 144?",
					options: ["10", "12", "14", "16"],
					answer: 1,
				},
				// ... (add more math questions)
			],
		},

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
		{ name: "Abebe Bikila", phone: "0911****67", prize: "iPhone 13 Pro" },
		{ name: "Tirunesh Dibaba", phone: "0922****78", prize: "25,000 Birr" },
		{ name: "Haile Gebrselassie", phone: "093****789", prize: "Samsung A15" },
		{ name: "Derartu Tulu", phone: "0944****90", prize: "Daily Prize" },
		{ name: "Kenenisa Bekele", phone: "095****901", prize: "Weekly Prize" },
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
			question:
				"What happens if I lose my internet connection during the quiz?",
			answer:
				"If you lose connection during the quiz, your progress will be saved. You can resume from where you left off when you reconnect.",
		},
	];

	// Add category translations
	Object.keys(translations).forEach((lang) => {
		translations[lang].selectCategory = {
			en: "Select a category",
			am: "ምድብ ይምረጡ",
			om: "Gosa filadhu",
			ti: "ምድብ ምረጽ",
			so: "Dooro qaybta",
		}[lang];
	});

	return {
		translations,
		questions,
		categories,
		languageNames,
		winners,
		prizes,
		faqItems,
	};
};
