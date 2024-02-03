import LocaleSwitcher from '@/components/locale-switcher';
import { getDictionary } from '@/lib/get-dictionary';
import { PageProps } from '@/lib/types/page-props';
import Link from 'next/link';

export default async function Home({ params: { lang } }: PageProps) {
  const { home } = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-12">
      <h1>{home.title}</h1>
      <Link href="/api/auth/logout">Log out</Link>
      <LocaleSwitcher />
    </main>
  );
}
