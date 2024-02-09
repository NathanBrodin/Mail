import { getDictionary } from '@/lib/get-dictionary';
import Image from 'next/image';
import mailPreview from '../../../../public/mail-preview.png';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function Features({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['discover']['features'];
}) {
  return (
    <>
      <div className="pt-24 sm:pt-32 relative isolate" id="features">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-accent-500 to-secondary-accent-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(14.1% 44.1%, 100% 61.6%, 17.5% 26.9%, 85.5% 0.1%, 80.7% 52%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 25.2% 74.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-accent-500">
              {dictionary.mainIntro}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
              {dictionary.mainTitle}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {dictionary.mainSubtitle}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {dictionary.mainFeatures.map((feature) => (
                <div
                  key={feature.name}
                  className="relative pl-16 hover:scale-105 transition-all"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-100">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-accent-500">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-300">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
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
                'polygon(14.1% 44.1%, 50% 61.6%, 47.5% 26.9%, 35.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 72.4% 68.1%, 17.5% 58.3%, 15.2% 34.5%, 7.5% 76.7%, .1% 64.9%, 17.9% 100%, 27.6% 76.8%, 86.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      <div className="relative isolate overflow-hidden lg:overflow-visible lg:px-0 my-52">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-700 [mask-image:radial-gradient(64rem_64rem_at_top,black,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-20">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid px-6 lg:px-0 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-primary-accent-500">
                  {dictionary.intro}
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                  {dictionary.title}
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-200">
                  {dictionary.subtitle}
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={mailPreview}
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-200 lg:max-w-lg">
                <p>{dictionary.description}</p>
                <ul role="list" className="mt-8 space-y-8 text-gray-300">
                  {dictionary.features.map((feature) => (
                    <li className="flex gap-x-3" key={feature.title}>
                      <feature.icon
                        className="mt-1 h-5 w-5 flex-none text-secondary-accent-500"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-100">
                          {feature.title}
                        </strong>{' '}
                        {feature.description}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  {dictionary.outro}
                  <Link
                    href="/discover/privacy"
                    className="flex gap-x-2 items-center text-secondary-accent-500 hover:text-secondary-accent-400 hover:translate-x-1 transition-all"
                  >
                    <p>{dictionary.learnMore}</p>
                    <ArrowRightIcon className="h-5 w-5 text-secondary-accent-500" />
                  </Link>
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-100">
                  {dictionary.title2}
                </h2>
                <p className="mt-6">{dictionary.description2}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-80"
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
      </div>
    </>
  );
}
