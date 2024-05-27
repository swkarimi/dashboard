import { Header } from "@/components/Header"
import { Cards } from "@/components/cards/Cards"

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header title="داشبورد" name="محمد" />
      <Cards />
    </main>
  )
}
