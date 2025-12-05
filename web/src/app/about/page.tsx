import Mission from '@/components/Mission'
import Timeline from '@/components/Timeline'
import LogoCloud from '@/components/LogoCloud'
import aboutData from '@/data/about.json'

const { mission: missionData, timeline: timelineData, collaborations: collaborationsData } = aboutData

export default function About() {
  return (
    <div className="bg-background">
      <Mission {...missionData} />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-on-surface">Our Journey</h2>
      </div>
      <Timeline items={timelineData} />
      
      <LogoCloud title={collaborationsData.title} logos={collaborationsData.logos} />
    </div>
  )
}
