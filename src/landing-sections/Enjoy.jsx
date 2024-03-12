/** @format */

import LandingButton from "../components/common/LandingButton/LandingButton";
import LandingSectionHeading from "../components/common/LandingSectionHeading/LandingSectionHeading";
import { useUser } from "../hooks/useUser";

const Enjoy = () => {
	const { user } = useUser();
	return (
		<section className="w-full after:w-full relative flex h-screen max-h-[336px] flex-col items-center justify-center gap-8 bg-gradient-to-r from-enjoy-start-gradient to-enjoy-end-gradient after:absolute after:h-full after:bg-enjoy-after after:bg-center after:bg-no-repeat max-sm:max-h-[366px] max-sm:bg-start-today-mobile max-sm:bg-cover max-sm:bg-center max-sm:bg-no-repeat max-sm:after:hidden">
			<LandingSectionHeading
				title="Присоединяйтесь к AIPRO!"
				dataAos="fate-left"
			/>
			<LandingButton
				href={user ? "/dashboard" : "/registration"}
				isYellow
				label="Зарегистрироваться"
				dataAos="fate-right"
			/>
		</section>
	);
};

export default Enjoy;
