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

    return {data, error};
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