import { useUser } from "../../../hooks/useUser";

const BalanceArticle = ({ isExpandedRightSidebar }) => {
	const { user } = useUser();
	const { money } = user.user_metadata;

	return (
		<article className="w-full flex h-[70px] items-center gap-[10px] overflow-hidden whitespace-nowrap rounded-[10px] bg-light-blue p-[10px]">
			<span className="flex h-[50px] w-[50px] scale-90 items-center justify-center rounded-[10px] bg-black text-[24px] font-[900] text-light-blue 2xl:scale-100">
				$
			</span>
			<p
				className={`${isExpandedRightSidebar ? "max-xl:hidden" : "max-xl:flex"}   flex-col justify-center text-[0.7rem] 2xl:text-[1rem]`}
			>
				Текущий баланс
				<span id="currentCash" className="pl-1">
					{money + " $"}
				</span>
			</p>
		</article>
	);
};

export default BalanceArticle;
