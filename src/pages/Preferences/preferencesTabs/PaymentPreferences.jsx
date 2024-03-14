import { values } from "@ant-design/plots/es/core/utils";
import Plate from "../Plate/Plate";
import { Button, Select, Input, Form } from "antd";
import editIcon from "../../../assets/images/Icons aipro partners/edit.svg";
import deleteIcon from "../../../assets/images/Icons aipro partners/delete.svg";

export default function PaymentPreferences(params) {
	const paySelect = [
		{ value: "BTC", label: "BTC" },
		{ value: "WEBMONEY", label: "WEBMONEY" },
		{ value: "PayPal", label: "PayPal" },
	];
	return (
		<>
			<div className="flex flex-row justify-evenly px-4">
				<div className="w-[35%] pr-4">
					<Plate title={"Добавить способ вывода"}>
						<Form layout="vertical">
							<Form.Item label="Выберите способ ввывода">
								<Select
									defaultValue="Способ вывода"
									onChange={console.log(values)}
									options={[...paySelect]}
									size="small"
								/>
							</Form.Item>
							<Form.Item
								name="name"
								label="Название поля"
								rules={[
									{
										required: true,
										message: "Please input your nickname!",
									},
									{
										min: 3,
										message: "Input at least 3 characters!",
									},
								]}
							>
								<Input type="text" placeholder="Шаблон того что нужно ввести" />
							</Form.Item>
							<Form.Item
								name="name"
								label="Название поля"
								rules={[
									{
										required: true,
										message: "Please input your nickname!",
									},
									{
										min: 3,
										message: "Input at least 3 characters!",
									},
								]}
							>
								<Input type="text" placeholder="Шаблон того что нужно ввести" />
							</Form.Item>
						</Form>
						<Button onClick={console.log("Добавить")}>Добавить</Button>
					</Plate>
				</div>
				<div className="flex-1">
					<Plate title={"Способы ввывода"}>
						<Form layout="vertical">
							<Form.Item
								name="name"
								label="Название поля"
								rules={[
									{
										required: true,
										message: "Please input your nickname!",
									},
									{
										min: 3,
										message: "Input at least 3 characters!",
									},
								]}
							>
								<Input type="text" placeholder="Шаблон того что нужно ввести" />
							</Form.Item>
							<Form.Item
								name="name"
								label="Название поля"
								rules={[
									{
										required: true,
										message: "Please input your nickname!",
									},
									{
										min: 3,
										message: "Input at least 3 characters!",
									},
								]}
							>
								<Input type="text" placeholder="Шаблон того что нужно ввести" />
							</Form.Item>

							<Form.Item
								name="name"
								label="Название поля"
								rules={[
									{
										required: true,
										message: "Please input your nickname!",
									},
									{
										min: 3,
										message: "Input at least 3 characters!",
									},
								]}
							>
								<Input type="text" placeholder="Шаблон того что нужно ввести" />
							</Form.Item>
							<Form.Item
								name="name"
								label="Название поля"
								rules={[
									{
										required: true,
										message: "Please input your nickname!",
									},
									{
										min: 3,
										message: "Input at least 3 characters!",
									},
								]}
							>
								<Input type="text" placeholder="Шаблон того что нужно ввести" />
							</Form.Item>
						</Form>
						<Button onClick={console.log("Сохранить изменения")}>
							Сохранить изменения
						</Button>
					</Plate>
				</div>
			</div>
		</>
	);
}
