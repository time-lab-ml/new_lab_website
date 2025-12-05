import Navbar from '@/components/Navbar'
import TeamSection from '@/components/TeamSection'

// Placeholder data - will be replaced with data from JSON
const leader = [
  {
    name: 'Prof. John Doe',
    role: 'Lab Director',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
]

const phdStudents = [
  {
    name: 'Alice Chen',
    role: 'PhD Student',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Bob Wang',
    role: 'PhD Student',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Carol Liu',
    role: 'PhD Student',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
]

const postgraduate = [
  {
    name: 'David Zhang',
    role: 'Master Student',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Eva Lin',
    role: 'Master Student',
    imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
]

const undergraduate = [
  {
    name: 'Frank Wu',
    role: 'Undergraduate Research Assistant',
    imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Grace Huang',
    role: 'Undergraduate Research Assistant',
    imageUrl: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
]

const alumni = [
  {
    name: 'Henry Li',
    role: 'PhD 2023 → Google Research',
    imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Iris Yang',
    role: 'Master 2022 → Microsoft',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Jack Chen',
    role: 'PhD 2021 → Meta AI',
    imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
]

export default function Team() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background py-24 sm:py-32">
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
      </main>
    </>
  )
}
