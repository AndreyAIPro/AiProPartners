import {
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table";

import { ReactComponent as NoData } from "../../../assets/images/Icons aipro partners/no-data-icon.svg";

export function RefItem({ data }) {
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
		data: data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	return (
		<>
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
						.rows.slice(0, data.length)
						.map((row) => (
							<tr key={row.id} className=" border-[1px] border-gray">
								{row.getVisibleCells().map((cell) => (
									<td
										key={cell.id}
										className={`text border-r-2 border-gray py-1 pl-4 font-nunito-sans text-text2`}
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))}
				</tbody>
			</table>
			{data.length > 10 ? (
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
			) : null}
			{data.length > 0 ? null : (
				<div className="flex flex-col items-center border-[1px] border-gray  py-10">
					<NoData />
					<p className="font-nunito-sans text-gray">No data</p>
				</div>
			)}
		</>
	);
}
