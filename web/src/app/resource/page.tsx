import Navbar from '@/components/Navbar'

// Placeholder data - will be replaced with data from JSON
const resources = [
  {
    title: 'Time-Series Dataset Collection',
    description: 'A curated collection of time-series datasets for benchmarking.',
    type: 'Dataset',
    link: '#',
  },
  {
    title: 'ML Model Zoo',
    description: 'Pre-trained models for various machine learning tasks.',
    type: 'Model',
    link: '#',
  },
  {
    title: 'Research Code Repository',
    description: 'Open-source implementations of our published research.',
    type: 'Code',
    link: '#',
  },
  {
    title: 'Tutorial Series',
    description: 'Educational materials and tutorials on ML topics.',
    type: 'Tutorial',
    link: '#',
  },
]

export default function Resource() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
              Resources
            </h1>
            <p className="mt-6 text-lg leading-8 text-on-surface-variant">
              Datasets, code, and educational materials from our lab.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="rounded-2xl bg-surface-container p-8 hover:bg-surface-container-high transition"
              >
                <div className="flex items-center gap-x-4">
                  <span className="rounded-full bg-secondary-container px-3 py-1 text-sm font-medium text-on-secondary-container">
                    {resource.type}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-on-surface">
                  <a href={resource.link} className="hover:text-primary">
                    {resource.title}
                  </a>
                </h3>
                <p className="mt-2 text-on-surface-variant">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
