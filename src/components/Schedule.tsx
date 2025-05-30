// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { CalendarDays, UserPlus, Undo2 } from "lucide-react";
// import { getCurrentWeekDates } from "../utils/getCurrentWeek";
// const Schedule = () => {
// 	// const days = ["Monday 18", "Tuesday 19", "Wednesday 20", "Thursday 21"];
//   function timeToMinutes(timeStr: string): number {
//     const [time, modifier] = timeStr.split(" ");
//     let [hours, minutes] = time.split(":").map(Number);
//     if (modifier === "PM" && hours !== 12) hours += 12;
//     if (modifier === "AM" && hours === 12) hours = 0;
//     return hours * 60 + minutes;
//   }

// 	const hours = [
// 		"9:00 AM",
// 		"10:00 AM",
// 		"11:00 AM",
// 		"12:00 PM",
// 		"1:00 PM",
// 		"2:00 PM",
// 		"3:00 PM",
// 	];

// 	const appointments = [
// 		{
// 			name: "Sarah Miller",
// 			time: "9:00 AM",
// 			day: "Monday 26",
// 			treatment: "Facial Rejuvenation",
// 			type: "red",
// 			avatar:
// 				"https://khoinguonsangtao.vn/wp-content/uploads/2022/07/hinh-anh-avatar-facebook-chibi-boy-deo-kinh.jpg",
//       duration: 30,
//       },
// 		{
// 			name: "Grace Parker",
// 			time: "9:30 AM",
// 			day: "Tuesday 27",
// 			treatment: "Scar Removal Surgery",
// 			type: "green",
// 			avatar:
// 				"https://khoinguonsangtao.vn/wp-content/uploads/2022/07/hinh-anh-avatar-facebook-chibi-boy-deo-kinh.jpg",
//         duration: 60,
//       },
// 		{
// 			name: "Maurice Galley",
// 			time: "1:15 PM",
// 			day: "Monday 26",
// 			treatment: "Laser Hair Removal",
// 			type: "green",
// 			avatar:
// 				"https://khoinguonsangtao.vn/wp-content/uploads/2022/07/hinh-anh-avatar-facebook-chibi-boy-deo-kinh.jpg",
//         duration: 120,
//       },
// 		{
// 			name: "Victor Ramirez",
// 			time: "10:45 AM",
// 			day: "Tuesday 27",
// 			treatment: "Body Contouring",
// 			type: "green",
// 			avatar:
// 				"https://khoinguonsangtao.vn/wp-content/uploads/2022/07/hinh-anh-avatar-facebook-chibi-boy-deo-kinh.jpg",
//         duration: 30,
//       },
// 		{
// 			name: "Daniel Evans",
// 			time: "10:30 AM",
// 			day: "Tuesday 27",
// 			treatment: "Microdermabrasion",
// 			type: "red",
// 			avatar:
// 				"https://khoinguonsangtao.vn/wp-content/uploads/2022/07/hinh-anh-avatar-facebook-chibi-boy-deo-kinh.jpg",
//         duration: 60,
//       },
// 		{
// 			name: "Emma Wilson",
// 			time: "11:30 AM",
// 			day: "Tuesday 27",
// 			treatment: "Chemical Peels",
// 			type: "red",
// 			avatar:
// 				"https://khoinguonsangtao.vn/wp-content/uploads/2022/07/hinh-anh-avatar-facebook-chibi-boy-deo-kinh.jpg",
//         duration: 120,
//       },
// 		{
// 			name: "Julia Watson",
// 			time: "3:00 PM",
// 			day: "Thursday 29",
// 			treatment: "Botox Injections",
// 			type: "red",
// 			avatar:
// 				"https://khoinguonsangtao.vn/wp-content/uploads/2022/07/hinh-anh-avatar-facebook-chibi-boy-deo-kinh.jpg",
//         duration: 30,
//       },
// 		{
// 			name: "Julia Watson",
// 			time: "3:00 PM",
// 			day: "Friday 30",
// 			treatment: "Botox Injections",
// 			type: "red",
// 			avatar:
// 				"https://khoinguonsangtao.vn/wp-content/uploads/2022/07/hinh-anh-avatar-facebook-chibi-boy-deo-kinh.jpg",
//       duration: 30,
//       },
// 	];

