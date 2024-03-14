import editIcon from "../../../assets/images/Icons aipro partners/edit.svg";
import deleteIcon from "../../../assets/images/Icons aipro partners/delete.svg";
import copy from "copy-to-clipboard";
import { CopyOutlined } from "@ant-design/icons";
import { message } from "antd";
import "./SubaccountTable.scss";

const handleEdit = (refLink) => {
    message.error("Поки не працює");
};

const openDeleteModal = (refLink) => {
	message.error("Поки не працює");
};

const handleRef = (refLink) => {
	const refToCopy =
		window.location.protocol +
		"//" +
		window.location.hostname +
		"/reflink/" +
		refLink;
	copy(refToCopy);
	message.success("Ссылка скопирована в кеш");
};


export function SubaccountItem({name, refLink}) {

	return (<tr>
		<td className={"border-2 border-gray p-1 px-2"}>{name}</td>
		<td className={"border-2 border-gray p-1 px-2"}>{refLink}</td>
		<td className="flex justify-evenly border-none p-1">
			<img
				className="mx-2 cursor-pointer p-1"
				src={editIcon}
				alt="edit"
				onClick={() => handleEdit(refLink)}
			></img>
			<img
				className="mx-2 cursor-pointer"
				src={deleteIcon}
				alt="delete"
				onClick={() => openDeleteModal(refLink)}
			></img>
			<span
				className="mx-2 flex cursor-pointer p-1"
				onClick={() => handleRef(refLink)}
				alt="Copy"
			>
				<CopyOutlined />
			</span>
		</td>
	</tr>);
}
