import { useState } from 'react'
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import CustomerTableRow from './CustomerTableRow'
import Pagination from './Pagination'

const customers = [
  {
    id: 'CU-001',
    name: 'Sarah Miller',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    datetime: '2028-09-12 - 09:00 AM',
    artist: 'Dr. Olivia Grant',
    service: 'Facial Rejuvenation',
    status: 'Completed',
  },
  {
    id: 'CU-002',
    name: 'James Wilson',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    datetime: '2028-09-12 - 10:30 AM',
    artist: 'Dr. Michael Chen',
    service: 'Laser Hair Removal',
    status: 'Scheduled',
  },
  {
    id: 'CU-003',
    name: 'Emma Thompson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    datetime: '2028-09-12 - 11:15 AM',
    artist: 'Dr. Sophia Lee',
    service: 'Botox Treatment',
    status: 'In Progress',
  },
  {
    id: 'CU-004',
    name: 'David Kim',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    datetime: '2028-09-12 - 01:00 PM',
    artist: 'Dr. Olivia Grant',
    service: 'Chemical Peel',
    status: 'Completed',
  },
  {
    id: 'CU-005',
    name: 'Maria Garcia',
    avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    datetime: '2028-09-12 - 02:30 PM',
    artist: 'Dr. Michael Chen',
    service: 'Dermal Fillers',
    status: 'Scheduled',
  },
  {
    id: 'CU-006',
    name: 'Robert Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    datetime: '2028-09-12 - 03:45 PM',
    artist: 'Dr. Sophia Lee',
    service: 'Microdermabrasion',
    status: 'In Progress',
  },
  {
    id: 'CU-007',
    name: 'Lisa Anderson',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    datetime: '2028-09-13 - 09:30 AM',
    artist: 'Dr. Olivia Grant',
    service: 'Skin Tightening',
    status: 'Completed',
  },
  {
    id: 'CU-008',
    name: 'Thomas Brown',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    datetime: '2028-09-13 - 10:45 AM',
    artist: 'Dr. Michael Chen',
    service: 'Acne Treatment',
    status: 'Scheduled',
  },
  {
    id: 'CU-009',
    name: 'Jennifer Lee',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    datetime: '2028-09-13 - 11:30 AM',
    artist: 'Dr. Sophia Lee',
    service: 'Facial Rejuvenation',
    status: 'In Progress',
  },
  {
    id: 'CU-010',
    name: 'William Taylor',
    avatar: 'https://randomuser.me/api/portraits/men/89.jpg',
    datetime: '2028-09-13 - 01:15 PM',
    artist: 'Dr. Olivia Grant',
    service: 'Laser Hair Removal',
    status: 'Completed',
  },
  {
    id: 'CU-011',
    name: 'Sophia Martinez',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    datetime: '2028-09-13 - 02:00 PM',
    artist: 'Dr. Michael Chen',
    service: 'Botox Treatment',
    status: 'Scheduled',
  },
  {
    id: 'CU-012',
    name: 'Daniel White',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    datetime: '2028-09-13 - 03:30 PM',
    artist: 'Dr. Sophia Lee',
    service: 'Chemical Peel',
    status: 'In Progress',
  },
  {
    id: 'CU-013',
    name: 'Olivia Davis',
    avatar: 'https://randomuser.me/api/portraits/women/77.jpg',
    datetime: '2028-09-14 - 09:15 AM',
    artist: 'Dr. Olivia Grant',
    service: 'Dermal Fillers',
    status: 'Completed',
  },
  {
    id: 'CU-014',
    name: 'Christopher Lee',
    avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
    datetime: '2028-09-14 - 10:00 AM',
    artist: 'Dr. Michael Chen',
    service: 'Microdermabrasion',
    status: 'Scheduled',
  },
  {
    id: 'CU-015',
    name: 'Amanda Wilson',
    avatar: 'https://randomuser.me/api/portraits/women/88.jpg',
    datetime: '2028-09-14 - 11:45 AM',
    artist: 'Dr. Sophia Lee',
    service: 'Skin Tightening',
    status: 'In Progress',
  },
  {
    id: 'CU-016',
    name: 'Matthew Clark',
    avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
    datetime: '2028-09-14 - 01:30 PM',
    artist: 'Dr. Olivia Grant',
    service: 'Acne Treatment',
    status: 'Completed',
  },
  {
    id: 'CU-017',
    name: 'Isabella Rodriguez',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    datetime: '2028-09-14 - 02:15 PM',
    artist: 'Dr. Michael Chen',
    service: 'Facial Rejuvenation',
    status: 'Scheduled',
  },
  {
    id: 'CU-018',
    name: 'Andrew Thompson',
    avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
    datetime: '2028-09-14 - 03:00 PM',
    artist: 'Dr. Sophia Lee',
    service: 'Laser Hair Removal',
    status: 'In Progress',
  },
  {
    id: 'CU-019',
    name: 'Emily Parker',
    avatar: 'https://randomuser.me/api/portraits/women/66.jpg',
    datetime: '2028-09-15 - 09:45 AM',
    artist: 'Dr. Olivia Grant',
    service: 'Botox Treatment',
    status: 'Completed',
  },
  {
    id: 'CU-020',
    name: 'Ryan Anderson',
    avatar: 'https://randomuser.me/api/portraits/men/91.jpg',
    datetime: '2028-09-15 - 10:30 AM',
    artist: 'Dr. Michael Chen',
    service: 'Chemical Peel',
    status: 'Scheduled',
  }
]

export default function CustomerTable() {
  const search = useSelector((state: RootState) => state.search.search);
  const date = useSelector((state: RootState) => state.search.date);
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  // Lọc dữ liệu theo search (tên customer hoặc artist) và ngày tháng năm
  const filteredCustomers = customers.filter(
    c =>
      (c.name.toLowerCase().includes(search.toLowerCase()) ||
       c.artist.toLowerCase().includes(search.toLowerCase())) &&
      (date === '' || c.datetime.slice(0, 10) === date)
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredCustomers.slice(indexOfFirstItem, indexOfLastItem)
  const totalItems = filteredCustomers.length

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage)
    setCurrentPage(1) // Reset to first page when changing items per page
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm overflow-x-auto w-full max-w-[100vw]">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-400 text-left border-b">
              <th className="py-3 px-4 font-normal">Customer ID</th>
              <th className="py-3 px-4 font-normal">Name</th>
              <th className="py-3 px-4 font-normal">Date & Time</th>
              <th className="py-3 px-4 font-normal">Artist</th>
              <th className="py-3 px-4 font-normal">Service</th>
              <th className="py-3 px-4 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-8 text-gray-400 font-semibold">
                  No matching results found
                </td>
              </tr>
            ) : (
              currentItems.map((c) => (
                <CustomerTableRow key={c.id} {...c} />
              ))
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </>
  )
} 