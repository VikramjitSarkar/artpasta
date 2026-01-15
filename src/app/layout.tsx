import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Art Pasta',
  description: 'an online art gallary.  artist auth, user auth. any user can browse the app see all artist artwork. tap on artwork to see the image bigger and details of the art work, name, description, year, artist name, on sale ot not, price etc etc. home page multiple rails for types of art work. search page full text search of the art work and its details. profile page of user. to buy artwork and like artwork user need to sign up or login.  artist sign up or login - dashboard see all art work uploaded. on top button to ADD.  arttist can add multiple artworks, with all details. profiles setting page.  ',
}

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
