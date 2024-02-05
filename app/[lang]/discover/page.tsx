import { getDictionary } from '@/lib/get-dictionary';
import { PageProps } from '@/lib/types/page-props';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function Discover({ params: { lang } }: PageProps) {
  const { discover } = await getDictionary(lang);
  const session = await getServerSession();
  const user = session?.user;

  return (
    <div>
      <h1>{discover.title}</h1>
      <p>{discover.subtitle}</p>

      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Link href="/auth/signin">Sign in</Link>
    </div>
  );
}
