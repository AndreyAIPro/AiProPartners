import React, { useState } from "react";

import "./RefTable.scss";

import deleteIcon from "../../../assets/images/Icons aipro partners/delete.svg";
import editIcon from "../../../assets/images/Icons aipro partners/edit.svg";
import Modal from "../../Subaccount/SubaccountModal/SubaccountModal";
import { useUser } from "../../../hooks/useUser";
import { creatDefultRefLink } from "../../../utils/supabaseUtils";

const RefTable = () => {
	const [rows, setRows] = useState([
		{ id: 1, accountID: "ID", partnerName: "Name PLACEHOLDER" },
		{ id: 2, accountID: "ID 2", partnerName: "Name PLACEHOLDER 2" },
	]);
	const {user} = useUser();
	if(user?.id !== undefined) creatDefultRefLink(user?.id);
	const rowClassName = { className: "border-2 border-gray p-1  px-2" };
	// //Holds account name
	// const [accountName, setAccountName] = useState("");
	const link = (window.location.hostname === 'localhost') ? "http://localhost:5173/reflink/50c7bc72-944f-4647-ba70-f59eeab96434": window.location.protocol +"//"+ window.location.hostname + "/reflink/" + user.id
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

	return (
		<div className={"w-11/12 flex  justify-items-center "}>
			{/* Edit Modal */}
			{/* <Modal
                title="Редактировать"
                open={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                <input
                    name="accountName"
                    type="text"
                    onChange={handleNewSubaccount}
                    className="w-full h-full text-black px-2 rounded-md my-3"
                    value={accountName}
                />
                <button
                    className="custom-button"
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
			<div className="flex w-[100%]  justify-items-center">
				<div className="flex w-[100%]  flex-col content-end">
					<div className="my-6 flex justify-end  ">
						<div className=" flex  justify-center  ">
							<button className="custom-button w-[200px] p-[10px] text-nowrap rounded-l-md text-text3 ">
								Ваша реферальная ссылка
							</button>
						</div>
						<div className="flex w-[100%] items-center text-nowrap rounded-r-md bg-white px-4 text-text2 text-black">
							{accountRef}
						</div>
					</div>
					<table>
						<thead>
							<tr>
								<th className="table-gradient w-[20%] border-2 border-gray p-1 text-text4 ">
									ID партнера
								</th>
								<th className="table-gradient w-[60%] border-2 border-gray p-1 text-text4 ">
									Название партнера
								</th>
								<td className="w-20 text-center text-text4 "></td>
							</tr>
						</thead>
						<tbody>
							{rows.map((row) => (
								<tr key={row.id}>
									<td className={rowClassName.className}>{row.accountID}</td>
									<td className={rowClassName.className}>{row.partnerName}</td>
									<td className="flex justify-center border-none p-1">
										<img
											className="mx-2 cursor-pointer"
											src={editIcon}
											alt="edit"
										></img>
										<img
											className="mx-2 cursor-pointer"
											src={deleteIcon}
											alt="delete"
											onClick={() => openDeleteModal(row)}
										></img>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default RefTable;
