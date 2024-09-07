'use client';

import './globals.css';
import {AuthProvider} from './context/AuthContext';
import Header from './components/Header';
// import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
// import {usePathname} from 'next/navigation';

const RootLayout = ({children}: {children: React.ReactNode}) => {
  // const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {/* <div className="flex">
            {pathname === '/' ? <Sidebar /> : <></>}
            <div className="flex-grow"> */}
              <Header />
              <main className="flex-grow">{children}</main>
            {/* </div>
          </div> */}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
