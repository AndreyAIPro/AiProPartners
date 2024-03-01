import studyLogo from "../../../assets/images/studyImg//study-logo.svg";
import studyPlaceholder from "../../../assets/images/studyImg//study-placeholder.svg";

export default function Community() {
  return (
    <div className="flex justify-between mt-10 gap-3">
      <p className="font-nunito-sans flex-1 leading-8 text-text1 ">
        Вступайте в наш телеграм канал, там есть полное обучение как для
        новичков, так и для профессионалов. Так же на постоянной основе в канал
        добавляется актуальная информация, по этому следите внимательно, чтобы
        получить для себя новые инсайты. Читайте закрепленное сообщение, там
        есть вся необходимая информация. Добро пожаловать в наше AiPro
        Community, с этого момента ТЫ являешься частью нас, так как теперь ТЫ
        наш партнер. Мы верим в тебя!)
      </p>
      <div
        className={`h-[685px] rounded-xl flex-1`}
        style={{ backgroundImage: `url(${studyPlaceholder})` }}
      >
        <div className="flex flex-col items-center pt-12">
          <img src={studyLogo} alt="" width={300} height={300} />
          <h2 className="text-text1 font-nunito-sans font-bold mt-12">
            AiPro Partners Channel
          </h2>
          <div className="flex flex-col w-[300px] mt-3 gap-3">
            <p className="font-nunito-sans text-text2 ">
              📚Обучение: бесплатные, платные методы примеры работы с аудиторией
            </p>
            <p className="font-nunito-sans text-text2 ">
              🔍Полезная информация
            </p>
            <p className="font-nunito-sans text-text2 ">
              ✔️Референсы/Примеры готовых решений для привлечения аудитории
            </p>
          </div>
          <button className="font-nunito-sans bg-purple rounded-full px-5 py-1 mt-6">
            Вступить в комьюнити
          </button>
        </div>
      </div>
    </div>
  );
}
