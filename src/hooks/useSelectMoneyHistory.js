import { useQuery } from "@tanstack/react-query";
import { getMoneyHistory } from "../utils/supabaseUtils";

export function useSelectMoneyHistory(partnerId) {
	const { data, refetch } = useQuery({
		queryKey: ["MoneyHistory"],
		queryFn: () => getMoneyHistory(partnerId),
	});

	return { data, refetch };
}
