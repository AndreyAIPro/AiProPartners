import React, { useState } from "react";

const Pagination = ({ data, length }) => {
	const [currentPage, setCurrentPage] = useState(1);

	// Розрахунок загальної кількості сторінок
	const totalPages = Math.ceil(data.length / length);

	// Відображення елементів для поточної сторінки
	const startIndex = (currentPage - 1) * length;
	const endIndex = startIndex + length;

	// Зміна сторінки
	const nextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const prevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	return (
		<div>
			{data.length > length && (
				<div>
					<button onClick={prevPage} disabled={currentPage === 1}>
						Попередня сторінка
					</button>
					<button onClick={nextPage} disabled={currentPage === totalPages}>
						Наступна сторінка
					</button>
					<p>
						Сторінка {currentPage} з {totalPages}
					</p>
				</div>
			)}
		</div>
	);
};

export default Pagination;
