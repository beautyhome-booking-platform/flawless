import Layout from './components/Layout'
import SearchFilterBar from './components/SearchFilterBar'
import CustomerTable from './components/CustomerTable'

export default function App() {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      <Layout>
        <SearchFilterBar />
        <CustomerTable />
      </Layout>
    </div>
  )
}
