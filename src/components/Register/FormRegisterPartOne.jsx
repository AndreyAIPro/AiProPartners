import { Button, Form, Input } from "antd";
import classNames from "classnames";
import React, { useRef } from "react";
import { PhoneInput } from "react-international-phone";

function FormRegisterPartOne({
	formChange,
	phone,
	setPhone,
	setFormChange,
	showMessagewithErrorPhone,
	checkedValidatePhoneNumber,
}) {
	const inputNickname = useRef();
	const inputEmail = useRef();
	const inputPassword = useRef();
	return (
		<div
			className={classNames({
				hidden: !formChange,
			})}
		>
			<Form.Item
				name="nickname"
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
				<Input placeholder="Nickname" ref={inputNickname} />
			</Form.Item>
			<Form.Item
				name="email"
				rules={[
					{
						required: true,
						type: "email",
						message: "Please input valid email!",
					},
				]}
			>
				<Input placeholder="email" ref={inputEmail} />
			</Form.Item>
			<Form.Item name="phone">
				<PhoneInput
					countrySelectorStyleProps={{
						buttonClassName: "border-[#3f3f3f] p-[10px]",
						dropdownStyleProps: {
							className: "bg-[#181818] text-[grey]",
						},
					}}
					inputStyle={{
						background: "none",
						border: "1px solid rgb(63, 63, 63)",
						color: "rgb(180, 180, 180)",
						width: "100%",
					}}
					defaultCountry="ua"
					value={phone}
					onChange={(phone) => setPhone(phone)}
				/>
			</Form.Item>
			{showMessagewithErrorPhone && (
				<div className="mb-[15px] mt-[-15px] text-[red]">
					Неправильний номер телефону!
				</div>
			)}
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: "Please input your password!",
					},
				]}
			>
				<Input.Password placeholder="password" ref={inputPassword} />
			</Form.Item>
			<Form.Item className="flex justify-end">
				<Button
					type="primary"
					className="bg-[#1677FF]"
					onClick={() => {
						checkedValidatePhoneNumber();
						checkInputValues();
					}}
				>
					<div className="font-bold text-[#fff]">Далее</div>
				</Button>
			</Form.Item>
		</div>
	);
	function checkInputValues() {
		if (
			inputNickname.current.input.value.length !== 0 &&
			inputEmail.current.input.value.length !== 0 &&
			inputPassword.current.input.value.length >= 3
		) {
			setFormChange(false);
		}
	}
}

export default FormRegisterPartOne;
