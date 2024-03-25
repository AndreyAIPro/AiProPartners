import AlwaysInTouchList from "../components/AlwaysInTouchList/AlwaysInTouchList";
import LandingSectionHeading from "../components/common/LandingSectionHeading/LandingSectionHeading";

const AlwaysInTouch = () => {
	return (
		<div className="w-full relative flex h-[382px] flex-col items-center gap-6 bg-in-touch pt-[151px] max-md:h-fit max-md:bg-mobile-footer max-md:bg-cover max-md:bg-no-repeat max-md:pb-14">
			<LandingSectionHeading
				title="Всегда на связи"
				isUpper
				dataAos="fade-left"
			/>
			<AlwaysInTouchList />
		</div>
	);
};

export default AlwaysInTouch;
