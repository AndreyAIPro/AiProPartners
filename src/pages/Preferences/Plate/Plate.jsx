export default function Plate({ title, children }) {
    return (
        <div className=" bg-secondary  w-11/12  flex   rounded-lg my-4  ">
            <div className=" rounded-lg px-2 w-full">
                <div className="flex justify-between items-center ">
                    <h2 className="flex text-title3 font-semibold  justify-center py-3">{title}</h2>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}
