import './globals.css'

export const metadata = {
  title: 'ValeAPena?',
  description:
    'Seja Bem Vindo(a) ao site onde você poderá opinar livremente sobre produtos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
