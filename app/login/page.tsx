"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { LoadingDots } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { checkUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { UserIcon, PhoneIcon, MailIcon } from "lucide-react";

const formSchema = z.object({
	phone: z
		.string()
		.regex(/^\d{1,3}\d{10}$/, "Please enter a valid phone number."),
});

export default function LoginPage() {
	const { data: session } = useSession();
	const router = useRouter();
	const [signInClicked, setSignInClicked] = useState(false);
	const [providers, setProviders] = useState<any>(null);
	const [loading, setLoading] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			phone: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setLoading(true);

		try {
			const userResult = await checkUser(values.phone);
			if (userResult && userResult.code === "2") {
				return router.push(`/verification?phone=${values.phone}`);
			}
			const result: any = await signIn("credentials", {
				redirect: false,
				phone: values.phone,
			});

			console.log({ result });

			if (result.error) {
				console.error("Sign-in Error:", result.error);
				return;
			}

			window.location.href = "/";
		} catch (error) {
			console.error("An error occurred during sign-in:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		(async () => {
			const res = await getProviders();
			setProviders(res);
			console.log({ res });
		})();
	}, []);

	return (
		<div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
			<div className="flex-1 hidden lg:flex lg:flex-col lg:justify-center lg:items-center">
				<div className="text-center text-white mb-8">
					<h1 className="text-5xl font-bold mb-4">Welcome to Quizcroll</h1>
					<p className="text-xl">{`Your gateway to seamless connections`}</p>
				</div>
				<Image
					src="/images/login-illustration.svg"
					alt="Login Illustration"
					width={600}
					height={600}
					className="max-w-2xl opacity-80"
				/>
			</div>
			<div className="flex-1 flex flex-col mt-12 items-center px-4 sm:px-6 lg:px-8">
				<div className="w-full max-w-md">
					{session?.user ? (
						<Card className="w-full bg-white/10 backdrop-blur-md border-blue-300/30">
							<CardHeader>
								<CardTitle className="text-2xl font-bold text-center text-gray-700">
									Your Profile
								</CardTitle>
								<CardDescription className="text-center text-gray-600">
									Welcome back!
								</CardDescription>
							</CardHeader>
							<CardContent className="flex flex-col items-center space-y-6">
								<Avatar className="w-32 h-32 border-4 border-[#60799b]">
									<AvatarFallback className="bg-[#232f3f] text-white text-4xl">
										<UserIcon size={64} />
									</AvatarFallback>
								</Avatar>
								<div className="text-center text-white">
									<h3 className="text-2xl font-semibold mb-2 text-[#232f3f]">
										{session.user.name}
									</h3>
									<p className="text-[#394b63] flex items-center justify-center">
										<MailIcon className="mr-2" size={16} />
										{session.user.email}
									</p>
									<p className="text-[#394b63] flex items-center justify-center mt-1">
										<PhoneIcon className="mr-2" size={16} />
										{session?.user?.email || "Phone number not available"}
									</p>
								</div>
								<Button
									onClick={() => signOut()}
									className="w-full bg-[#2a384b] hover:bg-[#314157] text-white transition duration-150 ease-in-out">
									Sign Out
								</Button>
							</CardContent>
						</Card>
					) : (
						<div className="w-full max-w-sm">
							<div className="text-center mb-8">
								<h2 className="mt-6 text-3xl font-extrabold text-gray-900">
									Welcome to Quizcroll
								</h2>
								<p className=" text-sm text-gray-600">{`Let's get you found!`}</p>

								<Card className="w-full bg-white/10 backdrop-blur-md border-gray-300/80 mt-5">
									<CardHeader>
										<CardTitle className="text-2xl font-bold text-center text-blue-950">
											Sign in
										</CardTitle>
										<CardDescription className="text-center text-black">
											Enter your phone number to continue
										</CardDescription>
									</CardHeader>
									<CardContent>
										<Form {...form}>
											<form
												onSubmit={form.handleSubmit(onSubmit)}
												className="space-y-4">
												<FormField
													control={form.control}
													name="phone"
													render={({ field }) => (
														<FormItem>
															<FormControl>
																<PhoneInput
																	country={"et"}
																	value={field.value}
																	onChange={(phone) => field.onChange(phone)}
																	inputClass="rounded-md py-5 px-10 w-full border-blue-300 bg-blue-800/30 text-gray-700 placeholder-blue-300"
																	containerClass="w-full"
																	buttonClass="bg-blue-800/30 border-blue-50"
																	dropdownClass="bg-blue-800 text-white"
																	countryCodeEditable={false}
																	enableSearch={true}
																	placeholder="Enter phone number"
																/>
															</FormControl>
															<FormMessage className="text-red-300" />
														</FormItem>
													)}
												/>
												<Button
													type="submit"
													className="w-full bg-[#3776b6] hover:bg-blue-700 text-white transition duration-150 ease-in-out h-[2.7rem] text-lg"
													disabled={loading}>
													{loading ? (
														<LoadingDots color="#ffffff" />
													) : (
														"Continue"
													)}
												</Button>
											</form>
										</Form>

										<p className="mt-6 text-center text-sm text-gray-700">
											By clicking continue, you agree to our{" "}
											<a href="#" className="text-blue-500 hover:underline">
												Terms of Service
											</a>{" "}
											and{" "}
											<a href="#" className="text-blue-300 hover:underline">
												Privacy Policy
											</a>
										</p>
									</CardContent>
								</Card>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
