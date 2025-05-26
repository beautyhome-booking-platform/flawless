import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { setCustomerSearch, setArtistSearch, setDate } from '../redux/searchSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation } from "react-router-dom";

export default function SearchFilterBar() {
  const dispatch = useDispatch();
  const customerSearch = useSelector((state: RootState) => state.search.customerSearch);
  const artistSearch = useSelector((state: RootState) => state.search.artistSearch);
  const date = useSelector((state: RootState) => state.search.date);
  const location = useLocation();
  const pathname = location.pathname;
  const isAppointmentsPage = pathname === "/appointments";
  const isCustomersPage = pathname === "/customers";
  const isArtistsPage = pathname === "/artists";
  
  const value = isArtistsPage ? artistSearch : customerSearch;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (isArtistsPage) {
      dispatch(setArtistSearch(val));
    } else {
      dispatch(setCustomerSearch(val));
    }
  };
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 mb-4">
      <input
        type="text"
        placeholder="Search customer, artist, etc"
        className="px-4 py-2 border rounded-lg w-full sm:w-80 bg-gray-50"
        value={value}
        onChange={onChange}
      />
      <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full">Service</button>
      <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full">Artist</button>
      <div className="sm:ml-auto flex items-center gap-2">
        {isAppointmentsPage && (
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
        />)}
        {(isCustomersPage || isArtistsPage) && (
          <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full">+ Add {isCustomersPage ? "Customer" : "Artist"}</button>
        )}
      </div>
    </div>
  )
}