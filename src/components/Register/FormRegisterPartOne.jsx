import { Button, Form, Input } from "antd";
import classNames from "classnames";
import React, { useRef } from "react";
import { PhoneInput } from "react-international-phone";

function FormRegisterPartOne({
	formChange,
	phone,
	setPhone,
	setFormChange,
	checkedValidatePhoneNumber,
	showMessagewithErrorPhone,
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
				className="mb-[40px]"
				rules={[
					{
						required: true,
						message: "Пожалуйста, введите ваш пароль!",
					},
					{
						min: 8,
						message: "Введите не менее 8 символов!",
					},
					{
						pattern:
							/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]+$/,
						message:
							"Пароль должен содержать заглавные[A-Z] и строчные буквы[a-z], цифры[0-9] и символы[@$!%*?&_-]!",
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
						checkInputValues();
						checkedValidatePhoneNumber();
					}}
				>
					<div className="font-bold text-[#fff]">Далее</div>
				</Button>
			</Form.Item>
		</div>
	);
	function checkInputValues() {
		const passwordValue = inputPassword.current.input.value;
    	const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]+$/;

    if (
        inputNickname.current.input.value.length !== 0 &&
        inputEmail.current.input.value.length !== 0 &&
        passwordValue.length >= 8 &&
        passwordPattern.test(passwordValue)
    ) {
        setFormChange(false);
    }
	}
}

export default FormRegisterPartOne;
