import { Button, Form, Input } from "antd";
import React from "react";

export default function Login() {
	return (
		<Form
			className="w-3/6 text-white max-md:w-full"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			autoComplete="off"
		>
			<div className="mb-[25px] text-center text-[40px] font-bold">
				Вход в аккаунт
			</div>
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
				<Input placeholder="email" />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: "Please input your password!",
					},
				]}
			>
				<Input.Password placeholder="password" />
			</Form.Item>

			<div className="flex justify-between">
				<Form.Item>
					<Button type="link" className="bg-[#1677ff00]">
						<div className="font-bold text-[#fff]">Забыли пароль?</div>
					</Button>
				</Form.Item>
				<Form.Item>
					<Button type="primary" className="bg-[#1677FF]" htmlType="submit">
						<div className="font-bold text-[#fff]">Войти</div>
					</Button>
				</Form.Item>
			</div>
		</Form>
	);

	function onFinish(values) {
		console.log("Success:", values);
	}
	function checkedValidatePhoneNumber() {
		if (!isValid) {
			setShowMessagewithErrorPhone(true);
			console.log("fdsfsd");
			return;
		}
		setShowMessagewithErrorPhone(false);
		setFormChange(!formChange);
	}
}
