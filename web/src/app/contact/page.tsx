import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'

// Placeholder data - will be replaced with data from JSON
const contactData = {
  contactTitle: 'Get in Touch',
  contactDescription: 'We welcome collaborations, inquiries, and prospective students.',
  contacts: [
    {
      title: 'General Inquiries',
      email: 'timelab@university.edu',
      phone: '+1 (555) 123-4567',
    },
    {
      title: 'Collaboration',
      email: 'collaborate@timelab.edu',
    },
    {
      title: 'Prospective Students',
      email: 'students@timelab.edu',
    },
    {
      title: 'Media & Press',
      email: 'press@timelab.edu',
    },
  ],
  locationTitle: 'Location',
  locationDescription: 'Visit us at our campus.',
  locations: [
    {
      name: 'Main Office',
      address: ['Computer Science Building', 'Room 512', 'University Campus'],
    },
    {
      name: 'Research Lab',
      address: ['Engineering Building', 'Room 301', 'University Campus'],
    },
  ],
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
              Contact Us
            </h1>
          </div>
        </div>
        <Contact {...contactData} />
      </main>
    </>
  )
}
