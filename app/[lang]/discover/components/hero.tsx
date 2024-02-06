import { getDictionary } from '@/lib/get-dictionary';
import Link from 'next/link';

export default function Hero({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['discover']['hero'];
}) {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-accent-500 to-secondary-accent-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-56 pb-16 sm:pb-24 lg:pb-28">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
            {dictionary.title1}
            <span className="bg-gradient-to-tr from-primary-accent-500 to-secondary-accent-500 text-transparent bg-clip-text">
              {' '}
              {dictionary.title2}{' '}
            </span>
            {dictionary.title3}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            {dictionary.subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#"
              className="rounded-md bg-secondary-accent-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {dictionary.getStarted}
            </Link>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-100 hover:text-gray-300"
            >
              {dictionary.learnMore} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-accent-500 to-secondary-accent-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}
