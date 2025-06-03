import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// Import các page/layout/component 
import Appointments from "./pages/Appointments";
import CustomerList from "./pages/CustomerList";
import ArtistPage from "./pages/ArtistPage";
import ArtistDetail from "./components/ArtistDetail";
import ReviewPage from "./pages/ReviewPage";
import SchedulePage from "./pages/SchedulePage";
import HomePage from "./pages/HomePage";
import DashboardAdminPage from "./pages/DashBoardAdminPage";
export default function App() {
	return (
    <Provider store={store}>
      <div className="w-full max-w-[100vw] overflow-x-hidden">
        <BrowserRouter>
          <Routes>
            {/* Route không có layout (ví dụ: trang chủ) */}
            <Route path="/home" element={<HomePage />} />

            {/* Route có layout dùng Outlet */}
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard-admin" />} />
              <Route path="/dashboard-admin" element={<DashboardAdminPage />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/artists" element={<ArtistPage />} />
              <Route path="/artists/:id" element={<ArtistDetail />} /> 
              <Route path="/customers" element={<CustomerList />} />
              <Route path="/reviews" element={<ReviewPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              {/* thêm các route khác ở đây */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
	);
}
