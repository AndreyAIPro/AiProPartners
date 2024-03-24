import { useState } from "react";
const CommentsFilter = ({ data, onDataChange }) => {
	const [changeComments, setChangeComments] = useState(false);
	const [ascending, setAscending] = useState(false);

	const handleSortComments = () => {
		const sortedData = data.slice().sort((a, b) => {
			return ascending
				? a.comments.localeCompare(b.comments)
				: b.comments.localeCompare(a.comments);
		});
		onDataChange(sortedData);
		setAscending(!ascending);
		setChangeComments(!changeComments);
	};
	return (
		<div>
			<button
				className="flex gap-2 rounded-md border-2 border-light-blue px-4 py-1 font-nunito-sans hover:bg-light-blue"
				onClick={handleSortComments}
			>
				Комментарии
				{changeComments ? <p>{"↑"}</p> : <p>{"↓"}</p>}
			</button>
		</div>
	);
};

export default CommentsFilter;
