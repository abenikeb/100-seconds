"use server";

const mockUsers = [
	{
		id: 1,
		code: "0",
		user_name: "Abenezer Kebede",
		phone: "251913228892",
	},
	{
		id: 2,
		code: "0",
		user_name: "Abebe Kebede",
		phone: "251911539258",
	},
	{
		id: 3,
		code: "GHI789",
		user_name: "Demo User",
		phone: "0933333333",
	},
];

function mockApiCall(phone: string) {
	return new Promise((resolve) => {
		setTimeout(() => {
			const user = mockUsers.find((u) => u.phone === phone);
			if (user) {
				resolve({
					original: {
						id: user.id,
						code: user.code,
						user_name: user.user_name,
						phone: user.phone,
					},
				});
			} else {
				resolve(null);
			}
		}, 1000); // Simulated 1 second delay
	});
}

export async function authenticateUser(phone: string) {
	try {
		const user: any = await mockApiCall(phone);

		console.log({ user });

		if (user && user.original) {
			return {
				id: user.original.id || 2,
				code: user.original.code,
				name: user.original.user_name,
				phone: user.original.phone,
			};
		}
	} catch (error) {
		console.error("Error during user authentication:", error);
	}

	return null;
}

export async function checkUser(phone: string) {
	try {
		const user: any = await mockApiCall(phone);

		if (user && user.original) {
			return {
				id: user.original.id || 2,
				code: user.original.code,
				name: user.original.user_name,
				phone: user.original.phone,
			};
		}
	} catch (error) {
		console.error("Error during user check:", error);
	}

	return null;
}

// "use server";
// import axios from "axios";
// import { BASE_URL } from "./config/constants";

// export async function authenticateUser(phone: any) {
// 	try {
// 		const { data: user } = await axios.post(
// 			`${BASE_URL}/social-login`,
// 			{
// 				phone: phone,
// 				name: "User",
// 				image: "image",
// 				type: "credential",
// 			},
// 			{
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 			}
// 		);

// 		console.log({ user });

// 		// Check if the user data exists and has a valid code
// 		if (user && user.original) {
// 			return {
// 				id: user.original.id || 2,
// 				code: user.original.code,
// 				name: user.original.user_name,
// 				phone: user.original.phone,
// 			};
// 		}
// 	} catch (error) {
// 		console.error("Error during user authentication:", error);
// 	}

// 	return null;
// }

// export async function checkUser(phone: any) {
// 	try {
// 		const { data: user } = await axios.post(
// 			`${BASE_URL}/social-login`,
// 			{
// 				phone: phone,
// 				name: "User",
// 				image: "image",
// 				type: "credential",
// 			},
// 			{
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 			}
// 		);

// 		if (user && user.original) {
// 			return {
// 				id: user.original.id || 2,
// 				code: user.original.code,
// 				name: user.original.user_name,
// 				phone: user.original.phone,
// 			};
// 		}
// 	} catch (error) {
// 		console.error("Error during user authentication:", error);
// 	}

// 	return null;
// }
