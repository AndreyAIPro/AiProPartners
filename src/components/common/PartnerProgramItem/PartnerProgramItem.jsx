

import PartnerProgramTable from "../../PartnerProgramTable/PartnerProgramTable";

const PartnerProgramItem = ({ title, text }) => {
	return (
		<>
			{title ? (
				<li className="w-full w-full mt-4 flex flex-col gap-4 max-sm:mt-0">
					<h4 className="text-text2 font-bold">{title}</h4>
					<p className="whitespace-pre-line text-text2 font-light text-article-text">
						{text}
					</p>
				</li>
			) : (
				<div className='w-full'>
					<h4 className="mb-6 mt-4 text-text2 font-bold max-sm:mb-0 max-sm:mt-0">
						Таблица:
					</h4>
					<PartnerProgramTable />
					<div className="flex flex-col max-sm:gap-2">
						<h4 className="my-6 text-text2 font-bold max-sm:my-0">
							Примечание:
						</h4>
						<p className="text-article-text">Запрещенный трафик:</p>
						<ul className="flex list-disc flex-col items-start pl-5 text-article-text max-sm:gap-2 max-sm:text-text3">
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
				</div>
			)}
		</>
	);
};

export default PartnerProgramItem;
