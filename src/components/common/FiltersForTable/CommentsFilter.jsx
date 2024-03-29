import { useState } from "react";
const CommentsFilter = () => {
	const [changeComments, setChangeComments] = useState(false);

	return (
		<button
			className="flex items-center gap-2  rounded-md  border-2 border-light-blue px-2 py-1 hover:bg-light-blue "
			onClick={() => setChangeComments(!changeComments)}
		>
			Комментарии
			{changeComments ? <p>{"↑"}</p> : <p>{"↓"}</p>}
		</button>
	);
};

export default CommentsFilter;
