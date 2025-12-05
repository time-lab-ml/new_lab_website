import BentoGrid from '@/components/BentoGrid'
import NewsUpdates from '@/components/NewsUpdates'
import homeData from '@/data/home.json'

const { hero, bentoGrid, newsUpdates } = homeData

// 將標題中的 TIME 變成主題色
function formatHeroTitle(title: string) {
  const parts = title.split(/(TIME)/)
  return parts.map((part, index) =>
    part === 'TIME' ? (
      <span key={index} className="text-primary">
        {part}
      </span>
    ) : (
      part
    )
  )
}

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="bg-surface-container py-24 sm:py-32 relative overflow-hidden">
        {/* 左側交纏曲線 - 四條，從左中到中上 */}
        <svg
          className="absolute left-0 top-0 w-1/2 h-full pointer-events-none"
          viewBox="0 0 400 300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient-left-1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cd0a02" />
              <stop offset="100%" stopColor="#2596be" />
            </linearGradient>
            <linearGradient id="gradient-left-2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2596be" />
              <stop offset="100%" stopColor="#cd0a02" />
            </linearGradient>
            <linearGradient id="gradient-left-3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cd0a02" />
              <stop offset="50%" stopColor="#2596be" />
              <stop offset="100%" stopColor="#cd0a02" />
            </linearGradient>
            <linearGradient id="gradient-left-4" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2596be" />
              <stop offset="50%" stopColor="#cd0a02" />
              <stop offset="100%" stopColor="#2596be" />
            </linearGradient>
          </defs>
          <path
            d="M0,150 Q100,180 200,100 T400,30"
            fill="none"
            stroke="url(#gradient-left-1)"
            strokeWidth="2"
            className="curve-animate-1"
            opacity="0.7"
          />
          <path
            d="M0,160 Q120,130 220,80 T400,20"
            fill="none"
            stroke="url(#gradient-left-2)"
            strokeWidth="2"
            className="curve-animate-2"
            opacity="0.6"
          />
          <path
            d="M0,170 Q80,200 180,120 T400,40"
            fill="none"
            stroke="url(#gradient-left-3)"
            strokeWidth="2"
            className="curve-animate-3"
            opacity="0.5"
          />
          <path
            d="M0,180 Q140,150 240,90 T400,50"
            fill="none"
            stroke="url(#gradient-left-4)"
            strokeWidth="2"
            className="curve-animate-4"
            opacity="0.6"
          />
        </svg>

        {/* 左側交纏曲線複製 - 四條，從左中到中下（上下顛倒） */}
        <svg
          className="absolute left-0 top-0 w-1/2 h-full pointer-events-none"
          viewBox="0 0 400 300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient-left-5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cd0a02" />
              <stop offset="100%" stopColor="#2596be" />
            </linearGradient>
            <linearGradient id="gradient-left-6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2596be" />
              <stop offset="100%" stopColor="#cd0a02" />
            </linearGradient>
            <linearGradient id="gradient-left-7" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cd0a02" />
              <stop offset="50%" stopColor="#2596be" />
              <stop offset="100%" stopColor="#cd0a02" />
            </linearGradient>
            <linearGradient id="gradient-left-8" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2596be" />
              <stop offset="50%" stopColor="#cd0a02" />
              <stop offset="100%" stopColor="#2596be" />
            </linearGradient>
          </defs>
          <path
            d="M0,150 Q100,120 200,200 T400,270"
            fill="none"
            stroke="url(#gradient-left-5)"
            strokeWidth="2"
            className="curve-animate-1"
            opacity="0.7"
          />
          <path
            d="M0,140 Q120,170 220,220 T400,280"
            fill="none"
            stroke="url(#gradient-left-6)"
            strokeWidth="2"
            className="curve-animate-2"
            opacity="0.6"
          />
          <path
            d="M0,130 Q80,100 180,180 T400,260"
            fill="none"
            stroke="url(#gradient-left-7)"
            strokeWidth="2"
            className="curve-animate-3"
            opacity="0.5"
          />
          <path
            d="M0,120 Q140,150 240,210 T400,250"
            fill="none"
            stroke="url(#gradient-left-8)"
            strokeWidth="2"
            className="curve-animate-4"
            opacity="0.6"
          />
        </svg>

        {/* 右側交纏曲線 - 三條，從右中到中下 */}
        <svg
          className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
          viewBox="0 0 400 300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient-right-1" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2596be" />
              <stop offset="100%" stopColor="#cd0a02" />
            </linearGradient>
            <linearGradient id="gradient-right-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#cd0a02" />
              <stop offset="100%" stopColor="#2596be" />
            </linearGradient>
            <linearGradient id="gradient-right-3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2596be" />
              <stop offset="50%" stopColor="#cd0a02" />
              <stop offset="100%" stopColor="#2596be" />
            </linearGradient>
          </defs>
          <path
            d="M400,150 Q300,120 200,200 T0,270"
            fill="none"
            stroke="url(#gradient-right-1)"
            strokeWidth="2"
            className="curve-animate-1"
            opacity="0.7"
          />
          <path
            d="M400,140 Q280,170 180,220 T0,280"
            fill="none"
            stroke="url(#gradient-right-2)"
            strokeWidth="2"
            className="curve-animate-2"
            opacity="0.6"
          />
          <path
            d="M400,160 Q320,140 220,210 T0,260"
            fill="none"
            stroke="url(#gradient-right-3)"
            strokeWidth="2"
            className="curve-animate-3"
            opacity="0.5"
          />
        </svg>

        {/* 右側交纏曲線複製 - 三條，從右中到中上（上下顛倒） */}
        <svg
          className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
          viewBox="0 0 400 300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient-right-4" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#2596be" />
              <stop offset="100%" stopColor="#cd0a02" />
            </linearGradient>
            <linearGradient id="gradient-right-5" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#cd0a02" />
              <stop offset="100%" stopColor="#2596be" />
            </linearGradient>
            <linearGradient id="gradient-right-6" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#2596be" />
              <stop offset="50%" stopColor="#cd0a02" />
              <stop offset="100%" stopColor="#2596be" />
            </linearGradient>
          </defs>
          <path
            d="M400,150 Q300,180 200,100 T0,30"
            fill="none"
            stroke="url(#gradient-right-4)"
            strokeWidth="2"
            className="curve-animate-1"
            opacity="0.7"
          />
          <path
            d="M400,160 Q280,130 180,80 T0,20"
            fill="none"
            stroke="url(#gradient-right-5)"
            strokeWidth="2"
            className="curve-animate-2"
            opacity="0.6"
          />
          <path
            d="M400,140 Q320,160 220,90 T0,40"
            fill="none"
            stroke="url(#gradient-right-6)"
            strokeWidth="2"
            className="curve-animate-3"
            opacity="0.5"
          />
        </svg>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-on-surface sm:text-6xl">
              {formatHeroTitle(hero.title)}
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
