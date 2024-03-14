import { useMutation } from "@tanstack/react-query";

import createSubAccountLink from "../utils/supabaseUtils";

export function useCreateSubaccountLinks() {
	const { mutate: setCreateSubAccountLink } = useMutation({
		mutationFn: createSubAccountLink,
	});

	return { setCreateSubAccountLink };
}
