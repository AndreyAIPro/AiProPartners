/** @format */
import Plate from "./Plate/Plate";
import { Form, Input, Table, Checkbox, ConfigProvider, theme, Select } from "antd";

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
            <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
                <div className="flex flex-col w-4/5">
                    <h2 className="w-full text-title px-5  font-nunito-sans font-bold my-1">Настройки</h2>
                    <div className="flex flex-wrap w-full  ">
                        <div className="w-1/2 flex justify-center">
                            <Plate title={"Учетная запись"}>
                                <div className="w-full ">
                                    <Form
                                        layout="vertical"
                                        className="font-nunito-sans"
                                    >
                                        <Form.Item
                                            name="Reference"
                                            label="Реферальная ссылка"
                                        >
                                            <Input></Input>
                                        </Form.Item>
                                        <Form.Item
                                            name="RegistrationDate"
                                            label="Дата регистрации"
                                        >
                                            <Input></Input>
                                        </Form.Item>
                                        <Form.Item>
                                            <Select
                                                defaultValue="Страна"
                                                onChange={handleChange}
                                                options={[...countries]}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="name"
                                            label="Имя"
                                        >
                                            <Input
                                                type="text"
                                                placeholder="Имя"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="telephoneNumber"
                                            label="Номер телефона"
                                        >
                                            <Input
                                                type="text"
                                                placeholder="+380 123 12 12"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="email"
                                            label="Email"
                                        >
                                            <Input
                                                type="email"
                                                placeholder="Email"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="telegram"
                                            label="Telegram"
                                        >
                                            <Input
                                                type="text"
                                                placeholder="@telegram"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="discord"
                                            label="Discord"
                                        >
                                            <Input
                                                type="text"
                                                placeholder="@discord"
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
                                            <Checkbox className="p-0.5">Сайт</Checkbox>
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
                                                <TextArea rows={3} />
                                            </Form.Item>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </Plate>
                        </div>
                        <div className="w-1/2  flex justify-center content-start flex-wrap">
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
                                                marginBottom: "10px",
                                            }}
                                        >
                                            <Input.Password
                                                autoComplete="off"
                                                type="password"
                                                placeholder="Страрый пароль"
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
                                                marginBottom: "10px",
                                            }}
                                        >
                                            <Input.Password
                                                autoComplete="off"
                                                type="password"
                                                placeholder="Введите новый пароль"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="password check"
                                            label="Повторите новый пароль"
                                            dependencies={["New password"]}
                                            style={{
                                                width: "100%",
                                                marginBottom: "10px",
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
                                                        return Promise.reject(new Error("Парорль что вы ввели не совпал!"));
                                                    },
                                                }),
                                            ]}
                                        >
                                            <Input.Password
                                                autoComplete="off"
                                                type="password"
                                                placeholder="Повторите новый пароль"
                                            />
                                        </Form.Item>
                                    </Form>
                                </div>
                            </Plate>
                            <Plate title={"Тарифы"}>
                                <div>
                                    <Table
                                        dataSource={dataSource}
                                        columns={columns}
                                        size="small"
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
