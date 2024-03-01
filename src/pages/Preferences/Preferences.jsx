/** @format */
import Plate from "./Plate/Plate";
import { Form, Input, Table, Checkbox, ConfigProvider, theme, Select, Typography } from "antd";

const Preferences = () => {
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
    const handleChange = value => {
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
                <div className="flex-1 flex-col ">
                    <h2 className=" text-title px-8 mt-4 font-bold ">Настройки</h2>
                    <div className="flex justify-evenly  flex-wrap ">
                        <div className="preference-halfsizer justify-center">
                            <Plate title={"Учетная запись"}>
                                <div className="w-full ">
                                    <Form layout="vertical">
                                        <Form.Item
                                            name="Reference"
                                            label="Реферальная ссылка"
                                            style={{ margin: 0 }}
                                        >
                                            <Typography size="small">
                                                <pre>REF</pre>
                                            </Typography>
                                            {/* <Input
                                                size="small"
                                                placeholder=""
                                                variant="filled"
                                                disabled
                                            ></Input> */}
                                        </Form.Item>
                                        <Form.Item
                                            name="RegistrationDate"
                                            label="Дата регистрации"
                                            style={{ marginBottom: 0 }}
                                        >
                                            <Typography size="small">
                                                <pre>10.10.2024</pre>
                                            </Typography>
                                            {/* <Input
                                                size="small"
                                                variant="filled"
                                                defaultValue={""}
                                            ></Input> */}
                                        </Form.Item>
                                        <Form.Item
                                            style={{ marginBottom: 0 }}
                                            label="Страна"
                                        >
                                            <Select
                                                defaultValue="Страна"
                                                onChange={handleChange}
                                                options={[...countries]}
                                                size="small"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="name"
                                            label="Имя"
                                            style={{ marginBottom: 0 }}
                                        >
                                            <Input
                                                type="text"
                                                placeholder="Имя"
                                                size="small"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="telephoneNumber"
                                            label="Номер телефона"
                                            style={{ marginBottom: 0 }}
                                        >
                                            <Input
                                                type="text"
                                                placeholder="+380 123 12 12"
                                                size="small"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="email"
                                            label="Email"
                                            style={{ marginBottom: 0 }}
                                        >
                                            <Input
                                                type="email"
                                                placeholder="Email"
                                                size="small"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="telegram"
                                            label="Telegram"
                                            style={{ marginBottom: 0 }}
                                        >
                                            <Input
                                                type="text"
                                                placeholder="@telegram"
                                                size="small"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="discord"
                                            label="Discord"
                                        >
                                            <Input
                                                type="text"
                                                placeholder="@discord"
                                                size="small"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            style={{
                                                width: "100%",
                                                paddingLeft: 10,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <p>Источники трафика</p>
                                            <Checkbox className="p-0.5 ">Сайт</Checkbox>
                                            <br />
                                            <Checkbox className="p-0.5">Социальные сети</Checkbox>
                                            <h2>Арбитражный трафик</h2>
                                            <ul className="pl-3">
                                                <Checkbox className="p-0.5">Платный метод привлечения клиентов</Checkbox>
                                                <br />
                                                <Checkbox className="p-0.5">УБТ привлечения (Условно бесплатный трафик)</Checkbox>
                                            </ul>
                                            <Checkbox className="p-0.5">Прямое взаимодействие с клиентами</Checkbox>
                                            <br />

                                            <Form.Item>
                                                <Checkbox className="p-0.5">Другое :</Checkbox>
                                                <TextArea
                                                    rows={3}
                                                    size="small"
                                                    placeholder="Напишите ваш источник трафика"
                                                />
                                            </Form.Item>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </Plate>
                        </div>
                        <div className="preference-halfsizer  flex h-max  flex-col ">
                            <Plate title={"Смена пароля"}>
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
                            </Plate>
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
};

export default Preferences;
