import { Form } from "antd";
import React, { useState } from "react";
import "react-international-phone/style.css";
import { isPhoneValid } from "../../utils/helpers";
import FormRegisterPartOne from "./FormRegisterPartOne";
import FormRegisterPartTwo from "./FormRegisterPartTwo";

export default function Register() {
	const [phone, setPhone] = useState("");
	const isValid = isPhoneValid(phone);
	const [showMessagewithErrorPhone, setShowMessagewithErrorPhone] =
		useState(false);
	const [formChange, setFormChange] = useState(true);
	return (
		<Form
			className="w-3/5 text-white max-md:w-full"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			autoComplete="off"
		>
			<div className="mb-[25px] text-center text-[40px] font-bold">
				Создание аккаунта
			</div>
			{formChange ? (
				<FormRegisterPartOne
					formChange={formChange}
					phone={phone}
					setPhone={setPhone}
					setFormChange={setFormChange}
					showMessagewithErrorPhone={showMessagewithErrorPhone}
					checkedValidatePhoneNumber={checkedValidatePhoneNumber}
				/>
			) : (
				<FormRegisterPartTwo
					setFormChange={setFormChange}
					formChange={formChange}
				/>
			)}
		</Form>
	);

	function onFinish(values) {
		console.log("Success:", values);
	}
	function checkedValidatePhoneNumber() {
		if (!isValid) {
			setShowMessagewithErrorPhone(true);
			return;
		}
		setShowMessagewithErrorPhone(false);
	}
}
