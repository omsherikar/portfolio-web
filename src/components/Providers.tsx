'use client';

import { Toaster } from 'react-hot-toast';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#112240',
            color: '#64ffda',
            border: '1px solid rgba(100,255,218,0.2)',
            backdropFilter: 'blur(10px)',
          },
          success: {
            iconTheme: {
              primary: '#64ffda',
              secondary: '#112240',
            },
          },
        }}
      />
      {children}
    </>
  );
} 