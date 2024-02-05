import DiscoverHeader from './components/discover-header';

export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <DiscoverHeader />
      {children}
    </section>
  );
}
