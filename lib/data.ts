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
				{
					type: "multipleChoice",
					question: "Which planet is known as the Red Planet?",
					options: ["Venus", "Mars", "Jupiter", "Saturn"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "What is the largest planet in our solar system?",
					options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "How many moons does Earth have?",
					options: ["0", "1", "2", "3"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "What is the name of our galaxy?",
					options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Which planet has the most moons?",
					options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "What is the hottest planet in our solar system?",
					options: ["Mercury", "Venus", "Mars", "Jupiter"],
					answer: 1,
				},
				{
					type: "arrange",
					question: "Arrange these space objects from smallest to largest:",
					items: ["Asteroid", "Moon", "Planet", "Star", "Galaxy"],
				},
				{
					type: "multipleChoice",
					question: "What force keeps planets in orbit around the Sun?",
					options: [
						"Magnetism",
						"Gravity",
						"Centrifugal force",
						"Nuclear force",
					],
					answer: 1,
				},
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
				{
					type: "multipleChoice",
					question: "How many strings does a standard guitar have?",
					options: ["4", "5", "6", "7"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "Which composer wrote 'The Four Seasons'?",
					options: ["Bach", "Mozart", "Vivaldi", "Beethoven"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "What does 'forte' mean in music?",
					options: ["Soft", "Loud", "Fast", "Slow"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "How many keys are on a standard piano?",
					options: ["76", "88", "96", "104"],
					answer: 1,
				},
				{
					type: "arrange",
					question: "Arrange these musical notes in ascending order:",
					items: ["C", "D", "E", "F", "G"],
				},
				{
					type: "multipleChoice",
					question: "Which instrument family does the trumpet belong to?",
					options: ["Strings", "Woodwinds", "Brass", "Percussion"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "What is the highest female singing voice?",
					options: ["Alto", "Soprano", "Mezzo-soprano", "Contralto"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "How many beats are in a 4/4 time signature?",
					options: ["2", "3", "4", "8"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "Which country is the birthplace of jazz music?",
					options: ["France", "United States", "Brazil", "Cuba"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "What does 'piano' mean in musical terms?",
					options: ["Fast", "Slow", "Soft", "Loud"],
					answer: 2,
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
				{
					type: "multipleChoice",
					question: "Which is the longest river in the world?",
					options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "What is the smallest country in the world?",
					options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Which mountain range contains Mount Everest?",
					options: ["Andes", "Rocky Mountains", "Himalayas", "Alps"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "What is the largest ocean on Earth?",
					options: ["Atlantic", "Indian", "Arctic", "Pacific"],
					answer: 3,
				},
				{
					type: "multipleChoice",
					question: "Which desert is the largest in the world?",
					options: ["Sahara", "Gobi", "Kalahari", "Antarctica"],
					answer: 3,
				},
				{
					type: "arrange",
					question: "Arrange these continents from largest to smallest:",
					items: [
						"Asia",
						"Africa",
						"North America",
						"South America",
						"Antarctica",
					],
				},
				{
					type: "multipleChoice",
					question: "What is the capital of Australia?",
					options: ["Sydney", "Melbourne", "Canberra", "Perth"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "Which country has the most time zones?",
					options: ["Russia", "United States", "China", "France"],
					answer: 3,
				},
				{
					type: "multipleChoice",
					question: "What is the deepest point on Earth?",
					options: [
						"Mariana Trench",
						"Puerto Rico Trench",
						"Java Trench",
						"Peru-Chile Trench",
					],
					answer: 0,
				},
				{
					type: "multipleChoice",
					question: "Which African country was never colonized?",
					options: ["Kenya", "Ethiopia", "Ghana", "Nigeria"],
					answer: 1,
				},
			],
			History: [
				{
					type: "multipleChoice",
					question: "Who is known as the first president of the United States?",
					options: [
						"Abraham Lincoln",
						"George Washington",
						"John Adams",
						"Thomas Jefferson",
					],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "In which year did World War II end?",
					options: ["1944", "1945", "1946", "1947"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Who was the first person to walk on the moon?",
					options: [
						"Buzz Aldrin",
						"Neil Armstrong",
						"John Glenn",
						"Alan Shepard",
					],
					answer: 1,
				},
				{
					type: "arrange",
					question: "Arrange these historical events in chronological order:",
					items: [
						"World War I",
						"American Civil War",
						"World War II",
						"Cold War",
						"Vietnam War",
					],
				},
				{
					type: "multipleChoice",
					question: "Which ancient wonder of the world still exists today?",
					options: [
						"Hanging Gardens of Babylon",
						"Great Pyramid of Giza",
						"Colossus of Rhodes",
						"Lighthouse of Alexandria",
					],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Who painted the ceiling of the Sistine Chapel?",
					options: [
						"Leonardo da Vinci",
						"Michelangelo",
						"Raphael",
						"Donatello",
					],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "In which year did the Berlin Wall fall?",
					options: ["1987", "1988", "1989", "1990"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "Who was the first woman to win a Nobel Prize?",
					options: [
						"Marie Curie",
						"Mother Teresa",
						"Jane Addams",
						"Bertha von Suttner",
					],
					answer: 0,
				},
				{
					type: "multipleChoice",
					question: "Which empire was ruled by Julius Caesar?",
					options: [
						"Greek Empire",
						"Roman Empire",
						"Byzantine Empire",
						"Ottoman Empire",
					],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "What year did the Titanic sink?",
					options: ["1910", "1911", "1912", "1913"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "Who wrote the Declaration of Independence?",
					options: [
						"George Washington",
						"Benjamin Franklin",
						"Thomas Jefferson",
						"John Adams",
					],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question:
						"Which war was fought between the North and South in America?",
					options: [
						"Revolutionary War",
						"Civil War",
						"War of 1812",
						"Spanish-American War",
					],
					answer: 1,
				},
			],
			Math: [
				{
					type: "multipleChoice",
					question: "What is the square root of 144?",
					options: ["10", "12", "14", "16"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "What is 15% of 200?",
					options: ["25", "30", "35", "40"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question:
						"What is the value of π (pi) rounded to two decimal places?",
					options: ["3.14", "3.15", "3.16", "3.17"],
					answer: 0,
				},
				{
					type: "arrange",
					question: "Arrange these numbers in ascending order:",
					items: ["0.5", "0.25", "0.75", "1.0", "1.25"],
				},
				{
					type: "multipleChoice",
					question: "What is 8 × 7?",
					options: ["54", "56", "58", "60"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "What is the next prime number after 7?",
					options: ["9", "10", "11", "12"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "What is 100 ÷ 4?",
					options: ["20", "25", "30", "35"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question:
						"What is the area of a rectangle with length 8 and width 5?",
					options: ["35", "40", "45", "50"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "What is 2³ (2 to the power of 3)?",
					options: ["6", "8", "9", "12"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "What is the sum of angles in a triangle?",
					options: ["90°", "180°", "270°", "360°"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "What is 0.5 as a fraction?",
					options: ["1/3", "1/2", "2/3", "3/4"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "What is the perimeter of a square with side length 6?",
					options: ["18", "20", "24", "36"],
					answer: 2,
				},
			],
		},

		am: {
			Space: [
				{
					type: "multipleChoice",
					question: "ከፀሐይ በጣም የቀረበው ፕላኔት የትኛው ነው?",
					options: ["ቬነስ", "ሜርኩሪ", "ማርስ", "ምድር"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ማርስ ስንት ጨረቃዎች አሉት?",
					options: ["0", "1", "2", "4"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "የትኛው ፕላኔት ቀይ ፕላኔት ተብሎ ይታወቃል?",
					options: ["ቬነስ", "ማርስ", "ጁፒተር", "ሳተርን"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "በፀሐይ ስርዓታችን ውስጥ ትልቁ ፕላኔት የትኛው ነው?",
					options: ["ሳተርን", "ጁፒተር", "ኔፕቱን", "ዩራነስ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ምድር ስንት ጨረቃዎች አሏት?",
					options: ["0", "1", "2", "3"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "የኛ ጋላክሲ ስም ምንድን ነው?",
					options: ["አንድሮሜዳ", "ወተት መንገድ", "ዊርልፑል", "ሶምብሬሮ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "የትኛው ፕላኔት ብዙ ጨረቃዎች አሉት?",
					options: ["ጁፒተር", "ሳተርን", "ዩራነስ", "ኔፕቱን"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "በፀሐይ ስርዓታችን ውስጥ በጣም ሞቃታማው ፕላኔት የትኛው ነው?",
					options: ["ሜርኩሪ", "ቬነስ", "ማርስ", "ጁፒተር"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ፕላኔቶችን በፀሐይ ዙሪያ በምህዋር ላይ የሚይዘው ኃይል ምንድን ነው?",
					options: ["ማግኔቲዝም", "ስበት", "ሴንትሪፉጋል ኃይል", "ኑክሌር ኃይል"],
					answer: 1,
				},
				{
					type: "arrange",
					question: "እነዚህን ፕላኔቶች ከፀሐይ ቅርብ ወደ ሩቅ በቅደም ተከተል ያስቀምጡ:",
					items: ["ሜርኩሪ", "ቬነስ", "ምድር", "ማርስ", "ጁፒተር"],
				},
			],
			Music: [
				{
					type: "multipleChoice",
					question: "መደበኛ ጊታር ስንት ገመዶች አሉት?",
					options: ["4", "5", "6", "7"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "'ፎርቴ' በሙዚቃ ውስጥ ምን ማለት ነው?",
					options: ["ለስላሳ", "ጮክ ያለ", "ፈጣን", "ዘገምተኛ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "መደበኛ ፒያኖ ስንት ቁልፎች አሉት?",
					options: ["76", "88", "96", "104"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ትራምፔት የትኛው የሙዚቃ መሳሪያ ቤተሰብ አባል ነው?",
					options: ["ገመድ", "እንጨት ንፋስ", "ብረት", "ከበሮ"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "ከፍተኛው የሴት ዘፈን ድምፅ ምንድን ነው?",
					options: ["አልቶ", "ሶፕራኖ", "ሜዞ-ሶፕራኖ", "ኮንትራልቶ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "በ4/4 ጊዜ ፊርማ ውስጥ ስንት ምቶች አሉ?",
					options: ["2", "3", "4", "8"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "የጃዝ ሙዚቃ የትውልድ ሀገር የትኛው ነው?",
					options: ["ፈረንሳይ", "አሜሪካ", "ብራዚል", "ኩባ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "'ፒያኖ' በሙዚቃ ቃላት ምን ማለት ነው?",
					options: ["ፈጣን", "ዘገምተኛ", "ለስላሳ", "ጮክ ያለ"],
					answer: 2,
				},
				{
					type: "arrange",
					question: "እነዚህን የሙዚቃ ማስታወሻዎች በመጨመር ቅደም ተከተል ያስቀምጡ:",
					items: ["ሲ", "ዲ", "ኢ", "ኤፍ", "ጂ"],
				},
			],
			Geography: [
				{
					type: "multipleChoice",
					question: "የጃፓን ዋና ከተማ ምንድን ነው?",
					options: ["ሶል", "ቶኪዮ", "ቤጂንግ", "ባንኮክ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "በዓለም ላይ ረጅሙ ወንዝ የትኛው ነው?",
					options: ["አማዞን", "ናይል", "ሚሲሲፒ", "ያንግትዜ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "በዓለም ላይ ትንሹ ሀገር የትኛው ነው?",
					options: ["ሞናኮ", "ቫቲካን ከተማ", "ሳን ማሪኖ", "ሊችተንስታይን"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ኤቨረስት ተራራ የትኛው የተራራ ሰንሰለት አካል ነው?",
					options: ["አንዴስ", "ሮኪ ተራሮች", "ሂማላያ", "አልፕስ"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "በምድር ላይ ትልቁ ውቅያኖስ የትኛው ነው?",
					options: ["አትላንቲክ", "ህንድ", "አርክቲክ", "ፓሲፊክ"],
					answer: 3,
				},
				{
					type: "multipleChoice",
					question: "በዓለም ላይ ትልቁ በረሃ የትኛው ነው?",
					options: ["ሳሃራ", "ጎቢ", "ካላሃሪ", "አንታርክቲካ"],
					answer: 3,
				},
				{
					type: "multipleChoice",
					question: "የአውስትራሊያ ዋና ከተማ ምንድን ነው?",
					options: ["ሲድኒ", "ሜልበርን", "ካንቤራ", "ፐርዝ"],
					answer: 2,
				},
				{
					type: "arrange",
					question: "እነዚህን አህጉራት ከትልቅ ወደ ትንሽ በቅደም ተከተል ያስቀምጡ:",
					items: ["እስያ", "አፍሪካ", "ሰሜን አሜሪካ", "ደቡብ አሜሪካ", "አንታርክቲካ"],
				},
			],
			History: [
				{
					type: "multipleChoice",
					question: "የአሜሪካ የመጀመሪያ ፕሬዝዳንት ማን ነው?",
					options: ["አብርሃም ሊንከን", "ጆርጅ ዋሽንግተን", "ጆን አዳምስ", "ቶማስ ጄፈርሰን"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ሁለተኛው የዓለም ጦርነት በየትኛው ዓመት ተጠናቀቀ?",
					options: ["1944", "1945", "1946", "1947"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "በጨረቃ ላይ የተራመደው የመጀመሪያው ሰው ማን ነው?",
					options: ["ባዝ አልድሪን", "ኒል አርምስትሮንግ", "ጆን ግሌን", "አላን ሼፓርድ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "የሲስቲን ቻፔል ጣሪያ የቀባው ማን ነው?",
					options: ["ሊዮናርዶ ዳ ቪንቺ", "ሚኬላንጄሎ", "ራፋኤል", "ዶናቴሎ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "የበርሊን ግንብ በየትኛው ዓመት ወደቀ?",
					options: ["1987", "1988", "1989", "1990"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "የመጀመሪያዋ የኖቤል ሽልማት ያገኘች ሴት ማን ናት?",
					options: ["ማሪ ኪዩሪ", "እናት ቴሬዛ", "ጄን አዳምስ", "በርታ ቮን ሱትነር"],
					answer: 0,
				},
				{
					type: "multipleChoice",
					question: "ጁሊየስ ቄሳር የገዛው ግዛት የትኛው ነው?",
					options: ["የግሪክ ግዛት", "የሮማ ግዛት", "የቢዛንታይን ግዛት", "የኦቶማን ግዛት"],
					answer: 1,
				},
				{
					type: "arrange",
					question: "እነዚህን ታሪካዊ ክስተቶች በጊዜ ቅደም ተከተል ያስቀምጡ:",
					items: [
						"የመጀመሪያው የዓለም ጦርነት",
						"የአሜሪካ የእርስ በርስ ጦርነት",
						"ሁለተኛው የዓለም ጦርነት",
						"ቀዝቃዛ ጦርነት",
						"የቬትናም ጦርነት",
					],
				},
			],
			Math: [
				{
					type: "multipleChoice",
					question: "የ144 ካሬ ሥር ምንድን ነው?",
					options: ["10", "12", "14", "16"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "የ200 15% ምንድን ነው?",
					options: ["25", "30", "35", "40"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "የπ (ፓይ) ዋጋ ወደ ሁለት አስርዮሽ ቦታዎች ተጠጋጋ ምንድን ነው?",
					options: ["3.14", "3.15", "3.16", "3.17"],
					answer: 0,
				},
				{
					type: "multipleChoice",
					question: "8 × 7 ምንድን ነው?",
					options: ["54", "56", "58", "60"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ከ7 በኋላ ያለው ቀጣይ ዋና ቁጥር ምንድን ነው?",
					options: ["9", "10", "11", "12"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "100 ÷ 4 ምንድን ነው?",
					options: ["20", "25", "30", "35"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ርዝመት 8 እና ስፋት 5 ያለው አራት ማዕዘን ስፋት ምንድን ነው?",
					options: ["35", "40", "45", "50"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "2³ (2 በ3 ኃይል) ምንድን ነው?",
					options: ["6", "8", "9", "12"],
					answer: 1,
				},
				{
					type: "arrange",
					question: "እነዚህን ቁጥሮች በመጨመር ቅደም ተከተል ያስቀምጡ:",
					items: ["0.25", "0.5", "0.75", "1.0", "1.25"],
				},
			],
		},

		om: {
			Space: [
				{
					type: "multipleChoice",
					question: "Addunyaa Biiftuu irraa dhihoo kami?",
					options: ["Venus", "Mercury", "Mars", "Dachee"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Mars ji'oota meeqa qaba?",
					options: ["0", "1", "2", "4"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "Addunyaan kam akka Addunyaa Diimaa beekama?",
					options: ["Venus", "Mars", "Jupiter", "Saturn"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Sirna biiftuu keenya keessatti addunyaan guddaan kami?",
					options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Lafti ji'oota meeqa qabdi?",
					options: ["0", "1", "2", "3"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Maqaan galaxy keenyaa maali?",
					options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Addunyaan ji'oota baay'ee qabdu kami?",
					options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Sirna biiftuu keenya keessatti addunyaan ho'aan kami?",
					options: ["Mercury", "Venus", "Mars", "Jupiter"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question:
						"Humni addunyadoota naannoo biiftuu keessa naannessu maali?",
					options: [
						"Magnetism",
						"Harkisa",
						"Centrifugal force",
						"Nuclear force",
					],
					answer: 1,
				},
				{
					type: "arrange",
					question:
						"Addunyadoota kana biiftuu irraa dhihootti fagoo ta'etti tartiibaan kaa'i:",
					items: ["Mercury", "Venus", "Dachee", "Mars", "Jupiter"],
				},
			],
			Music: [
				{
					type: "multipleChoice",
					question: "Gitaarii idilee funyoowwan meeqa qaba?",
					options: ["4", "5", "6", "7"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "'Forte' muuziqaa keessatti maal jechuu dha?",
					options: ["Lallaafaa", "Sagalee guddaa", "Saffisaa", "Suuta"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Piyaanoo idilee furtuu meeqa qaba?",
					options: ["76", "88", "96", "104"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Trumpet maatii meeshaa muuziqaa kamii keessa jira?",
					options: ["Funyoo", "Muka bubbisaa", "Sibiila", "Dibbee"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "Sagaleen sirba dubartii ol'aanaan maali?",
					options: ["Alto", "Soprano", "Mezzo-soprano", "Contralto"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Mallattoo yeroo 4/4 keessatti dhadhaan meeqa jira?",
					options: ["2", "3", "4", "8"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "Biyyi muuziqaa jazz dhalche kami?",
					options: ["Faransaay", "Ameerikaa", "Biraazil", "Kuubaa"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "'Piano' jecha muuziqaa keessatti maal jechuu dha?",
					options: ["Saffisaa", "Suuta", "Lallaafaa", "Sagalee guddaa"],
					answer: 2,
				},
				{
					type: "arrange",
					question: "Yaadachiisa muuziqaa kana tartiiba dabalaa ta'een kaa'i:",
					items: ["C", "D", "E", "F", "G"],
				},
			],
			Geography: [
				{
					type: "multipleChoice",
					question: "Magaalaan guddoon Jaappaan maali?",
					options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Addunyaa irratti lagni dheeraan kami?",
					options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Addunyaa irratti biyyi xiqqaan kami?",
					options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Tulluu Everest garee tulluuwwan kamii keessa jira?",
					options: ["Andes", "Rocky Mountains", "Himalayas", "Alps"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "Lafa irratti galaanni guddaan kami?",
					options: ["Atlantic", "Indian", "Arctic", "Pacific"],
					answer: 3,
				},
				{
					type: "multipleChoice",
					question: "Addunyaa irratti gammoojjiin guddaan kami?",
					options: ["Sahara", "Gobi", "Kalahari", "Antarctica"],
					answer: 3,
				},
				{
					type: "multipleChoice",
					question: "Magaalaan guddoon Awustiraaliyaa maali?",
					options: ["Sydney", "Melbourne", "Canberra", "Perth"],
					answer: 2,
				},
				{
					type: "arrange",
					question: "Kontinentii kana guddaa irraa xiqqaatti tartiibaan kaa'i:",
					items: [
						"Eeshiyaa",
						"Afrikaa",
						"Ameerikaa Kaabaa",
						"Ameerikaa Kibbaa",
						"Antarctica",
					],
				},
			],
			History: [
				{
					type: "multipleChoice",
					question: "Prezidaantii Amerikaa jalqabaa eenyu dha?",
					options: [
						"Abraham Lincoln",
						"George Washington",
						"John Adams",
						"Thomas Jefferson",
					],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Waraanni Addunyaa lammaffaan bara kamitti xumurameera?",
					options: ["1944", "1945", "1946", "1947"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Ji'a irratti deemee jalqabaa eenyu dha?",
					options: [
						"Buzz Aldrin",
						"Neil Armstrong",
						"John Glenn",
						"Alan Shepard",
					],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Bantii Sistine Chapel eenyu dibee?",
					options: [
						"Leonardo da Vinci",
						"Michelangelo",
						"Raphael",
						"Donatello",
					],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Dallaan Berlin bara kamitti jige?",
					options: ["1987", "1988", "1989", "1990"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "Dubartiin badhaasa Nobel jalqabatti argatte eenyu dha?",
					options: [
						"Marie Curie",
						"Mother Teresa",
						"Jane Addams",
						"Bertha von Suttner",
					],
					answer: 0,
				},
				{
					type: "multipleChoice",
					question: "Julius Caesar mootummaa kamii bulchaa ture?",
					options: [
						"Mootummaa Giriik",
						"Mootummaa Roomaa",
						"Mootummaa Byzantine",
						"Mootummaa Ottoman",
					],
					answer: 1,
				},
				{
					type: "arrange",
					question: "Taateewwan seenaa kana tartiiba yerootiin kaa'i:",
					items: [
						"Waraana Addunyaa Jalqabaa",
						"Waraana Keessoo Ameerikaa",
						"Waraana Addunyaa Lammaffaa",
						"Waraana Qorraa",
						"Waraana Vietnam",
					],
				},
			],
			Math: [
				{
					type: "multipleChoice",
					question: "Hundeen iskuweerii 144 maali?",
					options: ["10", "12", "14", "16"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "15% kan 200 maali?",
					options: ["25", "30", "35", "40"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Gatiin π (pi) gara bakka kurnyee lamatti maali?",
					options: ["3.14", "3.15", "3.16", "3.17"],
					answer: 0,
				},
				{
					type: "multipleChoice",
					question: "8 × 7 maali?",
					options: ["54", "56", "58", "60"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Lakkoofsi jalqabaa 7 booda dhufu kami?",
					options: ["9", "10", "11", "12"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "100 ÷ 4 maali?",
					options: ["20", "25", "30", "35"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Bal'inni rektaangil dheerina 8 fi bal'ina 5 qabu maali?",
					options: ["35", "40", "45", "50"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "2³ (2 humna 3tti) maali?",
					options: ["6", "8", "9", "12"],
					answer: 1,
				},
				{
					type: "arrange",
					question: "Lakkoofsota kana tartiiba dabalaa ta'een kaa'i:",
					items: ["0.25", "0.5", "0.75", "1.0", "1.25"],
				},
			],
		},

		ti: {
			Space: [
				{
					type: "multipleChoice",
					question: "ካብ ጸሓይ ዝቐረበ ፕላኔት እንታይ እዩ?",
					options: ["ቬነስ", "መርኩሪ", "ማርስ", "ምድሪ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ማርስ ክንደይ ወርሓታት ኣለዋ?",
					options: ["0", "1", "2", "4"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "እንታይ ፕላኔት ቀይሕ ፕላኔት ተባሂሉ ይፍለጥ?",
					options: ["ቬነስ", "ማርስ", "ጁፒተር", "ሳተርን"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ኣብ ስርዓተ ጸሓይና ዝዓበየ ፕላኔት እንታይ እዩ?",
					options: ["ሳተርን", "ጁፒተር", "ኔፕቱን", "ዩራነስ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ምድሪ ክንደይ ወርሓታት ኣለዋ?",
					options: ["0", "1", "2", "3"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ስም ጋላክሲና እንታይ እዩ?",
					options: ["ኣንድሮሜዳ", "ወተት መንገዲ", "ዊርልፑል", "ሶምብሬሮ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "እንታይ ፕላኔት ብዙሕ ወርሓታት ኣለዋ?",
					options: ["ጁፒተር", "ሳተርን", "ዩራነስ", "ኔፕቱን"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ኣብ ስርዓተ ጸሓይና ዝሞቐ ፕላኔት እንታይ እዩ?",
					options: ["መርኩሪ", "ቬነስ", "ማርስ", "ጁፒተር"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ፕላኔታት ኣብ ዙርያ ጸሓይ ኣብ ምህዋር ዝሕዞም ሓይሊ እንታይ እዩ?",
					options: ["ማግኔቲዝም", "ስሕበት", "ሴንትሪፉጋል ሓይሊ", "ኑክሌር ሓይሊ"],
					answer: 1,
				},
				{
					type: "arrange",
					question: "እዞም ፕላኔታት ካብ ጸሓይ ቀረባ ናብ ርሑቕ ብቅደም ተኸተል ኣቐምጦም:",
					items: ["መርኩሪ", "ቬነስ", "ምድሪ", "ማርስ", "ጁፒተር"],
				},
			],
			Music: [
				{
					type: "multipleChoice",
					question: "ስታንዳርድ ጊታር ክንደይ ገመድ ኣለዋ?",
					options: ["4", "5", "6", "7"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "'ፎርተ' ኣብ ሙዚቃ እንታይ ማለት እዩ?",
					options: ["ልስሳን", "ዓቢ ድምጺ", "ቅልጡፍ", "ዝሒሉ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ስታንዳርድ ፒያኖ ክንደይ ቁልፊ ኣለዋ?",
					options: ["76", "88", "96", "104"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ትራምፔት ናይ እንታይ ቤተሰብ መሳርሒ ሙዚቃ እዩ?",
					options: ["ገመድ", "ዕንጨይቲ ንፋስ", "ብረት", "ከበሮ"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "ዝለዓለ ናይ ሰበይቲ ድምጺ ዘፈን እንታይ እዩ?",
					options: ["ኣልቶ", "ሶፕራኖ", "ሜዞ-ሶፕራኖ", "ኮንትራልቶ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ኣብ 4/4 ናይ ግዜ ፊርማ ክንደይ ምቶታት ኣለዉ?",
					options: ["2", "3", "4", "8"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "ናይ ጃዝ ሙዚቃ ሃገር ትውልዲ እንታይ እያ?",
					options: ["ፈረንሳይ", "ኣመሪካ", "ብራዚል", "ኩባ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "'ፒያኖ' ኣብ ቃላት ሙዚቃ እንታይ ማለት እዩ?",
					options: ["ቅልጡፍ", "ዝሒሉ", "ልስሳን", "ዓቢ ድምጺ"],
					answer: 2,
				},
				{
					type: "arrange",
					question: "እዞም ናይ ሙዚቃ ማስታወሻታት ብምውሳኽ ቅደም ተኸተል ኣቐምጦም:",
					items: ["ሲ", "ዲ", "ኢ", "ኤፍ", "ጂ"],
				},
			],
			Geography: [
				{
					type: "multipleChoice",
					question: "ናይ ጃፓን ዋና ከተማ እንታይ እያ?",
					options: ["ሶል", "ቶኪዮ", "ቤጂንግ", "ባንኮክ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ኣብ ዓለም ዝነውሐ ወንዚ እንታይ እዩ?",
					options: ["ኣማዞን", "ናይል", "ሚሲሲፒ", "ያንግትዜ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ኣብ ዓለም ዝንእሰ ሃገር እንታይ እያ?",
					options: ["ሞናኮ", "ቫቲካን ከተማ", "ሳን ማሪኖ", "ሊችተንስታይን"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ኤቨረስት ተራራ ናይ እንታይ ሰንሰለት ተራራታት ክፋል እዩ?",
					options: ["ኣንዴስ", "ሮኪ ተራራታት", "ሂማላያ", "ኣልፕስ"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "ኣብ ምድሪ ዝዓበየ ውቅያኖስ እንታይ እዩ?",
					options: ["ኣትላንቲክ", "ህንዲ", "ኣርክቲክ", "ፓሲፊክ"],
					answer: 3,
				},
				{
					type: "multipleChoice",
					question: "ኣብ ዓለም ዝዓበየ በረሃ እንታይ እዩ?",
					options: ["ሳሃራ", "ጎቢ", "ካላሃሪ", "ኣንታርክቲካ"],
					answer: 3,
				},
				{
					type: "multipleChoice",
					question: "ናይ ኣውስትራሊያ ዋና ከተማ እንታይ እያ?",
					options: ["ሲድኒ", "ሜልበርን", "ካንቤራ", "ፐርዝ"],
					answer: 2,
				},
				{
					type: "arrange",
					question: "እዞም ኣህጉራት ካብ ዓቢ ናብ ንእሽቶ ብቅደም ተኸተል ኣቐምጦም:",
					items: ["እስያ", "ኣፍሪቃ", "ሰሜን ኣመሪካ", "ደቡብ ኣመሪካ", "ኣንታርክቲካ"],
				},
			],
			History: [
				{
					type: "multipleChoice",
					question: "ናይ ኣመሪካ ቀዳማይ ፕሬዝደንት ማን እዩ?",
					options: ["ኣብርሃም ሊንከን", "ጆርጅ ዋሽንግተን", "ጆን ኣዳምስ", "ቶማስ ጄፈርሰን"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ካልኣይ ዓለማዊ ውግእ ኣብ እንታይ ዓመት ተወዲኡ?",
					options: ["1944", "1945", "1946", "1947"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ኣብ ወርሒ ዝተመላለሰ ቀዳማይ ሰብ ማን እዩ?",
					options: ["ባዝ ኣልድሪን", "ኒል ኣርምስትሮንግ", "ጆን ግሌን", "ኣላን ሼፓርድ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ናይ ሲስቲን ቻፔል ጣሪያ ዝቀብኦ ማን እዩ?",
					options: ["ሊዮናርዶ ዳ ቪንቺ", "ሚኬላንጄሎ", "ራፋኤል", "ዶናቴሎ"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ናይ በርሊን ግንብ ኣብ እንታይ ዓመት ወደቐ?",
					options: ["1987", "1988", "1989", "1990"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "ቀዳመይቲ ናይ ኖቤል ሽልማት ዝተዓወተት ሰበይቲ ማን እያ?",
					options: ["ማሪ ኪዩሪ", "እንዳ ተረዛ", "ጄን ኣዳምስ", "በርታ ቮን ሱትነር"],
					answer: 0,
				},
				{
					type: "multipleChoice",
					question: "ጁሊየስ ቄሳር ዝገዝኦ ግዝኣት እንታይ እዩ?",
					options: [
						"ናይ ግሪክ ግዝኣት",
						"ናይ ሮማ ግዝኣት",
						"ናይ ቢዛንታይን ግዝኣት",
						"ናይ ኦቶማን ግዝኣት",
					],
					answer: 1,
				},
				{
					type: "arrange",
					question: "እዞም ታሪኻዊ ፍጻመታት ብግዜ ቅደም ተኸተል ኣቐምጦም:",
					items: [
						"ቀዳማይ ዓለማዊ ውግእ",
						"ናይ ኣመሪካ ውሽጣዊ ውግእ",
						"ካልኣይ ዓለማዊ ውግእ",
						"ቀዝቃዝ ውግእ",
						"ናይ ቬትናም ውግእ",
					],
				},
			],
			Math: [
				{
					type: "multipleChoice",
					question: "ናይ 144 ስኩዌር ሩት እንታይ እዩ?",
					options: ["10", "12", "14", "16"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "15% ናይ 200 እንታይ እዩ?",
					options: ["25", "30", "35", "40"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ዋጋ π (ፓይ) ናብ ክልተ ዓሰርተኛ ቦታታት ዝተጠጋገ እንታይ እዩ?",
					options: ["3.14", "3.15", "3.16", "3.17"],
					answer: 0,
				},
				{
					type: "multipleChoice",
					question: "8 × 7 እንታይ እዩ?",
					options: ["54", "56", "58", "60"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ድሕሪ 7 ዝመጽእ ቀጻሊ ቀዳማይ ቁጽሪ እንታይ እዩ?",
					options: ["9", "10", "11", "12"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "100 ÷ 4 እንታይ እዩ?",
					options: ["20", "25", "30", "35"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "ናይ ርክተንግል ዝነውሐ 8 ዝሰፍሐ 5 ዘለዎ ስፍሓት እንታይ እዩ?",
					options: ["35", "40", "45", "50"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "2³ (2 ናብ ሓይሊ 3) እንታይ እዩ?",
					options: ["6", "8", "9", "12"],
					answer: 1,
				},
				{
					type: "arrange",
					question: "እዞም ቁጽርታት ብምውሳኽ ቅደም ተኸተል ኣቐምጦም:",
					items: ["0.25", "0.5", "0.75", "1.0", "1.25"],
				},
			],
		},

		so: {
			Space: [
				{
					type: "multipleChoice",
					question: "Meesha ugu dhow qorraxda waa kee?",
					options: ["Venus", "Mercury", "Mars", "Dhulka"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Mars waxay leedahay imisa dayax?",
					options: ["0", "1", "2", "4"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "Meeraha loo yaqaan Meeraha Cas waa kee?",
					options: ["Venus", "Mars", "Jupiter", "Saturn"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Nidaamka qorraxdeenna meeraha ugu weyn waa kee?",
					options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Dhulku wuxuu leeyahay imisa dayax?",
					options: ["0", "1", "2", "3"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Magaca galaxy-geenna waa maxay?",
					options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Meeraha dayaxyada badan leh waa kee?",
					options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Nidaamka qorraxdeenna meeraha ugu kulul waa kee?",
					options: ["Mercury", "Venus", "Mars", "Jupiter"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Xoogga meerayaasha ku haya wareegga qorraxda waa maxay?",
					options: ["Magnetism", "Cuf", "Centrifugal force", "Nuclear force"],
					answer: 1,
				},
				{
					type: "arrange",
					question: "Meerayashan u kala saar qorraxda dhow ilaa mid fog:",
					items: ["Mercury", "Venus", "Dhulka", "Mars", "Jupiter"],
				},
			],
			Music: [
				{
					type: "multipleChoice",
					question: "Gitaar caadi ah wuxuu leeyahay imisa xarig?",
					options: ["4", "5", "6", "7"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "'Forte' muusikada dhexdeeda maxay ka dhigan tahay?",
					options: ["Jilicsan", "Cod weyn", "Degdeg", "Gaabis"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Piano caadi ah wuxuu leeyahay imisa furaha?",
					options: ["76", "88", "96", "104"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Trumpet waa qoys aaladaha muusikada kee?",
					options: ["Xarig", "Qori neef", "Bir", "Durbaan"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "Codka heesaha dumarka ugu sarreeya waa kee?",
					options: ["Alto", "Soprano", "Mezzo-soprano", "Contralto"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Calaamadda waqtiga 4/4 dhexdeeda imisa garaac baa jira?",
					options: ["2", "3", "4", "8"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "Dalka muusikada jazz ka dhashay waa kee?",
					options: ["Faransiiska", "Maraykanka", "Brazil", "Cuba"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question:
						"'Piano' erayada muusikada dhexdooda maxay ka dhigan tahay?",
					options: ["Degdeg", "Gaabis", "Jilicsan", "Cod weyn"],
					answer: 2,
				},
				{
					type: "arrange",
					question: "Xusuusiyaasha muusikadan u kala saar tartib kordhinta:",
					items: ["C", "D", "E", "F", "G"],
				},
			],
			Geography: [
				{
					type: "multipleChoice",
					question: "Caasimada Japan waa tee?",
					options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Adduunka webiga ugu dheer waa kee?",
					options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Adduunka dalka ugu yar waa kee?",
					options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Buurta Everest waxay ka mid tahay silsilad buuro kee?",
					options: ["Andes", "Rocky Mountains", "Himalayas", "Alps"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "Dhulka badda ugu weyn waa tee?",
					options: ["Atlantic", "Indian", "Arctic", "Pacific"],
					answer: 3,
				},
				{
					type: "multipleChoice",
					question: "Adduunka lamadegaanka ugu weyn waa kee?",
					options: ["Sahara", "Gobi", "Kalahari", "Antarctica"],
					answer: 3,
				},
				{
					type: "multipleChoice",
					question: "Caasimada Australia waa tee?",
					options: ["Sydney", "Melbourne", "Canberra", "Perth"],
					answer: 2,
				},
				{
					type: "arrange",
					question: "Qaaradahan u kala saar weyn ilaa yar:",
					items: [
						"Asia",
						"Afrika",
						"Waqooyiga Ameerika",
						"Koonfurta Ameerika",
						"Antarctica",
					],
				},
			],
			History: [
				{
					type: "multipleChoice",
					question: "Madaxweynihii ugu horreeyay ee Mareykanka waa kuma?",
					options: [
						"Abraham Lincoln",
						"George Washington",
						"John Adams",
						"Thomas Jefferson",
					],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Dagaalkii Labaad ee Adduunka sannad kee buu ku dhamaaday?",
					options: ["1944", "1945", "1946", "1947"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Qofkii ugu horreeyay ee dayaxa ku socday waa kuma?",
					options: [
						"Buzz Aldrin",
						"Neil Armstrong",
						"John Glenn",
						"Alan Shepard",
					],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Kii rinjiyeeyay saqafka Sistine Chapel waa kuma?",
					options: [
						"Leonardo da Vinci",
						"Michelangelo",
						"Raphael",
						"Donatello",
					],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Derbiga Berlin sannad kee buu dhacay?",
					options: ["1987", "1988", "1989", "1990"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question:
						"Naagta ugu horreysay ee abaalmarinta Nobel heshatay waa tuma?",
					options: [
						"Marie Curie",
						"Mother Teresa",
						"Jane Addams",
						"Bertha von Suttner",
					],
					answer: 0,
				},
				{
					type: "multipleChoice",
					question: "Julius Caesar boqortooyadee buu xukumi jiray?",
					options: [
						"Boqortooyada Giriigga",
						"Boqortooyada Roomaanka",
						"Boqortooyada Byzantine",
						"Boqortooyada Ottoman",
					],
					answer: 1,
				},
				{
					type: "arrange",
					question: "Dhacdooyinkan taariikhiga ah u kala saar tartib waqti:",
					items: [
						"Dagaalkii Koowaad ee Adduunka",
						"Dagaalkii Sokeeye ee Ameerika",
						"Dagaalkii Labaad ee Adduunka",
						"Dagaalkii Qabow",
						"Dagaalkii Vietnam",
					],
				},
			],
			Math: [
				{
					type: "multipleChoice",
					question: "Xididka laba jibaaran ee 144 waa imisa?",
					options: ["10", "12", "14", "16"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "15% ee 200 waa imisa?",
					options: ["25", "30", "35", "40"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question:
						"Qiimaha π (pi) ee loo dhimay laba meelood toban-meelaha waa imisa?",
					options: ["3.14", "3.15", "3.16", "3.17"],
					answer: 0,
				},
				{
					type: "multipleChoice",
					question: "8 × 7 waa imisa?",
					options: ["54", "56", "58", "60"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Lambarka aasaasiga ah ee 7 ka dambeeya waa kee?",
					options: ["9", "10", "11", "12"],
					answer: 2,
				},
				{
					type: "multipleChoice",
					question: "100 ÷ 4 waa imisa?",
					options: ["20", "25", "30", "35"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "Bedka rectangle dhererka 8 ballaadhka 5 leh waa imisa?",
					options: ["35", "40", "45", "50"],
					answer: 1,
				},
				{
					type: "multipleChoice",
					question: "2³ (2 ilaa awoodda 3aad) waa imisa?",
					options: ["6", "8", "9", "12"],
					answer: 1,
				},
				{
					type: "arrange",
					question: "Lambaradan u kala saar tartib kordhinta:",
					items: ["0.25", "0.5", "0.75", "1.0", "1.25"],
				},
			],
		},
	} as any;

	// const questions = {
	// 	en: {
	// 		Space: [
	// 			{
	// 				type: "multipleChoice",
	// 				question: "What is the closest planet to the Sun?",
	// 				options: ["Venus", "Mercury", "Mars", "Earth"],
	// 				answer: 1,
	// 			},
	// 			{
	// 				type: "arrange",
	// 				question:
	// 					"Arrange the planets in order from closest to farthest from the Sun:",
	// 				items: ["Mercury", "Venus", "Earth", "Mars", "Jupiter"],
	// 			},
	// 			{
	// 				type: "image",
	// 				question: "What celestial body is shown in this image?",
	// 				imageUrl: "/assets/images/questions/q1.jpeg?height=300&width=300",
	// 				options: ["Earth", "Mars", "Jupiter", "Saturn"],
	// 				answer: 1,
	// 			},
	// 			{
	// 				type: "sound",
	// 				question: "What space phenomenon does this sound represent?",
	// 				audioUrl: "/assets/images/questions/q1-sounds.mp3",
	// 				options: ["Black Hole", "Supernova", "Pulsar", "Solar Wind"],
	// 				answer: 2,
	// 			},
	// 			// ... (add more space questions)
	// 		],
	// 		Music: [
	// 			{
	// 				type: "sound",
	// 				question: "Which instrument is playing in this audio clip?",
	// 				audioUrl: "/instrument-sound.mp3",
	// 				options: ["Piano", "Guitar", "Violin", "Flute"],
	// 				answer: 0,
	// 			},
	// 			{
	// 				type: "image",
	// 				question: "What is the name of this musical notation symbol?",
	// 				imageUrl: "/placeholder.svg?height=100&width=100",
	// 				options: ["Treble Clef", "Bass Clef", "Alto Clef", "Tenor Clef"],
	// 				answer: 0,
	// 			},
	// 		],
	// 		Geography: [
	// 			{
	// 				type: "multipleChoice",
	// 				question: "What is the capital of Japan?",
	// 				options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
	// 				answer: 1,
	// 			},
	// 			{
	// 				type: "arrange",
	// 				question:
	// 					"Arrange these countries from largest to smallest by land area:",
	// 				items: ["Russia", "Canada", "China", "United States", "Brazil"],
	// 			},
	// 			// ... (add more geography questions)
	// 		],
	// 		History: [
	// 			{
	// 				question: "Who is known as the first president of the United States?",
	// 				options: [
	// 					"Abraham Lincoln",
	// 					"George Washington",
	// 					"John Adams",
	// 					"Thomas Jefferson",
	// 				],
	// 				answer: 1,
	// 			},
	// 			// ... (add more history questions)
	// 		],
	// 		Math: [
	// 			{
	// 				question: "What is the square root of 144?",
	// 				options: ["10", "12", "14", "16"],
	// 				answer: 1,
	// 			},
	// 			// ... (add more math questions)
	// 		],
	// 	},

	// 	am: [
	// 		{
	// 			question: "ከፀሐይ በጣም የቀረበው ፕላኔት የትኛው ነው?",
	// 			options: ["ቬነስ", "ሜርኩሪ", "ማርስ", "ምድር"],
	// 			answer: 1,
	// 		},
	// 		{
	// 			question: "ማርስ ስንት ጨረቃዎች አሉት?",
	// 			options: ["0", "1", "2", "4"],
	// 			answer: 2,
	// 		},
	// 		{
	// 			question: "የ2018 ዓ.ም የእግር ኳስ ዓለም ዋንጫ የማሸነፈው ሃገር የትኛው ነበር?",
	// 			options: ["ብራዚል", "ጀርመን", "ፈረንሳይ", "አርጀንቲና"],
	// 			answer: 2,
	// 		},
	// 		{
	// 			question: "የጃፓን ከተማ ዋና ከተማ ማን ነው?",
	// 			options: ["ሶል", "ቶኪዮ", "ቤዂንግ", "ባንኮክ"],
	// 			answer: 1,
	// 		},
	// 		{
	// 			question: "አሜሪካን ከፍተኛ ስራ ያረገው የመጀመሪያው ፕሬዝዳንት ማን ነው?",
	// 			options: ["አብራሃም ሊንኮልን", "ጆርጅ ዋሽንግተን", "ጆን አዳምስ", "ቶማስ ጀፈርሰን"],
	// 			answer: 1,
	// 		},
	// 	],
	// 	om: [
	// 		{
	// 			question: "Addunyaa Biiftuu irraa dhihoo kami?",
	// 			options: ["Venus", "Mercury", "Mars", "Dachee"],
	// 			answer: 1,
	// 		},
	// 		{
	// 			question: "Mars ji'oota meeqa qaba?",
	// 			options: ["0", "1", "2", "4"],
	// 			answer: 2,
	// 		},
	// 		{
	// 			question: "Guddichi tapha Kubbaa Miillaa 2018 moo'ate kam?",
	// 			options: ["Biraaziil", "Jarmanii", "Faransaayii", "Arjentiinaa"],
	// 			answer: 2,
	// 		},
	// 		{
	// 			question: "Kaaba Tokkoffaa Jaappaan maali?",
	// 			options: ["Sool", "Tokiyoo", "Beijing", "Baankook"],
	// 			answer: 1,
	// 		},
	// 		{
	// 			question: "Prezidaantii Amerikaa jalqabaa eenyu dha?",
	// 			options: [
	// 				"Abrahaam Liinkoolin",
	// 				"George Washington",
	// 				"John Adams",
	// 				"Thomas Jefferson",
	// 			],
	// 			answer: 1,
	// 		},
	// 	],
	// 	ti: [
	// 		{
	// 			question: "ካብ ጸሓይ ዝቐረበ ፕላኔት እንታይ እዩ?",
	// 			options: ["ቬነስ", "መርኩሪ", "ማርስ", "ምድሪ"],
	// 			answer: 1,
	// 		},
	// 		{
	// 			question: "ማርስ ክንደይ ወርሓታት ኣለዋ?",
	// 			options: ["0", "1", "2", "4"],
	// 			answer: 2,
	// 		},
	// 		{
	// 			question: "ኣብ 2018 ዓ.ም ዓለም ዋንጫ ስነተጫወት ዝረኽብ ሃገር እንታይ እያ?",
	// 			options: ["ብራዚል", "ጀርመን", "ፈረንሳይ", "አርጀንቲና"],
	// 			answer: 2,
	// 		},
	// 		{
	// 			question: "ናይ ጃፓን ዋና ከተማ ስም እንታይ እዩ?",
	// 			options: ["ሶል", "ቶኪዮ", "ቤጂንግ", "ባንኮክ"],
	// 			answer: 1,
	// 		},
	// 		{
	// 			question: "ንኢድ ዩናይትድ ስቴትስ ቀዳማይ ፕሬዝደንት ማን እዩ?",
	// 			options: ["አብርሃም ሊንኮልን", "ጆርጅ ዋሽንግተን", "ጆን አዳምስ", "ቶማስ ጄፈርሰን"],
	// 			answer: 1,
	// 		},
	// 	],
	// 	so: [
	// 		{
	// 			question: "Meesha ugu dhow qorraxda waa kee?",
	// 			options: ["Venus", "Mercury", "Mars", "Dhulka"],
	// 			answer: 1,
	// 		},
	// 		{
	// 			question: "Mars waxay leedahay imisa dayax?",
	// 			options: ["0", "1", "2", "4"],
	// 			answer: 2,
	// 		},
	// 		{
	// 			question: "Yaa qaaday koobkii adduunka ee FIFA 2018?",
	// 			options: ["Brazil", "Germany", "France", "Argentina"],
	// 			answer: 2,
	// 		},
	// 		{
	// 			question: "Caasimada Japan waa tee?",
	// 			options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
	// 			answer: 1,
	// 		},
	// 		{
	// 			question: "Madaxweynihii ugu horreeyay ee Mareykanka waa kuma?",
	// 			options: [
	// 				"Abraham Lincoln",
	// 				"George Washington",
	// 				"John Adams",
	// 				"Thomas Jefferson",
	// 			],
	// 			answer: 1,
	// 		},
	// 	],
	// } as any;

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
