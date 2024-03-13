import DateFilter from "./DateFilter"
import SumFilter from './SumFilter';
import PaymentFilter from './PaymentFilter';
import CommentsFilter from './CommentsFilter';
import StatusFilter from './StatusFilter';

const FiltersTable = () => {
  return (
    <div className="flex items-center gap-14 flex-wrap ">
      <DateFilter/>
      <SumFilter/>
      <PaymentFilter/>
      <CommentsFilter/>
      <StatusFilter/>
    </div>
  )
}

export default FiltersTable