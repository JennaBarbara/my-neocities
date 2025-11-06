import type { Metadata } from "next";
import { Lato } from 'next/font/google'
import "./globals.css";



const lato = Lato({
  weight: ['100' , '300' , '400' , '700' , '900'],
  subsets: ["latin-ext"]
})

export const metadata: Metadata = {
  title: "˖⁺‧₊JenBarb's Online Space₊‧⁺˖",
  description: "゜ﾟ･:.｡..｡.:･'(this is just for fun)'･:.｡. .｡.:･゜ﾟ･",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
