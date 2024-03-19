import React from 'react'

const PaymentFilter = () => {
  return (
    <div>
      <select
        className="m-w-full  min-w-[150px]  max-w-[210px] cursor-pointer  rounded-md border-2 border-white bg-black  px-2 py-1 font-nunito-sans outline-none"
      >
      <option value="Успешно" >BTC</option>
      <option value="Отклонено">PayPal</option>
      <option value="В обработке">WebMoney</option>
    </select></div>
  )
}

export default PaymentFilter