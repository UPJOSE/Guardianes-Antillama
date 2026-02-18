import { ShieldCheck } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <ShieldCheck className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-serif text-lg font-bold text-foreground">
              Guardianes Antillamas
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#inicio"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Inicio
            </a>
            <a
              href="#mision"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Mision
            </a>
            <a
              href="#como-funciona"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Como funciona
            </a>
            <a
              href="#aniquem"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Aniquem
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            En alianza con Aniquem
          </p>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {"Guardianes Antillamas 2026. Todos los derechos reservados. Creando conciencia a traves del juego."}
          </p>
        </div>
      </div>
    </footer>
  )
}
