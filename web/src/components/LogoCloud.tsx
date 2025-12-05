interface Logo {
  name: string
  src: string
}

interface LogoCloudProps {
  title?: string
  logos: Logo[]
}

export default function LogoCloud({ title = "Our Collaborations", logos }: LogoCloudProps) {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl font-semibold tracking-tight text-on-surface mb-12">
            {title}
          </h2>
        )}
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="col-span-2 flex h-16 items-center justify-center lg:col-span-1"
            >
              <img
                alt={logo.name}
                src={logo.src}
                className="max-h-14 max-w-[140px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
