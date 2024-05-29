import { Header } from "@/components/Header"
import { TabSwitcher } from "@/components/TabSwitcher"
import { Cards } from "@/components/cards/Cards"
import { RecentOrders } from "@/components/orders/RecentOrders"
import { tabsData } from "@/data/data"

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header title="داشبورد" name="محمد" />
      <Cards />
      <div className="p-4 grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <TabSwitcher tabs={tabsData} />
        </div>
        <RecentOrders />
      </div>
    </main>
  )
}
