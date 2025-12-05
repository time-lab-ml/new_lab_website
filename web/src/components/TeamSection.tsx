interface TeamMember {
  name: string
  role: string
  imageUrl: string
}

interface TeamSectionProps {
  title: string
  description?: string
  members: TeamMember[]
}

export default function TeamSection({ title, description, members }: TeamSectionProps) {
  return (
    <div className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-on-surface sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg/8 text-on-surface-variant">
              {description}
            </p>
          )}
        </div>
        <ul
          role="list"
          className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {members.map((person) => (
            <li key={person.name}>
              <img
                alt={person.name}
                src={person.imageUrl}
                className="mx-auto size-24 rounded-full outline-1 -outline-offset-1 outline-outline-variant"
              />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-on-surface">
                {person.name}
              </h3>
              <p className="text-sm/6 text-on-surface-variant">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
