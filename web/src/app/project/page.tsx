// Placeholder data - will be replaced with data from JSON
const projects = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge research project on advanced time-series forecasting methods.',
    status: 'Active',
    year: '2024',
  },
  {
    title: 'Project Beta',
    description: 'Developing efficient transformer architectures for long sequence modeling.',
    status: 'Active',
    year: '2024',
  },
  {
    title: 'Project Gamma',
    description: 'Industry collaboration on applying ML to real-world problems.',
    status: 'Completed',
    year: '2023',
  },
  {
    title: 'Project Delta',
    description: 'Exploring novel neural network architectures for temporal data.',
    status: 'Active',
    year: '2024',
  },
]

export default function Project() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
            Projects
          </h1>
          <p className="mt-6 text-lg leading-8 text-on-surface-variant">
            Ongoing and completed research projects in our lab.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="rounded-2xl bg-surface-container p-8 ring-1 ring-outline-variant hover:ring-primary transition"
            >
              <div className="flex items-center justify-between gap-x-4">
                <span className="text-sm text-on-surface-variant">{project.year}</span>
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    project.status === 'Active'
                      ? 'bg-tertiary-container text-on-tertiary-container'
                      : 'bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-on-surface">{project.title}</h3>
              <p className="mt-2 text-on-surface-variant">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
