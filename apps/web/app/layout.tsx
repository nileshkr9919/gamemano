"use client";

import "./globals.css";
import { AuthProvider } from "./context/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {/* <Header /> */}
          <div className="flex">
            {/* <Sidebar /> */}
            <main className="flex-grow">{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
