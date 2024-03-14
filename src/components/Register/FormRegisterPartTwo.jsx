import { Button, Checkbox, Form, Input, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import classNames from "classnames";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function FormRegisterPartTwo({ formChange, setFormChange }) {
	const [valueRadioButtonSources, setValueRadioButtonSources] = useState("");
	const link = "/signup";
	const [activeButton, setActiveButton] = useState(false);
	const [textAreaOpen, setTextAreaOpen] = useState(false);
	return (
		<div
			className={classNames({
				hidden: formChange,
			})}
		>
			<Form.Item
				name="fullName"
				rules={[
					{
						required: true,
						message: "Please input your name!",
					},
					{
						min: 3,
						message: "Input at least 3 characters!",
					},
					{
						max: 16,
						message: "Input less then 16 symbol!",
					},
				]}
			>
				<Input placeholder="ФИО" />
			</Form.Item>
			<Form.Item name="nameCompany">
				<Input placeholder="Название компании" />
			</Form.Item>
			<div className="text-[16px]">Источники трафика</div>
			<Form.Item
				name="radioButtonSources"
				className="flex flex-col text-[#fff]"
				rules={[
					{
						required: true,
						message: "Виберіть джерело!",
					},
				]}
			>
				<Checkbox.Group
					className="flex flex-col"
					onChange={(e) => setValueRadioButtonSources(e)}
				>
					<Checkbox className="mb-[10px] text-[#fff]" value="site">
						<div className="text-[12px]">Сайт</div>
					</Checkbox>
					<Checkbox className="mb-[10px] text-[#fff]" value="socialNetwork">
						<div className="text-[12px]">Социальные сети</div>
					</Checkbox>
					<div className="text-[14px] text-[#fff]">Арбитражный трафик</div>
					<div className="ml-[15px] flex flex-col">
						<Checkbox className="mb-[10px] text-[#fff]" value="payMethod">
							<div className="text-[12px]">
								Платный метод привлечения клиентов
							</div>
						</Checkbox>
						<Checkbox className="mb-[10px] text-[#fff]" value="nopayMethod">
							<div className="text-[12px]">
								УБТ привлечения (Условно бесплатный трафик)
							</div>
						</Checkbox>
					</div>
					<Checkbox
						className="mb-[10px] text-[#fff]"
						value="interactionWithCustomers"
					>
						<div className="text-[12px]">Прямое взаимодействие с клиентами</div>
					</Checkbox>
					<Checkbox
						className="mb-[10px] text-[#fff]"
						value="other"
						onChange={(e) => setTextAreaOpen(e.target.checked)}
					>
						<div className="text-[12px]">Другое</div>
					</Checkbox>
				</Checkbox.Group>
			</Form.Item>
			{textAreaOpen && (
				<Form.Item name="textAreaOtherRadio">
					<TextArea />
				</Form.Item>
			)}
			<Form.Item name="discordAccount">
				<Input placeholder="Дискорд" />
			</Form.Item>
			<Form.Item
				name="telegramAccount"
				rules={[
					{
						required: true,
						message: "Вкажіть ваш аккаунт телеграм!",
					},
				]}
			>
				<Input placeholder="Телеграм" />
			</Form.Item>
			<Checkbox
				onChange={(e) => setActiveButton(e.target.checked)}
				className="mb-[20px] text-[#fff]"
			>
				<div className="text-[12px]">
					Я принимаю все условия
					<NavLink
						className="ml-[3px] text-[#24A1E0]"
						to="/partnershipAgreement"
						state={link}
						target="_blank"
					>
						партнерского соглашения
					</NavLink>
				</div>
			</Checkbox>
			<div className="flex justify-between">
				<Form.Item>
					<Button
						type="link"
						className="bg-[#1677ff00]"
						onClick={() => setFormChange(!formChange)}
					>
						<div className="font-bold text-[#fff]">Назад</div>
					</Button>
				</Form.Item>
				<Form.Item>
					<Button
						type="primary"
						className={`bg-[#1677FF] ${!activeButton ? "pointer-events-none" : ""} `}
						htmlType="submit"
					>
						<div className="font-bold text-[#fff]">Регистрация</div>
					</Button>
				</Form.Item>
			</div>
		</div>
	);
}

export default FormRegisterPartTwo;
