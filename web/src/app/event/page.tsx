// Placeholder data - will be replaced with data from JSON
const events = [
  {
    title: 'Lab Seminar: Advances in Time-Series Analysis',
    date: 'Dec 15, 2024',
    time: '2:00 PM',
    location: 'Room 101',
    type: 'Seminar',
    description: 'Weekly lab seminar discussing recent advances in the field.',
  },
  {
    title: 'Workshop: Introduction to Deep Learning',
    date: 'Dec 20, 2024',
    time: '10:00 AM',
    location: 'Conference Hall A',
    type: 'Workshop',
    description: 'Hands-on workshop for beginners in deep learning.',
  },
  {
    title: 'Guest Lecture: Industry Perspectives on AI',
    date: 'Jan 10, 2025',
    time: '3:00 PM',
    location: 'Auditorium',
    type: 'Lecture',
    description: 'Guest speaker from industry sharing insights on AI applications.',
  },
]

export default function Event() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
            Events
          </h1>
          <p className="mt-6 text-lg leading-8 text-on-surface-variant">
            Upcoming seminars, workshops, and events.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="rounded-2xl bg-surface-container p-8 hover:bg-surface-container-high transition"
              >
                <div className="flex flex-wrap items-center gap-4">
                  <span className="rounded-full bg-primary-container px-3 py-1 text-sm font-medium text-on-primary-container">
                    {event.type}
                  </span>
                  <time className="text-sm text-on-surface-variant">
                    {event.date} at {event.time}
                  </time>
                  <span className="text-sm text-on-surface-variant">📍 {event.location}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-on-surface">{event.title}</h3>
                <p className="mt-2 text-on-surface-variant">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