// 	const getColor = (type: string) => {
// 		return type === "green" ? "bg-green-100" : "bg-red-100";
// 	};
// 	const days = getCurrentWeekDates();
// 	const today = new Date().toDateString();

// 	return (
// 		<div className="flex flex-col lg:flex-row w-full">
// 			{/* LEFT: Schedule (2/3 width) */}
// 			<div className="w-full lg:w-2/3 pr-4">
// 				{/* Header ngày tháng */}
// 				<div className="grid grid-cols-[100px_repeat(5,minmax(0,1fr))] mb-4 overflow-hidden">
// 					{/* 1 Cột giờ trống ở đầu dòng header */}
// 					<div className="text-center p-3 mx-1 rounded-xl shadow-sm bg-slate-200">
// 						UTC +7
// 					</div>
// 					{/* 5 cột ngày tháng */}
// 					{days.map((day) => {
// 						const [weekday, date] = day.split(" ");

// 						const isToday =
// 							new Date().toLocaleDateString("en-US", {
// 								weekday: "long",
// 								day: "numeric",
// 							}) === day;

// 						return (
// 							<div
// 								key={day}
// 								className={`text-center p-3 mx-1 rounded-xl shadow-sm ${
// 									isToday ? "bg-green-100 border-green-400" : "bg-white"
// 								}`}
// 							>
// 								<p className="text-sm font-semibold text-gray-800">{weekday}</p>
// 								<p className="text-xs text-gray-600">{date}</p>
// 							</div>
// 						);
// 					})}
// 				</div>

// 				{/* Grid thời gian + lịch */}
// 				<div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
//         {hours.map((hour) => {
//   const hourStart = timeToMinutes(hour); // Thêm dòng này ở đây

//   return (
//     <div key={hour} className="grid grid-cols-[100px_repeat(5,minmax(0,1fr))] text-sm">
//       <div className="p-3 text-center border-r border-b border-gray-200 bg-gray-50 text-gray-600 font-semibold">
//         {hour}
//       </div>

//       {days.map((day) => {
//         const appointment = appointments.find(
//           (a) => a.day === day &&
//             timeToMinutes(a.time) >= hourStart &&
//             timeToMinutes(a.time) < hourStart + 60
//         );

//         return (
//           <div key={day} className="border-b border-r border-gray-200 relative h-28 bg-white">
//             {appointment && (() => {
//               const start = timeToMinutes(appointment.time);
//               const offsetTop = ((start - hourStart) / 60) * 100;
//               const duration = appointment.duration || 30;
//               const height = (duration / 60) * 100;

//               return (
//                 <div
//                   className={`absolute left-1 right-1 rounded-md shadow-sm p-2 text-xs bg-gradient-to-r ${getColor(appointment.type)} overflow-hidden`}
//                   style={{
//                     top: `${offsetTop}%`,
//                     height: `${height}%`,
//                   }}
//                 >
//                   <p className="font-semibold text-gray-800 truncate">{appointment.name}</p>
//                   <p className="text-gray-600 text-xs truncate">
//                     <i className="fa-solid fa-stethoscope mr-1 text-gray-400" />
//                     {appointment.treatment}
//                   </p>
//                   <p className="text-gray-500 text-xs">
//                     <i className="fa-regular fa-clock mr-1 text-gray-400" />
//                     {appointment.time}
//                   </p>
//                 </div>
//               );
//             })()}
//           </div>
//         );
//       })}
//     </div>
//   );
// })}

// 				</div>
// 			</div>

