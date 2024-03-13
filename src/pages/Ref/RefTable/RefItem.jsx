export function RefItem({ name, refLink }) {
	return (
		<tr key={headerGroup.id} className="bg-gray">
			{headerGroup.headers.map((header) => (
				<th
					key={header.id}
					className="py-1 text-left font-nunito-sans text-text2 first:pl-4 last:pl-4 "
				>
					{header.isPlaceholder
						? null
						: flexRender(header.column.columnDef.header, header.getContext())}
				</th>
			))}
		</tr>
	);
}
