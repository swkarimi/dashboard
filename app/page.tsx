import { Header } from "@/components/Header"
import { TabSwitcher } from "@/components/TabSwitcher"
import { Cards } from "@/components/cards/Cards"
import { RecentOrders } from "@/components/orders/RecentOrders"
import { tabsData } from "@/data/data"

export default function HomePage() {
  return (
    <>
      <Header title="داشبورد" name="محمد" />
      <Cards />
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <TabSwitcher tabs={tabsData} />
        </div>
        <RecentOrders />
      </div>
    </>
  )
}
