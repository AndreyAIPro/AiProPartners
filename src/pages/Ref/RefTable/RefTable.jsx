import React, { useState, useMemo } from "react";
import "./RefTable.scss";
import {
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table";
import refData from "./../../../data/dataForRefTable";
import { message } from "antd";
import copy from "copy-to-clipboard";

const RefTable = () => {
	const data = useMemo(() => refData, []);
	const [accountRef, setAccountRef] = useState("Ваша реферальная ссылка");

	const columns = [
		{
			header: "ID партнера",
			accessorKey: "accountID",
		},
		{
			header: "Название партнера",
			accessorKey: "partnerName",
		},
	];

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});
	const handleCopyToClipboard = (ref) => {
		copy(ref);
		message.success("Ref copied to clipboard");
	};

	return (
		<div className={"w-11/12 flex  justify-items-center "}>
			<div className="flex w-[100%]  justify-items-center">
				<div className="flex w-[100%]  flex-col content-end">
					<div className="my-6 flex justify-end  ">
						<div className=" flex  justify-center  ">
							<button
								onClick={() => handleCopyToClipboard(accountRef)}
								className="custom-button w-fit text-nowrap rounded-l-md p-[10px] text-text3 "
							>
								Скопировать реферальную ссылку
							</button>
						</div>
						<div className="flex w-[100%] items-center text-nowrap rounded-r-md bg-white px-4 text-text2 text-black">
							{accountRef}
						</div>
					</div>
					<table className="   min-w-full  border-[2px] border-gray">
						<thead>
							{table.getHeaderGroups().map((headerGroup) => (
								<tr key={headerGroup.id} className="bg-gray">
									{headerGroup.headers.map((header) => (
										<th
											key={header.id}
											className="py-1 text-left font-nunito-sans text-text2 first:pl-4 last:pl-4 "
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
								.rows.slice(0, refData.length)
								.map((row) => (
									<tr key={row.id} className=" border-[1px] border-gray">
										{row.getVisibleCells().map((cell) => (
											<td
												key={cell.id}
												className={`text border-r-2 border-gray py-1 pl-4 font-nunito-sans text-text2`}
											>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext(),
												)}
											</td>
										))}
									</tr>
								))}
						</tbody>
					</table>
					{refData.length > 10 && (
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
					)}
				</div>
			</div>
		</div>
	);
};

export default RefTable;
