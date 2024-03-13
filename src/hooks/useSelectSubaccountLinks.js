import { useQuery } from "@tanstack/react-query";
import { selectSubaccountRefLinks } from "../utils/supabaseUtils";

export function useSelectSubaccountRefLinks(id) {
	const { data } = useQuery({
		queryKey: ["RefRegPartnerLogs"],
		queryFn: () => selectSubaccountRefLinks(id),
	});

	return { data };
}
