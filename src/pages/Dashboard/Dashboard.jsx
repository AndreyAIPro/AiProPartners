import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Table, Checkbox, ConfigProvider, theme, Select, DatePicker, Button, Statistic } from "antd";
import { Line } from "@ant-design/plots";
import { Button, Statistic } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Plate from "../Preferences/Plate/Plate";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

/** @format */

const Charts = () => {
    // Chart config
    const config = {
        data: {
            type: "fetch",
            value: "https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json",
        },
        xField: d => new Date(d.year),
        yField: "value",
        sizeField: "5",
        shapeField: "trail",
        theme: "classicDark",
        legend: { size: false },
        colorField: "category",
        animate: { enter: { type: "growInX", duration: 2000 } },
    };

    const handleChange = value => {
        console.log(`selected ${value}`);
    };

    // Select Arrays
    const statisticAll = [{ value: "Общая статистика", label: "Общая статистика" }];
    const periodType = [{ value: "Тип периода", label: "Тип периода" }];
    const countries = [
        { value: "Украина", label: "Украина" },
        { value: "Омерика", label: "Омерика" },
        { value: "Чайна", label: "Чайна" },
        { value: "Пидорашка", label: "Пидорашка", disabled: true },
    ];
    const subAccounts = [
        { value: "Вася", label: "Вася" },
        { value: "Петя", label: "Петя" },
        { value: "Саня", label: "Саня" },
        { value: "Ваня", label: "Ваня", disabled: true },
    ];
    const ofers = [{ value: "Офер", label: "Офер" }];
    // Table Arrays
    const dataSource = [
        {
            key: "1",
            date: "1/1/1900",
            Unics: "2",
            regestrationCount: "30%",
            submitedRegestration: "2",
            percentCTR: "3",
            UO: "1",
            percentUOS: "3",
            percentCR2: "2",
            incomeValue: "over9000",
        },
    ];
    const columns = [
        {
            title: "Дата",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Уники",
            dataIndex: "Unics",
            key: "Unics",
        },
        {
            title: "Регистрации",
            dataIndex: "regestrationCount",
            key: "regestrationCount",
        },
        {
            title: "Подтв. рег.",
            dataIndex: "submitedRegestration",
            key: "submitedRegestration",
        },
        {
            title: "CTR, %",
            dataIndex: "percentCTR",
            key: "percentCTR",
        },
        {
            title: "UO",
            dataIndex: "UO",
            key: "UO",
        },
        {
            title: "UOS, %",
            dataIndex: "percentUOS",
            key: "percentUOS",
        },
        {
            title: "CR2, %",
            dataIndex: "percentCR2",
            key: "percentCR2",
        },
        {
            title: "Доход, $",
            dataIndex: "incomeValue",
            key: "incomeValue",
        },
    ];

    // eslint-disable-next-line arrow-body-style
    const disabledDate = current => {
        // Can not select days before today and today
        return current && current < dayjs().endOf("day");
    };
    return (
        <>
            <div className="flex-1">
                <h2 className="text-title px-4 py-6 font-bold ">Dashboard</h2>
                <div className="flex flex-row justify-evenly p-2">
                    {/* Плашки*/}
                    <div className="flex-1 mx-2  ">
                        <Plate title={"Клиенты"}>
                            <div className="py-2">
                                <div>
                                    <p className="text-text3">Активный объем</p>
                                    <div className="flex flex-row">
                                        <span className="text-text1 px-1">12312312</span>
                                        <Statistic
                                            value={11.28}
                                            precision={2}
                                            valueStyle={{ color: "#3f8600", fontSize: "12px" }}
                                            prefix={<ArrowUpOutlined />}
                                            suffix="%нед."
                                        />
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <p className="text-text3">Групповой объем</p>
                                    <div className="flex flex-row">
                                        <span className="text-text1 px-1">123123123</span>
                                        <Statistic
                                            value={9.3}
                                            precision={2}
                                            valueStyle={{ color: "#cf1322", fontSize: "12px" }}
                                            prefix={<ArrowDownOutlined />}
                                            suffix="%нед."
                                        />
                                    </div>
                                </div>
                            </div>
                        </Plate>
                    </div>
                    <div className="flex-1 mx-2  ">
                        <Plate title={"Регистрации"}>
                            <div className="py-2">
                                <div>
                                    <p className="text-text3">Активный объем</p>
                                    <div className="flex flex-row">
                                        <span className="text-text1 px-1">12312312</span>
                                        <Statistic
                                            value={11.28}
                                            precision={2}
                                            valueStyle={{ color: "#3f8600", fontSize: "12px" }}
                                            prefix={<ArrowUpOutlined />}
                                            suffix="%нед."
                                        />
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <p className="text-text3">Групповой объем</p>
                                    <div className="flex flex-row">
                                        <span className="text-text1 px-1">123123123</span>
                                        <Statistic
                                            value={9.3}
                                            precision={2}
                                            valueStyle={{ color: "#cf1322", fontSize: "12px" }}
                                            prefix={<ArrowDownOutlined />}
                                            suffix="%нед."
                                        />
                                    </div>
                                </div>
                            </div>
                        </Plate>
                    </div>
                    <div className="flex-1 mx-2  ">
                        <Plate title={"Покупки"}>
                            <div className="py-2">
                                <div>
                                    <p className="text-text3">Активный объем</p>
                                    <div className="flex flex-row">
                                        <span className="text-text1 px-1">12312312</span>
                                        <Statistic
                                            value={11.28}
                                            precision={2}
                                            valueStyle={{ color: "#3f8600", fontSize: "12px" }}
                                            prefix={<ArrowUpOutlined />}
                                            suffix="%нед."
                                        />
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <p className="text-text3">Групповой объем</p>
                                    <div className="flex flex-row">
                                        <span className="text-text1 px-1">123123123</span>
                                        <Statistic
                                            value={9.3}
                                            precision={2}
                                            valueStyle={{ color: "#cf1322", fontSize: "12px" }}
                                            prefix={<ArrowDownOutlined />}
                                            suffix="%нед."
                                        />
                                    </div>
                                </div>
                            </div>
                        </Plate>
                    </div>
                    <div className="flex-1 mx-2  ">
                        <Plate title={"Общий баланс"}>
                            <div className="py-2">
                                <div>
                                    <p className="text-text3">Активный объем</p>
                                    <div className="flex flex-row">
                                        <span className="text-text1 px-1">12312312</span>
                                        <Statistic
                                            value={11.28}
                                            precision={2}
                                            valueStyle={{ color: "#3f8600", fontSize: "12px" }}
                                            prefix={<ArrowUpOutlined />}
                                            suffix="%нед."
                                        />
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <p className="text-text3">Групповой объем</p>
                                    <div className="flex flex-row">
                                        <span className="text-text1 px-1">123123123</span>
                                        <Statistic
                                            value={9.3}
                                            precision={2}
                                            valueStyle={{ color: "#cf1322", fontSize: "12px" }}
                                            prefix={<ArrowDownOutlined />}
                                            suffix="%нед."
                                        />
                                    </div>
                                </div>
                            </div>
                        </Plate>
                    </div>
                </div>
                {/** Секция с графиками и таблицей */}
                <div className="flex-1 flex-col flex items-center ">
                    <div className="dashboard-size-helper ">
                        <ConfigProvider
                            theme={{
                                algorithm: theme.darkAlgorithm,
                                components: {
                                    Checkbox: {
                                        colorPrimary: "#24A1E0",
                                        colorBgContainer: "white",
                                        colorBgBase: "white",
                                        colorText: "white",
                                        fontSize: 12,
                                    },
                                    Line: {},
                                    Select: {
                                        colorBorder: "white",
                                        colorBgContainer: "black",
                                    },
                                    Button: {
                                        colorBorder: "#24A1E0",
                                    },
                                    DatePicker: {
                                        cellActiveWithRangeBg: "#24A1E0",
                                    },
                                    Icon: { color: "white" },
                                },
                            }}
                        >
                            {/** Chart section*/}
                            <Plate
                                title={
                                    <div className="flex-nowrap flex ">
                                        <div>Подробные данные статистики</div>
                                        <div className="flex-nowrap flex ">
                                            <div className="px-3">
                                                <Select
                                                    defaultValue="Общая статистика"
                                                    onChange={handleChange}
                                                    options={[...statisticAll]}
                                                    size="small"
                                                />
                                            </div>
                                            <div>
                                                <Select
                                                    defaultValue="Тип периода"
                                                    onChange={handleChange}
                                                    options={[...periodType]}
                                                    size="small"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                }
                            >
                                <div className="flex flex-nowrap pb-3">
                                    <div className="pr-5">
                                        <Select
                                            defaultValue="Страна"
                                            onChange={handleChange}
                                            options={[...countries]}
                                            size="small"
                                        />
                                    </div>
                                    <div className="pr-5">
                                        <Select
                                            defaultValue="Субаккаунт"
                                            onChange={handleChange}
                                            options={[...subAccounts]}
                                            size="small"
                                        />
                                    </div>
                                    <div className="pr-5">
                                        <Select
                                            defaultValue="Офер"
                                            onChange={handleChange}
                                            options={[...ofers]}
                                            size="small"
                                        />
                                    </div>
                                    <div className="pl-6">
                                        <Button
                                            size="small"
                                            shape="round"
                                        >
                                            Обновить
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    {/** Chart HERE*/}
                                    <Line {...config} />
                                    <div className="px-2 py-2">
                                        <Checkbox className="pr-4">Уники</Checkbox>
                                        <Checkbox className="pr-4">Регистрации</Checkbox>
                                        <Checkbox className="pr-4">Подтвержденные рег.</Checkbox>
                                        <Checkbox className="pr-4">CTR, %</Checkbox>
                                        <Checkbox className="pr-4">Уникальные покупки</Checkbox>
                                        <Checkbox className="pr-4">Уникальные покупки в $</Checkbox>
                                        <Checkbox className="pr-4">CR2, %</Checkbox>
                                        <Checkbox className="pr-4">Доход, $</Checkbox>
                                    </div>
                                </div>
                            </Plate>
                            {/** Table section */}
                            <Plate
                                title={
                                    <div className="flex-nowrap flex py-1 align-middle h-fit">
                                        <div>Подробные данные статистики</div>
                                        <div className="flex-nowrap flex ">
                                            <div className="px-3 ">
                                                <Select
                                                    defaultValue="Общая статистика"
                                                    onChange={handleChange}
                                                    options={[...statisticAll]}
                                                />
                                            </div>
                                            <div className="flex flex-nowrap flex-row text-text4 border-[1px] pl-2   rounded-md ">
                                                <div className="flex justify-center  items-center pr-2">Выбрать диапазон дат</div>
                                                <div className=" flex">
                                                    {/* <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}> */}
                                                    <RangePicker
                                                        disabledDate={disabledDate}
                                                        size="small"
                                                        variant={false}
                                                        placeholder={["Начало", "Конец"]}
                                                    />
                                                    {/* </ConfigProvider> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            >
                                <div>
                                    <div className="flex flex-nowrap pb-3">
                                        <div className="pr-5">
                                            <Select
                                                defaultValue="Страна"
                                                onChange={handleChange}
                                                options={[...countries]}
                                                size="small"
                                            />
                                        </div>
                                        <div className="pr-5">
                                            <Select
                                                defaultValue="Субаккаунт"
                                                onChange={handleChange}
                                                options={[...subAccounts]}
                                                size="small"
                                            />
                                        </div>
                                        <div className="pr-5">
                                            <Select
                                                defaultValue="Офер"
                                                onChange={handleChange}
                                                options={[...ofers]}
                                                size="small"
                                            />
                                        </div>
                                        <div className="pl-6">
                                            <Button
                                                size="small"
                                                shape="round"
                                            >
                                                Обновить
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                {/** TABLE HERE */}
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    size="small"
                                    pagination={false}
                                ></Table>
                            </Plate>
                        </ConfigProvider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Charts;
