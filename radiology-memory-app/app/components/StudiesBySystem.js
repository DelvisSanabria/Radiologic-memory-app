"use client"

import { useState } from "react"
import ProjectionCard from "./ProjectionCard"

export default function StudiesBySystem({ projections }) {
  const [selectedSystem, setSelectedSystem] = useState("All")

  const systems = ["All", ...new Set(projections.map((p) => p.system))]

  const filteredProjections =
    selectedSystem === "All" ? projections : projections.filter((p) => p.system === selectedSystem)

  return (
    <div>
      <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
        {systems.map((system) => (
          <button
            key={system}
            onClick={() => setSelectedSystem(system)}
            className={`px-4 py-2 rounded-full ${
              selectedSystem === system
                ? "bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900"
                : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
            }`}
          >
            {system}
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

