import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { i18n, Locale } from '@/i18n-config';
import { GeistSans } from 'geist/font/sans';
import { Toaster } from '@/components/ui/sonner';
import '../globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Providers from '../providers';
import posthog from 'posthog-js';

export const metadata: Metadata = {
  title: 'Mail',
  description: 'Redefining Your Inbox Experience',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  posthog.init(process.env.POSTHOG_API_KEY ?? '', {
    api_host: 'https://app.posthog.com',
  });

  return (
    <html lang={params.lang}>
      <body className={GeistSans.className}>
        <Providers>
          <ThemeProvider>
            {children}
            <Toaster />
          </ThemeProvider>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
