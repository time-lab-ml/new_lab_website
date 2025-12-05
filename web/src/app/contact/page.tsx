import Contact from '@/components/Contact'
import contactData from '@/data/contact.json'

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
            Contact Us
          </h1>
        </div>
      </div>
      <Contact {...contactData} />
    </div>
  )
}
