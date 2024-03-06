/** @format */

import PartnerProgramTable from '../../PartnerProgramTable/PartnerProgramTable';

const PartnerProgramItem = ({ title, text }) => {
	return (
		<>
			{title ? (
				<li className='flex flex-col w-full gap-4 mt-4 max-sm:mt-0'>
					<h4 className='font-bold text-text2'>{title}</h4>
					<p className='text-text2 font-light text-article-text whitespace-pre-line'>
						{text}
					</p>
				</li>
			) : (
				<>
					<h4 className='font-bold text-text2 mt-4 mb-6 max-sm:mt-0 max-sm:mb-0'>
						Таблица:
					</h4>
					<PartnerProgramTable />
					<div className='flex flex-col max-sm:gap-2'>
						<h4 className='font-bold text-text2 my-6 max-sm:my-0'>
							Примечание:
						</h4>
						<p className='text-article-text'>Запрещенный трафик:</p>
						<ul className='list-disc flex flex-col items-start pl-5 text-article-text max-sm:text-text3 max-sm:gap-2'>
							<li>мультиаккаунты</li>
							<li>заблокированных пользователей</li>
							<li>мотивированный трафик</li>
							<li>фродовый трафик</li>
							<li>
								трафик с креативов с политиками, должностными лицами,
								знаменитостями, блогерами (если это являетесь не Вы сами) и
								религиозными деятелями.
							</li>
						</ul>
					</div>
				</>
			)}
		</>
	);
};

export default PartnerProgramItem;
