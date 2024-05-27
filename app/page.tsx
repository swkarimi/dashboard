import { BarChart } from "@/components/BarChart"
import { Header } from "@/components/Header"
import { Cards } from "@/components/cards/Cards"

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header title="داشبورد" name="محمد" />
      <Cards />
      <div className="p-4 grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <BarChart title="فروش انبار دو" data={[34, 21, 56, 12, 67, 82, 51]} />
        </div>
        <div className="border">2</div>
      </div>
    </main>
  )
}
