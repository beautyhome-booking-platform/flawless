import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Appointments from "./pages/Appointments";
import CustomerList from "./pages/CustomerList";
import ArtistPage from "./pages/ArtistPage";
export default function App() {
	return (
		<div className="w-full max-w-[100vw] overflow-x-hidden">
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Navigate to="/appointments" />} />
						<Route path="/appointments" element={<Appointments />} />
						<Route path="/artists" element={<ArtistPage />} />
						<Route path="/customers" element={<CustomerList />} />
						{/* thêm các route khác ở đây */}
					</Routes>
					{/* <SearchFilterBar />
        <CustomerTable /> */}
				</Layout>
			</BrowserRouter>
		</div>
	);
}
