import React from "react";

export default function ArtistDetail() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 bg-[#f8f9fa] text-sm text-gray-700">
			{/* Profile Card */}
			<div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
				<div className="flex flex-col items-center text-center">
					<img
						src="/avatars/lila.png"
						alt="Lila Martens"
						className="w-24 h-24 rounded-full object-cover"
					/>
					<h2 className="text-xl font-semibold mt-3">Lila Martens</h2>
					<div className="flex gap-3 mt-3 justify-center">
						<span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-gray-600 hover:bg-red-300 hover:scale-110 transition-all duration-200 cursor-pointer">
							<i className="fa-solid fa-envelope"></i>
						</span>
						<span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-gray-600 hover:bg-red-300 hover:scale-110 transition-all duration-200 cursor-pointer">
							<i className="fa-solid fa-comment-dots"></i>
						</span>
						<span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-gray-600 hover:bg-red-300 hover:scale-110 transition-all duration-200 cursor-pointer">
							<i className="fa-solid fa-phone"></i>
						</span>
						<span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-gray-600 hover:bg-red-300 hover:scale-110 transition-all duration-200 cursor-pointer">
							<i className="fa-solid fa-pen-to-square"></i>
						</span>
					</div>
				</div>
				<div className="relative bg-green-50 rounded-xl shadow-lg p-4 text-sm font-medium text-gray-700 overflow-hidden">
					{/* Logo góc trên trái */}
					<div className="flex items-center mb-3">
						<i className="fa-solid fa-wand-magic-sparkles text-red-300 mr-2 text-lg"></i>

						<span className="text-gray-800 text-sm font-semibold">
							Makeup Artist License
						</span>
					</div>

					{/* Nội dung chính */}
					<div className="mb-4">
						<p className="text-base font-bold text-gray-900">Lila Martens</p>
						<p className="text-sm text-gray-600">MUA-985632147</p>
					</div>

					{/* Ngày hết hạn */}
					<div>
						<p className="text-xs text-gray-500">Valid Until</p>
						<p className="text-sm font-medium text-gray-800">2032/01/01</p>
					</div>

					{/* Badge Active */}
					<span className="absolute bottom-3 right-4 bg-red-100 text-orange-200 text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
						Active
					</span>
				</div>
				<div className="bg-white rounded-xl p-4 shadow-lg space-y-3 text-sm text-gray-700">
					<div className="flex justify-between items-center">
						<h3 className="font-semibold text-base">General Info</h3>
						<i className="fa-solid fa-ellipsis text-gray-400"></i>
					</div>

					<div>
						<p className="text-xs text-gray-400 mb-1">About Artist</p>
						<p className="text-gray-700">
							Certified makeup artist with over a decade of experience in
							bridal, editorial, and red-carpet looks. Known for a soft glam
							style and attention to detail.
						</p>
					</div>

					<hr className="my-2 border-gray-200" />

					<ul className="space-y-1 text-sm text-gray-700">
						<li>
							<span className="text-gray-500">ID Artist</span>{" "}
							<span className="float-right font-medium">ART-021</span>
						</li>
						<li>
							<span className="text-gray-500">Gender</span>{" "}
							<span className="float-right font-medium">Female</span>
						</li>
						<li>
							<span className="text-gray-500">Birthday</span>{" "}
							<span className="float-right font-medium">May 12, 1989</span>
						</li>
						<li>
							<span className="text-gray-500">Experience</span>{" "}
							<span className="float-right font-medium">12 years</span>
						</li>
					</ul>
					
					<button className="mt-4 w-full bg-green-100 text-green-800 py-2 rounded-full font-medium text-sm">
						View Schedule
					</button>
				</div>
			</div>

			{/* Skill & Service Info */}
			<div className="col-span-2 bg-white rounded-xl p-6 shadow-sm space-y-6">
				<h3 className="text-lg font-semibold">Specialties & Services</h3>
				<div className="grid grid-cols-2 gap-4 text-center">
					<div className="bg-green-100 p-4 rounded-lg shadow-lg">
						<p className="text-lg font-bold">Total Income</p>
						<p className="text-xs text-gray-600 mt-1">
							<span className="text-sm font-semibold">20.000.000</span> VNĐ
						</p>
					</div>
					<div className="bg-red-100 p-4 rounded-lg shadow-lg">
						<p className="text-lg font-bold">Booking</p>
						<p className="text-xs text-gray-600 mt-1">
							<span className="text-sm font-semibold">34+</span> customers
						</p>
					</div>
					<div className="bg-red-100 p-4 rounded-lg shadow-lg">
						<p className="text-lg font-bold">Rating</p>
						<p className="text-xs text-gray-600 mt-1">
							<span className="text-sm font-semibold">4.5</span>/5
						</p>
					</div>
					<div className="bg-green-100 p-4 rounded-lg shadow-lg">
						<p className="text-lg font-bold">Canceled</p>
						<p className="text-xs text-gray-600 mt-1">
							<span className="text-sm font-semibold">3+</span> schedule
						</p>
					</div>
				</div>
				<hr className="my-2 border-gray-200" />
				<div className="grid grid-cols-2 gap-4 mt-6">
					<div>
						<h4 className="font-semibold mb-1">Certifications</h4>
						<ul className="list-disc list-inside text-sm text-gray-600">
							<li>CIDESCO Makeup Certification</li>
							<li>Advanced Bridal Styling</li>
							<li>Airbrush Training</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold mb-1">Products Used</h4>
						<ul className="list-disc list-inside text-sm text-gray-600">
							<li>NARS</li>
							<li>MAC</li>
							<li>Charlotte Tilbury</li>
							<li>Dior</li>
						</ul>
					</div>
				</div>
				{/* Contact & Health Report */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Contact Person */}
					<div className="bg-red-50 rounded-xl p-4 shadow-lg">
						<div className="flex justify-between items-center mb-3">
							<h3 className="font-semibold">Contact Person</h3>
							<i className="fa-solid fa-ellipsis text-gray-400"></i>
						</div>
						<div className="p-4 text-sm text-gray-700 space-y-4">
							{/* Phone */}
							<div className="flex items-start gap-3">
								<i className="fa-solid fa-phone text-gray-400 mt-1"></i>
								<div>
									<p className="text-xs text-gray-500">Phone</p>
									<p>(123) 456-7890</p>
								</div>
							</div>

							{/* Address */}
							<div className="flex items-start gap-3">
								<i className="fa-solid fa-house text-gray-400 mt-1"></i>
								<div>
									<p className="text-xs text-gray-500">Address</p>
									<p>
										45 Green Valley Road, Apt 12,
										<br />
										New York, NY 10001
									</p>
								</div>
							</div>

							{/* Email */}
							<div className="flex items-start gap-3">
								<i className="fa-solid fa-envelope text-gray-400 mt-1"></i>
								<div>
									<p className="text-xs text-gray-500">Email</p>
									<p>maurice.galley@email.com</p>
								</div>
							</div>

							{/* Area Booking */}
							<div className="flex items-start gap-3">
								<i className="fa-solid fa-circle-info text-gray-400 mt-1"></i>
								<div>
									<p className="text-xs text-gray-500">Area Booking</p>
									<p>Thủ Đức - TP.HCM</p>
								</div>
							</div>
						</div>
					</div>

					{/* Bank Account */}
					<div className="bg-green-50 rounded-xl p-4 shadow-lg">
						<div className="flex justify-between items-center mb-3">
							<h3 className="font-semibold">Bank Account</h3>
							<i className="fa-solid fa-ellipsis text-gray-400"></i>
						</div>

						<div className="space-y-3 text-sm">
							<div className="flex items-center gap-3 bg-pink-50 p-3 rounded-lg">
								<div className="bg-pink-200 text-pink-800 px-2 py-1 text-xs font-bold rounded">
									PDF
								</div>
								<div>
									<p className="font-medium">Skin Test Report</p>
									<p className="text-xs text-gray-500">PDF ・ 1 MB</p>
								</div>
							</div>

							<div className="flex items-center gap-3 bg-pink-50 p-3 rounded-lg">
								<div className="bg-pink-200 text-pink-800 px-2 py-1 text-xs font-bold rounded">
									PDF
								</div>
								<div>
									<p className="font-medium">
										Laser Hair Removal Pre-treatment
									</p>
									<p className="text-xs text-gray-500">PDF ・ 500 KB</p>
								</div>
							</div>

							<div className="flex items-center gap-3 bg-pink-50 p-3 rounded-lg">
								<div className="bg-pink-200 text-pink-800 px-2 py-1 text-xs font-bold rounded">
									PDF
								</div>
								<div>
									<p className="font-medium">
										Laser Hair Removal Pre-treatment
									</p>
									<p className="text-xs text-gray-500">PDF ・ 500 KB</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Certificate */}
			<div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
				<div>
					<h3 className="text-lg font-semibold">Certificate</h3>
					<div className="rounded-md text-sm mt-3">
						<img
							className="rounded-md"
							src="https://www.qcmakeupacademy.com/wp-content/uploads/2018/02/master-makeup-certificate-2018-768x594.jpg"
							alt="Certificate"
						/>
					</div>
					<div className="rounded-md text-sm mt-3">
						<img
							className="rounded-md"
							src="https://coolmakeupartist.weebly.com/uploads/1/4/0/7/14075888/6086653.jpg?408"
							alt="Certificate"
						/>
					</div>
				</div>
				<div>
					<h3 className="text-lg font-semibold">Notes</h3>
					<p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
						Lila is professional, punctual, and great with clients. Rebooked
						multiple times by high-profile clients. Recommended for luxury
						events.
					</p>
				</div>
			</div>
		</div>
	);
}
