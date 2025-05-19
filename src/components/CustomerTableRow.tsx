interface CustomerTableRowProps {
  id: string
  name: string
  avatar: string
  datetime: string
  artist: string
  service: string
  status: string
}

export default function CustomerTableRow({
  id,
  name,
  avatar,
  datetime,
  artist,
  service,
  status,
}: CustomerTableRowProps) {
  return (
    
    <tr className="border-b hover:bg-gray-50">
      <td className="py-3 px-4">{id}</td>
      <td className="py-3 px-4 flex items-center gap-2">
        <img src={avatar} className="w-8 h-8 rounded-full" />
        {name}
      </td>
      <td className="py-3 px-4">{datetime}</td>
      <td className="py-3 px-4">{artist}</td>
      <td className="py-3 px-4">{service}</td>
      <td className="py-3 px-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          status === 'Completed' 
            ? 'bg-green-100 text-green-700'
            : status === 'In Progress'
              ? 'bg-red-100 text-orange-700'
              : 'bg-gray-100 text-gray-700'
        }`}>
          {status}
        </span>
      </td>
    </tr>
  )
} 