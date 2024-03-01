/**  @format */
import { useState } from "react";
import Filter from "./../../components/common/Filter/Filter";
import TableFinance from "./../../components/common/TableFinance.jsx/TableFinance";
import { filters } from "./../../data/filtersForFinances";
import "./finances.modal.css";

const Finances = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <section className="w-[1245px] px-20 py-8">
      <h2 className=" text-title font-nunito-sans font-bold">Финансы</h2>
      <div className="flex gap-10 text-title2 mt-5 ">
        <button
          onClick={toggleModal}
          className="font-nunito-sans font-bold text-light-gray"
        >
          Вывод средств
        </button>

        <p className="font-bold font-nunito-sans">Список транзакций</p>
      </div>

      <div className="mt-16 mx-6 flex gap-10">
        <Filter filters={filters} />
        <button className="font-nunito-sans border-2 rounded-full px-4 border-light-blue ">
          Обновить
        </button>
      </div>
      <div className="m-6">
        <TableFinance />
      </div>
      <div className="text-center">
        <button className="bg-light-blue rounded-full py-2 px-10 font-nunito-sans">
          Загрузить ещё
        </button>
      </div>
      {modal && (
        <div>
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content bg-gray   w-[800px] h-[300px] rounded-xl flex flex-col justify-center items-center gap-4">
            <h2 className="text-title font-nunito-sans font-bold">
              Подтвердите вывод
            </h2>
            <div className="flex justify-between px-2 ">
              <button className="bg-light-blue rounded-full px-14 py-2 mr-10 font-nunito-sans text-text1">
                Подтверждаю
              </button>
              <button
                className="bg-light-blue rounded-full px-8 py-2 font-nunito-sans text-text1"
                onClick={toggleModal}
              >
                Нет
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Finances;
