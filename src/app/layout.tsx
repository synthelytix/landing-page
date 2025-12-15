import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nightly - Browser & Mobile",
  description: "Experience the latest with Nightly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0F0F1A] text-[#F7F7F7]">
        {children}
      </body>
    </html>
  );
}
