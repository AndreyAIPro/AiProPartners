import { Form, message } from "antd";
import React, { useState } from "react";
import "react-international-phone/style.css";
import { isPhoneValid } from "../../utils/helpers";
import FormRegisterPartOne from "./FormRegisterPartOne";
import FormRegisterPartTwo from "./FormRegisterPartTwo";
import { useSignup } from "../../hooks/useSignup";
export default function Register() {
	const { signup, isLoading } = useSignup();
	const [phone, setPhone] = useState("");
	const isValid = isPhoneValid(phone);
	const [messageApi, contextHolder] = message.useMessage();
	const [showMessagewithErrorPhone, setShowMessagewithErrorPhone] =
		useState(false);
	const [formChange, setFormChange] = useState(true);
	return (
		<Form
			className="w-[40%] max-md:w-full text-white"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			autoComplete="off"
		>
			<div className="mb-[25px] text-center text-[40px] font-bold">
				Создание аккаунта
			</div>
			<FormRegisterPartOne
				formChange={formChange}
				phone={phone}
				setPhone={setPhone}
				setFormChange={setFormChange}
				showMessagewithErrorPhone={showMessagewithErrorPhone}
				checkedValidatePhoneNumber={checkedValidatePhoneNumber}
			/>
			<FormRegisterPartTwo
				setFormChange={setFormChange}
				formChange={formChange}
			/>
			{contextHolder}
		</Form>
	);

	function onFinish(values) {
		signup(values, {
			onSuccess: () => {
				messageApi.open({
					type: "success",
					duration: 5,
					content:
						"Account successfully created! Verify new account from the user's email address.",
				});
			},
			onError: (err) => {
				messageApi.open({
					type: "error",
					duration: 5,
					content: err.message,
				});
			},
		});
	}
	function checkedValidatePhoneNumber() {
		if (!isValid) {
			setShowMessagewithErrorPhone(true);
			setFormChange(true);
			return;
		}
		setShowMessagewithErrorPhone(false);
	}
}
