interface SidebarNavItemProps {
  icon: string
  label: string
  active?: boolean
  badge?: number
  regular?: boolean
}

export default function SidebarNavItem({ icon, label, active, badge, regular }: SidebarNavItemProps) {
  const iconClass = `${regular ? 'fa-regular' : 'fa-solid'} ${icon}`
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-4 py-2 rounded-lg relative ${
        active
          ? 'bg-green-50 text-green-700 font-semibold'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <i className={iconClass}></i> {label}
      {badge && (
        <span className="absolute right-4 top-2 bg-red-400 text-white text-xs rounded-full px-2">
          {badge}
        </span>
      )}
    </a>
  )
} 