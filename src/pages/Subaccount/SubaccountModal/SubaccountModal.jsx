import React from "react";

const Modal = ({ title, open, onCancel, footer, children }) => {
    if (!open) return null;

    return (
        <div className="fixed bg-gray -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 w-1/3 h-1/4 flex items-center justify-center rounded-3xl ">
            <div className=" rounded-lg p-4 max-w-md w-full">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="flex text-title2 font-semibold font-nunito-sans justify-center">{title}</h2>
                    <button
                        className="bg-light-blue px-5 py-2 text-xl font-nunito-sans rounded-xl justify-end"
                        onClick={onCancel}
                    >
                        Close
                    </button>
                </div>
                <div>{children}</div>
                {footer && <div className="mt-4">{footer}</div>}
            </div>
        </div>
    );
};

export default Modal;
