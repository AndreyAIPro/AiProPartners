import { useMutation, useQueryClient } from "@tanstack/react-query";

import { setUpdateUserPassword } from "../utils/supabaseUtils";

export function useUpdateUserPassword() {
  const queryClient = useQueryClient();
  
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
		mutationFn: setUpdateUserPassword,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["user"] });
		},
	});

  return { updateUser, isUpdating };
}