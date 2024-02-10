import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { i18n, Locale } from '@/i18n-config';
import { GeistSans } from 'geist/font/sans';
import { Toaster } from '@/components/ui/sonner';
import '../globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Providers from '../providers';
import dynamic from 'next/dynamic';
import { TailwindIndicator } from '@/components/talwind-indicator';

const PostHogPageView = dynamic(() => import('../posthog-pageview'), {
  ssr: false,
});

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
  return (
    <html lang={params.lang}>
      <body className={GeistSans.className}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
        </Providers>
        <Analytics />
        <SpeedInsights />
        <PostHogPageView />
        <TailwindIndicator />
      </body>
    </html>
  );
}
