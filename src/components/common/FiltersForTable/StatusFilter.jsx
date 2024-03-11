
const StatusFilter = () => {
  return (
    <div>
      <select
        className="m-w-full min-w-[150px]  max-w-[210px] cursor-pointer  rounded-md border-2 border-white bg-black  px-2 py-1 font-nunito-sans outline-none"
      >
      <option value="Успешно" >Успешно</option>
      <option value="Отклонено">Отклонено</option>
      <option value="В обработке">В обработке</option>
    </select>
    </div>
  )
}

export default StatusFilter