/** @format */
import { Outlet, useLocation } from 'react-router-dom';
import Link from '../../components/common/NavLink/NavLink';

const Study = () => {
	const { pathname } = useLocation();

	return (
		<section className='w-[1245px] px-20 py-8'>
			<h2 className=' text-title font-nunito-sans font-bold'>Обучения</h2>
			<div className='flex gap-10 text-title2 mt-5 '>
				<Link href='/study/articles' title='Полезные статьи' path={pathname} />
				<Link href='/study/community' title='Комьюнити' path={pathname} />
			</div>
			<Outlet />
		</section>
	);
};

export default Study;
