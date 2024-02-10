import ThemeCustomizer from '@/components/theme-customizer';
import { ThemeWrapper } from '@/components/theme-wrapper';
import { Button } from '@/components/ui/button';
import { getDictionary } from '@/lib/get-dictionary';
import { PageProps } from '@/lib/types/page-props';
import { getServerSession } from 'next-auth';

export default async function Home({ params: { lang } }: PageProps) {
  const { home, auth } = await getDictionary(lang);

  const session = await getServerSession();
  const user = session?.user;

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-12">
      <ThemeWrapper
        className="relative flex flex-col items-start gap-12"
      >
        <ThemeCustomizer />
        <h1>Hello world</h1>
        <Button>Hello</Button>
      </ThemeWrapper>
    </main>
  );
}
