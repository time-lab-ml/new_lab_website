import BentoGrid from '@/components/BentoGrid'
import NewsUpdates from '@/components/NewsUpdates'
import homeData from '@/data/home.json'

const { hero, bentoGrid, newsUpdates } = homeData

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="bg-surface-container py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-on-surface sm:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-on-surface-variant">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Bento Grid Section */}
      <BentoGrid
        headline={bentoGrid.headline}
        title={bentoGrid.title}
        items={bentoGrid.items}
      />

      {/* News Updates Section */}
      <NewsUpdates
        headline={newsUpdates.headline}
        title={newsUpdates.title}
        items={newsUpdates.items}
      />
    </div>
  )
}
