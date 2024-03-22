import { Button, ConfigProvider, theme, Modal } from "antd";
export default function Rules({ openModal, closeModal }) {
	return (
		<>
			<ConfigProvider
				theme={{
					algorithm: theme.darkAlgorithm,
					components: {
						Button: {
							width: "fit",
							size: "large",
						},
						Modal: {
							contentBg: "#040404",
						},
					},
				}}
			>
				<Modal
					open={openModal}
					onCancel={closeModal}
					onOk={closeModal}
					centered
					width={"75%"}
					footer={null}
				>
					<div className="flex flex-col justify-center  bg-primary align-middle">
						<div className="mx-10">
							<h2 className=" pb-2 text-title2 font-bold">
								Запрещенный трафик:
							</h2>
							<ul>
								<li>⛔️фрод трафик; </li>
								<li>⛔️мотивированный трафик;</li>
								<li>
									⛔️трафик с креативов с политиками, должностными лицами,
									знаменитостями, блогерами и религиозными деятелями в плохом
									ключе который приносит вред по репутации компании AiPro.
								</li>
							</ul>
							<p className="pt-4">
								AipPro Partners заблокирует ваш аккаунт, если партнер будет
								игнорировать эти простые правила
							</p>
							<div className="flex justify-center  pt-2">
								<Button
									shape="round"
									className="bg-[#24A1E0]"
									onClick={closeModal}
								>
									Понятно
								</Button>
							</div>
						</div>
					</div>
				</Modal>
			</ConfigProvider>
		</>
	);
}
