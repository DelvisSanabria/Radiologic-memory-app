"use client"

import { useState } from "react"
import ProjectionCard from "./ProjectionCard"

export default function StudiesByLabel({ projections }) {
  const [selectedLabel, setSelectedLabel] = useState("All")

  const allLabels = projections.flatMap((p) => p.labels)
  const uniqueLabels = ["All", ...new Set(allLabels)]

  const filteredProjections =
    selectedLabel === "All" ? projections : projections.filter((p) => p.labels.includes(selectedLabel))

  return (
    <div>
      <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
        {uniqueLabels.map((label) => (
          <button
            key={label}
            onClick={() => setSelectedLabel(label)}
            className={`px-4 py-2 rounded-full ${
              selectedLabel === label ? "bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900" : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
            }`}
          >
            {label}
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

