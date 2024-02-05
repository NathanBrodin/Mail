import { getDictionary } from '@/lib/get-dictionary';
import { PageProps } from '@/lib/types/page-props';
import Stats from './components/stats';
import Hero from './components/hero';
import Preview from './components/preview';
import Testimonials from './components/testimonials/testimonials';
import Features from './components/features';

export default async function Discover({ params: { lang } }: PageProps) {
  // eslint-disable-next-line no-unused-vars
  const { discover } = await getDictionary(lang);

  return (
    <div>
      <Hero />
      <Preview />
      <Stats />
      <Features />
      <Testimonials />
    </div>
  );
}
