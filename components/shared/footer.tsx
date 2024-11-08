import React from "react";
import Link from "next/link";
import {
	HomeIcon,
	ListIcon,
	ShoppingCartIcon,
	UserIcon,
	MenuIcon,
} from "./common";
import { PackageIcon } from "lucide-react";

export default function Footer() {
	return (
		<div>
			<nav className="bg-background border-t flex justify-between py-2 fixed bottom-0 w-full px-6">
				<Link
					href="/"
					className="flex flex-col justify-center items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<HomeIcon className="w-6 h-6" />
					<span className="text-xs">Home</span>
				</Link>
				<Link
					href="/cart"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<ShoppingCartIcon className="w-6 h-6" />
					<span className="text-xs">Cart</span>
				</Link>
				<Link
					href="/post"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<MenuIcon className="w-6 h-6" />
					<span className="text-xs">Post</span>
				</Link>
				<Link
					href="/orders"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<PackageIcon className="w-6 h-6" />
					<span className="text-xs">Orders</span>
				</Link>
				<Link
					href="/profile"
					className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
					prefetch={false}>
					<UserIcon className="w-6 h-6" />
					<span className="text-xs">Profile</span>
				</Link>
			</nav>
		</div>
	);
}
