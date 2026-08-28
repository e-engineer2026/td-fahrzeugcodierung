import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TD Fahrzeugcodierung | VAG Codierung & Diagnose",
  description: "VAG Codierung & Diagnose – .",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}