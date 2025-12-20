import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Synthelytix Automation Solutions",
  description: "Automate business workflows to reduce manual work and scale operations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0F0F1A] text-[#F7F7F7]">
        {children}
      </body>
    </html>
  );
}
