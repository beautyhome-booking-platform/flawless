import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center mb-6">
      <h1 className="text-2xl font-bold">Customers</h1>
      <UserMenu/>
    </div>
  )
} 