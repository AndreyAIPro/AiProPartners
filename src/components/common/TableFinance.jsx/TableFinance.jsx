import {
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
// import mData from "../../../data/dataForTable.json";

import FiltersTable from "../FiltersForTable/FiltersTable";
import Plate from "../../../pages/Preferences/Plate/Plate";

const TableFinance = () => {
	const data = [];
	const [getData, setGetData] = useState(data.length);
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
		setGetData(data.length);
	};

	return (
		<>
			<Plate title={<FiltersTable />}>
				<table className="min-w-full  border-[2px] border-gray">
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
					<tbody className="  h-[150px] border-2 border-gray">
						<div className="self-center">
							<svg
								width="64"
								height="41"
								viewBox="0 0 64 41"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g transform="translate(0 1)" fill="none" fillRule="evenodd">
									<ellipse
										fill="#272727"
										cx="32"
										cy="33"
										rx="32"
										ry="7"
									></ellipse>
									<g fillRule="nonzero" stroke="#3e3e3e">
										<path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
										<path
											d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
											fill="#1d1d1d"
										></path>
									</g>
								</g>
							</svg>
							<p className="font-nunito-sans text-gray">Де таблиця ?</p>
						</div>
						<tr className="">
							<td className="  "></td>
						</tr>

						{/* {table
						.getRowModel()
						.rows.slice(0, getData)
						.map((row) => (
							<tr key={row.id} className=" border-[1px] border-gray">
								{row.getVisibleCells().map((cell) => (
									<td
										key={cell.id}
										className={` border-gray py-1 pl-2 font-nunito-sans text-text2
                    ${row.original.status === "Успешно" ? "last:text-green" : row.original.status === "Отклонено" ? "last:text-red" : row.original.status === "В обработке" ? "last:text-blue" : ""}
                    first:pl-2 first:text-left last:pr-2 last:text-right`}
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))} */}
					</tbody>
				</table>
				{/* {getData == data.length ? (
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
			)} */}
			</Plate>
		</>
	);
};

export default TableFinance;
