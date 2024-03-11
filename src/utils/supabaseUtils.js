import { Empty } from "antd";
import supabase from "./supabaseCreate";

export async function SignUp({
	discordAccount,
	email,
	fullName,
	nameCompany,
	nickname,
	password,
	phone,
	radioButtonSources,
	telegramAccount,
	textAreaOtherRadio,
}) {
	let { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: {
				phone,
				fullName,
				nickname,
				nameCompany,
				discordAccount,
				telegramAccount,
				sources: radioButtonSources,
				other: textAreaOtherRadio,
				roles: ["partner"],
				money: 0,
				income: 0,
			},
		},
	});
	if (error) throw new Error(error.message);

	return data;
}

export async function login({ email, password }) {
	let { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) throw new Error(error.message);

	return { data, error };
}

export async function getCurrentUser() {
	const { data: session } = await supabase.auth.getSession();

	if (!session.session) return null;

	const { data, error } = await supabase.auth.getUser();

	if (error) throw new Error(error.message);

	return data?.user;
}

export async function logout() {
	const { error } = await supabase.auth.signOut();
	if (error) throw new Error(error.message);
}

export async function setEmailForResetPassword(email) {
	let { error } = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: "/passwordrecovery",
	});
	if (error) throw new Error(error.message);
}

export async function setUpdateUserPassword({ password }) {
	const { error } = await supabase.auth.updateUser({
		password: password,
	});
	if (error) throw new Error(error.message);
}
export async function UpdateUser({
	telephoneNumber,
	discord,
	name,
	telegram,
	radioButtonSources,
	textAreaOtherRadio,
}) {
	const { error } = await supabase.auth.updateUser({
		data: {
			phone: telephoneNumber,
			nickname: name,
			discordAccount: discord || "",
			telegramAccount: telegram,
			sources: radioButtonSources,
			other: textAreaOtherRadio || "",
		},
	});
	if (error) throw new Error(error.message);
}
