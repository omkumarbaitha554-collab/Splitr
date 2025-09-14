"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import Header from "@/components/header";
import { Toaster } from "sonner";

export default function ClerkProviderWrapper({ children }) {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <ConvexClientProvider>
                <Header />
                <main className="min-h-screen">
                    <Toaster richColors />
                    {children}
                </main>
            </ConvexClientProvider>
        </ClerkProvider>
    );
}
