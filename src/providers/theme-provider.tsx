"use client"

import { ComponentProps } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
    children,
}: ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
    >
        {children}
    </NextThemesProvider>
}