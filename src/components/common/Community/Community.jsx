
import studyLogo from "../../../assets/images/studyImg//study-logo.svg";
import studyPlaceholder from "../../../assets/images/studyImg//study-placeholder.svg";

export const Community = () => {
	return (
		<div className="mt-10 flex justify-between gap-3">
			<p className="ml-7 flex-1 font-nunito-sans text-text1 leading-8">
				Вступайте в наш телеграм канал, там есть полное обучение как для
				новичков, так и для профессионалов. Так же на постоянной основе в канал
				добавляется актуальная информация, по этому следите внимательно, чтобы
				получить для себя новые инсайты. Читайте закрепленное сообщение, там
				есть вся необходимая информация. Добро пожаловать в наше AiPro
				Community, с этого момента ТЫ являешься частью нас, так как теперь ТЫ
				наш партнер. Мы верим в тебя!)
			</p>
			<div
				className={`h-[665px] flex-1 rounded-xl`}
				style={{ backgroundImage: `url(${studyPlaceholder})` }}
			>
				<div className="flex flex-col items-center pt-12">
					<img src={studyLogo} alt="" width={300} height={300} />
					<h2 className="mt-12 font-nunito-sans text-text1 font-bold">
						AiPro Partners Channel
					</h2>
					<div className="mt-3 flex w-[300px] flex-col gap-3">
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
					<button className="mt-6 rounded-full bg-purple px-5 py-1 font-nunito-sans">
						<a href="https://t.me/aipropartners" target="blank">
							Вступить в комьюнити
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Community;
