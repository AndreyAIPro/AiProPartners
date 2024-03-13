import React, { useState, useEffect } from "react";

import "./SubaccountTable.scss";

import Modal from "../SubaccountModal/SubaccountModal";

import { useUser } from "../../../hooks/useUser";
import { useCreateSubaccountLinks } from "../../../hooks/useCreateSubaccountLinks";
import { useSelectSubAccountRefLinks } from "../../../hooks/useSelectSubaccountLinks";
import { SubaccountItem } from "./SubaccountItem";

const SubaccountTable = () => {
	const { user } = useUser();
	const { data: subaccountRefLinks } = useSelectSubAccountRefLinks(user?.id);
	const { setCreateSubAccountLink } = useCreateSubaccountLinks();

	//Holds account name
	const [accountName, setAccountName] = useState("");

	// Holds row key
	const [selectedRow, setSelectedRow] = useState(null);
	// variable that hold all rows

	//holds state of modal window false = invisible
	const [deleteModalVisible, setDeleteModalVisible] = useState(false); // State for delete confirmation modal
	// holds Ref

	const [isModalVisible, setIsModalVisible] = useState(false);
	// function that puts new Account name to accountName
	const handleNewSubaccount = (e) => {
		setAccountName(e.target.value);
	};

	//function that puts ref to the ref state

	//adding new row to the table
	const addRow = () => {
		if (accountName.length) {
			// const newRow = {
			// 	id: rows.length + 1,
			// 	className: "border-2 border-gray p-1 px-2",
			// 	accountName: data.,
			// 	ref: ref,
			// };

			setCreateSubAccountLink(accountName);
			// const newArray = subaccountRefLinks?.map((row, index) => ({
			// 	id: index + 1,
			// 	className: "border-2 border-gray p-1 px-2",
			// 	accountName: row.name || "No partner name available",
			// 	ref: row.refLink,
			// }));

			//setRows(newArray);

			// console.log(accountName);
			// const newAccountName = accountName;
			// subaccountLinks(user.id, newAccountName);

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

	const hideDeleteModal = () => {
		setDeleteModalVisible(false); // Hide delete confirmation modal
	};

	const handleFormSubmit = () => {
		const updatedRow = rows.map((row) =>
			row.id === selectedRow.id ? { ...row, accountName: accountName } : row,
		);

		setRows(updatedRow);
		setIsModalVisible(false); // Hide the modal
		setAccountName("");
	};
	// useEffect(() => {
	// 	const newArray = subaccountRefLinks.map((row, index) => ({
	// 		id: index + 1,
	// 		className: "border-2 border-gray p-1 px-2",
	// 		accountName: row.partnerName || "No partner name available",
	// 		ref: row.refLink,
	// 	}));
	// 	setRows(newArray);
	// }, [subaccountRefLinks]);

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
								{subaccountRefLinks?.map((row) => (
									<SubaccountItem
										key={Math.random()}
										name={row.name}
										refLink={row.refLink}
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
