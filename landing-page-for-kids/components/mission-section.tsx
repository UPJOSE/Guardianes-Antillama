import { ShieldAlert, Heart, Users, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const problems = [
  {
    icon: ShieldAlert,
    title: "Falta de prevencion",
    description:
      "Muchos hogares no cuentan con sistemas de prevencion de accidentes por quemaduras.",
  },
  {
    icon: Heart,
    title: "Practicas normalizadas",
    description:
      "Conductas riesgosas dentro del hogar se han normalizado y pasan desapercibidas por los mas pequenos.",
  },
  {
    icon: Users,
    title: "Sectores vulnerables",
    description:
      "Ninos y ninas de sectores D y E estan mas expuestos a riesgos dentro de sus comunidades.",
  },
  {
    icon: Lightbulb,
    title: "Nuestra solucion",
    description:
      "Creando conciencia a traves del juego: transformamos practicas cotidianas en conductas seguras.",
  },
]

export function MissionSection() {
  return (
    <section id="mision" className="py-16 md:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">
            Nuestra mision
          </span>
          <h2 className="mt-2 font-serif text-3xl font-extrabold text-foreground sm:text-4xl text-balance">
            Transformar hogares en espacios seguros
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Ayudamos a los ninos, ninas y adolescentes a identificar riesgos y
            adoptar conductas seguras para proteger a sus familias.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, index) => {
            const Icon = item.icon
            const isHighlighted = index === problems.length - 1
            return (
              <Card
                key={item.title}
                className={`group relative overflow-hidden transition-all hover:shadow-lg ${
                  isHighlighted
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card"
                }`}
              >
                <CardContent className="flex flex-col gap-4 p-6">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      isHighlighted
                        ? "bg-primary-foreground/20"
                        : "bg-primary/10"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        isHighlighted ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                  </div>
                  <h3
                    className={`font-serif text-lg font-bold ${
                      isHighlighted ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isHighlighted
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
