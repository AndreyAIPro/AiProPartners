import { Button, ConfigProvider, Form, Input, message, theme } from 'antd';
import React, { useState } from 'react';
import { useSetEmailForResetPassword } from '../../hooks/useSetEmailForResetPassword';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUpdateUserPassword } from '../../hooks/useUpdateUserPassword';

export default function ResetPassword() {
	const { setEmail } = useSetEmailForResetPassword();
	const [messageApi, contextHolder] = message.useMessage();
	const { pathname } = useLocation();
	const [isActive, setIsActive] = useState(pathname === "/resetpassword");
	const navigate = useNavigate();
	const { updateUser } = useUpdateUserPassword();
    return (
        <div className={`relative flex min-h-screen justify-center items-center  flex-col bg-[#181818] text-white`}>
            <ConfigProvider
					theme={{
						token: {
							algorithm: theme.darkAlgorithm,
						},
						components: {
							Input: {
								colorBgContainer: "none",
								colorBorder: "rgb(63, 63, 63)",
								colorIcon: "#fff",
								colorTextPlaceholder: "rgb(180, 180, 180)",
								colorText: "rgb(254, 254, 254)",
								paddingBlock: "10px",
								fontSize: "17px",
								activeBorderColor: "grey",
								hoverBorderColor: "grey",
							},
						},
					}}
			>
				{contextHolder}
				{isActive ? (
			<Form
			className="w-[50%] flex justify-center items-center flex-col max-md:w-full text-white text-center"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			autoComplete="off"
			>
			<div className="mb-[25px] text-center text-[40px] font-bold">
				Восстановление пароля
			</div>
			<p className='text-[#fff] opacity-[0.9] text-[14px] font-nunito-sans mb-[25px]'>
				Введите контактный E-mail на который зарегистрирован ваш аккаунт.
			 	Мы отправим на него код для восстановления.
			</p>
			<Form.Item
				name="email"
                className='w-[50%]'
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
               <Form.Item>
					<Button type="primary" className="bg-[#1677FF]" htmlType="submit">
						<div className="font-bold text-[#fff]">Далее</div>
					</Button>
				</Form.Item>
            </Form>
				) : (
				<Form
			className="w-[50%] flex justify-center items-center flex-col max-md:w-full text-white text-center"
			initialValues={{
				remember: true,
			}}
			onFinish={onSetNewPassword}
			autoComplete="off"
			>
			<div className="mb-[25px] text-center text-[40px] font-bold">
				Восстановление пароля
			</div>
			<p className='text-[#fff] opacity-[0.9] text-[14px] font-nunito-sans mb-[25px]'>
				Введите новый пароль
			</p>
			<Form.Item
				name="password"
				className='w-[50%]'
				rules={[
					{
						required: true,
						message: "Please input your password!",
					},
					{
						min: 8,
						message: "Input at least 8 characters!",
					},
				]}
			>
				<Input.Password placeholder="Пароль"  />
			</Form.Item>
			<Form.Item
				name="repeatpassword"
				className='w-[50%]'
				rules={[
					{
						required: true,
						message: "Please input your password!",
					},
					{
						min: 8,
						message: "Input at least 8 characters!",
					},
				]}
			>
				<Input.Password placeholder="Повтор пароля"  />
			</Form.Item>
               <Form.Item>
					<Button type="primary" className="bg-[#1677FF]" htmlType="submit">
						<div className="font-bold text-[#fff]">Далее</div>
					</Button>
				</Form.Item>
            </Form>
				)}
					
				</ConfigProvider>
        </div>
    );

    function onFinish({email}) {
			setEmail(email, {
			onSuccess: () => {
				messageApi.open({
					type: "success",
					duration: 5,
					content:
						"account from the user's email address.",
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
	function onSetNewPassword({ password, repeatpassword }) {
		if (password !== repeatpassword) {
			messageApi.open({
					type: "error",
					duration: 5,
					content: "Пароли не совпадают!",
			});
			return;
		}
		updateUser({password}, {
			onSuccess: () => {
				navigate('/login', {replace: true})
			},
			onError: (err) => {
				messageApi.open({
					type: "error",
					duration: 5,
					content: err.message,
				});
			},
		})
	}
}

