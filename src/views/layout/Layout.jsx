import React from "react";
import { FloatingAssistant } from "@/views/ui/FloatingAssistant";
import { PageLoaderProvider } from "@/views/ui/PageLoader";

export default function Layout({
    children,
}) {
    return (
        <div className="antialiased font-sans">
            <PageLoaderProvider>
                {children}
            </PageLoaderProvider>
            <FloatingAssistant />
        </div>
    );
}
