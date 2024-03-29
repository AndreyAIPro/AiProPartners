import React from "react";

const PaymentFilter = () => {
	return (
		<select className="min-w-[150px]  max-w-[210px] cursor-pointer  rounded-md border-2 border-white bg-black  px-1 py-1  outline-none">
			<option value="Успешно">BTC</option>
			<option value="Отклонено">PayPal</option>
			<option value="В обработке">WebMoney</option>
		</select>
	);
};

export default PaymentFilter;
