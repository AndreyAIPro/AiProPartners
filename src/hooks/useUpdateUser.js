import { useMutation, useQueryClient } from "@tanstack/react-query";

import { UpdateUser } from "../utils/supabaseUtils";

export function useUpdateUser() {
	const queryClient = useQueryClient();

	const { mutate: updateUser, isLoading: isUpdating } = useMutation({
		mutationFn: UpdateUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["user"] });
		},
	});

	return { updateUser, isUpdating };
}
