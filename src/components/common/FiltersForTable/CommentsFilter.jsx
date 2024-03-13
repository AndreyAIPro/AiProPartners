
import { useState } from 'react';
const CommentsFilter = () => {
  const [changeComments, setChangeComments] = useState(false);

  return (
    <div >
      <button className="hover:bg-light-blue rounded-md border-2 border-light-blue px-4 py-1 font-nunito-sans flex gap-2" onClick={() => setChangeComments(!changeComments)}>
        Комментарии
        { changeComments ? <p>{'↑'}</p> :
      <p>{'↓'}</p>}
      </button>

   </div>
  )
}

export default CommentsFilter