import React from "react";

const Modal = ({ title, open, onCancel, footer, children }) => {
    if (!open) return null;

    return (
        <div className="fixed  bg-gray -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 w-1/3 h-1/4 flex items-center justify-center rounded-3xl ">
            <button
                className="absolute right-3 top-3 bg-light-blue px-3 py-2 text-text3  rounded-xl"
                onClick={onCancel}
            >
                Close
            </button>
            <div className="flex flex-col justify-center items-center  rounded-lg p-4  w-full">
                <div className="flex flex-col justify-center items-center  ">
                    <h2 className="flex text-title2 font-semibold  justify-center p-5">{title}</h2>
                    <div className="flex flex-col items-center justify-center">{children}</div>
                    {footer && <div className="mt-4">{footer}</div>}
                </div>
            </div>
        </div>
    );
};

export default Modal;
