import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { setSearch, setDate } from '../redux/searchSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function SearchFilterBar() {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search.search);
  const date = useSelector((state: RootState) => state.search.date);

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 mb-4">
      <input
        type="text"
        placeholder="Search customer, artist, etc"
        className="px-4 py-2 border rounded-lg w-full sm:w-80 bg-gray-50"
        value={search}
        onChange={e => dispatch(setSearch(e.target.value))}
      />
      <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full">Service</button>
      <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full">Artist</button>
      <div className="sm:ml-auto flex items-center gap-2">
        <DatePicker
          selected={date ? new Date(date) : null}
          onChange={(dateObj: Date | null) => {
            if (dateObj) {
              const pad = (n: number) => n.toString().padStart(2, '0');
              const localDate = `${dateObj.getFullYear()}-${pad(dateObj.getMonth() + 1)}-${pad(dateObj.getDate())}`;
              dispatch(setDate(localDate));
            } else {
              dispatch(setDate(''));
            }
          }}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select date"
          className="border rounded-full px-4 py-2 bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-200 hover:bg-gray-100 transition-colors"
          isClearable
          showYearDropdown
          scrollableYearDropdown
        />
        <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full">+ Add Customer</button>
      </div>
    </div>
  )
}