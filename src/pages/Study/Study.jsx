/** @format */
import { useState } from "react";
import Community from "../../components/common/Community/Community";
import UsuallyArticles from "../../components/common/UsuallyArticles/UsuallyArticles";

const Study = () => {
  const [handleButtonActive, setHandleButtonActive] = useState(true);

  return (
    <section className="w-[1245px] px-20 py-8">
      <h2 className=" text-title font-nunito-sans font-bold">Обучения</h2>
      <div className="flex gap-10 text-title2 mt-5 ">
        <button
          className={`font-nunito-sans font-bold ${handleButtonActive && `text-light-gray`}`}
          onClick={() => setHandleButtonActive(!handleButtonActive)}
        >
          Полезные статьи
        </button>
        <button
          onClick={() => setHandleButtonActive(!handleButtonActive)}
          className={`font-nunito-sans font-bold ${!handleButtonActive && `text-light-gray`}`}
        >
          Комьюнити
        </button>
      </div>
      {handleButtonActive ? <Community /> : <UsuallyArticles />}
    </section>
  );
};

export default Study;
