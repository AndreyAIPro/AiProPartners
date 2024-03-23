import RefTable from "./RefTable/RefTable";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

const Ref = () => {
	const navigate = useNavigate();
	const { user } = useUser();
	return (
		<article className="relative flex-1 flex-col justify-start px-4 pt-12">
			<h2 className="text-title font-bold">Реферальная ссылка</h2>
			<div className="flex flex-row">
				<div className="flex max-w-[455px] flex-col ">
					<p className="py-2 text-title2 ">
						<b>Реферальная ссылка (Пригласительная ссылка).</b> Привлекайте в
						свою команду партнеров по вашей реферальной ссылке чтоб иметь
						дополнительную прибыль:
					</p>

					<ul className="list-disc px-4 text-text1 ">
						<li className=" text-text1 ">
							10% (доход от Личного Объема вашего партнера)
						</li>
						<li className=" text-text1 ">
							5% (Доход от каждой повторной продажи Личного Объема вашего
							партнера)
						</li>
					</ul>

					<br />
					<br />

					{/* <div className=" flex  justify-center  ">
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
						</div> */}
				</div>
				<div className="flex-1" style={{width: "40rem"}}>
					<RefTable />
				</div>
			</div>
		</article>
	);
};

export default Ref;
