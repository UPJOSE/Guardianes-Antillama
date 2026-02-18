import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Flame, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
    >
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute top-1/2 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-10 right-1/3 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          {/* Text content */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-1.5">
              <Flame className="h-4 w-4 text-secondary-foreground" />
              <span className="text-xs font-semibold tracking-wide text-secondary-foreground uppercase">
                En alianza con Aniquem
              </span>
            </div>

            <h1 className="font-serif text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
              Protege tu hogar jugando con nosotros
            </h1>

            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
              Aprende a prevenir accidentes por quemaduras de forma divertida y
              conviertete en un verdadero guardian de tu familia y comunidad.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="gap-2 text-base" asChild>
                <a href="#unete">
                  <ShieldCheck className="h-5 w-5" />
                  Quiero ser Guardian
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base bg-transparent"
                asChild
              >
                <a href="#como-funciona">
                  <Sparkles className="h-5 w-5" />
                  Conoce mas
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-8">
              <div className="text-center lg:text-left">
                <p className="font-serif text-2xl font-bold text-primary">
                  500+
                </p>
                <p className="text-xs text-muted-foreground">
                  Guardianes activos
                </p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center lg:text-left">
                <p className="font-serif text-2xl font-bold text-accent">
                  15+
                </p>
                <p className="text-xs text-muted-foreground">
                  Comunidades seguras
                </p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center lg:text-left">
                <p className="font-serif text-2xl font-bold text-secondary-foreground">
                  100%
                </p>
                <p className="text-xs text-muted-foreground">Gratis</p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative flex-1">
            <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-3xl border-4 border-card shadow-2xl">
              <Image
                src="/images/hero-guardians.jpg"
                alt="Ninos y ninas como guardianes antillamas protegiendo su hogar"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl bg-card px-4 py-3 shadow-lg border border-border">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                <ShieldCheck className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Seguridad</p>
                <p className="text-xs text-muted-foreground">
                  {"Aprende jugando"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
