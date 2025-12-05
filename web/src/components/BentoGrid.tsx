interface BentoItem {
  title: string
  subtitle: string
  description: string
  imageUrl?: string
  colSpan?: number
}

interface BentoGridProps {
  headline?: string
  title: string
  items: BentoItem[]
}

export default function BentoGrid({ headline, title, items }: BentoGridProps) {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {headline && (
          <h2 className="text-base/7 font-semibold text-primary">{headline}</h2>
        )}
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-on-surface sm:text-5xl">
          {title}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {items.map((item, index) => {
            const colSpanClass = item.colSpan === 2 ? 'lg:col-span-2' : 'lg:col-span-3'
            const isTopLeft = index === 0
            const isTopRight = index === 1
            const isBottomLeft = index === 2
            const isBottomRight = index === items.length - 1 && items.length > 3

            let roundedClass = ''
            if (isTopLeft) roundedClass = 'max-lg:rounded-t-4xl lg:rounded-tl-4xl'
            else if (isTopRight) roundedClass = 'lg:rounded-tr-4xl'
            else if (isBottomLeft) roundedClass = 'lg:rounded-bl-4xl'
            else if (isBottomRight) roundedClass = 'max-lg:rounded-b-4xl lg:rounded-br-4xl'

            return (
              <div key={index} className={`relative ${colSpanClass}`}>
                <div className={`absolute inset-0 rounded-lg bg-surface-container ${roundedClass}`} />
                <div className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ${roundedClass.replace('4xl', '[calc(2rem+1px)]')}`}>
                  {item.imageUrl && (
                    <img
                      alt={item.title}
                      src={item.imageUrl}
                      className="h-80 object-cover object-left"
                    />
                  )}
                  <div className="p-10 pt-4">
                    <h3 className="text-sm/4 font-semibold text-primary">{item.subtitle}</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-on-surface">
                      {item.title}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-on-surface-variant">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className={`pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 ${roundedClass}`} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
