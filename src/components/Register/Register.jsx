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
	const [isFinallyForm, setIsFanillyForm] = useState(true);
	const [messageApi, contextHolder] = message.useMessage();
	const [showMessagewithErrorPhone, setShowMessagewithErrorPhone] =
		useState(false);
	const [formChange, setFormChange] = useState(true);
	return (
		<Form
			className="max-md:w-full w-[40%] text-white"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			autoComplete="off"
		>
			{isFinallyForm ? (
				<>
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
				</>
			) : (
				<div className="w-[100%]">
					<div className="mb-[15px] text-center text-[30px] font-bold">
						Аккаунт создан
					</div>
					<p className="mb-[25px] text-center text-[18px] opacity-[0.7]">
						На ваш E-mail отправлено письмо для подтверждения регистрации.
						Посмотрите его что бы подтвердить регистрацию.
						<p className="mt-[15px]">После подтверждения регистрации вы можете войти в аккаунт.</p>
					</p>
				</div>
			)}
		</Form>
	);

	function onFinish(values) {
		signup(values, {
			onSuccess: () => {
				setIsFanillyForm(false)
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
