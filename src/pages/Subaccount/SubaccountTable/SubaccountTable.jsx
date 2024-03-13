import React, { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import "./SubaccountTable.scss";
import editIcon from "../../../assets/images/Icons aipro partners/edit.svg";
import deleteIcon from "../../../assets/images/Icons aipro partners/delete.svg";
import Modal from "../SubaccountModal/SubaccountModal";
import { CopyOutlined } from "@ant-design/icons";
import { message } from "antd";
import subaccountLinks from "../../../utils/supabaseUtils";
import { useUser } from "../../../hooks/useUser";
import { useCreateSubaccountLinks } from "../../../hooks/useCreateSubaccountLinks";
import { useSelectSubaccountRefLinks } from "../../../hooks/useSelectSubaccountLinks";

const SubaccountTable = () => {
	const { user } = useUser();
	//Holds account name
	const [accountName, setAccountName] = useState("");

	const [ref, setRef] = useState("");
	// Holds row key
	const [selectedRow, setSelectedRow] = useState(null);
	// variable that hold all rows
	const [rows, setRows] = useState([]);
	const { data: subaccountRefLinks } = useSelectSubaccountRefLinks(user.id);
	const data = subaccountRefLinks || [];

	const { createSubaccountLinks } = useCreateSubaccountLinks();

	//holds state of modal window false = invisible
	const [deleteModalVisible, setDeleteModalVisible] = useState(false); // State for delete confirmation modal
	// holds Ref

	const [isModalVisible, setIsModalVisible] = useState(false);
	// function that puts new Account name to accountName
	const handleNewSubaccount = (e) => {
		setAccountName(e.target.value);
	};

	//function that puts ref to the ref state
	const handleRef = (row) => {
		const refToCopy = row.ref;
		copy(refToCopy);
		message.success("Ссылка скопирована в кеш");
	};

	//adding new row to the table
	const addRow = () => {
		if (accountName.length !== 0) {
			// const newRow = {
			// 	id: rows.length + 1,
			// 	className: "border-2 border-gray p-1 px-2",
			// 	accountName: data.,
			// 	ref: ref,
			// };

			const newArray = data.map((row, index) => ({
				id: index + 1,
				className: "border-2 border-gray p-1 px-2",
				accountName: row.partnerName || "No partner name available",
				ref: row.refLink,
			}));

			setRows(newArray);

			// console.log(accountName);
			const newAccountName = accountName;
			subaccountLinks(user.id, newAccountName);

			// createSubaccountLinks(user.id, newAccountName, {
			// 	onSuccess: () => {
			// 		console.log("done");
			// 	},
			// 	onError: () => {
			// 		console.log("error");
			// 	},
			// });
			// setRef("");
			// setAccountName("");
		}
	};
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

	const handleEdit = (row) => {
		setSelectedRow(row); // Set the selected row for editing
		setAccountName(row.accountName);

		// Set the accountName state with the current account name
		setIsModalVisible(true); // Show the edit modal
	};
	const handleFormSubmit = () => {
		const updatedRow = rows.map((row) =>
			row.id === selectedRow.id ? { ...row, accountName: accountName } : row,
		);

		setRows(updatedRow);
		setIsModalVisible(false); // Hide the modal
		setAccountName("");
	};
	useEffect(() => {
		const newArray = data.map((row, index) => ({
			id: index + 1,
			className: "border-2 border-gray p-1 px-2",
			accountName: row.partnerName || "No partner name available",
			ref: row.refLink,
		}));
		setRows(newArray);
	}, [data]);

	return (
		<div className={"w-full "}>
			{/* Edit Modal */}
			<Modal
				title="Редактировать"
				open={isModalVisible}
				onCancel={() => setIsModalVisible(false)}
				footer={null}
			>
				<input
					name="accountName"
					type="text"
					onChange={handleNewSubaccount}
					className="w-full my-5 h-full rounded-md px-2 text-title3  text-black"
					value={accountName}
				/>
				<button
					className="rounded-full  bg-light-blue px-8 py-2 "
					onClick={handleFormSubmit}
				>
					Сохранить
				</button>
			</Modal>
			{/* Delete Confirmation Modal */}
			<Modal
				title="Удалить?"
				open={deleteModalVisible}
				onCancel={hideDeleteModal}
				footer={null}
			>
				<div className="flex justify-start p-2">
					<button
						className="mx-4 rounded-full bg-light-blue px-8 py-2"
						onClick={() => handleDelete(selectedRow.id)}
					>
						ДА
					</button>
					<button
						className="mx-4 rounded-full bg-light-blue px-8 py-2"
						onClick={hideDeleteModal}
					>
						Нет
					</button>
				</div>
			</Modal>
			<div className="w-full  ">
				<div className="w-full flex  flex-col content-end ">
					<div className="w-full my-3 flex flex-1   ">
						<input
							type="text"
							onChange={handleNewSubaccount}
							placeholder="Назовите Субаккаунт"
							className="w-full flex-1 rounded-md px-2 text-text2 text-black "
							value={accountName}
						/>
						<div className="flex justify-center px-3">
							<button
								className="custom-button text-nowrap rounded-full"
								onClick={addRow}
							>
								Создать Субаккаунт
							</button>
						</div>
					</div>
					<div className=" ">
						<table className="w-[100%] bg-black">
							<thead>
								<tr>
									<th className="table-gradient w-[40%] border-2 border-gray p-1 text-text4">
										Название Субаккаунта
									</th>
									<th className="table-gradient w-[40%] border-2 border-gray p-1 text-text4">
										Ссылка
									</th>
									<td className=" "></td>
								</tr>
							</thead>
							<tbody>
								{rows.map((row) => (
									<tr key={row.id}>
										<td className={row.className}>{row.accountName}</td>
										<td className={row.className}>{row.ref}</td>
										<td className="flex justify-evenly border-none p-1">
											<img
												className="mx-2 cursor-pointer p-1"
												src={editIcon}
												alt="edit"
												onClick={() => handleEdit(row)}
											></img>
											<img
												className="mx-2 cursor-pointer"
												src={deleteIcon}
												alt="delete"
												onClick={() => openDeleteModal(row)}
											></img>
											<span
												className="mx-2 flex cursor-pointer p-1"
												onClick={() => handleRef(row)}
												alt="Copy"
											>
												<CopyOutlined />
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubaccountTable;
