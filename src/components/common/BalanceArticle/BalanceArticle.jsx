import { useUser } from "../../../hooks/useUser";

const BalanceArticle = () => {
	const { user } = useUser();
	const userData = user.user_metadata;

	return (
		<article className="flex h-[70px] items-center gap-[10px] rounded-[10px] bg-light-blue p-[10px] font-nunito-sans">
			<span className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-black font-nunito-sans text-[24px] font-[900] text-light-blue">
				$
			</span>
			<p className="flex flex-col justify-center font-nunito-sans text-[16px] ">
				Текущий баланс
				<span id="currentCash" className="font-nunito-sans">
					{userData.money + " $"}
				</span>
			</p>
		</article>
	);
};

export default BalanceArticle;
