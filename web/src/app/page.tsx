import BentoGrid from '@/components/BentoGrid'
import NewsUpdates from '@/components/NewsUpdates'

// Placeholder data - will be replaced with data from JSON
const homeNewsItems = [
  {
    title: 'Paper Accepted at NeurIPS 2025',
    date: '2025-12-01',
    description: 'Our latest research on temporal motion prediction has been accepted at NeurIPS 2025.',
    category: 'Publication',
    link: '/publication',
  },
  {
    title: 'New Lab Members Join TIME Lab',
    date: '2025-11-15',
    description: 'We welcome three new PhD students and two postdoctoral researchers to our team.',
    category: 'Team',
    link: '/team',
  },
  {
    title: 'Open Source Release: MotionNet v2.0',
    date: '2025-10-28',
    description: 'We have released the latest version of our motion extraction toolkit with improved performance and new features.',
    category: 'Resource',
    link: '/resource',
  },
  {
    title: 'Collaboration with Industry Partners',
    date: '2025-10-10',
    description: 'TIME Lab announces new research collaboration with leading tech companies in autonomous systems.',
    category: 'News',
  },
]

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
    <div className="bg-background">
      {/* Hero Section */}
      <div className="bg-surface-container py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-on-surface sm:text-6xl">
              Welcome to TIME Lab
            </h1>
            <p className="mt-6 text-lg leading-8 text-on-surface-variant">
              Temporal Intelligence and Motion Extraction Lab
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

      {/* News Updates Section */}
      <NewsUpdates
        headline="Stay Updated"
        title="News & Updates"
        items={homeNewsItems}
      />
    </div>
  )
}
