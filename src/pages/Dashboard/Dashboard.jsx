import Plate from "../Preferences/Plate/Plate";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Statistic } from "antd";
/** @format */

const Charts = () => {
    return (
        <>
            <div className="flex-1">
                <h2 className="text-title px-4 py-6 font-bold ">Dashboard</h2>
                <div className="flex flex-row justify-evenly p-2">
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
            </div>
        </>
    );
};

export default Charts;
