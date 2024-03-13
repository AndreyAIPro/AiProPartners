

const WhyAIPROListItem = ({ img, title, text, dataAos }) => {
	return (
		<li
			className='flex items-start gap-6 bg-[linear-gradient(180deg,_#e5007c_0%,_rgba(243,_79,_168,_0)_100%)] p-10 max-w-[488px] rounded-2xl max-sm:flex-col max-sm:gap-[10px] max-sm:py-4 max-sm:px-5 w-full'
			data-aos={dataAos}
		>
			<img src={img} alt={title} height={48} width={48} />
			<div className='flex flex-col text-white font-nunito-sans'>
				<h4 className='font-black text-[18px] mb-2 max-sm:mb-0'>{title}</h4>
				<p className='text-text2'>{text}</p>
			</div>
		</li>
	);
};

export default WhyAIPROListItem;
