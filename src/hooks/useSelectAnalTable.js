import { useQuery } from "@tanstack/react-query";
import { getAnalTable } from "../utils/supabaseUtils";

export function useSelectAnalTable(partnerId) {
	const { data } = useQuery({
		queryKey: ["PartnersAnalyticalTable"],
		queryFn: () => getAnalTable(partnerId),
	});

	return { data };
}
