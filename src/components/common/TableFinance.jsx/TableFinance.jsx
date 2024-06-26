import { useState } from "react";
import mData from "../../../data/dataForTable.json";
import AllFiltersTable from "./../FiltersForTable/AllFiltersTable";
import { ReactComponent as NoData } from "../../../assets/images/Icons aipro partners/no-data-icon.svg";
import Plate from "../../../pages/Preferences/Plate/Plate";

const TableFinance = () => {
	const [sortingOption, setSortingOption] = useState("");
	const [data, setData] = useState(mData);
	const [moreData, setMoreData] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(data.length / 10);
	const startIndex = (currentPage - 1) * 10;
	const endIndex = startIndex + 10;
	const currentItems = data.slice(startIndex, endIndex);

	const nextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const prevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	const goToFirstPage = () => {
		setCurrentPage(1);
	};

	const goToLastPage = () => {
		setCurrentPage(totalPages);
	};

	const handleSortingChange = (sortingOption) => {
		setSortingOption(sortingOption);
	};

	const handleDataChange = (sortedData) => {
		setData(sortedData);
	};

	const filterByDate = (startDate, endDate) => {
		const filteredData = data.filter((item) => {
			const itemDate = new Date(item.date);
			return itemDate >= startDate && itemDate <= endDate;
		});
		setData(filteredData);
	};

	return (
		<>
			<div className=" mb-10 mt-20 flex items-end  justify-between">
				<AllFiltersTable
					value={sortingOption}
					onChange={handleSortingChange}
					data={data}
					onDataChange={handleDataChange}
					filterByDate={filterByDate}
				/>
				<div>
					<button className=" rounded-full border-2 border-light-blue px-4 font-nunito-sans hover:text-light-blue">
						Обновить
					</button>
				</div>
			</div>
			<table className="w-full  border-[1px] border-gray">
				<thead className="bg-gray">
					<tr>
						<th className="px-4  py-[4px]  pl-4 text-start font-nunito-sans font-medium">
							Дата
						</th>
						<th className="pl-4 text-start font-nunito-sans   font-medium">
							Сумма
						</th>
						<th className=" pl-4  text-start font-nunito-sans font-medium">
							Способ вывода
						</th>
						<th className=" pl-4  text-start font-nunito-sans font-medium">
							Комментарий
						</th>
						<th className=" px-4  text-end font-nunito-sans font-medium">
							Статус
						</th>
					</tr>
				</thead>
				<tbody className=" border-gray">
					{currentItems.splice(0, moreData).map((items, i) => (
						<tr key={i} className="border-[1px]  border-gray">
							<td className="border-r-[1px] border-gray px-4 py-2">
								{items.date}
							</td>
							<td className="border-r-[1px] border-gray px-4"> {items.sum}</td>
							<td className="border-r-[1px] border-gray px-4">
								{items.withdrawal}
							</td>
							<td className="border-r-[1px] border-gray px-4">
								{items.comments}
							</td>
							<td
								className={`border-r-[1px] border-gray px-4 text-end ${items.status === "Успешно" ? "text-green" : items.status === "В обработке" ? "text-blue" : "text-red"}`}
							>
								{items.status}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{moreData > 4 && (
				<div className={`mt-6 text-center ${moreData > 5 && "hidden"}`}>
					<button
						onClick={() => setMoreData(11)}
						className="rounded-full bg-light-blue px-12 py-2 font-nunito-sans text-text2"
					>
						Загрузить ещё...
					</button>
				</div>
			)}

			{moreData > 10 && (
				<div>
					<div className={`mt-3 text-center ${moreData === 4 && "hidden"}`}>
						<button
							className={` mx-3 mt-3 rounded-md border-2 p-2 font-nunito-sans font-bold enabled:hover:bg-light-blue ${currentPage === 1 && "disabled:opacity-25"}`}
							onClick={goToFirstPage}
							disabled={currentPage === 1}
						>
							{"<<"}
						</button>
						<button
							className={` mx-3 mt-3 rounded-md border-2 p-2 font-nunito-sans font-bold enabled:hover:bg-light-blue ${currentPage === 1 && "disabled:opacity-25"}`}
							onClick={prevPage}
							disabled={currentPage === 1}
						>
							Предыдущая страница
						</button>

						<button
							className={` mx-3 mt-3 rounded-md border-2 p-2 font-nunito-sans font-bold enabled:hover:bg-light-blue ${currentPage === totalPages && "disabled:opacity-25"}`}
							onClick={nextPage}
							disabled={currentPage === totalPages}
						>
							Следующая страница
						</button>
						<button
							className={` mx-3 mt-3 rounded-md border-2 p-2 font-nunito-sans font-bold enabled:hover:bg-light-blue ${currentPage === totalPages && "disabled:opacity-25"}`}
							onClick={goToLastPage}
							disabled={currentPage === totalPages}
						>
							{">>"}
						</button>
					</div>
				</div>
			)}
			{moreData === 0 && (
				<div className="flex flex-col items-center border-[1px] border-gray  py-10">
					<NoData />
					<p className="font-nunito-sans text-gray">No data</p>
				</div>
			)}
		</>
	);
};

export default TableFinance;
