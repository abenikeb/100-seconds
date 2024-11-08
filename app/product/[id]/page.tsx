"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	Heart,
	MessageCircle,
	Share2,
	ChevronLeft,
	ChevronRight,
	Star,
	ArrowLeft,
	ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

export default function ProductPostPage() {
	const router = useRouter();
	const [currentImage, setCurrentImage] = useState(0);

	const product = {
		name: "4K OLED TV",
		price: 2299.99,
		description:
			"Experience stunning visuals with our latest 4K OLED technology.",
		condition: "Brand - New",
		category: "televisions",
		location: "Addis Ababa, Mexico",
		images: [
			"/assets/images/4k_tv.jpg?height=400&width=600",
			"/assets/images/product2.jpg?height=400&width=600",
			"/assets/images/product3.jpg?height=400&width=600",
		],
		seller: {
			name: "Biisho Market",
			rating: 4.8,
			totalSales: 52,
			avatar: "/placeholder.svg?height=40&width=40",
		},
	};

	const nextImage = () => {
		setCurrentImage((prev) => (prev + 1) % product.images.length);
	};

	const prevImage = () => {
		setCurrentImage(
			(prev) => (prev - 1 + product.images.length) % product.images.length
		);
	};

	const handleBuyNow = (productId: string) => {
		router.push(`/checkout`);
	};

	return (
		<div className="container mx-auto px-4 py-3">
			<header className="flex justify-between items-center mb-8">
				<Button variant="ghost" size="icon" asChild>
					<Link href="/">
						<ArrowLeft className="h-6 w-6" />
						<span className="sr-only">Back</span>
					</Link>
				</Button>
				<h1 className="text-2xl font-bold hidden md:block">{product.name}</h1>
				<Button size="icon">
					<ShoppingCart className="h-6 w-6" />
					<span className="sr-only">View cart</span>
				</Button>
			</header>
			<div className="grid gap-8 md:grid-cols-2">
				<div className="space-y-4">
					<div className="relative aspect-video">
						<Image
							src={product.images[currentImage]}
							alt={`${product.name} - Image ${currentImage + 1}`}
							layout="fill"
							objectFit="cover"
							className="rounded-lg"
						/>
						<Button
							variant="outline"
							size="icon"
							className="absolute left-2 top-1/2 -translate-y-1/2"
							onClick={prevImage}>
							<ChevronLeft className="h-4 w-4" />
						</Button>
						<Button
							variant="outline"
							size="icon"
							className="absolute right-2 top-1/2 -translate-y-1/2"
							onClick={nextImage}>
							<ChevronRight className="h-4 w-4" />
						</Button>
					</div>
					<div className="flex justify-center space-x-2">
						{product.images.map((_, index) => (
							<Button
								key={index}
								variant={index === currentImage ? "default" : "outline"}
								size="icon"
								onClick={() => setCurrentImage(index)}>
								{index + 1}
							</Button>
						))}
					</div>
				</div>
				<div className="space-y-6">
					<div>
						<h1 className="text-3xl font-bold">{product.name}</h1>
						<p className="text-2xl font-semibold mt-2">
							{product.price.toFixed(2)} Birr
						</p>
					</div>
					<div className="flex space-x-2">
						<Badge>{product.condition}</Badge>
						<Badge variant="outline">{product.category}</Badge>
					</div>
					<p className="text-muted-foreground">{product.description}</p>
					<div className="flex items-center space-x-4">
						<Button onClick={() => handleBuyNow("roductId")} className="flex-1">
							Buy Now
						</Button>

						<Button variant="outline" size="icon">
							<Heart className="h-4 w-4" />
						</Button>
						<Button variant="outline" size="icon">
							<Share2 className="h-4 w-4" />
						</Button>
					</div>
					<Card>
						<CardContent className="p-4">
							<div className="flex items-center space-x-4">
								<Avatar>
									<AvatarImage
										src={product.seller.avatar}
										alt={product.seller.name}
									/>
									<AvatarFallback>{product.seller.name[0]}</AvatarFallback>
								</Avatar>
								<div>
									<p className="font-medium">{product.seller.name}</p>
									<div className="flex items-center">
										<Star className="h-4 w-4 text-yellow-400 fill-current" />
										<span className="ml-1 text-sm">
											{product.seller.rating} • {product.seller.totalSales}{" "}
											sales
										</span>
									</div>
								</div>
							</div>
							<Button variant="outline" className="w-full mt-4">
								<MessageCircle className="mr-2 h-4 w-4" />
								Contact Seller
							</Button>
						</CardContent>
					</Card>
					<p className="text-sm text-muted-foreground">
						Located in: {product.location}
					</p>
				</div>
			</div>
			<Tabs defaultValue="details" className="mt-8">
				<TabsList>
					<TabsTrigger value="details">Details</TabsTrigger>
					<TabsTrigger value="shipping">Shipping</TabsTrigger>
					<TabsTrigger value="seller">Seller</TabsTrigger>
				</TabsList>
				<TabsContent value="details" className="mt-4">
					<h2 className="text-xl font-semibold mb-2">Product Details</h2>
					<ul className="list-disc pl-5 space-y-1">
						<li>Material: Televisions</li>
						<li>Color: Brown</li>
						<li>Dimensions: 30" W x 35" D x 38" H</li>
						<li>Weight: one lbs</li>
						<li>Year of manufacture: Circa 2024s</li>
					</ul>
				</TabsContent>
				<TabsContent value="shipping" className="mt-4">
					<h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
					<p>
						This item is available for local pickup in Addis Ababa City or can
						be shipped nationwide.
					</p>
					<p className="mt-2">
						Estimated shipping cost: 50 Birr - 100 Birr depending on location
					</p>
					<p className="mt-2">Delivery time: 5-7 business days</p>
				</TabsContent>
				<TabsContent value="seller" className="mt-4">
					<h2 className="text-xl font-semibold mb-2">About the Seller</h2>
					<p>
						{product.seller.name} has been a trusted seller on our platform
						since 2019.
					</p>
					<p className="mt-2">Specializes in vintage Laptop and home decor.</p>
					<p className="mt-2">
						Return policy: 14-day returns accepted for items in original
						condition.
					</p>
				</TabsContent>
			</Tabs>
		</div>
	);
}
