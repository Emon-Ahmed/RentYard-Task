import { Fustat } from "next/font/google";
import "./globals.css";


const fustat = Fustat();

export const metadata = {
  title: "RentYard | Apartment and House Rental Market Place",
  description: "Apartment and House Rental Market Place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fustat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