// 			{/* RIGHT: Sidebar (1/3 width) */}
// 			<div className="lg:w-1/3 w-full space-y-4">
// 				{/* Stats */}
// 				<div className="grid grid-cols-3 gap-3">
// 					<div className="bg-red-50 p-4 rounded-xl text-center">
// 						<p className="text-xl font-bold text-red-700">120</p>
// 						<p className="text-sm text-gray-600">Total Appointments</p>
// 					</div>
// 					<div className="bg-green-50 p-4 rounded-xl text-center">
// 						<p className="text-xl font-bold text-green-700">45</p>
// 						<p className="text-sm text-gray-600">New Patients</p>
// 					</div>
// 					<div className="bg-orange-50 p-4 rounded-xl text-center">
// 						<p className="text-xl font-bold text-orange-700">75</p>
// 						<p className="text-sm text-gray-600">Follow-up Patients</p>
// 					</div>
// 				</div>

// 				{/* Ongoing Appointment */}
// 				<div className="bg-white shadow rounded-xl p-4">
// 					<h3 className="font-semibold text-sm mb-2">On Going Appointment</h3>
// 					<div className="flex justify-between items-center text-sm mb-1">
// 						<span className="font-medium">Maurice Galley</span>
// 						<span className="text-gray-400">Dr. David Carter</span>
// 					</div>
// 					<p className="text-xs text-gray-500 mb-2">12:00 PM - 2:00 PM</p>
// 					<p className="text-xs text-gray-600">Male, 34 years old</p>
// 					<p className="text-xs text-gray-600">
// 						45 Green Valley Road, Apt 12, NY
// 					</p>
// 					<p className="text-xs text-gray-500 mt-2">
// 						Maurice is responding well to the treatment, and further sessions
// 						may be required for complete results.
// 					</p>
// 				</div>

// 				{/* Upcoming Appointments */}
// 				{/* <div className="bg-white shadow rounded-xl p-4">
//       <h3 className="font-semibold text-sm mb-2">Upcoming Appointments</h3>
//       <ul className="text-sm text-gray-700 space-y-3">
//         {upcomingAppointments.map((item, i) => (
//           <li key={i} className="flex justify-between">
//             <span>
//               <b>{item.name}</b>
//               <br />
//               {item.treatment} ・ {item.doctor}
//             </span>
//             <span className="text-xs text-right text-gray-500">
//               {item.date}
//               <br />
//               {item.time}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div> */}
// 			</div>
// 		</div>
// 	);
// };

// export default Schedule;

// // {/* <div className="col-span-8 overflow-x-auto">
// //   <div className="grid grid-cols-[100px_repeat(4,minmax(150px,1fr))] border-t border-l">
// //     {/* Header Row */}
// //     <div className="border-r border-b p-2 font-medium bg-gray-50">Time</div>
// //     {days.map((day, idx) => (
// //       <div
// //         key={idx}
// //         className="text-center border-r border-b p-2 font-medium bg-gray-50"
// //       >
// //         {day}
// //       </div>
// //     ))}

// //     {/* Schedule Rows */}
// //     {hours.map((hour, hIdx) => (
// //       <React.Fragment key={hIdx}>
// //         <div className="border-r border-b p-2 text-sm font-medium bg-gray-50">
// //           {hour}
// //         </div>
// //         {days.map((day, dIdx) => {
// //           const appointment = appointments.find(
// //             (a) => a.day === day && a.time.startsWith(hour.split(":")[0])
// //           );
// //           return (
// //             <div
// //               key={dIdx}
// //               className="border-r border-b p-2 h-20 relative"
// //             >
// //               {appointment && (
// //                 <Card className={`absolute top-1 left-1 right-1 ${getColor(appointment.type)}`}>
// //                   <CardContent className="p-2">
// //                     <p className="text-sm font-medium">{appointment.name}</p>
// //                     <p className="text-xs text-gray-600">{appointment.treatment}</p>
// //                     <p className="text-xs text-gray-600">{appointment.time}</p>
// //                   </CardContent>
// //                 </Card>
// //               )}
// //             </div>
// //           );
// //         })}
// //       </React.Fragment>
// //     ))}
// //   </div>
// // </div> */}

// import React, { useState } from "react";
// import { format, addWeeks, startOfWeek, addDays } from "date-fns";
// import { ChevronDown } from "lucide-react";

