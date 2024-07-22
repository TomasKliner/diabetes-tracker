import type { Metadata } from "next";
import './globals.css';

import Navbar from '@/components/navbar';
import theme from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

export const metadata: Metadata = {
  title: "DiaTracker",
  description: "Diabetes tracking app to track your blood sugar levels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <div
              className={
                " bg-gradient-to-b from-white to-neutral-400 text-neutral-800 dark:from-neutral-800 dark:to-neutral-950 dark:text-white"
              }
            >
              <CssBaseline />
              <Navbar />
              {children}
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
