import { ShieldCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="unete" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center md:px-16 md:py-20">
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary-foreground/5 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-primary-foreground/5 blur-2xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10">
              <ShieldCheck className="h-8 w-8 text-primary-foreground" />
            </div>

            <h2 className="font-serif text-3xl font-extrabold text-primary-foreground sm:text-4xl md:text-5xl text-balance">
              Conviertete en Guardian Antillamas
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
              Unete a nuestra comunidad de heroes que protegen sus hogares y
              familias. Es gratis, divertido y puedes salvar vidas.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-base font-bold"
                asChild
              >
                <a href="#unete">
                  Quiero ser Guardian
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-primary-foreground/60">
              Completamente gratis. Disenado para ninos de 9 a 12 anos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
