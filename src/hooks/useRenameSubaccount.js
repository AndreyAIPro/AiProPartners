import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editSubaccountName } from "../utils/supabaseUtils";

export function useRenameSubaccount() {
	const queryClient = useQueryClient();
	const { mutate: renameSubaccount, isLoading } = useMutation({
		mutationFn: editSubaccountName,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["RefRegPartnerLogs"] });
		  },
		  onError: (err) => console.log(err.message),
	});

	return { renameSubaccount, isLoading };
}
