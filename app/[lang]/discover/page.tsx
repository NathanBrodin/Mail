import { getDictionary } from '@/lib/get-dictionary';
import { PageProps } from '@/lib/types/page-props';
import Stats from './components/stats';
import Hero from './components/hero';
import Preview from './components/preview';
import Testimonials from './components/testimonials/testimonials';
import Features from './components/features';

export default async function Discover({ params: { lang } }: PageProps) {
  const { discover } = await getDictionary(lang);

  return (
    <div>
      <Hero dictionary={discover.hero} />
      <Preview />
      <Features dictionary={discover.features} />
      <Stats dictionary={discover.stats} />
      <Testimonials dictionary={discover.testimonials} />
    </div>
  );
}
