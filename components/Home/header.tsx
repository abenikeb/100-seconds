"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
	Search,
	Menu,
	Package,
	MessageSquare,
	ChevronRight,
	X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetClose,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { getCategories } from "@/lib/data";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { LoadingDots } from "@components/shared/icons";

// Mock functions for user session and vendor status - replace these with your actual authentication logic
const checkUserSession = () => {
	// Simulating an async operation
	return new Promise((resolve) => {
		setTimeout(() => {
			// For demo purposes, we'll randomly decide if a session exists
			resolve(Math.random() > 0.5);
		}, 500);
	});
};

const checkVendorStatus = () => {
	// Simulating an async operation
	return new Promise((resolve) => {
		setTimeout(() => {
			// For demo purposes, we'll randomly decide if the user is a vendor
			resolve(Math.random() > 0.5);
		}, 500);
	});
};

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isVendorModalOpen, setIsVendorModalOpen] = useState(false);
	const [isProductsOpen, setIsProductsOpen] = useState(false);
	const [isMessagesOpen, setIsMessagesOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [categories, setCategories] = useState<any>([]);
	const [vendorName, setVendorName] = useState("");
	const [vendorEmail, setVendorEmail] = useState("");
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [userSession, setUserSession] = useState(false);
	const [isVendor, setIsVendor] = useState(false);
	const [signInClicked, setSignInClicked] = useState(false);
	const [loading, setLoading] = useState(false);
	const [providers, setProviders] = useState<any>(null);
	const { data: session } = useSession();
	const router = useRouter();

	const fetchCategories = async () => {
		const fetchedCategories = await getCategories();
		setCategories(fetchedCategories);
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	useEffect(() => {
		(async () => {
			const res = await getProviders();
			setProviders(res);
			if (session?.user?.email) {
			}
			console.log({ res });
		})();
	}, []);

	const menuSections = [
		{ name: "Best Sellers", href: "/best-sellers" },
		{ name: "New Releases", href: "/new-releases" },
		{ name: "Today's Deals", href: "/deals" },
		{ name: "Customer Service", href: "/customer-service" },
	];

	const productMenuItems = [
		{ name: "My Listings", href: "/my-listings" },
		{ name: "Sold Items", href: "/sold-items" },
		{ name: "Create Listing", href: "/create-listing" },
		{ name: "Product Analytics", href: "/product-analytics" },
	];

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send the loginEmail and loginPassword to your backend
		console.log("Login attempt:", { loginEmail, loginPassword });
		const sessionExists = await checkUserSession();
		setUserSession(sessionExists as any);
		setIsLoginModalOpen(false);
		// Reset form fields
		setLoginEmail("");
		setLoginPassword("");
		if (sessionExists) {
			const vendorStatus = await checkVendorStatus();
			setIsVendor(vendorStatus as any);
			if (!vendorStatus) {
				setIsVendorModalOpen(true);
			}
		}
	};

	const handleVendorRegistration = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send the vendorName and vendorEmail to your backend
		console.log("Vendor Registration:", { vendorName, vendorEmail });
		setIsVendor(true);
		setIsVendorModalOpen(false);
		// Reset form fields
		setVendorName("");
		setVendorEmail("");
	};

	const handleIconClick = async (type: "messages" | "products") => {
		if (!session?.user) {
			setIsLoginModalOpen(true);
			return;
		}
		// if (!isVendor) {
		// 	setIsVendorModalOpen(true);
		// 	return;
		// }
		if (type === "messages") {
			router.push("/messagesPage");
		} else {
			router.push("/myProducts");
			// setIsProductsOpen(true);
		}
	};

	return (
		<header className="bg-[#232f3f] sticky top-0 z-50 w-full backdrop-blur text-white">
			<div className="container mx-auto px-4 py-2">
				<div className="flex items-center justify-between ">
					<div className="flex items-center space-x-2">
						<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon" className="text-white">
									<Menu className="h-6 w-6" />
									<span className="sr-only">Toggle menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent
								side="left"
								className="w-[300px] sm:w-[400px] bg-white">
								<ScrollArea className="h-full">
									<div className="flex flex-col gap-6 p-6">
										<Link
											href="/"
											className="flex items-center space-x-2"
											onClick={() => setIsMenuOpen(false)}>
											<Image
												src="/assets/images/logo3.png"
												alt="Logo"
												width={80}
												height={30}
												className="object-contain"
											/>
										</Link>
										<nav className="space-y-6">
											<div className="space-y-3">
												<h3 className="font-semibold text-lg text-gray-900">
													Shop By Category
												</h3>
												{categories.map((category: any) => (
													<Link
														key={category.name}
														href={`/category/${category.value.toLowerCase()}`}
														className="flex items-center justify-between text-sm text-gray-600 hover:text-amber-600 transition-colors"
														onClick={() => setIsMenuOpen(false)}>
														<span className="flex items-center space-x-2">
															<category.icon className="h-5 w-5" />
															<span>{category.name}</span>
														</span>
														<ChevronRight className="h-4 w-4" />
													</Link>
												))}
											</div>
											<div className="space-y-3">
												<h3 className="font-semibold text-lg text-gray-900">
													Programs & Features
												</h3>
												{menuSections.map((section) => (
													<Link
														key={section.name}
														href={section.href}
														className="flex items-center justify-between text-sm text-gray-600 hover:text-amber-600 transition-colors"
														onClick={() => setIsMenuOpen(false)}>
														<span>{section.name}</span>
														<ChevronRight className="h-4 w-4" />
													</Link>
												))}
											</div>
										</nav>
									</div>
								</ScrollArea>
							</SheetContent>
						</Sheet>
						<Link href="/">
							<Image
								src="/assets/images/logo2.png"
								alt="Logo"
								width={65}
								height={20}
								className="object-contain"
							/>
						</Link>
					</div>

					<div className="flex items-center space-x-8 mr-2">
						<Button
							variant="ghost"
							size="icon"
							className="text-white hover:text-yellow-300 transition-colors flex flex-col items-center"
							onClick={() => handleIconClick("messages")}>
							<MessageSquare className="h-6 w-6" />
							<span className="text-xs mt-1">Messages</span>
						</Button>
						<Button
							variant="ghost"
							size="icon"
							className="text-white hover:text-yellow-300 transition-colors flex flex-col items-center"
							onClick={() => handleIconClick("products")}>
							<Package className="h-6 w-6" />
							<span className="text-xs mt-1">My Products</span>
						</Button>
					</div>
				</div>
			</div>

			{/* Log In*/}
			<Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Log In</DialogTitle>
						<DialogDescription>
							Please log in to access your account.
						</DialogDescription>
					</DialogHeader>
					<div className="mt-6">
						{providers &&
							Object.values(providers)
								.filter((provider: any) => provider.id === "google")
								.map((provider: any) => (
									<Button
										key={provider.name}
										onClick={() => {
											signIn(provider.id);
											setSignInClicked(true);
										}}
										className="w-full bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 transition duration-150 ease-in-out h-10 text-base"
										disabled={signInClicked}>
										{signInClicked ? (
											<LoadingDots color="#1e3a8a" />
										) : (
											<span className="flex items-center justify-center">
												<svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
													<path
														fill="#4285F4"
														d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
													/>
													<path
														fill="#34A853"
														d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
													/>
													<path
														fill="#FBBC05"
														d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
													/>
													<path
														fill="#EA4335"
														d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
													/>
													<path fill="none" d="M1 1h22v22H1z" />
												</svg>
												Continue with Google
											</span>
										)}
									</Button>
								))}
					</div>
					{/* <form onSubmit={handleLogin}>
						<div className="grid gap-4 py-4">
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="login-email" className="text-right">
									Email
								</Label>
								<Input
									id="login-email"
									type="email"
									value={loginEmail}
									onChange={(e) => setLoginEmail(e.target.value)}
									className="col-span-3"
									required
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="login-password" className="text-right">
									Password
								</Label>
								<Input
									id="login-password"
									type="password"
									value={loginPassword}
									onChange={(e) => setLoginPassword(e.target.value)}
									className="col-span-3"
									required
								/>
							</div>
						</div>
						<DialogFooter>
							<Button type="submit">Log In</Button>
						</DialogFooter>
					</form> */}
				</DialogContent>
			</Dialog>

			{/* Register as a Vendor */}
			<Dialog open={isVendorModalOpen} onOpenChange={setIsVendorModalOpen}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Register as a Vendor</DialogTitle>
						<DialogDescription>
							Enter your details to register as a vendor and start selling your
							products.
						</DialogDescription>
					</DialogHeader>
					<form onSubmit={handleVendorRegistration}>
						<div className="grid gap-4 py-4">
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="vendor-name" className="text-right">
									Name
								</Label>
								<Input
									id="vendor-name"
									value={vendorName}
									onChange={(e) => setVendorName(e.target.value)}
									className="col-span-3"
									required
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="vendor-email" className="text-right">
									Email
								</Label>
								<Input
									id="vendor-email"
									type="email"
									value={vendorEmail}
									onChange={(e) => setVendorEmail(e.target.value)}
									className="col-span-3"
									required
								/>
							</div>
						</div>
						<DialogFooter>
							<Button type="submit">Register</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>

			{/* Your messages will appear here. */}
			<Sheet open={isMessagesOpen} onOpenChange={setIsMessagesOpen}>
				<SheetContent side="right" className="w-[300px] sm:w-[400px]">
					<SheetHeader>
						<SheetTitle>Messages</SheetTitle>
					</SheetHeader>
					<div className="py-4">
						{/* Add your messages list component here */}
						<p>Your messages will appear here.</p>
					</div>
				</SheetContent>
			</Sheet>

			{/* Products will appear here. */}
			<Sheet open={isProductsOpen} onOpenChange={setIsProductsOpen}>
				<SheetContent side="right" className="w-[300px] sm:w-[400px]">
					<SheetHeader>
						<SheetTitle>My Products</SheetTitle>
					</SheetHeader>
					<ScrollArea className="h-[calc(100vh-100px)] pr-4">
						<div className="space-y-4 py-4">
							{productMenuItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="flex items-center justify-between py-2 text-sm hover:text-amber-600 transition-colors"
									onClick={() => setIsProductsOpen(false)}>
									<span>{item.name}</span>
									<ChevronRight className="h-4 w-4" />
								</Link>
							))}
						</div>
					</ScrollArea>
				</SheetContent>
			</Sheet>
		</header>
	);
}
