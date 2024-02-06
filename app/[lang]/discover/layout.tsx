import { Locale } from '@/i18n-config';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import { getDictionary } from '@/lib/get-dictionary';

export default async function DiscoverLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { discover } = await getDictionary(params.lang);

  return (
    <section className="w-full bg-slate-900 min-h-screen text-white">
      <NavBar dictionary={discover.nav} />
      {children}
      <Footer dictionary={discover.footer} />
    </section>
  );
}
