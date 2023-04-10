import './globals.css'

export const metadata = {
  title: 'Upnotify',
  description: 'Created by Prashanth BR',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
