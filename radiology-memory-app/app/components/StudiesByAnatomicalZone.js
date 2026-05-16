"use client"

import { useState } from "react"
import ProjectionCard from "./ProjectionCard"

export default function StudiesByAnatomicalZone({ projections }) {
  const [selectedZone, setSelectedZone] = useState("All")

  const zones = ["All", ...new Set(projections.map((p) => p.anatomicalZone))]

  const filteredProjections =
    selectedZone === "All" ? projections : projections.filter((p) => p.anatomicalZone === selectedZone)

  return (
    <div>
      <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
        {zones.map((zone) => (
          <button
            key={zone}
            onClick={() => setSelectedZone(zone)}
            className={`px-4 py-2 rounded-full ${
              selectedZone === zone ? "bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900" : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
            }`}
          >
            {zone}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjections.map((projection) => (
          <ProjectionCard key={projection.id} projection={projection} />
        ))}
      </div>
    </div>
  )
}

