import { useUser } from "../../../hooks/useUser";

const BalanceArticle = ({ isExpandedRightSidebar }) => {
	const { user } = useUser();
	const userData = user.user_metadata;

	return (
		<article className="w-full flex h-[70px] items-center gap-[10px] overflow-hidden whitespace-nowrap rounded-[10px] bg-light-blue p-[10px]">
			<span className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-black text-[24px] font-[900] text-light-blue">
				$
			</span>
			<p
				className={`${isExpandedRightSidebar ? "hidden" : "visible"} flex flex-col justify-center text-[16px]`}
			>
				Текущий баланс
				<span id="currentCash">{userData.money + " $"}</span>
			</p>
		</article>
	);
};

export default BalanceArticle;
