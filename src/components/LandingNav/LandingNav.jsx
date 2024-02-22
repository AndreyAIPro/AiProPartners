/** @format */
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import LandingButton from '../common/LandingButton/LandingButton';

const LandingNav = () => {
	return (
		<div className='flex justify-between items-center'>
			<NavLink
				to='/'
				className='flex items-center gap-4 font-nunito-sans text-[50px] font-medium'
			>
				AIPRO <Logo width={67} />
			</NavLink>
			<div className='flex items-center gap-8'>
				<LandingButton label='Войти' href='/login' />
				<LandingButton
					label='Зарегистрироваться'
					href='/registration'
					isBorder
				/>
				<select className='rounded-[8px] p-2 bg-transparent text-white font-regular text-sm font-nunito-sans flex uppercase'>
					<option value='Rus' key='Rus'>
						Рус
					</option>
					<option value='Eng' key='Eng'>
						Eng
					</option>
				</select>
			</div>
		</div>
	);
};

export default LandingNav;
