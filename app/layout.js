import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Splitr",
  description: "The smartest way to split expenses with friends",
  lang: "en",
};

export default function RootLayout({ children }) {
  return (
    <body className={inter.className} suppressHydrationWarning={true}>
      <ClerkProvider>
        <ConvexClientProvider>
          <Header />

          <main className="min-h-screen">
            {children}
            <Toaster richColors />
          </main>
        </ConvexClientProvider>
      </ClerkProvider>
    </body>
  );
}
