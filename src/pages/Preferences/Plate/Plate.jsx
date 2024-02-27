export default function Plate({ title, children }) {
    return (
        <div className=" bg-secondary  w-11/12 h-fit flex   rounded-lg py-4 my-4 ">
            <div className=" rounded-lg px-4 w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="flex text-title2 font-semibold font-nunito-sans justify-center">{title}</h2>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}
