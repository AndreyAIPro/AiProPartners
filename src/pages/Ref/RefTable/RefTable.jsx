import React, { useState } from "react";
import "./RefTable.scss";
import { useUser } from "../../../hooks/useUser";
import {
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table";
import refData from "./../../../data/dataForRefTable";
import { message } from "antd";
import copy from "copy-to-clipboard";
import { useSelectPartnersRefLinks } from "../../../hooks/useSelectPartnersRefLinks";

const RefTable = () => {
	const [rows, setRows] = useState([
		{ id: 1, accountID: "ID", partnerName: "Name PLACEHOLDER" },
		{ id: 2, accountID: "ID 2", partnerName: "Name PLACEHOLDER 2" },
	]);
	const { user } = useUser();
	const { data: partnersRefLinks } = useSelectPartnersRefLinks(user?.id);
	const data = partnersRefLinks || [];

	//if(user?.id !== undefined) creatDefultRefLink(user?.id);
	const rowClassName = { className: "border-2 border-gray p-1  px-2" };
	// //Holds account name
	// const [accountName, setAccountName] = useState("");
	const link =
		window.location.hostname === "localhost"
			? "http://localhost:5173/reflink/50c7bc72-944f-4647-ba70-f59eeab96434"
			: window.location.protocol +
				"//" +
				window.location.hostname +
				"/reflink/" +
				user.id;
	const [accountRef, setAccountRef] = useState(link);
	// // Holds row key
	const [selectedRow, setSelectedRow] = useState(null);
	// //holds state of modal window false = invisible
	const [deleteModalVisible, setDeleteModalVisible] = useState(false); // State for delete confirmation modal

	// const [isModalVisible, setIsModalVisible] = useState(false);
	// // function that puts new Account name to accountName
	// const handleNewSubaccount = e => {
	//     setAccountName(e.target.value);
	// };

	//function that puts ref to the ref state

	// //adding new row to the table
	// const addRow = () => {
	//     if (accountName.length !== 0) {
	//         const newRow = {
	//             id: rows.length + 1,
	//             className: "border-2 border-gray p-1",
	//             accountName: accountName,
	//             ref: "REF PLACEHOLDER",
	//         };
	//         setRows([...rows, newRow]);
	//         setAccountName("");
	//         // setRef("");
	//     }
	// };
	const handleDelete = () => {
		if (selectedRow && selectedRow.id) {
			const updatedRows = rows.filter((row) => row.id !== selectedRow.id);
			setRows(updatedRows);
			setDeleteModalVisible(false); // Close delete confirmation modal after deletion
		}
	};
	const openDeleteModal = (row) => {
		setSelectedRow(row);
		setDeleteModalVisible(true);
	};

	const hideDeleteModal = () => {
		setDeleteModalVisible(false); // Hide delete confirmation modal
	};

	// const handleEdit = row => {
	//     setSelectedRow(row); // Set the selected row for editing
	//     setAccountName(row.accountName);

	//     // Set the accountName state with the current account name
	//     setIsModalVisible(true); // Show the edit modal
	// };
	// const handleFormSubmit = () => {
	//     const updatedRow = rows.map(row => (row.id === selectedRow.id ? { ...row, accountName: accountName } : row));
	//     setRows(updatedRow);
	//     setIsModalVisible(false); // Hide the modal
	//     setAccountName("");
	// };

	const columns = [
		{
			header: "ID партнера",
			accessorKey: "refLink",
		},
		{
			header: "Название партнера",
			accessorKey: "name",
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
