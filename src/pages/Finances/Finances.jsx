/**  @format */
import { useState } from "react";
import Filter from "./../../components/common/Filter/Filter";
import TableFinance from "./../../components/common/TableFinance.jsx/TableFinance";
import { filters } from "./../../data/filtersForFinances";
import "./finances.modal.css";

const Finances = () => {
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	return (
		<section className="w-[1245px] px-20 py-8">
			<h2 className=" font-nunito-sans text-title font-bold">Финансы</h2>
			<div className="mt-5 flex gap-10 text-title2 ">
				<button
					onClick={toggleModal}
					className="font-nunito-sans font-bold text-light-gray"
				>
					Вывод средств
				</button>

				<p className="font-nunito-sans font-bold">Список транзакций</p>
			</div>

			<div className="mx-6 mt-16 flex gap-10">
				<Filter filters={filters} />
				<button className="rounded-full border-2 border-light-blue px-4 font-nunito-sans ">
					Обновить
				</button>
			</div>
			<div className="m-6">
				<TableFinance />
			</div>
			<div className="text-center">
				<button className="rounded-full bg-light-blue px-10 py-2 font-nunito-sans">
					Загрузить ещё
				</button>
			</div>
			{modal && (
				<div>
					<div onClick={toggleModal} className="overlay"></div>
					<div className="modal-content flex   h-[300px] w-[800px] flex-col items-center justify-center gap-4 rounded-xl bg-gray">
						<h2 className="font-nunito-sans text-title font-bold">
							Подтвердите вывод
						</h2>
						<div className="flex justify-between px-2 ">
							<button className="mr-10 rounded-full bg-light-blue px-14 py-2 font-nunito-sans text-text1">
								Подтверждаю
							</button>
							<button
								className="rounded-full bg-light-blue px-8 py-2 font-nunito-sans text-text1"
								onClick={toggleModal}
							>
								Нет
							</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Finances;
