import Navbar from '@/components/Navbar'
import BentoGrid from '@/components/BentoGrid'

// Placeholder data - will be replaced with data from JSON
const homeBentoItems = [
  {
    title: 'Research Excellence',
    subtitle: 'Our Focus',
    description: 'We are dedicated to advancing the field of machine learning and artificial intelligence through innovative research.',
    colSpan: 3,
  },
  {
    title: 'Latest Publications',
    subtitle: 'Recent Work',
    description: 'Explore our recent publications in top-tier conferences and journals.',
    colSpan: 3,
  },
  {
    title: 'Open Source',
    subtitle: 'Resources',
    description: 'We share our code and datasets with the community.',
    colSpan: 2,
  },
  {
    title: 'Collaborations',
    subtitle: 'Partners',
    description: 'Working with leading institutions worldwide.',
    colSpan: 2,
  },
  {
    title: 'Join Us',
    subtitle: 'Opportunities',
    description: 'We are always looking for talented researchers and students.',
    colSpan: 2,
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-surface-container py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-on-surface sm:text-6xl">
                Welcome to TIME Lab
              </h1>
              <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                Time-series Intelligence and Machine learning Excellence Laboratory
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid Section */}
        <BentoGrid
          headline="What We Do"
          title="Advancing AI Research"
          items={homeBentoItems}
        />
      </main>
    </>
  )
}
