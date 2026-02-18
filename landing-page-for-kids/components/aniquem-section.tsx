import Image from "next/image"
import { Handshake, HeartHandshake, Globe } from "lucide-react"

export function AniquemSection() {
  return (
    <section id="aniquem" className="py-16 md:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-16">
          {/* Image */}
          <div className="relative flex-1">
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/community-safe.jpg"
                alt="Comunidad segura protegida por los guardianes antillamas"
                width={500}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <span className="text-sm font-semibold tracking-wide text-primary uppercase">
              Nuestro aliado
            </span>
            <h2 className="mt-2 font-serif text-3xl font-extrabold text-foreground sm:text-4xl text-balance">
              Trabajamos junto a Aniquem
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
              Aniquem es la Asociacion de Ayuda al Nino Quemado, que trabaja por
              la rehabilitacion integral de ninos, ninas y adolescentes
              sobrevivientes de quemaduras en el Peru.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <HeartHandshake className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-foreground">
                    Rehabilitacion integral
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Apoyo fisico, psicologico y social para ninos sobrevivientes
                    de quemaduras.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <Handshake className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-foreground">
                    Prevencion comunitaria
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Programas educativos para prevenir accidentes por quemaduras
                    en comunidades vulnerables.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <Globe className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-foreground">
                    Impacto nacional
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Presencia en multiples regiones del Peru, llegando a las
                    familias que mas lo necesitan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
