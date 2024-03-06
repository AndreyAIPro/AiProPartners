/** @format */
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { partnerProgramTable } from "../../data/landingData";

const PartnerProgramTable = () => {
	const columnHelper = createColumnHelper();

	const columns = [
		columnHelper.accessor("types", {
			header: () => (
				<span className="py-[15px] text-center uppercase max-sm:py-0 max-sm:text-text4">
					Виды объемов
				</span>
			),
			cell: (info) => info.getValue(),
		}),

		columnHelper.accessor("conditions", {
			header: () => (
				<span className="text-center uppercase max-sm:py-0 max-sm:text-text4">
					Условия
				</span>
			),
			cell: (info) => info.getValue(),
		}),
		columnHelper.accessor("percent", {
			header: () => (
				<span className="text-center uppercase max-sm:py-0 max-sm:text-text4">
					Процент
				</span>
			),
			cell: (info) => info.getValue(),
		}),
	];

	const table = useReactTable({
		data: partnerProgramTable,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<table
			className="w-full z-30 flex flex-col justify-end max-[590px]:my-5 max-sm:my-5"
			data-aos="fade-zoom-out"
		>
			<thead className="bg-table-header text-center text-article-text">
				{table.getHeaderGroups().map((headerGroup) => (
					<tr
						key={headerGroup.id}
						className="flex justify-around border-[1px] border-table-border max-sm:flex max-sm:items-center max-sm:justify-center"
					>
						{headerGroup.headers.map((header) => (
							<th
								key={header.id}
								className="w-full border-[1px] border-table-border py-3 last:max-w-[160px] max-sm:flex max-sm:h-[45px] max-sm:items-center max-sm:justify-center"
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
			<tbody className="flex flex-col items-end border-table-border bg-article text-center">
				{table.getRowModel().rows.map((row) => (
					<tr
						key={row.id}
						className="w-full flex justify-between text-article-text [&>*]:max-w-[487px] "
					>
						{row.getVisibleCells().map((cell) => (
							<td
								key={cell.id}
								className="flex items-center justify-center w-full border-[1px] border-table-border px-[55px] py-3 last:max-w-[160px] max-sm:px-2 max-sm:text-text5"
							>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</td>
						))}
					</tr>
				))}
			</tbody>
			<tfoot className="flex justify-end w-full">
				<tr className=" mt-[15px] flex justify-end w-full">
					<th className="font-regular max-sm:w-full flex h-11 items-center border-[2px] border-table-border bg-[#3C006B] p-3 text-center text-text2 text-[#DFBAF4] max-sm:h-9 max-sm:text-text4">
						Суммарный заработок от:
					</th>
					<td className="w-full flex h-11 max-w-[160px] items-center justify-center border-[2px] border-l-0 border-table-border p-[15px] text-[#DFBAF4] max-sm:h-9  max-sm:max-w-[250px] max-sm:text-text4">
						70%
					</td>
				</tr>
			</tfoot>
		</table>
	);
};

export default PartnerProgramTable;
