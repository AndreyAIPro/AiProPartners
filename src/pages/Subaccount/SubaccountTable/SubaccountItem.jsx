import editIcon from "../../../assets/images/Icons aipro partners/edit.svg";
import deleteIcon from "../../../assets/images/Icons aipro partners/delete.svg";
import copy from "copy-to-clipboard";
import { CopyOutlined } from "@ant-design/icons";
import { message, Typography } from "antd";
import "./SubaccountTable.scss";

const { Text } = Typography;

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

export function SubaccountItem({
	name,
	refLink,
	onEditClick,
	onDeleteClick,
	userId,
}) {
	const fullRef =
		window.location.protocol +
		"//" +
		window.location.hostname +
		"/reflink/" +
		refLink;
	return (
		<tr>
			<td className={"border-2 border-gray p-1 px-2"}>
				<div className="flex justify-between">
					{name}
					{userId != refLink && (
						<img
							className="mx-2 cursor-pointer p-1"
							src={editIcon}
							alt="edit"
							onClick={onEditClick}
						></img>
					)}
				</div>
			</td>
			<td className={"border-2 border-gray p-1 px-2"}>
				<div className="flex justify-between">
					<div className="w-full flex">
						<Text
							ellipsis={{
								tooltip: { fullRef },
							}}
							style={{
								color: "white",
								marginBottom: "0",
								width: "13rem",
							}}
						>
							{fullRef}
						</Text>
					</div>

					<span
						className="mx-2 flex cursor-pointer p-1"
						onClick={() => handleRef(refLink)}
						alt="Copy"
					>
						<CopyOutlined />
					</span>
				</div>
			</td>
			<td className="min-w-7">
				<div className="flex justify-center">
					{userId != refLink && (
						<img
							className=" cursor-pointer self-center"
							src={deleteIcon}
							alt="delete"
							onClick={onDeleteClick}
						></img>
					)}
				</div>
			</td>
		</tr>
	);
}
