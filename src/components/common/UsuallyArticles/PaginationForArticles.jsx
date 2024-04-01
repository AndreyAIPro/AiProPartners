const PaginationForArticles = ({
	totalPosts,
	postsPerPage,
	setCurrentPage,
	currentPage,
}) => {
	const pages = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pages.push(i);
	}

	return (
		<div className="mt-2 flex justify-center">
			{pages.map((page, i) => {
				if (page === 1 || page === pages.length) {
					return (
						<div key={i}>
							<button
								className={`mx-2 mt-3 rounded-md border-2 px-2 font-nunito-sans font-bold enabled:hover:bg-light-blue disabled:opacity-25`}
								onClick={() => setCurrentPage(page)}
								disabled={currentPage === page}
							>
								{page}
							</button>
						</div>
					);
				} else if (page === 2 && currentPage > 3) {
					return (
						<div key={i} className="flex">
							<span className="mx-2 mt-3">...</span>
						</div>
					);
				} else if (
					page === pages.length - 2 &&
					currentPage < pages.length - 2
				) {
					return (
						<div key={i} className="flex">
							<span className="mx-2 mt-3">...</span>
						</div>
					);
				} else if (page >= currentPage - 2 && page <= currentPage + 2) {
					return (
						<div key={i}>
							<button
								className={`mx-2 mt-3 rounded-md border-2 px-2 font-nunito-sans font-bold enabled:hover:bg-light-blue disabled:opacity-25`}
								onClick={() => setCurrentPage(page)}
								disabled={currentPage === page}
							>
								{page}
							</button>
						</div>
					);
				} else {
					return null;
				}
			})}
		</div>
	);
};

export default PaginationForArticles;
