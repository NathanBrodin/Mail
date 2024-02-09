import { getDictionary } from '@/lib/get-dictionary';

export default function Stats({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['discover']['stats'];
}) {
  return (
    <div className="relative isolate">
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

      <div className="py-14 sm:py-20 rounded-2xl m-16  sm:m-32 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg shadow-lg ring-1 ring-gray-300/10 transition">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4 hover:scale-110 transition-all">
              <dt className="text-base leading-7 text-gray-300">
                {dictionary.users}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
                0
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4 hover:scale-110 transition-all">
              <dt className="text-base leading-7 text-gray-300">
                {dictionary.mailsSend}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
                0
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4 hover:scale-110 transition-all">
              <dt className="text-base leading-7 text-gray-300">
                {dictionary.mailsReceived}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
                0
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
