import { interFont } from "@/lib/font";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { NavigationIsland } from "@/components/island/navigation-island";
import { FooterIsland } from "@/components/island/footer-island";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interFont.variable} antialiased`}
      >
        <ThemeProvider>
          <NavigationIsland />
          <Toaster position="top-right" />
          {children}
          <FooterIsland />
        </ThemeProvider>
      </body>
    </html>
  );
}
