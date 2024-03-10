import { useMutation } from "@tanstack/react-query";
import { setEmailForResetPassword } from "../utils/supabaseUtils";

export function useSetEmailForResetPassword() {
	const { mutate: setEmail, isLoading } = useMutation({
		mutationFn: setEmailForResetPassword,
	});

	return { setEmail, isLoading };
}

