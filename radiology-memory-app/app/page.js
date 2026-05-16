import { Suspense } from "react"
import ProjectionSlider from "./components/ProjectionSlider"
import CarouselSection from "./components/CarouselSection"
import Loading from "./components/Loading"
import { getProjections } from "./lib/api"

export default async function Home() {
  const projections = await getProjections()

  const systems = ["All", ...new Set(projections.map((p) => p.system))]
  const labels = ["All", ...new Set(projections.flatMap((p) => p.labels))]
  const zones = ["All", ...new Set(projections.map((p) => p.anatomicalZone))]

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Radiological Projections Review</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Studies</h2>
        <Suspense fallback={<Loading />}>
          <ProjectionSlider initialProjections={projections} />
        </Suspense>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Studies by System</h2>
        <Suspense fallback={<Loading />}>
          <CarouselSection
            title="System"
            items={projections}
            filterOptions={{
              key: "system",
              options: systems,
            }}
          />
        </Suspense>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Studies by Label</h2>
        <Suspense fallback={<Loading />}>
          <CarouselSection
            title="Label"
            items={projections}
            filterOptions={{
              key: "labels",
              options: labels,
            }}
          />
        </Suspense>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Studies by Anatomical Zone</h2>
        <Suspense fallback={<Loading />}>
          <CarouselSection
            title="Anatomical Zone"
            items={projections}
            filterOptions={{
              key: "anatomicalZone",
              options: zones,
            }}
          />
        </Suspense>
      </section>
    </main>
  )
}

