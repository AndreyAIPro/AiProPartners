import { useQuery } from "@tanstack/react-query";
import { selectPartnersRefLinks } from "../utils/supabaseUtils";

export function useSelectPartnersRefLinks(userId) {
	const { data } = useQuery({
		queryKey: ["PartnersRefLinks"],
		queryFn: () => selectPartnersRefLinks(userId),
	});

	return { data };
}
