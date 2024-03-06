/** @format */
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import LandingButton from '../common/LandingButton/LandingButton';

const LandingNav = () => {
	return (
		<nav className='relative flex justify-between items-center z-10 max-sm:justify-center max-sm:pt-5'>
			<NavLink
				to='/'
				data-aos='fade-right'
				className='flex items-center gap-4 font-nunito-sans text-[50px] font-medium hover:cursor-pointer'
			>
				AIPRO <Logo width={67} />
			</NavLink>
			<div className='flex items-center gap-8 max-sm:hidden max-md:gap-3'>
				<LandingButton label='Войти' href='/login' />
				<LandingButton
					label='Зарегистрироваться'
					href='/registration'
					isBorder
				/>
				<select className='rounded-[8px] p-2 bg-transparent text-white font-regular text-sm font-nunito-sans flex uppercase'>
					<option value='Rus' key='Rus' className='bg-transparent border-0'>
						Рус
					</option>
					<option value='Eng' key='Eng' className='bg-transparent border-0'>
						Eng
					</option>
					<option value='Ua' key='Ua' className='bg-transparent border-0'>
						UA
					</option>
				</select>
			</div>
		</nav>
	);
};

export default LandingNav;
