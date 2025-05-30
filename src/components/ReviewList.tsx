import { useEffect } from "react";
import { useState } from "react";
import ReviewItem from "./ReviewItem";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
const reviews = [
	{
		name: "Daniel Evans",
		avatar: "/avatars/avatar1.jpg",
		date: "Wednesday, 20 Sep 2028, 11:45 AM",
		message:
			"The microdermabrasion treatment was amazing! My skin feels so much smoother now. I highly recommend Dr. Lawson for anyone looking to refresh their skin.",
		artist: "Dr. Lawson",
		rating: 5,
	},
	{
		name: "Emma Wilson",
		avatar: "/avatars/avatar2.jpg",
		date: "Tuesday, 19 Sep 2028, 2:15 PM",
		message:
			"The chemical peel worked wonders on my skin, though the recovery took a few days. I’m really pleased with the outcome, and Dr. Clark was supportive throughout the process.",
		artist: "Dr. Clark",
		rating: 4,
	},
	{
		name: "Grace Parker",
		avatar: "/avatars/avatar3.jpg",
		date: "Monday, 18 Sep 2028, 10:30 AM",
		message:
			"Dr. Olivia is the best. She explained everything about my upcoming scar removal surgery. I feel so reassured and confident in her expertise, and I'm looking forward to the results!",
		artist: "Dr. Olivia",
		rating: 5,
		checked: true,
	},
	{
		name: "Hannah Lee",
		avatar: "/avatars/avatar4.jpg",
		date: "Saturday, 16 Sep 2028, 1:00 PM",
		message:
			"Effective acne treatment, though a bit of skin sensitivity after. Overall, I'm happy with the results. Dr. Ross was very patient and took the time to explain the aftercare in detail.",
		artist: "Dr. Ross",
		rating: 4,
	},
	{
		name: "Ethan Hughes",
		avatar: "/avatars/avatar5.jpg",
		date: "Friday, 15 Sep 2028, 5:00 PM",
		message:
			"Excellent service! The tattoo removal process was smooth and professional. I was a bit nervous going in, but Dr. Foster explained everything in detail, which made me feel confident.",
		artist: "Dr. Foster",
		rating: 5,
	},
	{
		name: "Claire Thompson",
		avatar: "/avatars/avatar6.jpg",
		date: "Thursday, 14 Sep 2028, 3:30 PM",
		message:
			"Great experience, though some swelling post-treatment. Dr. Grant was very attentive. She made sure I was comfortable throughout the procedure and checked in on me during recovery.",
		artist: "Dr. Grant",
		rating: 4,
	},
	{
		name: "Sarah Miller",
		avatar: "/avatars/avatar7.jpg",
		date: "Tuesday, 12 Sep 2028, 2:00 PM",
		message:
			"Dr. Olivia is amazing! My skin feels rejuvenated and looks better than ever. The results are more than I expected, and the clinic’s atmosphere is so relaxing. I will definitely come back for more treatments.",
		artist: "Dr. Olivia",
		rating: 5,
	},
];

export default function ReviewList() {
	const artistSearchReview = useSelector(
		(state: RootState) => state.search.artistSearchReview,
	);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);

	// Lọc dữ liệu theo search (tên customer hoặc artist) và ngày tháng năm
	const filteredArtists = reviews.filter((c) =>
		c.artist.toLowerCase().includes(artistSearchReview.toLowerCase()),
	);
	useEffect(() => {
		setCurrentPage(1);
	}, [artistSearchReview]);
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
			<div className="space-y-4">
            {currentItems.length === 0 ? (
					<p className="text-center text-gray-400 font-semibold py-8">
						No matching results found
					</p>
				) : (
					currentItems.map((review, index) => (
						<ReviewItem key={index} {...review} />
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
