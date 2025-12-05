import TeamSection from '@/components/TeamSection'
import teamData from '@/data/team.json'

const { leader, phdStudents, postgraduate, undergraduate, alumni } = teamData

export default function Team() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
            Our Team
          </h1>
          <p className="mt-6 text-lg leading-8 text-on-surface-variant">
            Meet the talented researchers and students in TIME Lab.
          </p>
        </div>
      </div>

      <TeamSection title="Leader" members={leader} />
      <TeamSection title="PhD Students" members={phdStudents} />
      <TeamSection title="Postgraduate Students" members={postgraduate} />
      <TeamSection title="Undergraduate Students" members={undergraduate} />
      <TeamSection 
        title="Alumni" 
        description="Our proud graduates who have moved on to exciting positions."
        members={alumni} 
      />
    </div>
  )
}
