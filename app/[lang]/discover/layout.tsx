import Footer from './components/footer';
import NavBar from './components/nav-bar';

export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full bg-slate-900 min-h-screen text-white">
      <NavBar />
      {children}
      <Footer />
    </section>
  );
}
