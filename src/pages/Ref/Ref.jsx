import RefTable from "./RefTable/RefTable";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

const Ref = () => {
	const navigate = useNavigate();
	const { user } = useUser();
	return (
		<article className="flex-1 flex-col justify-start px-4">
			<h2 className="px-4 py-3 text-title font-bold 2xl:py-6 ">
				Реферальная ссылка
			</h2>
			<div className="flex flex-col 2xl:flex-row">
				<div className="gap-3 xl:gap-0">
					<p className="px-4 py-2 text-title3 2xl:text-title2 ">
						<b>Реферальная ссылка (Пригласительная ссылка).</b> Привлекайте в
						свою команду партнеров по вашей реферальной ссылке чтоб иметь
						дополнительную прибыль:
					</p>

					<ul className="flex list-disc flex-row gap-[2rem] px-12 text-text1 2xl:flex-col 2xl:gap-2">
						<li className="text-text2 2xl:text-text1 ">
							10% (доход от Личного Объема вашего партнера)
						</li>
						<li className="text-text2 2xl:text-text1 ">
							5% (Доход от каждой повторной продажи Личного Объема вашего
							партнера)
						</li>
					</ul>
				</div>
				<div className="flex-1">
					<RefTable />
				</div>
			</div>
		</article>
	);
};

export default Ref;

/* <div className=" flex  justify-center  ">
                        <p style={{fontSize:"20px"}}> Тестові посилання:</p>
							<button
								onClick={() =>
									navigate("/reflink/" + user.id, { replace: true })
								} //window.location.replace(link)
								className="custom-button w-fit text-nowrap rounded-l-md p-[10px] text-text3 "
							>
								Для клієнтів
							</button>
                            <button
								onClick={() =>
									navigate("/signup/" + user.id, { replace: true })
								} //window.location.replace(link)
								className="custom-button w-fit text-nowrap rounded-l-md p-[10px] text-text3 "
							>
								Для партнерів
							</button>
						</div> */
