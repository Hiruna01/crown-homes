import type { Metadata, Viewport } from "next";
import { site } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} | Opening soon`,
  description: site.description,
  openGraph: {
    title: `${site.name} | Opening soon`,
    description: site.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0f10",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
