import { getDictionary } from '@/lib/get-dictionary';
import Testimonial from './testimonial';

export default function Testimonials({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['discover']['testimonials'];
}) {
  return (
    <div className="relative isolate mx-auto max-w-7xl px-6 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-accent to-secondary-accent opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-400">
          {dictionary.title}
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
          {dictionary.subtitle}
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-md grid-flow-dense grid-cols-1 grid-rows[masonry] gap-8 text-sm leading-6 text-gray-100 sm:mt-20 sm:max-w-2xl sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-4">
        {dictionary.testimonials.map((testimonial) => (
          <div key={testimonial.author}>
            <Testimonial {...testimonial} />
          </div>
        ))}
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