// const timeToMinutes = (timeStr: string): number => {
//   const [time, modifier] = timeStr.split(" ");
//   let [hours, minutes] = time.split(":").map(Number);
//   if (modifier === "PM" && hours !== 12) hours += 12;
//   if (modifier === "AM" && hours === 12) hours = 0;
//   return hours * 60 + minutes;
// };

// const hours = [
//   "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
//   "1:00 PM", "2:00 PM", "3:00 PM",
// ];

// const allAppointments = [
//   // Week 1: Monday 19 – Friday 23
//   {
//     name: "Sarah Miller",
//     time: "9:00 AM",
//     day: "Monday 19",
//     treatment: "Facial Rejuvenation",
//     type: "red",
//     avatar: "/avatars/avatar1.jpg",
//     duration: 30,
//   },
//   {
//     name: "Grace Parker",
//     time: "9:30 AM",
//     day: "Tuesday 20",
//     treatment: "Scar Removal",
//     type: "green",
//     avatar: "/avatars/avatar2.jpg",
//     duration: 60,
//   },
//   {
//     name: "Emma Wilson",
//     time: "11:30 AM",
//     day: "Tuesday 20",
//     treatment: "Chemical Peel",
//     type: "red",
//     avatar: "/avatars/avatar3.jpg",
//     duration: 90,
//   },
//   {
//     name: "Daniel Evans",
//     time: "11:30 AM",
//     day: "Tuesday 20",
//     treatment: "Tattoo Removal",
//     type: "green",
//     avatar: "/avatars/avatar4.jpg",
//     duration: 60,
//   },
//   {
//     name: "Julia Watson",
//     time: "3:00 PM",
//     day: "Thursday 22",
//     treatment: "Botox",
//     type: "red",
//     avatar: "/avatars/avatar5.jpg",
//     duration: 30,
//   },
//   {
//     name: "Megan Roberts",
//     time: "1:15 PM",
//     day: "Friday 23",
//     treatment: "Laser Hair Removal",
//     type: "green",
//     avatar: "/avatars/avatar6.jpg",
//     duration: 45,
//   },
//   {
//     name: "Henry Turner",
//     time: "10:45 AM",
//     day: "Monday 19",
//     treatment: "Microdermabrasion",
//     type: "green",
//     avatar: "/avatars/avatar7.jpg",
//     duration: 30,
//   },

//   // Week 2: Monday 26 – Friday 30
//   {
//     name: "Liam Johnson",
//     time: "9:00 AM",
//     day: "Monday 26",
//     treatment: "Skin Check",
//     type: "green",
//     avatar: "/avatars/avatar8.jpg",
//     duration: 30,
//   },
//   {
//     name: "Olivia Brown",
//     time: "10:30 AM",
//     day: "Tuesday 27",
//     treatment: "Acne Treatment",
//     type: "red",
//     avatar: "/avatars/avatar9.jpg",
//     duration: 60,
//   },
//   {
//     name: "Noah Davis",
//     time: "11:15 AM",
//     day: "Wednesday 28",
//     treatment: "Body Contouring",
//     type: "green",
//     avatar: "/avatars/avatar10.jpg",
//     duration: 75,
//   },
//   {
//     name: "Ava Garcia",
//     time: "12:00 PM",
//     day: "Thursday 29",
//     treatment: "Scar Revision",
//     type: "red",
//     avatar: "/avatars/avatar11.jpg",
//     duration: 45,
//   },
//   {
//     name: "William Anderson",
//     time: "2:00 PM",
//     day: "Friday 30",
//     treatment: "Chemical Peel",
//     type: "green",
//     avatar: "/avatars/avatar12.jpg",
//     duration: 90,
//   },

