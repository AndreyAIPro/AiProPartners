import React, { useState } from "react";

import "./RefTable.scss";

import editIcon from "../../../assets/images/Icons aipro partners/edit.svg";
import deleteIcon from "../../../assets/images/Icons aipro partners/delete.svg";
import Modal from "../../Subaccount/SubaccountModal/SubaccountModal";

const RefTable = () => {
    const [rows, setRows] = useState([
        { id: 1, className: "border-2 border-gray p-1 font-nunito-sans px-2", accountID: "ID", partnerName: "Name PLACEHOLDER" },
        { id: 2, className: "border-2 border-gray p-1 font-nunito-sans px-2", accountID: "ID 2", partnerName: "Name PLACEHOLDER 2" },
    ]);
    // //Holds account name
    // const [accountName, setAccountName] = useState("");
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
            const updatedRows = rows.filter(row => row.id !== selectedRow.id);
            setRows(updatedRows);
            setDeleteModalVisible(false); // Close delete confirmation modal after deletion
        }
    };
    const openDeleteModal = row => {
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
        <div className={"flex w-11/12 py-16 justify-items-center "}>
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
                <div className="p-2 flex justify-start">
                    <button
                        className="custom-button mx-2 px-8 font-nunito-sans"
                        onClick={() => handleDelete(selectedRow.id)}
                    >
                        ДА
                    </button>
                    <button
                        className="custom-button mx-2 px-8 font-nunito-sans"
                        onClick={hideDeleteModal}
                    >
                        Нет
                    </button>
                </div>
            </Modal>
            <div className="flex w-11/12 py-16 justify-items-center">
                <div className="flex flex-col  w-full content-end">
                    <div className="flex justify-end my-6 h-8 ">
                        <div className="px-3 flex button-color justify-center h-full rounded-l-md">
                            <button className="  text-nowrap text-text3 font-nunito-sans">Ваша реферальная ссылка</button>
                        </div>
                        <input
                            type="text"
                            placeholder="Де це брати цю фігню пане бек ендери?"
                            className="w-full text-text2  text-black px-4 rounded-r-md font-nunito-sans"
                        />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className="w-1/5 table-gradient border-gray border-2 p-1 text-text4 font-nunito-sans">ID партнера</th>
                                <th className="2-3/5 table-gradient border-gray border-2 p-1 text-text4 font-nunito-sans">
                                    Название партнера
                                </th>
                                <td className="w-20 text-center text-text4 font-nunito-sans"></td>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map(row => (
                                <tr key={row.id}>
                                    <td className={row.className}>{row.accountID}</td>
                                    <td className={row.className}>{row.partnerName}</td>
                                    <td className="flex justify-center p-1 border-none">
                                        <img
                                            className="cursor-pointer mx-2"
                                            src={editIcon}
                                            alt="edit"
                                        ></img>
                                        <img
                                            className="cursor-pointer mx-2"
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
