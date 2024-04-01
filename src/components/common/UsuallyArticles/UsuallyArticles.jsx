import { useState } from "react";
import { dataForArticles } from "./../../../data/dataForArticles";
import PaginationForArticles from "./PaginationForArticles";

const UsuallyArticles = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(8);

	const endIndex = currentPage * postsPerPage;
	const startIndex = endIndex - postsPerPage;
	const currentItems = dataForArticles.slice(startIndex, endIndex);

	return (
		<div>
			<div className="mx-6 mt-6 grid grid-cols-4 gap-6  ">
				{currentItems.map((articles, index) => (
					<a href={articles.link} target="_blank" key={index}>
						<img src={articles.image} alt="article" width={256} height={198} />
						<p className="mt-3 font-nunito-sans font-bold">
							{articles.description}
						</p>
					</a>
				))}
			</div>
			{dataForArticles.length > 8 && (
				<PaginationForArticles
					totalPosts={dataForArticles.length}
					postsPerPage={postsPerPage}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
				/>
			)}
		</div>
	);
};

export default UsuallyArticles;
