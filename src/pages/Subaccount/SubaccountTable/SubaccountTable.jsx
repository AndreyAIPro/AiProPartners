import React, { useState } from "react";

import "./SubaccountTable.scss";

import Modal from "../SubaccountModal/SubaccountModal";

import { useUser } from "../../../hooks/useUser";
import { useCreateSubaccountLinks } from "../../../hooks/useCreateSubaccountLinks";
import { useSelectSubAccountRefLinks } from "../../../hooks/useSelectSubaccountLinks";
import { SubaccountItem } from "./SubaccountItem";
import { useDeleteSubaccount } from "../../../hooks/useDeleteSubaccount";
import { useRenameSubaccount } from "../../../hooks/useRenameSubaccount";

const SubaccountTable = () => {
	const { user } = useUser();
	const { data: subaccountRefLinks } = useSelectSubAccountRefLinks(user?.id);
	const { setCreateSubAccountLink } = useCreateSubaccountLinks();
	//Holds account name
	const [accountName, setAccountName] = useState("");
	const [renameAccountName, setRenameAccountName] = useState("");
	// Holds row key
	const [selectedRow, setSelectedRow] = useState(null);
	//holds state of modal window false = invisible
	const [deleteModalVisible, setDeleteModalVisible] = useState(false); // State for delete confirmation modal
	// holds Ref
	const {delSubaccount} = useDeleteSubaccount(); 
	const {renameSubaccount} = useRenameSubaccount(); 

	const [isModalVisible, setIsModalVisible] = useState(false);
	// function that puts new Account name to accountName
	const handleNewSubaccount = (e) => {
		setAccountName(e.target.value);
	};
	const handleNewRenameSubaccount = (e) => {
		setRenameAccountName(e.target.value);
	};
	const handleDeleteClick = (rowData) => {
		setSelectedRow(rowData);
		setDeleteModalVisible(true);
	};
	const handleEditClick = (rowData) => {
		setSelectedRow(rowData);
		setIsModalVisible(true);
	};

	//adding new row to the table
	const addRow = () => {
		if (accountName.length) {
			setCreateSubAccountLink(accountName);

			setAccountName("");
		}
	};
	const handleDelete = () => {
		if (selectedRow) {
			delSubaccount(selectedRow.refLink);

			setDeleteModalVisible(false); // Close delete confirmation modal after deletion
		}
	};

	const hideDeleteModal = () => {
		setDeleteModalVisible(false); // Hide delete confirmation modal
	};

	const handleFormSubmit = () => {
		let ThisRefLink = selectedRow.refLink;
		if (renameAccountName.length !== 0) {
			renameSubaccount({refLink: ThisRefLink, name: renameAccountName});
		}

		setIsModalVisible(false); // Hide the modal
		setRenameAccountName("");
	};

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
					onChange={handleNewRenameSubaccount}
					className="w-full my-5 h-full rounded-md px-2 text-title3  text-black"
					value={renameAccountName}
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
							className="w-full rounded-md px-2 text-text2 text-black"
							value={accountName}
							style={{width: "15rem"}}
						/>
						<div className="flex justify-center px-3">
							<button
								className="custom-button text-nowrap rounded-full"
								onClick={addRow}
								style={{width: "12rem"}}
							>
								Создать Субаккаунт
							</button>
						</div>
					</div>
					<div className=" ">
						<table className="w-[100%] bg-black">
							<thead>
								<tr>
									<th className="table-gradient w-[45%] border-2 border-gray p-1 text-text4" style={{width: "10rem"}}>
										Название Субаккаунта
									</th>
									<th className="table-gradient w-[45%] border-2 border-gray p-1 text-text4" style={{width: "15rem"}}>
										Ссылка
									</th>
									<td className=" "></td>
								</tr>
							</thead>
							<tbody>
								{subaccountRefLinks?.map((row, index) => (
									<SubaccountItem
										key={index}
										name={row.name}
										refLink={row.refLink}
										onEditClick={() => handleEditClick(row)}
										onDeleteClick={() => handleDeleteClick(row)}
										userId={user?.id}
									/>
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
