import React, {   useState } from 'react'
import DatePicker, { getDefaultLocale } from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const renderDayContents = (day, date) => (
     <span className='text-white'>{date.getDate()}</span>
  );

  return (
    <div className=''>
      <h2 className='font-sans-serif self-center mb-2'>Выберите период:</h2>
      <DatePicker
      className='text-white bg-black w-[220px] px-2 border-[1px] rounded-md py-2'
      dateFormat={'dd/MM/yyyy'}
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      isClearable={true}
      placeholderText={["Период"]}
      calendarClassName='bg-black decoration-white'
      renderDayContents={renderDayContents}
      showMonthDropdown

    />
    </div>

  );
};
export default DateFilter