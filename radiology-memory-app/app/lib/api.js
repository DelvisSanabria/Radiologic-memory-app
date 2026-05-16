let projections = [
  {
    id: 1,
    title: "Chest X-ray PA View",
    description: "Posterior-anterior chest X-ray showing normal lung fields and heart size.",
    images: [
      "/placeholder.svg?height=500&width=400&text=Chest+X-ray+1",
      "/placeholder.svg?height=500&width=400&text=Chest+X-ray+2",
      "/placeholder.svg?height=500&width=400&text=Chest+X-ray+3",
    ],
    projectionName: "PA Chest",
    anatomicalZone: "Thorax",
    labels: ["Lungs", "Heart", "Ribs"],
    system: "Respiratory",
    date: "2023-05-15",
    extendedInfo: [
      "Used to assess heart size and shape",
      "Evaluates lung fields for abnormalities",
      "Can detect rib fractures or other bone abnormalities",
      "Helps in diagnosing pneumonia, lung cancer, and other chest conditions",
      "Typically performed with the patient standing upright",
    ],
  },
  {
    id: 2,
    title: "Lateral Skull X-ray",
    description: "Lateral view of the skull demonstrating normal cranial bones and sinuses.",
    images: [
      "/placeholder.svg?height=500&width=400&text=Skull+X-ray+1",
      "/placeholder.svg?height=500&width=400&text=Skull+X-ray+2",
    ],
    projectionName: "Lateral Skull",
    anatomicalZone: "Head",
    labels: ["Skull", "Sinuses"],
    system: "Nervous",
    date: "2023-05-14",
    extendedInfo: [
      "Provides a side view of the skull",
      "Useful for evaluating skull fractures",
      "Can show sinus diseases and abnormalities",
      "Helps in identifying intracranial calcifications",
      "Often used in conjunction with PA view for comprehensive skull assessment",
    ],
  },
  {
    id: 3,
    title: "Abdominal CT Scan",
    description: "Axial CT image of the abdomen showing normal liver, spleen, and kidneys.",
    images: [
      "/placeholder.svg?height=500&width=400&text=Abdominal+CT+1",
      "/placeholder.svg?height=500&width=400&text=Abdominal+CT+2",
    ],
    projectionName: "Abdominal CT",
    anatomicalZone: "Abdomen",
    labels: ["Liver", "Spleen", "Kidneys"],
    system: "Digestive",
    date: "2023-05-15",
    extendedInfo: [
      "Provides detailed cross-sectional images of abdominal organs",
      "Can detect tumors, infections, or other abnormalities in the abdomen",
      "Useful for diagnosing appendicitis, diverticulitis, and other abdominal conditions",
      "Often used with contrast material for enhanced visualization",
      "Helps in staging abdominal cancers and planning treatments",
    ],
  },
  {
    id: 4,
    title: "MRI Brain Scan",
    description: "Sagittal T1-weighted MRI of the brain demonstrating normal structures.",
    images: [
      "/placeholder.svg?height=500&width=400&text=Brain+MRI+1",
      "/placeholder.svg?height=500&width=400&text=Brain+MRI+2",
      "/placeholder.svg?height=500&width=400&text=Brain+MRI+3",
    ],
    projectionName: "Brain MRI",
    anatomicalZone: "Head",
    labels: ["Brain"],
    system: "Nervous",
    date: "2023-05-16",
    extendedInfo: [
      "Provides detailed images of brain structures without radiation",
      "Useful for diagnosing brain tumors, strokes, and multiple sclerosis",
      "Can show brain activity in functional MRI studies",
      "Helps in evaluating brain development and aging",
      "Different sequences can highlight various types of tissues or abnormalities",
    ],
  },
  {
    id: 5,
    title: "Mammogram",
    description: "Craniocaudal view of a mammogram showing normal breast tissue.",
    images: [
      "/placeholder.svg?height=500&width=400&text=Mammogram+1",
      "/placeholder.svg?height=500&width=400&text=Mammogram+2",
    ],
    projectionName: "Mammogram",
    anatomicalZone: "Breast",
    labels: ["Breast Tissue"],
    system: "Reproductive",
    date: "2023-05-16",
    extendedInfo: [
      "Used for early detection of breast cancer",
      "Can detect small calcifications or masses in breast tissue",
      "Typically performed as a screening tool for women over 40",
      "Involves compressing the breast to obtain clear images",
      "Digital mammography allows for better image manipulation and storage",
    ],
  },
]

export async function getProjections(search = "") {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (search) {
    return projections.filter(
      (projection) =>
        projection.title.toLowerCase().includes(search.toLowerCase()) ||
        projection.description.toLowerCase().includes(search.toLowerCase()) ||
        projection.projectionName.toLowerCase().includes(search.toLowerCase()) ||
        projection.anatomicalZone.toLowerCase().includes(search.toLowerCase()) ||
        projection.system.toLowerCase().includes(search.toLowerCase()) ||
        projection.labels.some((label) => label.toLowerCase().includes(search.toLowerCase())) ||
        projection.extendedInfo.some((info) => info.toLowerCase().includes(search.toLowerCase())),
    )
  }

  return projections
}

export async function saveProjections(updatedProjections) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Update the projections array
  projections = updatedProjections

  // In a real application, you would save this data to a database
  console.log("Projections saved:", projections)

  return { success: true }
}

