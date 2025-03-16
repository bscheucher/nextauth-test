"use client"; // Required for client components

import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";
import type { Session } from "next-auth";

export default function RootLayout({
  children,
  session,
}: {
  children: ReactNode;
  session?: Session | null;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
