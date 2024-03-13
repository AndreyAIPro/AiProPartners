import { useQuery } from "@tanstack/react-query";
import { selectPartnersRefLinks } from "../utils/supabaseUtils";

export function useSelectPartnersRefLinks(id) {
	const { data } = useQuery({
		queryKey: ["PartnersRefLinks"],
		queryFn: () => selectPartnersRefLinks(id),
	});

	return { data };
}