//   // Week 3: Monday 2 – Friday 6 (June)
//   {
//     name: "James Thomas",
//     time: "9:00 AM",
//     day: "Monday 2",
//     treatment: "Botox",
//     type: "red",
//     avatar: "/avatars/avatar13.jpg",
//     duration: 60,
//   },
//   {
//     name: "Sophia Martinez",
//     time: "9:00 AM",
//     day: "Monday 2",
//     treatment: "Consultation",
//     type: "green",
//     avatar: "/avatars/avatar14.jpg",
//     duration: 30,
//   },
//   {
//     name: "Benjamin Moore",
//     time: "1:45 PM",
//     day: "Wednesday 4",
//     treatment: "Hair Removal",
//     type: "green",
//     avatar: "/avatars/avatar15.jpg",
//     duration: 15,
//   },
//   {
//     name: "Mia Taylor",
//     time: "2:15 PM",
//     day: "Wednesday 4",
//     treatment: "Anti-aging",
//     type: "red",
//     avatar: "/avatars/avatar16.jpg",
//     duration: 60,
//   },
//   {
//     name: "Ethan Clark",
//     time: "3:00 PM",
//     day: "Friday 6",
//     treatment: "Fillers",
//     type: "red",
//     avatar: "/avatars/avatar17.jpg",
//     duration: 30,
//   },
// ];

// const getColor = (type: string) => {
//   return type === "green"
//     ? "from-green-50 to-green-100"
//     : "from-red-50 to-red-100";
// };

// const getWeekDays = (weekOffset = 0) => {
//   const start = addWeeks(startOfWeek(new Date(), { weekStartsOn: 1 }), weekOffset);
//   return Array.from({ length: 5 }, (_, i) =>
//     format(addDays(start, i), "EEEE d")
//   );
// };

// const Schedule = () => {
//   const [weekOffset, setWeekOffset] = useState(0);
//   const days = getWeekDays(weekOffset);
//   const currentTime = new Date();
//   const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

//   return (
//     <div className="flex flex-col lg:flex-row gap-6">
//       {/* Left Column (Schedule) */}
//       <div className="w-full lg:w-2/3 pr-4">
//         {/* Dropdown week selection */}
//         <div className="mb-4 flex items-center gap-3">
//           <label className="text-sm font-semibold">Select Week:</label>
//           <select
//             className="border px-2 py-1 rounded-md text-sm"
//             value={weekOffset}
//             onChange={(e) => setWeekOffset(Number(e.target.value))}
//           >
//             <option value={0}>This Week</option>
//             <option value={-1}>Last Week</option>
//             <option value={1}>Next Week</option>
//           </select>
//         </div>

//         {/* Header row */}
//         <div className="grid grid-cols-[100px_repeat(5,minmax(0,1fr))] mb-2 gap-1">
//           <div className="text-sm text-center font-medium text-gray-600">Time</div>
//           {days.map((day) => {
//             const [weekday, date] = day.split(" ");
//             const isToday = format(currentTime, "EEEE d") === day;
//             return (
//               <div
//                 key={day}
//                 className={`text-center p-2 rounded-md border font-semibold ${
//                   isToday ? "bg-green-100 border-green-300" : "bg-white"
//                 }`}
//               >
//                 <p className="text-sm">{weekday}</p>
//                 <p className="text-xs text-gray-500">{date}</p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Schedule Grid */}
//         <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
//           {hours.map((hour) => {
//             const hourStart = timeToMinutes(hour);
//             const isCurrentHour =
//               currentMinutes >= hourStart && currentMinutes < hourStart + 60;

//             return (
//               <div
//                 key={hour}
//                 className={`grid grid-cols-[100px_repeat(5,minmax(0,1fr))] text-sm relative ${
//                   isCurrentHour ? "bg-yellow-50" : ""
//                 }`}
//               >
//                 <div className="p-3 text-center border-r border-b bg-gray-50 text-gray-600 font-semibold">
//                   {hour}
//                 </div>

//                 {days.map((day) => {
//                   const cellAppointments = allAppointments.filter(
//                     (a) =>
//                       a.day === day &&
//                       timeToMinutes(a.time) >= hourStart &&
//                       timeToMinutes(a.time) < hourStart + 60
//                   );

//                   return (
//                     <div key={day} className="border-r border-b relative h-28 bg-white overflow-hidden">
// {cellAppointments.map((appt, index) => {
//   const start = timeToMinutes(appt.time);
//   const offsetTop = ((start - hourStart) / 60) * 100;
//   const height = (appt.duration / 60) * 100;
//   const total = cellAppointments.length;
//   const widthPercent = 100 / total;
//   const leftPercent = index * widthPercent;

