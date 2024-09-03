"use client";

import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="flex" style={{ backgroundColor: 'radial-gradient(circle, rgba(53,41,22,1) 43%, rgba(53,41,22,1) 95%)' }}>
          <Sidebar />
          <div className="flex-grow">
          <Header />
            <main className="flex-grow">{children}</main>
          </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
