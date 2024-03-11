import { useUser } from "../../../hooks/useUser";

/** @format */

const BalanceArticle = () => {
	const { user } = useUser();
	const userData = user.user_metadata;
	return (
		<article className='h-[70px] font-nunito-sans bg-light-blue rounded-[10px] flex items-center gap-[10px] p-[10px]'>
			<span className='h-[50px] w-[50px] rounded-[10px] text-light-blue font-[900] text-[24px] flex items-center justify-center bg-black font-nunito-sans'>
				$
			</span>
			<p className='font-nunito-sans flex flex-col justify-center text-[16px] '>
				Текущий баланс
				<span id='currentCash' className='font-nunito-sans'>
					0.11$
				</span>
			</p>
		</article>
	);
};

export default BalanceArticle;
