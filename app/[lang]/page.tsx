import LocaleSwitcher from '@/components/locale-switcher';
import { getDictionary } from '@/lib/get-dictionary';
import { PageProps } from '@/lib/types/page-props';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function Home({ params: { lang } }: PageProps) {
  const { home, auth } = await getDictionary(lang);

  const session = await getServerSession();
  const user = session?.user;

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-12">
      <h1>{home.title}</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Link href="/api/auth/signout">{auth.signout}</Link>
      <LocaleSwitcher />
    </main>
  );
}
