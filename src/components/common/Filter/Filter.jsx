const Filter = ({ filters }) => {
  return (
    <>
      {filters.map((filter) => (
        <select
          key={filter.placeholder}
          placeholder={filter.placeholder}
          className="  font-nunito-sans outline-none bg-black border-2 rounded-md border-white px-2 py-1 max-w-[210px]  min-w-[150px] cursor-pointer m-w-full "
        >
          {filter.options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      ))}
    </>
  );
};

export default Filter;
