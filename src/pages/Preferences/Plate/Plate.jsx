export default function Plate({ title, children }) {
    return (
        <div className=" bg-secondary    flex-1  rounded-lg my-4  ">
            <div className=" rounded-lg px-2 w-full">
                <div className="flex justify-between items-center w-full">
                    <div className="flex text-title3 font-semibold   py-3 w-full">{title}</div>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}
