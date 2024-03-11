import { useMutation } from "@tanstack/react-query";
import { SignUp as signupApi } from "../utils/supabaseUtils";

export function useSignup() {
	const { mutate: signup, isLoading } = useMutation({
		mutationFn: signupApi,
	});

	return { signup, isLoading };
}
