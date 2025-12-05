interface ContactItem {
  title: string
  email?: string
  phone?: string
}

interface LocationItem {
  name: string
  address: string[]
}

interface ContactProps {
  contactTitle: string
  contactDescription: string
  contacts: ContactItem[]
  locationTitle?: string
  locationDescription?: string
  locations?: LocationItem[]
}

export default function Contact({
  contactTitle,
  contactDescription,
  contacts,
  locationTitle,
  locationDescription,
  locations,
}: ContactProps) {
  return (
    <div className="bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-outline-variant lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-on-surface">
                {contactTitle}
              </h2>
              <p className="mt-4 text-base/7 text-on-surface-variant">
                {contactDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              {contacts.map((contact) => (
                <div key={contact.title} className="rounded-2xl bg-surface-container p-10">
                  <h3 className="text-base/7 font-semibold text-on-surface">{contact.title}</h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-on-surface-variant">
                    {contact.email && (
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>
                          <a
                            href={`mailto:${contact.email}`}
                            className="font-semibold text-primary"
                          >
                            {contact.email}
                          </a>
                        </dd>
                      </div>
                    )}
                    {contact.phone && (
                      <div className="mt-1">
                        <dt className="sr-only">Phone number</dt>
                        <dd>{contact.phone}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              ))}
            </div>
          </div>
          {locations && locations.length > 0 && (
            <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
              <div>
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-on-surface">
                  {locationTitle}
                </h2>
                {locationDescription && (
                  <p className="mt-4 text-base/7 text-on-surface-variant">
                    {locationDescription}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                {locations.map((location) => (
                  <div key={location.name} className="rounded-2xl bg-surface-container p-10">
                    <h3 className="text-base/7 font-semibold text-on-surface">{location.name}</h3>
                    <address className="mt-3 space-y-1 text-sm/6 text-on-surface-variant not-italic">
                      {location.address.map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </address>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
