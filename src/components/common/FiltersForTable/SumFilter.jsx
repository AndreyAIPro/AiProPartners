import { useState } from "react"

const SumFilter = () => {
  const [changeSum, setChangeSum] = useState(false);
  return (
    <div >
      <button
      onClick={() => setChangeSum(!changeSum)}
      className="hover:bg-light-blue rounded-md border-2 border-light-blue px-4 py-1 font-nunito-sans flex gap-2">
        Сумма
      { changeSum ? <p>{'↑'}</p> :
      <p>{'↓'}</p>}
      </button>

   </div>
  )
}

export default SumFilter