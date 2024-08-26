import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-mainBlack text-white'>
      <main className='container mx-auto flex-grow px-4'>{children}</main>
    </div>
  );
};

export default Layout;
