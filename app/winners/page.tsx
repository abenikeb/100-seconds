import { WinnersSection } from "@/components/Home/WinnersSection";
import { HeaderWinner } from "@/components/Home/HeaderWinner";

// This data would typically come from an API or database
const winners = {
	instant: [
		{
			name: "Abebe Kebede",
			phone: "+251 91* *** **01",
			prize: "iPhone 13 Pro",
		},
		{ name: "Tigist Haile", phone: "+251 92* *** **12", prize: "MacBook Air" },
		{ name: "Dawit Tadesse", phone: "+251 93* *** **23", prize: "AirPods Pro" },
	],
	weekly: [
		{
			name: "Hiwot Gebremariam",
			phone: "+251 94* *** **34",
			prize: "iPad Mini",
		},
		{
			name: "Yohannes Alemu",
			phone: "+251 95* *** **45",
			prize: "Apple Watch",
		},
		{ name: "Meron Assefa", phone: "+251 96* *** **56", prize: "HomePod Mini" },
	],
};

const translations = {
	en: {
		winners: "Winners",
		prize: "Prize",
		instantWinners: "Instant Winners",
		weeklyWinners: "This Week's Winners",
		back: "Back",
	},
	// Add other languages as needed
};

export default function WinnersPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
			<HeaderWinner translations={translations} language="en" />
			<WinnersSection
				winners={winners}
				translations={translations}
				language="en"
			/>
		</div>
	);
}
