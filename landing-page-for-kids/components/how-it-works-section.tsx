import Image from "next/image"
import { Gamepad2, BookOpen, Award } from "lucide-react"

const steps = [
  {
    icon: BookOpen,
    step: "01",
    title: "Aprende",
    description:
      "Descubre los peligros ocultos en tu hogar a traves de historias interactivas y contenido divertido.",
  },
  {
    icon: Gamepad2,
    step: "02",
    title: "Juega",
    description:
      "Completa misiones y desafios que te ensenan como prevenir accidentes por quemaduras de forma segura.",
  },
  {
    icon: Award,
    step: "03",
    title: "Protege",
    description:
      "Comparte lo aprendido con tu familia y comunidad. Conviertete en un verdadero guardian antillamas.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image */}
          <div className="relative flex-1">
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/kids-playing.jpg"
                alt="Ninos jugando y aprendiendo sobre seguridad contra quemaduras"
                width={500}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Steps */}
          <div className="flex-1">
            <span className="text-sm font-semibold tracking-wide text-accent uppercase">
              Como funciona
            </span>
            <h2 className="mt-2 font-serif text-3xl font-extrabold text-foreground sm:text-4xl text-balance">
              Tres pasos para ser guardian
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
              Un camino divertido donde cada mision te acerca mas a proteger tu
              hogar y tu comunidad.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {steps.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-primary">
                          PASO {item.step}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
