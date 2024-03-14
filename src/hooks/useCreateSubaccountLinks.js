import { useMutation, useQueryClient } from "@tanstack/react-query";

import subaccountLinks from "../utils/supabaseUtils";

export function useCreateSubaccountLinks() {
	const queryClient = useQueryClient();

	const { mutate: createSubaccountLinks, isLoading: isUpdating } = useMutation({
		mutationFn: subaccountLinks,
	});

	return { createSubaccountLinks, isUpdating };
}