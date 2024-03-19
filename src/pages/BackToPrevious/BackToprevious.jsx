import { Button, ConfigProvider, theme } from "antd";
export default function backToPrevious() {
	return (
		<div className="flex flex-col justify-center  bg-primary align-middle">
			<h2 className="text-center text-title font-bold">Ошибка 404</h2>
			<p className="p-3 text-center  text-text2">
				Упс, такой страницы не существует
			</p>
			<p className="p-3 text-center text-text2">Вы можете вернуться назад</p>
			<div className="flex justify-center  pt-2">
				<ConfigProvider
					theme={{
						algorithm: theme.darkAlgorithm,
						components: {
							Button: {
								width: "fit",
								size: "large",
							},
						},
					}}
				>
					<Button
						shape="round"
						className="bg-[#24A1E0]"
						onClick={console.log("click")}
					>
						Назад
					</Button>
				</ConfigProvider>
			</div>
		</div>
	);
}
