import { ref } from "vue";
import { defineStore } from "pinia";

import type { ICredentials } from "@/interfaces/ICredentials";
import { supabase } from "@/supabase";

export const useUserStore = defineStore("users", () => {
	const user = ref(null);
	const errorMessage = ref("");
	const loading = ref(false);

	const validateEmail = (email: String) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	const handleLogin = () => {};

	const handleSignup = async (credentials: ICredentials) => {
		const { username, email, password } = credentials;

		if (password.length < 6) {
			return (errorMessage.value = "Password length is too short");
		}

		if (username.length < 4) {
			return (errorMessage.value = "Username length is too short");
		}

		if (!validateEmail(email)) {
			return (errorMessage.value = "Email is invalid");
		}

		// Fetch and check if username already exists
		const { data: userWithUsername } = await supabase
			.from("users")
			.select()
			.eq("username", username)
			.single();

		loading.value = true;

		if (userWithUsername) {
			loading.value = false;
			return (errorMessage.value = "Username already registered");
		}

		// Supabase authentication
		const { error } = await supabase.auth.signUp({
			email,
			password,
		});

		if (error) {
			loading.value = false;
			return (errorMessage.value = error.message);
		}

		// Perform insert in database
		await supabase.from("users").insert({
			username,
			email,
		});

		loading.value = false;
		errorMessage.value = "";
	};

	const handleLogout = () => {};

	const getUser = () => {};

	const clearErrorMessage = () => {
		errorMessage.value = "";
	};

	return {
		user,
		errorMessage,
		loading,
		handleLogin,
		handleSignup,
		handleLogout,
		getUser,
		clearErrorMessage,
	};
});