//   return (
//     <div
//       key={index}
//       className={`absolute rounded-md shadow-sm p-2 text-xs bg-gradient-to-r ${getColor(
//         appt.type
//       )} overflow-hidden`}
//       style={{
//         top: `${offsetTop}%`,
//         height: `max(${height}%, 100px)`, // 👈 đảm bảo hiển thị đủ nội dung
//         width: `calc(${widthPercent}% - 4px)`,
//         left: `calc(${leftPercent}% + 2px)`,
//         zIndex: 10 + index,
//       }}
//     >
//       <p className="font-semibold text-gray-800 truncate">{appt.name}</p>
//       <p className="text-gray-600 text-xs truncate">
//         <i className="fa-solid fa-stethoscope mr-1 text-gray-400" />
//         {appt.treatment}
//       </p>
//       <p className="text-gray-500 text-xs truncate">
//         <i className="fa-regular fa-clock mr-1 text-gray-400" />
//         {appt.time}
//       </p>
//     </div>
//   );
// })}

//                     </div>
//                   );
//                 })}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Right Column (Sidebar) */}
//       <div className="lg:w-1/3 w-full space-y-4">
//         <div className="grid grid-cols-3 gap-3">
//           <div className="bg-red-50 p-4 rounded-xl text-center">
//             <p className="text-xl font-bold text-red-700">120</p>
//             <p className="text-sm text-gray-600">Total Appointments</p>
//           </div>
//           <div className="bg-green-50 p-4 rounded-xl text-center">
//             <p className="text-xl font-bold text-green-700">45</p>
//             <p className="text-sm text-gray-600">New Patients</p>
//           </div>
//           <div className="bg-orange-50 p-4 rounded-xl text-center">
//             <p className="text-xl font-bold text-orange-700">75</p>
//             <p className="text-sm text-gray-600">Follow-ups</p>
//           </div>
//         </div>

//         <div className="bg-white p-4 rounded-xl shadow">
//           <h3 className="font-semibold text-sm mb-2">Ongoing Appointment</h3>
//           <p className="text-sm font-medium">Maurice Galley</p>
//           <p className="text-xs text-gray-500">12:00 PM - 2:00 PM</p>
//           <p className="text-xs text-gray-600 mt-1">
//             Rejuvenation Consultation with Dr. Carter. Ongoing progress positive.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Schedule;

import React, { useState } from "react";
import { format, startOfWeek, addDays } from "date-fns";
const hourBlockHeight = 120; // hoặc 140, 160 tùy UI mong muốn
import SyntheticDialog from "./SyntheticDialog";
const timeToMinutes = (timeStr: string): number => {
	const [time, modifier] = timeStr.split(" ");
	let [hours, minutes] = time.split(":").map(Number);
	if (modifier === "PM" && hours !== 12) hours += 12;
	if (modifier === "AM" && hours === 12) hours = 0;
	return hours * 60 + minutes;
};

const hours = [
	"9:00 AM",
	"10:00 AM",
	"11:00 AM",
	"12:00 PM",
	"1:00 PM",
	"2:00 PM",
	"3:00 PM",
];

const getColor = (type: string) => {
	return type === "green"
		? "from-green-50 to-green-100"
		: "from-red-50 to-red-100";
};

