import './globals.css'

import Provider from './provider'

export const metadata = {
  title: 'ValeAPena?',
  description:
    'Neste site você terá total liberdade de avaliar produtos e expor sua opinião ao mundo !',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
