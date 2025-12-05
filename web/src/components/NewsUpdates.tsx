interface NewsItem {
  title: string
  date: string
  description: string
  category?: string
  link?: string
}

interface NewsUpdatesProps {
  headline?: string
  title: string
  items: NewsItem[]
}

export default function NewsUpdates({ headline, title, items }: NewsUpdatesProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div className="bg-surface-container py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {headline && (
          <h2 className="text-base/7 font-semibold text-tertiary">{headline}</h2>
        )}
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-on-surface sm:text-5xl">
          {title}
        </p>
        <div className="mt-10 sm:mt-16">
          <div className="space-y-6">
            {items.map((item, index) => (
              <article
                key={index}
                className="relative flex flex-col gap-4 rounded-2xl bg-surface-container-low p-6 shadow-sm outline outline-black/5 transition-colors hover:bg-surface-container-lowest sm:flex-row sm:items-start sm:gap-8"
              >
                <div className="flex shrink-0 flex-col items-start gap-2 sm:w-32">
                  <time
                    dateTime={item.date}
                    className="text-sm font-medium text-on-surface-variant"
                  >
                    {formatDate(item.date)}
                  </time>
                  {item.category && (
                    <span className="inline-flex items-center rounded-full bg-tertiary-container px-3 py-1 text-xs font-medium text-on-tertiary-container">
                      {item.category}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-on-surface">
                    {item.link ? (
                      <a href={item.link} className="hover:text-primary">
                        {item.title}
                        <span className="absolute inset-0" />
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="mt-2 text-sm/6 text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
                {item.link && (
                  <div className="hidden shrink-0 sm:block">
                    <svg
                      className="h-5 w-5 text-on-surface-variant"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
