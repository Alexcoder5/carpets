import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Clean Monday",
  description: "This is the website for a rug company called Clean Monday",
};

const helvetica = localFont({
  src: [
    {
      path: '../../public/fonts/HelveticaNeue/HelveticaNeue-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HelveticaNeue/HelveticaNeueMedium.otf',
      weight: '500',
      style: 'medium',
    },
    // {
    //   path: '../../public/fonts/HelveticaNeue/HelveticaNeueCondensedBold.ttf',
    //   weight: '700',
    //   style: 'bold',
    // },
  ],
  variable: '--font-helvetica'
})

const formom = localFont({
  src: [
    {
      path: '../../public/fonts/Formom/zt-formom.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Formom/zt-formom-italic.woff',
      weight: '400',
      style: 'italic',
    },
    
  ],
  variable: '--font-formom'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // `
  return (
    <html lang="en">
      <body className={`${formom.variable} ${helvetica.variable} ${helvetica.className}`}>
          {/* <Navigation/> */}
          {children}
      </body>
    </html>
  );
}
