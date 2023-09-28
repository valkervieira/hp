import "@/app/globals.css";
import "ui/styles.css";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { GlobalProviders, Navbar } from "@/app/_components";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harry Potter Characters & Spell Book",
  description: "Harry Potter API client codding challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang="en">
      <body className={[lora.className, "mt-14"].join(" ")}>
        <GlobalProviders>
          <Navbar />
          {children}
        </GlobalProviders>
      </body>
    </html>
  );
}
