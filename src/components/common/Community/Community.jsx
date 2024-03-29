import studyLogo from "../../../assets/images/studyImg//study-logo.svg";
import studyPlaceholder from "../../../assets/images/studyImg//study-placeholder.svg";

export const Community = () => {
	return (
		<div className="mb-10 mt-10 flex flex-col justify-between gap-3 xl:flex-row">
			<div className="w-full  flex-1 font-nunito-sans text-text2 leading-8 xl:w-[50%] 2xl:text-text1">
				<p className="">
					Вступайте в наш телеграм канал, там есть полное обучение как для
					новичков, так и для профессионалов.
				</p>
				<p>
					Так же на постоянной основе в канал добавляется актуальная информация,
					по этому следите внимательно, чтобы получить для себя новые инсайты.
				</p>
				<p>
					Читайте закрепленное сообщение, там есть вся необходимая информация.
				</p>
				<p className="mt-4">
					Добро пожаловать в наше AiPro Community, с этого момента ТЫ являешься
					частью нас, так как теперь ТЫ наш партнер. Мы верим в тебя!)
				</p>
			</div>

			<div
				className={`w-full h-auto rounded-xl bg-cover xl:w-[50%]`}
				style={{ backgroundImage: `url(${studyPlaceholder})` }}
			>
				<div className="flex flex-col items-center pt-12">
					<img src={studyLogo} alt="" width={300} height={300} />
					<h2 className="mt-12 font-nunito-sans text-text1 font-bold">
						AiPro Partners Channel
					</h2>
					<div className="mt-3 flex w-[60%] flex-col space-y-4 font-nunito-sans text-text2 ">
						<p className=" ">
							📚Обучение: бесплатные, платные методы примеры работы с аудиторией
						</p>
						<p className=" ">🔍Полезная информация</p>
						<p className="">
							✔️Референсы/Примеры готовых решений для привлечения аудитории
						</p>
					</div>
					<button className="mb-5 mt-6 rounded-full bg-purple px-5 py-1 font-nunito-sans">
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