const getWeekDays = (weekOffset = 0) => {
	const now = new Date();
	const base = startOfWeek(now, { weekStartsOn: 1 }); // Always Monday of this week
	const start = addDays(base, weekOffset * 7); // Offset in full weeks
	return Array.from({ length: 7 }, (_, i) =>
		format(addDays(start, i), "EEEE d"),
	);
};
const allAppointments = [
	// Week 1: Monday 19 – Friday 23
	{
		name: "Sarah Miller",
		time: "9:00 AM",
		day: "Monday 19",
		treatment: "Facial Rejuvenation",
		type: "red",
		avatar: "/avatars/avatar1.jpg",
		duration: 30,
	},
	{
		name: "Grace Parker",
		time: "9:30 AM",
		day: "Tuesday 20",
		treatment: "Scar Removal",
		type: "green",
		avatar: "/avatars/avatar2.jpg",
		duration: 60,
	},
	{
		name: "Emma Wilson",
		time: "11:30 AM",
		day: "Tuesday 20",
		treatment: "Chemical Peel",
		type: "red",
		avatar: "/avatars/avatar3.jpg",
		duration: 90,
	},
	{
		name: "Daniel Evans",
		time: "11:30 AM",
		day: "Tuesday 20",
		treatment: "Tattoo Removal",
		type: "green",
		avatar: "/avatars/avatar4.jpg",
		duration: 60,
	},
	{
		name: "Julia Watson",
		time: "3:00 PM",
		day: "Thursday 22",
		treatment: "Botox",
		type: "red",
		avatar: "/avatars/avatar5.jpg",
		duration: 30,
	},
	{
		name: "Megan Roberts",
		time: "1:15 PM",
		day: "Friday 23",
		treatment: "Laser Hair Removal",
		type: "green",
		avatar: "/avatars/avatar6.jpg",
		duration: 45,
	},
	{
		name: "Henry Turner",
		time: "10:45 AM",
		day: "Monday 19",
		treatment: "Microdermabrasion",
		type: "green",
		avatar: "/avatars/avatar7.jpg",
		duration: 30,
	},

	// Week 2: Monday 26 – Friday 30
	{
		name: "Liam Johnson",
		time: "9:00 AM",
		day: "Monday 26",
		treatment: "Skin Check",
		type: "green",
		avatar: "/avatars/avatar8.jpg",
		duration: 30,
	},
	{
		name: "Olivia Brown",
		time: "10:30 AM",
		day: "Tuesday 27",
		treatment: "Acne Treatment",
		type: "red",
		avatar: "/avatars/avatar9.jpg",
		duration: 60,
	},
	{
		name: "Noah Davis",
		time: "11:15 AM",
		day: "Wednesday 28",
		treatment: "Body Contouring",
		type: "green",
		avatar: "/avatars/avatar10.jpg",
		duration: 75,
	},
	{
		name: "Ava Garcia",
		time: "12:00 PM",
		day: "Thursday 29",
		treatment: "Scar Revision",
		type: "red",
		avatar: "/avatars/avatar11.jpg",
		duration: 45,
	},
	{
		name: "William Anderson",
		time: "2:00 PM",
		day: "Friday 30",
		treatment: "Chemical Peel",
		type: "green",
		avatar: "/avatars/avatar12.jpg",
		duration: 15,
	},

	// Week 3: Monday 2 – Friday 6 (June)
	{
		name: "James Thomas",
		time: "9:00 AM",
		day: "Monday 2",
		treatment: "Botox",
		type: "red",
		avatar: "/avatars/avatar13.jpg",
		duration: 60,
	},
	{
		name: "Sophia Martinez",
		time: "9:00 AM",
		day: "Monday 2",
		treatment: "Consultation",
		type: "green",
		avatar: "/avatars/avatar14.jpg",
		duration: 30,
	},
	{
		name: "Benjamin Moore",
		time: "1:45 PM",
		day: "Wednesday 4",
		treatment: "Hair Removal",
		type: "green",
		avatar: "/avatars/avatar15.jpg",
		duration: 15,
	},
	{
		name: "Mia Taylor",
		time: "2:15 PM",
		day: "Wednesday 4",
		treatment: "Anti-aging",
		type: "red",
		avatar: "/avatars/avatar16.jpg",
		duration: 60,
	},
	{
		name: "Ethan Clark",
		time: "3:00 PM",
		day: "Friday 6",
		treatment: "Fillers",
		type: "red",
		avatar: "/avatars/avatar17.jpg",
		duration: 30,
	},
];

