'use client';

import './globals.css';
import {AuthProvider} from './context/AuthContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import {usePathname} from 'next/navigation';

const RootLayout = ({children}: {children: React.ReactNode}) => {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {/* <div style={{ backgroundColor: 'radial-gradient(circle, rgba(53,41,22,1) 43%, rgba(53,41,22,1) 95%)' }}> */}
          <div className="flex">
            {pathname === '/' ? <Sidebar /> : <></>}
            <div className="flex-grow">
              <Header />
              <main className="flex-grow">{children}</main>
            </div>
          </div>
          <Footer />
          {/* </div> */}
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
