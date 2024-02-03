import Link from 'next/link';
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(
  async function Page() {
    const session = await getSession();

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Home</h1>

        <pre>{JSON.stringify(session?.user, null, 2)}</pre>
        <Link href="/api/auth/logout">Log out</Link>
      </main>
    );
  },
  { returnTo: '/discover' }
);