const Schedule = () => {
	const [weekOffset, setWeekOffset] = useState(0);
	const days = getWeekDays(weekOffset);
	const currentTime = new Date();
	const currentDayLabel = format(currentTime, "EEEE d");
	const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
	const getRingColor = (type: string) => {
		return type === "green" ? "hover:ring-green-400" : "hover:ring-red-400";
	};
	``;
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className="w-full">
				<div className="mb-4 flex items-center gap-3">
					<label className="text-sm font-semibold">Select Week:</label>
					<select
						className="border px-2 py-1 rounded-xl text-sm"
						value={weekOffset}
						onChange={(e) => setWeekOffset(Number(e.target.value))}
					>
						<option value={0}>This Week</option>
						<option value={-1}>Last Week</option>
						<option value={+1}>Next Week</option>
					</select>
				</div>
				<div className="p-4">
					<button
						onClick={() => setOpen(true)}
						className="bg-green-100 text-green-700 px-4 py-2 rounded-full"
					>
						Synthetic
					</button>
					<SyntheticDialog isOpen={open} onClose={() => setOpen(false)} />
				</div>
				{/* Header row */}
				<div
					className={`grid grid-cols-[100px_repeat(7,minmax(0,1fr))] mb-2 gap-1`}
				>
					<div className="text-sm text-center p-4 font-medium text-gray-600 bg-slate-200 border rounded-xl">
						UTC +7
					</div>
					{days.map((day) => {
						const [weekday, date] = day.split(" ");
						const isToday = currentDayLabel === day;
						return (
							<div
								key={day}
								className={`text-center p-2 rounded-xl border shadow-md font-semibold ${
									isToday ? "bg-green-100 border-green-300" : "bg-white"
								}`}
							>
								<p className="text-sm">{weekday}</p>
								<p className="text-xs text-gray-500">{date}</p>
							</div>
						);
					})}
				</div>
				{/* Schedule grid */}
				<div className="rounded-3xl overflow-hidden border shadow-xl">
					{hours.map((hour) => {
						const hourStart = timeToMinutes(hour);
						const isCurrentHour =
							currentMinutes >= hourStart && currentMinutes < hourStart + 60;

						return (
							<div
								key={hour}
								className={`grid grid-cols-[100px_repeat(7,minmax(0,1fr))] text-sm relative ${
									isCurrentHour ? "bg-yellow-50" : ""
								}`}
							>
								<div className="p-3 text-center bg-gray-50 text-gray-600 font-semibold">
									{hour}
								</div>

								{days.map((dayLabel) => {
									const cellAppointments = allAppointments.filter(
										(a) =>
											a.day === dayLabel &&
											timeToMinutes(a.time) >= hourStart &&
											timeToMinutes(a.time) < hourStart + 60,
									);

									return (
										<div
											key={dayLabel}
											className="border-b relative h-28 bg-white"
											style={{
												height: `${hourBlockHeight}px`,
												overflowY: "visible",
											}} // 👈 tăng chiều cao, cho phép tràn ra
										>
											{cellAppointments.map((appt, index) => {
												const start = timeToMinutes(appt.time);
												const offsetTop =
													((start - hourStart) / 60) * hourBlockHeight;
												const height =
													((appt.duration / 60) * hourBlockHeight, 60);
												const total = cellAppointments.length;
												const widthPercent = 100 / total;
												const leftPercent = index * widthPercent;

												return (
													<div
														key={index}
														className={`absolute rounded-xl shadow-md p-2 text-xs bg-gradient-to-r ${getColor(
															appt.type,
														)} overflow-hidden 
  transition-all duration-200 ease-in-out 
  hover:shadow-2xl hover:z-[999] hover:ring-2 hover:ring-offset-1 ${getRingColor(
		appt.type,
	)}`}
														style={{
															top: `${offsetTop}%`,
															height: `max(${height}%, 60px)`,
															width: `calc(${widthPercent}% - 4px)`,
															left: `calc(${leftPercent}% + 2px)`,
															zIndex: 10 + index,
														}}
													>
														<p className="font-semibold text-gray-800 truncate">
															{appt.name}
														</p>
														<p className="text-gray-600 text-xs truncate">
															{appt.treatment}
														</p>
														<p className="text-gray-500 text-xs truncate">
															{appt.time}
														</p>
													</div>
												);
											})}
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Schedule;
