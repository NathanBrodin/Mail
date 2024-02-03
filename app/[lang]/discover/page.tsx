import { getDictionary } from '@/lib/get-dictionary';
import { PageProps } from '@/lib/types/page-props';
import Link from 'next/link';

export default async function Discover({ params: { lang } }: PageProps) {
  const { discover } = await getDictionary(lang);

  return (
    <div>
      <h1>{discover.title}</h1>
      <p>{discover.subtitle}</p>

      <Link href="/api/auth/login">Log in</Link>
    </div>
  );
}
