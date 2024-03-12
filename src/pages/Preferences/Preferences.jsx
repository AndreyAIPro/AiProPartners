/** @format */
import {
	Button,
	Checkbox,
	ConfigProvider,
	Form,
	Input,
	Table,
	Typography,
	message,
	theme,
} from "antd";
import { useRef, useState } from "react";
import { PhoneInput } from "react-international-phone";
import { useUpdateUser } from "../../hooks/useUpdateUser";
import { useUser } from "../../hooks/useUser";
import Plate from "./Plate/Plate";

const Preferences = () => {
	const { user } = useUser();
	const { updateUser } = useUpdateUser();
	const { discordAccount, nickname, other, phone, sources, telegramAccount } =
		user.user_metadata;

	const [valueRadioButtonSources, setValueRadioButtonSources] =
		useState(sources);
	const [messageApi, contextMessage] = message.useMessage();
	const [textAreaOpen, setTextAreaOpen] = useState(
		sources.includes("other") || false,
	);
	const [phoneInput, setPhoneInput] = useState(phone);
	const emailInput = useRef(user.email);
	const date = new Date(user.created_at);
	const formatted_date = date.toLocaleDateString("ru-RU", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});

	// // For next backend implementation
	// const [form] = Form.useForm();
	// const [messageApi, contextHolder] = message.useMessage();
	const { TextArea } = Input;
	const countries = [
		{ value: "Украина", label: "Украина" },
		{ value: "Омерика", label: "Омерика" },
		{ value: "Чайна", label: "Чайна" },
		{ value: "Пидорашка", label: "Пидорашка", disabled: true },
	];
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};

	const dataSource = [
		{
			key: "1",
			valueTypes: "ЛО (активный доход)",
			rule: "Личные Продажи",
			persent: "30%",
		},
		{
			key: "2",
			valueTypes: "ЛО (пассивный доход)",
			rule: "Повторные Продажи",
			persent: "15%",
		},
		{
			key: "3",
			valueTypes: "ЛО (пассивный доход)",
			rule: "Покупки новых клиентов от рефералов",
			persent: "10%",
		},
		{
			key: "4",
			valueTypes: "ГО (пассивный доход)",
			rule: "Доход от каждого ЛО вашего партнера",
			persent: "10%",
		},
		{
			key: "5",
			valueTypes: "ГО (пассивный доход)",
			rule: "Доход от каждой повторной продажи ЛО вашего партнера",
			persent: "5%",
		},
	];

	const columns = [
		{
			title: "Виды объемов",
			dataIndex: "valueTypes",
			key: "valueTypes",
		},
		{
			title: "Условия",
			dataIndex: "rule",
			key: "rule",
		},
		{
			title: "Процент",
			dataIndex: "persent",
			key: "persent",
		},
	];

	return (
		<>
			<ConfigProvider
				theme={{
					algorithm: theme.darkAlgorithm,

					components: {
						Checkbox: {
							colorPrimary: "#24A1E0",
							colorBgContainer: "white",
							colorBgBase: "white",
						},
						Input: {
							colorBgContainer: "white",
							colorText: "black",
							colorTextPlaceholder: "gray",
							colorIcon: "gray",
						},
						Form: {
							labelFontSize: 12,
							paddingContentVertical: 0,
						},
						TextArea: {
							colorTextPlaceholder: "gray",
						},
						Select: {
							colorBorder: "white",
						},
						Table: {
							fontSize: 12,
						},
					},
				}}
			>
				{contextMessage}
				<div className="flex-1 flex-col ">
					<h2 className=" mt-4 px-8 text-title font-bold ">Настройки</h2>
					<div className="flex flex-wrap  justify-evenly ">
						<div className="preference-halfsizer justify-center">
							<Plate title={"Учетная запись"}>
								<div className="w-full ">
									<Form
										layout="vertical"
										initialValues={{
											email: emailInput.current,
											name: nickname,
											telephoneNumber: phoneInput,
											telegram: telegramAccount,
											discord: discordAccount || "",
											textAreaOtherRadio: other || "",
										}}
										onFinish={onFinish}
										autoComplete="off"
									>
										<Form.Item label="Реферальная ссылка" style={{ margin: 0 }}>
											<Typography size="small">
												<pre>{user.id}</pre>
											</Typography>
											{/* <Input
                                                size="small"
                                                placeholder=""
                                                variant="filled"
                                                disabled
                                            ></Input> */}
										</Form.Item>
										<Form.Item
											label="Дата регистрации"
											style={{ marginBottom: 0 }}
										>
											<Typography size="small">
												<pre>{formatted_date}</pre>
											</Typography>
											{/* <Input
                                                size="small"
                                                variant="filled"
                                                defaultValue={""}
                                            ></Input> */}
										</Form.Item>
										{/* <Form.Item
                                            style={{ marginBottom: 0 }}
                                            label="Страна"
                                        >
                                            <Select
                                                defaultValue="Страна"
                                                onChange={handleChange}
                                                options={[...countries]}
                                                size="small"
                                            />
                                        </Form.Item> */}
										<Form.Item
											label="Email"
											rules={[
												{
													required: true,
													type: "email",
													message: "Please input valid email!",
												},
											]}
											style={{ marginBottom: 0 }}
										>
											<Typography size="small">
												<pre>{user.email}</pre>
											</Typography>
										</Form.Item>
										<Form.Item
											name="name"
											label="Имя"
											style={{ marginBottom: 0 }}
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
											<Input type="text" placeholder="Имя" size="small" />
										</Form.Item>
										<Form.Item
											name="telephoneNumber"
											label="Номер телефона"
											style={{ marginBottom: 0 }}
										>
											<PhoneInput
												countrySelectorStyleProps={{
													buttonClassName: "p-[10px]",
													className: "bg-[#fff]",
												}}
												inputStyle={{
													border: "1px solid rgb(63, 63, 63)",
													width: "100%",
												}}
												defaultCountry="ua"
												disableDialCodePrefill
												inputProps={{
													value: phoneInput,
												}}
												onChange={(phone) => {
													setPhoneInput(phone);
												}}
											/>
										</Form.Item>

										<Form.Item
											name="telegram"
											label="Telegram"
											rules={[
												{
													required: true,
													type: "text",
													message: "Введите телеграм аккаунт!",
												},
											]}
											style={{ marginBottom: 0 }}
										>
											<Input type="text" placeholder="@telegram" size="small" />
										</Form.Item>
										<Form.Item name="discord" label="Discord">
											<Input type="text" placeholder="@discord" size="small" />
										</Form.Item>
										<Form.Item
											name="radioButtonSources"
											className="flex flex-col text-[#fff]"
											initialValue={valueRadioButtonSources}
											rules={[
												{
													required: true,
													message: "Виберіть джерело!",
												},
											]}
										>
											<Checkbox.Group
												className="flex flex-col"
												defaultValue={valueRadioButtonSources}
												onChange={(e) => setValueRadioButtonSources(e)}
											>
												<Checkbox
													className="mb-[10px] text-[#fff]"
													value="site"
												>
													<div className="text-[12px]">Сайт</div>
												</Checkbox>
												<Checkbox
													className="mb-[10px] text-[#fff]"
													value="socialNetwork"
												>
													<div className="text-[12px]">Социальные сети</div>
												</Checkbox>
												<div className="text-[14px] text-[#fff]">
													Арбитражный трафик
												</div>
												<div className="ml-[15px] flex flex-col">
													<Checkbox
														className="mb-[10px] text-[#fff]"
														value="payMethod"
													>
														<div className="text-[12px]">
															Платный метод привлечения клиентов
														</div>
													</Checkbox>
													<Checkbox
														className="mb-[10px] text-[#fff]"
														value="nopayMethod"
													>
														<div className="text-[12px]">
															УБТ привлечения (Условно бесплатный трафик)
														</div>
													</Checkbox>
												</div>
												<Checkbox
													className="mb-[10px] text-[#fff]"
													value="interactionWithCustomers"
												>
													<div className="text-[12px]">
														Прямое взаимодействие с клиентами
													</div>
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
										{textAreaOpen &&
											valueRadioButtonSources.includes("other") && (
												<Form.Item name="textAreaOtherRadio">
													<TextArea />
												</Form.Item>
											)}
										<Form.Item className="flex items-center justify-center pb-[10px]">
											<Button htmlType="submit">Сохранить</Button>
										</Form.Item>
									</Form>
								</div>
							</Plate>
						</div>
						<div className="preference-halfsizer  flex h-max  flex-col ">
							{/* <Plate title={"Смена пароля"}>
                                <div>
                                    <Form layout="vertical">
                                        <Form.Item
                                            name="Страрый пароль"
                                            label="Страрый пароль"
                                            rules={[
                                                {
                                                    message: "Пожалуйста введите страрый пароль!",
                                                },
                                                {
                                                    min: 8,
                                                    message: "Ведите минимум 8 символов!",
                                                },
                                            ]}
                                            style={{
                                                width: "100%",
                                                marginBottom: "0px",
                                            }}
                                        >
                                            <Input.Password
                                                autoComplete="off"
                                                type="password"
                                                placeholder="********"
                                                size="small"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="Новый пароль"
                                            label="Новый пароль"
                                            rules={[
                                                {
                                                    message: "Пожалуйста введите новый пароль!",
                                                },
                                                {
                                                    min: 8,
                                                    message: "Ведите минимум 8 символов!",
                                                },
                                            ]}
                                            style={{
                                                width: "100%",
                                                marginBottom: "0px",
                                            }}
                                        >
                                            <Input.Password
                                                autoComplete="off"
                                                type="password"
                                                placeholder="********"
                                                size="small"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="password check"
                                            label="Повторите новый пароль"
                                            dependencies={["New password"]}
                                            style={{
                                                width: "100%",
                                            }}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Пожалуйста повторите новый пароль!",
                                                },

                                                ({ getFieldValue }) => ({
                                                    validator(_, value) {
                                                        if (!value || getFieldValue("New password") === value) {
                                                            return Promise.resolve();
                                                        }
                                                        return Promise.reject(new Error("Пароль что вы ввели не совпал!"));
                                                    },
                                                }),
                                            ]}
                                        >
                                            <Input.Password
                                                autoComplete="off"
                                                type="password"
                                                placeholder="********"
                                                size="small"
                                            />
                                        </Form.Item>
                                    </Form>
                                </div>
                            </Plate> */}
							<Plate title={"Тарифы"}>
								<div className="pb-8">
									<Table
										dataSource={dataSource}
										columns={columns}
										size="small"
										pagination={false}
									/>
								</div>
							</Plate>
						</div>
					</div>
				</div>
			</ConfigProvider>
		</>
	);
	function onFinish(values) {
		updateUser(values, {
			onSuccess: () => {
				messageApi.open({
					type: "success",
					duration: 5,
					content: "Аккаунт оновленно!",
				});
			},
			onError: () => {
				messageApi.open({
					type: "error",
					duration: 5,
					content: "Не получилось оновить аккаунт!",
				});
			},
		});
	}
};

export default Preferences;
