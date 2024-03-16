import { Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import "react-international-phone/style.css";
import { isPhoneValid } from "../../utils/helpers";
import FormRegisterPartOne from "./FormRegisterPartOne";
import FormRegisterPartTwo from "./FormRegisterPartTwo";
import { useSignup } from "../../hooks/useSignup";
import { useParams } from "react-router-dom";

export default function Register() {
	const { signup, isLoading } = useSignup();
	const [phone, setPhone] = useState("");
	const isValid = isPhoneValid(phone);
	const [isFinallyForm, setIsFanillyForm] = useState(true);
	const [messageApi, contextHolder] = message.useMessage();
	const [showMessagewithErrorPhone, setShowMessagewithErrorPhone] =
		useState(false);
	const [formChange, setFormChange] = useState(true);
	let { refid } = useParams();
	const [ refLinkId, setRefLinkId] = useState("");

	useEffect(() => {
		setRefLinkId(refid);
	  }, [refid]);

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
					{/* <Form.Item name="refLink" style={{ height: "0px", margin: 0 }}>
						<Input
							type="text"
							value={refLinkId}
							// style={{
							// 	backgroundColor: "transparent",
							// 	color: "transparent",
							// 	border: "none",
							// 	outline: "none",
							// 	caretColor: "transparent",
							// 	fontSize: 0,
							// }}
						/>
					</Form.Item> */}
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
						<p className="mt-[15px]">
							После подтверждения регистрации вы можете войти в аккаунт.
						</p>
					</p>
				</div>
			)}
		</Form>
	);

	function onFinish(values) {
		const returnedTarget = Object.assign({refLink: refid}, values);
		signup(returnedTarget, {
			onSuccess: () => {
				setIsFanillyForm(false);
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
