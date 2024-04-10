export default function Plate({ title, children }) {
	return (
		<div className=" my-4    flex-1  rounded-lg bg-secondary  ">
			<div className=" w-full rounded-lg p-2">
				<div className="w-full flex items-center justify-between">
					<div className="w-full flex py-3  text-text2 font-semibold 2xl:text-title3">
						{title}
					</div>
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
}
