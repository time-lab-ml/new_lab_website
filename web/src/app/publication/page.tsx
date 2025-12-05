import publicationData from '@/data/publication.json'

const { publications } = publicationData

export default function Publication() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
            Publications
          </h1>
          <p className="mt-6 text-lg leading-8 text-on-surface-variant">
            Our research publications in top-tier conferences and journals.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <article
                key={index}
                className="rounded-2xl bg-surface-container p-8 hover:bg-surface-container-high transition"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="text-on-surface-variant">{pub.year}</span>
                  <span className="rounded-full bg-primary-container px-3 py-1.5 font-medium text-on-primary-container">
                    {pub.venue}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-on-surface">
                    <a href={pub.link}>
                      <span className="absolute inset-0" />
                      {pub.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                    {pub.authors}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
