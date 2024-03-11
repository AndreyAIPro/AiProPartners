const Withdrawal = () => {
	return (
		<section className="ml-7 mt-20">
			<div>
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
			<div>
				<p className="mb-2 mt-6 text-text3">Сумма</p>
				<input
					type="text"
					placeholder="00.00"
					className="min-w-[500px] rounded-lg px-2 py-1 text-black"
				/>
			</div>
			<div>
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

			<div>
				<p className="mb-2">Комментарий</p>
				<textarea placeholder="До 100 символов" className="text-black outline-none resize-none pt-2 pl-2 w-[500px] rounded-lg" maxlength='100'/>
			</div>
			<div className="mt-6">
				<p className="font-nunito-sans font-bold text-text1 mb-4">Итого: 00.00</p>
				<button className=" bg-light-blue rounded-full px-6 py-2 text-text2">Подтвердите вывод</button>
			</div>
		</section>
	);
};

export default Withdrawal;
