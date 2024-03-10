import {
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import mData from "../../../data/dataForTable.json";
import { filters } from "./../../../data/filtersForFinances";
import Filter from "./../Filter/Filter";
import DateFilter from './../FiltersForTable/DateFilter';

const TableFinance = () => {
	const data = useMemo(() => mData, []);
	const [getData, setGetData] = useState(mData.length);
	const columns = [
		{
			header: "Дата",
			accessorKey: "date",
		},
		{
			header: "Сумма",
			accessorKey: "sum",
		},
		{
			header: "Способ вывода",
			accessorKey: "withdrawal",
		},
		{
			header: "Комментарий",
			accessorKey: "comments",
		},
		{
			header: "Статус",
			accessorKey: "status",
		},
	];

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	const handelGetMoreData = () => {
		setGetData(mData.length);
	};

	return (
		<>
			<div className=" mb-6 mt-20 ">
				<DateFilter/>
				<button className="rounded-full border-2 border-light-blue px-4 font-nunito-sans ">
					Обновить
				</button>
			</div>
			<table className="   min-w-full  border-[2px] border-gray">
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id} className="bg-gray">
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									className="py-1 text-left font-nunito-sans text-text2 first:pl-4 last:pr-4 last:text-right"
								>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table
						.getRowModel()
						.rows.slice(0, getData)
						.map((row) => (
							<tr key={row.id} className=" border-[1px] border-gray">
								{row.getVisibleCells().map((cell) => (
									<td
										key={cell.id}
										className={`border-r-2 border-gray py-1 pl-2 font-nunito-sans text-text2
                    ${row.original.status === "Успешно" ? "last:text-green" : row.original.status === "Отклонено" ? "last:text-red" : row.original.status === "В обработке" ? "last:text-blue" : ""}
                    first:pl-2 first:text-left last:pr-2 last:text-right`}
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))}
				</tbody>
			</table>
			{getData == mData.length ? (
				<div className={`mt-3 text-center`}>
					<button
						className={` mx-3 mt-3 rounded-md border-2 p-2 font-nunito-sans font-bold enabled:hover:bg-light-blue ${!table.getCanPreviousPage() && "disabled:opacity-25"}`}
						onClick={() => table.setPageIndex(0)}
						disabled={!table.getCanPreviousPage()}
					>
						{"<<"}
					</button>
					<button
						className={` mx-3 mt-3 rounded-md border-2 p-2 font-nunito-sans font-bold enabled:hover:bg-light-blue ${!table.getCanPreviousPage() && "disabled:opacity-25"}`}
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Предыдущая страница
					</button>

					<button
						className={` mx-3 mt-3 rounded-md border-2 p-2 font-nunito-sans font-bold enabled:hover:bg-light-blue ${!table.getCanNextPage() && "disabled:opacity-25"}`}
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Следующая страница
					</button>
					<button
						className={` mx-3 mt-3 rounded-md border-2 p-2 font-nunito-sans font-bold enabled:hover:bg-light-blue ${!table.getCanNextPage() && "disabled:opacity-25"}`}
						onClick={() => table.setPageIndex(table.getPageCount() - 1)}
						disabled={!table.getCanNextPage()}
					>
						{">>"}
					</button>
				</div>
			) : (
				<div className="mt-6 text-center">
					<button
						className={` rounded-full bg-light-blue px-10 py-2 font-nunito-sans ${getData < 5 && `hidden`}`}
						onClick={handelGetMoreData}
					>
						Загрузить ещё
					</button>
				</div>
			)}
		</>
	);
};

export default TableFinance;
