npx create-next-app@latest version1
npx shadcn@latest init
npx shadcn@latest add button
borro el index.ts agrego el button y pruebo
npm run dev
##------------------------

Primero pruebo con array de objetos
Y despues instalo Prisma y trabajo con la base de datos

##---------------------------------
npm install next-themes
--components/theme-provider.tsx

"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
-------------------------
##----------------------------------
Wrap your root layout
...
import { ThemeProvider } from "@/components/theme-provider"
....
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
##--------------------------------------
Add a mode toggle
components ModeToggle.tsx
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
-- Debo instalar tambien el DropdownMenu
npx shadcn@latest add dropdown-menu
anstes del sidebar poner los colores que voy a querer

## --- instalar el sideBar

app/layout.tsx

crear components/app-sidebar.tsx

##--- Hago el navbar
le pongo menu al sidebar
Separo los componentes en carpetas- Principal- admin
npx shadcn@latest add navigation-menu
##--------------------------------------

Empiezo con un crud
1) El de turnos fijos
2) npm install prisma
- el modelo
-front - action
npm install prisma --save-dev
npx prisma init
npm install @prisma/client
npx prisma generate
------
npx prisma db push 
Para un uso mejor
npm install react-toastify
npm install zod
hago la ida-vuelta formulario-action con useActionState
después para mejor frontend- uso react-hook form
para el listado. Voy a probar Tanstack tables
// 