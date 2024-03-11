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
				roles: ['partner'],
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

export async function setEmailForResetPassword(email) {
	let { error } = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: '/passwordrecovery'
	})
	if (error) throw new Error(error.message);
}


export async function setUpdateUser({ password }) {
	const { error } = await supabase.auth.updateUser({
  		password: password,
	})
	if (error) throw new Error(error.message);
}

export async function creatDefultRefLink(userId) {
	const { data, error } = await supabase
  	.from('PartnersSubLinks')
  	.select('name')
  	.eq('refLink', userId);

  if (data.length === 0) {
	await supabase
  	.from('PartnersSubLinks')
  	.insert({ refLink: userId, name: Empty })
  }
}

export async function checkRefLink(refId, ipAddress) {

	const nowDate = new Date(); 
	const month = nowDate.getMonth()+1 < 10 
	? "0"+(nowDate.getMonth()+1) 
	: nowDate.getMonth()+1;
	const correctFormatDate = nowDate.getFullYear()+"-"+month+"-"+nowDate.getDate();

	const { data: checkConfigInSupabase } = await supabase
	.from('RefClickLogs')
	.select("id")
	.match({ refLink: refId, ip: ipAddress });

	if (checkConfigInSupabase.length > 0) return;

	
	const { data: selectPartnerId} = await supabase
  	.from('PartnersRefLinks')
  	.select('partnerId')
  	.eq('refLink', refId);

	const partnerId = selectPartnerId[0].partnerId

	updateOrInsertPartnersAnalytical(refId, partnerId, correctFormatDate)

	await supabase
  	.from('RefClickLogs')
  	.insert({ refLink: refId, ip: ipAddress })
}

async function updateOrInsertPartnersAnalytical(refLink, partnerId, date) {
	const { data: selectUniqueFromAnalitica} = await supabase
  	.from('PartnersAnalyticalTable')
  	.select('unique')
  	.match({date: date, partnerId: partnerId, refLink: refLink});

	if (selectUniqueFromAnalitica.length === 0) {
		await supabase
  		.from('PartnersAnalyticalTable')
  		.insert({ refLink: refLink, partnerId: partnerId, unique: 1 })
	} else {
		await supabase
  		.from('PartnersAnalyticalTable')
  		.update({ unique: selectUniqueFromAnalitica[0].unique+1 })
		.match({date: date, partnerId: partnerId, refLink: refLink});
	}
}