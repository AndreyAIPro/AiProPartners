/** @format */
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as BackButton } from "../../assets/images/landing/footer/partnershipBackButton.svg";
import { dataForPartnershipAgreement } from "../../data/dataForPartnershipAgreement";

const PartnershipAgreement = () => {
	return (
		<section className=" bg-primary">
			<div className="flex justify-between px-24 pt-14">
				<Logo className="" />
				<select className="cursor-pointer bg-primary text-white outline-none">
					<option value="RU">RU</option>
					<option value="EN">EN</option>
					<option value="UA">UA</option>
				</select>
			</div>
			<div className=" px-24 py-20 text-white">
				<a href="/" className="flex items-center gap-6">
					<BackButton />
					<p className="font-nunito-sans text-text1 ">Назад</p>
				</a>
			</div>
			<h2 className="mb-10 px-24 font-nunito-sans text-title font-medium uppercase text-white">
				Партнерское Соглашение
			</h2>
			{dataForPartnershipAgreement.map((partner) => (
				<div key={partner.title} className="px-24 ">
					<div className="flex gap-6">
						<img src={partner.icon} alt="" className="" />
						<h2 className="text-title2 text-white">{partner.title}</h2>
					</div>
					<div>
						<p className=" px-20 pt-8 font-nunito-sans text-text1 text-white">
							{partner.content}
						</p>
						<p className=" px-20 pb-8 pt-4 font-nunito-sans text-text1 text-white">
							{partner.content1}
						</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default PartnershipAgreement;
