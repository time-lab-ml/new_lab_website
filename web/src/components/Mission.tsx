interface StatItem {
  label: string
  value: string
}

interface MissionProps {
  headline: string
  title: string
  subtitle: string
  missionTitle: string
  missionContent: string[]
  stats?: StatItem[]
  images?: string[]
}

export default function Mission({
  headline,
  title,
  subtitle,
  missionTitle,
  missionContent,
  stats,
  images,
}: MissionProps) {
  return (
    <div className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-primary">{headline}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-on-surface sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-on-surface-variant">
            {subtitle}
          </p>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-on-surface">
              {missionTitle}
            </h2>
            {missionContent.map((paragraph, index) => (
              <p key={index} className="mt-6 text-base/7 text-on-surface-variant">
                {paragraph}
              </p>
            ))}
          </div>
          {images && images.length > 0 && (
            <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
              <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-outline-variant ${
                      index % 2 === 1 ? '-mt-8 lg:-mt-40' : ''
                    }`}
                  >
                    <img
                      alt=""
                      src={image}
                      className="block size-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {stats && stats.length > 0 && (
            <div className="max-lg:mt-16 lg:col-span-1">
              <p className="text-base/7 font-semibold text-on-surface-variant">The numbers</p>
              <hr className="mt-6 border-t border-outline-variant" />
              <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-y-2 border-b border-dotted border-outline-variant pb-4"
                  >
                    <dt className="text-sm/6 text-on-surface-variant">{stat.label}</dt>
                    <dd className="order-first text-6xl font-semibold tracking-tight text-on-surface">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
