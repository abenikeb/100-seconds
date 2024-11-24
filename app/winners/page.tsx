import { WinnersSection } from "@/components/Home/WinnersSection";

// This data would typically come from an API or database
const winners = [
	{ name: "Alice Johnson", phone: "+1 234-567-8901", prize: "iPhone 13 Pro" },
	{ name: "Bob Smith", phone: "+1 345-678-9012", prize: "MacBook Air" },
	{ name: "Charlie Brown", phone: "+1 456-789-0123", prize: "AirPods Pro" },
	{ name: "Diana Prince", phone: "+1 567-890-1234", prize: "iPad Mini" },
	{ name: "Ethan Hunt", phone: "+1 678-901-2345", prize: "Apple Watch" },
	{ name: "Fiona Gallagher", phone: "+1 789-012-3456", prize: "HomePod Mini" },
];

const translations = {
	en: {
		winners: "Winners",
		prize: "Prize",
	},
	// Add other languages as needed
};

export default function WinnersPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
			<WinnersSection
				winners={winners}
				translations={translations}
				language="en"
			/>
		</div>
	);
}
