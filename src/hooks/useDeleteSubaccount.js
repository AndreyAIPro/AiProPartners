import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSubaccount } from "../utils/supabaseUtils";

export function useDeleteSubaccount() {
	const queryClient = useQueryClient();
	const { mutate: delSubaccount, isLoading } = useMutation({
		mutationFn: deleteSubaccount,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["RefRegPartnerLogs"] });
		  },
		  onError: (err) => console.log(err.message),
	});

	return { delSubaccount, isLoading };
}
