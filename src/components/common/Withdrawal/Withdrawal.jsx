import { ReactComponent as Locker } from "../../../assets/images/lock-svgrepo-com.svg";
import { useState } from "react";

const Withdrawal = () => {
	const [hovered, setHovered] = useState(true);

	const onHover = () => {
		setHovered(!hovered);
	};

	return (
		<section className="  relative mt-20">
			<div
				className={`absolute top-[-10%] flex  min-h-[120%] min-w-[100%] items-center  justify-center bg-black/30 fill-light-blue backdrop-invert backdrop-opacity-20`}
			>
				{hovered ? (
					<div onMouseEnter={onHover}>
						<Locker className="w-[100px] " />
					</div>
				) : (
					<div onMouseLeave={onHover}>
						<p className="font-nunito-sans text-[40px] ">Ещё в разработке...</p>
					</div>
				)}
			</div>

			<div className="pl-10">
				<p className="mb-2 text-text3">Выберите способ вывода</p>
				<select
					name="withdrawal"
					id=""
					className="m-w-full mr-6 min-w-[180px]  max-w-[120px] cursor-pointer  rounded-md border-2 border-white bg-black  px-2 py-1 font-nunito-sans outline-none"
				>
					<option value="">BTC</option>
					<option value="">WebMoney</option>
					<option value="">На руки</option>
				</select>

				<button className="rounded-full border-2 border-light-blue px-8 py-1 font-nunito-sans ">
					Добавить способ
				</button>
			</div>
			<div className="pl-10">
				<p className="mb-2 mt-6 text-text3">Сумма</p>
				<input
					type="text"
					placeholder="00.00"
					className="min-w-[500px] rounded-lg px-2 py-1 text-black"
				/>
			</div>
			<div className="pl-10">
				<ul className="mb-5 mt-3 flex w-[500px] justify-between gap-1">
					<li className="rounded-full border-2 border-light-blue px-5 py-1 font-nunito-sans ">
						50
					</li>
					<li className="rounded-full border-2 border-light-blue px-5 py-1 font-nunito-sans ">
						100
					</li>
					<li className="rounded-full border-2 border-light-blue px-5 py-1 font-nunito-sans ">
						300
					</li>
					<li className="rounded-full border-2 border-light-blue px-5 py-1 font-nunito-sans ">
						500
					</li>
					<li className="rounded-full border-2 border-light-blue px-6 py-1 font-nunito-sans ">
						1000
					</li>
				</ul>
			</div>

			<div className="pl-10">
				<p className="mb-2">Комментарий</p>
				<textarea
					placeholder="До 100 символов"
					className="w-[500px] resize-none rounded-lg pl-2 pt-2 text-black outline-none"
					maxLength="100"
				/>
			</div>
			<div className="mt-6 pl-10">
				<p className="mb-4 font-nunito-sans text-text1 font-bold">
					Итого: 00.00
				</p>
				<button className=" rounded-full bg-light-blue px-6 py-2 text-text2">
					Подтвердите вывод
				</button>
			</div>
		</section>
	);
};

export default Withdrawal;
