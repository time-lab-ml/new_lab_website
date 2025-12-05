import Navbar from '@/components/Navbar'
import Mission from '@/components/Mission'
import Timeline from '@/components/Timeline'

// Placeholder data - will be replaced with data from JSON
const missionData = {
  headline: 'About Us',
  title: 'On a mission to advance AI research',
  subtitle: 'We are a research laboratory dedicated to pushing the boundaries of machine learning and artificial intelligence.',
  missionTitle: 'Our Mission',
  missionContent: [
    'TIME Lab is committed to conducting cutting-edge research in machine learning, with a focus on time-series analysis, deep learning, and AI applications.',
    'We believe in open science and collaboration. Our team works closely with industry partners and academic institutions to solve real-world problems.',
  ],
  stats: [
    { label: 'Publications', value: '50+' },
    { label: 'Projects', value: '20+' },
    { label: 'Team Members', value: '15' },
    { label: 'Collaborations', value: '10+' },
  ],
  images: [
    'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90',
    'https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90',
  ],
}

const timelineData = [
  {
    name: 'Lab Founded',
    description: 'TIME Lab was established with a vision to advance machine learning research.',
    date: 'Jan 2020',
    dateTime: '2020-01',
  },
  {
    name: 'First Major Publication',
    description: 'Our research was published in a top-tier conference for the first time.',
    date: 'Jun 2021',
    dateTime: '2021-06',
  },
  {
    name: 'Industry Partnership',
    description: 'Started collaboration with leading tech companies on applied research.',
    date: 'Mar 2022',
    dateTime: '2022-03',
  },
  {
    name: 'Lab Expansion',
    description: 'Team grew to include more PhD students and postdoctoral researchers.',
    date: 'Sep 2023',
    dateTime: '2023-09',
  },
]

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <Mission {...missionData} />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-on-surface">Our Journey</h2>
        </div>
        <Timeline items={timelineData} />
      </main>
    </>
  )
}
