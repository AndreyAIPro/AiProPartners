import { alwaysInTouch } from "../../../data/landingData";

const AlwaysInTouchItem = ({ href, text, icon, index }) => {
	return (
		<li
			className={`flex w-[330px] items-center justify-center border border-y-0 border-in-touch-border py-[35px] text-white ${index == alwaysInTouch.length ? "border-r-0 hover:rounded-r-[20px] max-md:border-b-0" : index == 1 ? "border-l-0 hover:rounded-l-[20px] max-md:border-t-0" : null} hover:cursor-pointer hover:bg-indigo-950 max-md:border max-md:border-x-0`}
		>
			<a href={href} className="flex gap-x-3">
				<img src={icon} alt={text} />
				{text}
			</a>
		</li>
	);
};

export default AlwaysInTouchItem;
