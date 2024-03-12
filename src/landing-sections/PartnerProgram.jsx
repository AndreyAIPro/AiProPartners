/** @format */

import PartnerProgramDetails from "../components/PartnerProgramDetails/PartnerProgramDetails";
import LandingButton from "../components/common/LandingButton/LandingButton";
import LandingSectionHeading from "../components/common/LandingSectionHeading/LandingSectionHeading";
import { useUser } from "../hooks/useUser";

const PartnerProgram = () => {
	const { user } = useUser();
	return (
		<section className="w-full relative flex h-full flex-col items-center justify-between bg-partner-program bg-no-repeat pb-[38px] pt-[121px] max-sm:bg-none max-sm:pt-[103px]">
			<h2 className="absolute top-[75px] z-10 flex h-full max-h-[78px] w-[564px] max-w-[564px] items-center justify-center rounded-[10px] bg-yellow py-6 text-[32px] max-sm:max-h-[54px] max-sm:max-w-[233px] max-sm:text-text2">
				Программа Партнерства
			</h2>

			<PartnerProgramDetails />
			<div className="mt-[85px] flex flex-col items-center justify-center gap-10 max-sm:px-7">
				<LandingSectionHeading
					title="Остался последний шаг к заработку, зарегистрируйся ниже!"
					dataAos="flip-right"
				/>
				<LandingButton
					href={user ? "/dashboard" : "/signup"}
					label="Начать зарабатывать"
					isYellow
					dataAos="fade-right"
				/>
			</div>
		</section>
	);
};

export default PartnerProgram;
