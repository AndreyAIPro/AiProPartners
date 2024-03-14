import { useQuery } from "@tanstack/react-query";
import { selectSubAccountRefLinks } from "../utils/supabaseUtils";

export function useSelectSubAccountRefLinks(userId) {
	const { data } = useQuery({
		queryKey: ["RefRegPartnerLogs"],
		queryFn: () => selectSubAccountRefLinks(userId),
	});

	return { data };
}
