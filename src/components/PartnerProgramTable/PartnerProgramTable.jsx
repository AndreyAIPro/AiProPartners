/** @format */
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { partnerProgramTable } from '../../data/landingData';

const PartnerProgramTable = () => {
	const columnHelper = createColumnHelper();

	const columns = [
		columnHelper.accessor('types', {
			header: () => (
				<span className='uppercase text-center py-[15px] max-sm:text-text4 max-sm:py-0'>
					Виды объемов
				</span>
			),
			cell: (info) => info.getValue(),
		}),

		columnHelper.accessor('conditions', {
			header: () => (
				<span className='uppercase text-center max-sm:text-text4 max-sm:py-0'>
					Условия
				</span>
			),
			cell: (info) => info.renderValue(),
		}),
		columnHelper.accessor('percent', {
			header: () => (
				<span className='uppercase text-center max-sm:text-text4 max-sm:py-0'>
					Процент
				</span>
			),
			cell: (info) => info.renderValue(),
		}),
	];

	const table = useReactTable({
		data: partnerProgramTable,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<table
			className='z-30 flex flex-col items-center justify-end w-[931px] max-sm:w-full max-md:w-[650px]'
			data-aos='fade-zoom-out'
		>
			<thead className='text-center bg-[#3C006B] text-[#DFBAF4] w-full'>
				{table.getHeaderGroups().map((headerGroup) => (
					<tr
						key={headerGroup.id}
						className='border-[1px] border-table-border flex justify-around max-sm:flex max-sm:items-center max-sm:justify-center'
					>
						{headerGroup.headers.map((header) => (
							<th
								key={header.id}
								className='border-table-border border-[1px] w-full py-3 last:max-w-[160px] max-sm:h-[45px] max-sm:flex max-sm:items-center max-sm:justify-center'
							>
								{header.isPlaceholder
									? null
									: flexRender(
											header.column.columnDef.header,
											header.getContext()
										)}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody className='bg-article text-center border-table-border max-w-[931px] w-full flex flex-col items-end'>
				{table.getRowModel().rows.map((row) => (
					<tr
						key={row.id}
						className=' text-[#DFBAF4] w-full flex justify-around'
					>
						{row.getVisibleCells().map((cell) => (
							<td
								key={cell.id}
								className='border-table-border border-[1px] py-3 w-full  flex items-center justify-center px-[55px] last:max-w-[160px] max-sm:px-2 max-sm:text-text5'
							>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</td>
						))}
					</tr>
				))}
			</tbody>
			<tfoot className='flex justify-end w-full'>
				<tr className='flex justify-end mt-[15px] w-full'>
					<th className='p-3 h-11 text-center bg-[#3C006B] text-[#DFBAF4] flex items-center border-[2px] border-table-border w-[235px] text-text2 font-regular max-sm:text-text4 max-sm:w-full max-sm:h-9'>
						Суммарный заработок от:
					</th>
					<td className='p-[15px] h-11 text-[#DFBAF4] flex items-center justify-center border-[2px] border-table-border border-l-0 max-w-[160px] w-full max-sm:max-w-[250px]  max-sm:text-text4 max-sm:h-9'>
						70%
					</td>
				</tr>
			</tfoot>
		</table>
	);
};

export default PartnerProgramTable;
