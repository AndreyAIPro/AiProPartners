import { useMutation, useQueryClient } from "@tanstack/react-query";

import createSubAccountLink from "../utils/supabaseUtils";

export function useCreateSubaccountLinks() {
	const queryClient = useQueryClient();
	const { mutate: setCreateSubAccountLink } = useMutation({
		mutationFn: createSubAccountLink,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["RefRegPartnerLogs"] });
		  },
		  onError: (err) => console.log(err.message),
	});

	return { setCreateSubAccountLink };
}
