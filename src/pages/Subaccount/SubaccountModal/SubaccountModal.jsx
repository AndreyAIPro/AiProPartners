import React from "react";

const Modal = ({ title, open, onCancel, footer, children }) => {
	if (!open) return null;

	return (
		<div className="fixed  left-1/2 top-1/2 flex h-[35%] w-[30%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-gray ">
			<button
				className="absolute right-3 top-3 rounded-xl bg-light-blue px-3 py-2  text-text3"
				onClick={onCancel}
			>
				Close
			</button>
			<div className="w-full flex flex-col items-center  justify-center rounded-lg  p-4">
				<div className="flex flex-col items-center justify-center  ">
					<h2 className="flex justify-center p-5  text-title2 font-semibold">
						{title}
					</h2>
					<div className="flex flex-col items-center justify-center">
						{children}
					</div>
					{footer && <div className="mt-4">{footer}</div>}
				</div>
			</div>
		</div>
	);
};

export default Modal;
