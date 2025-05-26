import { useState, useEffect } from "react";
import ArtistItem from "./ArtistItem";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
const artistData = [
	{
		name: "Dr. Olivia Grant",
		code: "DB-001",
		specialty: "Dermatology",
		phone: "(123) 456-7891",
		rating: 4.9,
		reviewCount: 2150,
		avatarUrl: "/avatars/olivia.png",
		bgColor: "#d1fae5",
	},
	{
		name: "Dr. David Carter",
		code: "DB-002",
		specialty: "Cosmetic Surgery",
		phone: "(123) 456-7892",
		rating: 4.8,
		reviewCount: 1980,
		avatarUrl: "/avatars/david.png",
		bgColor: "#fef2f2",
	},
	{
		name: "Dr. Olivia Grant",
		code: "DB-001",
		specialty: "Dermatology",
		phone: "(123) 456-7891",
		rating: 4.9,
		reviewCount: 2150,
		avatarUrl: "/avatars/olivia.png",
		bgColor: "#d1fae5",
	},
	{
		name: "Dr. David Carter",
		code: "DB-002",
		specialty: "Cosmetic Surgery",
		phone: "(123) 456-7892",
		rating: 4.8,
		reviewCount: 1980,
		avatarUrl: "/avatars/david.png",
		bgColor: "#fef2f2",
	},
	{
		name: "Dr. Olivia Grant",
		code: "DB-001",
		specialty: "Dermatology",
		phone: "(123) 456-7891",
		rating: 4.9,
		reviewCount: 2150,
		avatarUrl: "/avatars/olivia.png",
		bgColor: "#d1fae5",
	},
	{
		name: "Dr. David Carter",
		code: "DB-002",
		specialty: "Cosmetic Surgery",
		phone: "(123) 456-7892",
		rating: 4.8,
		reviewCount: 1980,
		avatarUrl: "/avatars/david.png",
		bgColor: "#fef2f2",
	},
	{
		name: "Dr. Olivia Grant",
		code: "DB-001",
		specialty: "Dermatology",
		phone: "(123) 456-7891",
		rating: 4.9,
		reviewCount: 2150,
		avatarUrl: "/avatars/olivia.png",
		bgColor: "#d1fae5",
	},
	{
		name: "Dr. David Carter",
		code: "DB-002",
		specialty: "Cosmetic Surgery",
		phone: "(123) 456-7892",
		rating: 4.8,
		reviewCount: 1980,
		avatarUrl: "/avatars/david.png",
		bgColor: "#fef2f2",
	},
	{
		name: "Dr. Olivia Grant",
		code: "DB-001",
		specialty: "Dermatology",
		phone: "(123) 456-7891",
		rating: 4.9,
		reviewCount: 2150,
		avatarUrl: "/avatars/olivia.png",
		bgColor: "#d1fae5",
	},
	{
		name: "Dr. David Carter",
		code: "DB-002",
		specialty: "Cosmetic Surgery",
		phone: "(123) 456-7892",
		rating: 4.8,
		reviewCount: 1980,
		avatarUrl: "/avatars/david.png",
		bgColor: "#fef2f2",
	},
	{
		name: "Dr. Olivia Grant",
		code: "DB-001",
		specialty: "Dermatology",
		phone: "(123) 456-7891",
		rating: 4.9,
		reviewCount: 2150,
		avatarUrl: "/avatars/olivia.png",
		bgColor: "#d1fae5",
	},
	{
		name: "Dr. David Carter",
		code: "DB-002",
		specialty: "Cosmetic Surgery",
		phone: "(123) 456-7892",
		rating: 4.8,
		reviewCount: 1980,
		avatarUrl: "/avatars/david.png",
		bgColor: "#fef2f2",
	},
	{
		name: "Dr. Olivia Grant",
		code: "DB-001",
		specialty: "Dermatology",
		phone: "(123) 456-7891",
		rating: 4.9,
		reviewCount: 2150,
		avatarUrl: "/avatars/olivia.png",
		bgColor: "#d1fae5",
	},
	{
		name: "Dr. David Carter",
		code: "DB-002",
		specialty: "Cosmetic Surgery",
		phone: "(123) 456-7892",
		rating: 4.8,
		reviewCount: 1980,
		avatarUrl: "/avatars/david.png",
		bgColor: "#fef2f2",
	},
	{
		name: "Dr. Olivia Grant",
		code: "DB-001",
		specialty: "Dermatology",
		phone: "(123) 456-7891",
		rating: 4.9,
		reviewCount: 2150,
		avatarUrl: "/avatars/olivia.png",
		bgColor: "#d1fae5",
	},
	{
		name: "Dr. David Carter",
		code: "DB-002",
		specialty: "Cosmetic Surgery",
		phone: "(123) 456-7892",
		rating: 4.8,
		reviewCount: 1980,
		avatarUrl: "/avatars/david.png",
		bgColor: "#fef2f2",
	},
	{
		name: "Dr. Olivia Grant",
		code: "DB-001",
		specialty: "Dermatology",
		phone: "(123) 456-7891",
		rating: 4.9,
		reviewCount: 2150,
		avatarUrl: "/avatars/olivia.png",
		bgColor: "#d1fae5",
	},
	{
		name: "Dr. David Carter",
		code: "DB-002",
		specialty: "Cosmetic Surgery",
		phone: "(123) 456-7892",
		rating: 4.8,
		reviewCount: 1980,
		avatarUrl: "/avatars/david.png",
		bgColor: "#fef2f2",
	},
];

export default function ArtistList() {
	const artistSearch = useSelector(
		(state: RootState) => state.search.artistSearch,
	);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);

	// Lọc dữ liệu theo search (tên customer hoặc artist) và ngày tháng năm
	const filteredArtists = artistData.filter((c) =>
		c.name.toLowerCase().includes(artistSearch.toLowerCase()),
	);
	useEffect(() => {
		setCurrentPage(1);
	}, [artistSearch]);
	// Calculate pagination
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredArtists.slice(indexOfFirstItem, indexOfLastItem);
	const totalItems = filteredArtists.length;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handleItemsPerPageChange = (newItemsPerPage: number) => {
		setItemsPerPage(newItemsPerPage);
		setCurrentPage(1); // Reset to first page when changing items per page
	};

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{currentItems.length === 0 ? (
					<p className="text-center text-gray-400 font-semibold py-8">
						No matching results found
					</p>
				) : (
					currentItems.map((artist) => (
						<ArtistItem key={artist.code} {...artist} />
					))
				)}
			</div>
			<Pagination
				currentPage={currentPage}
				totalItems={totalItems}
				itemsPerPage={itemsPerPage}
				onPageChange={handlePageChange}
				onItemsPerPageChange={handleItemsPerPageChange}
			/>
		</>
	);
}
