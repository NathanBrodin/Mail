'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import AppLogo from '@/components/ui/app-logo';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons';
import { getDictionary } from '@/lib/get-dictionary';
import posthog from 'posthog-js';

export default function NavBar({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['discover']['nav'];
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link href="/discover" className="flex lg:flex-1" aria-label="home">
          <AppLogo />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{dictionary.openMainMenu}</span>
            {!mobileMenuOpen && (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" data-cy="open-menu-button"/>
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 text-gray-100">
          {dictionary.navigation.map((item) => (
            <Link
              aria-label={item.name}
              key={item.name}
              href={item.href}
              className="text-sm font-medium leading-6 hover:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <Link
            href="https://github.com/NathanBrodin/Mail"
            aria-label="GitHub"
            onClick={() => posthog.capture('Click on GitHub link')}
          >
            <Icons.gitHub className="mr-6 h-6 w-6 text-gray-300" />
          </Link>
          <Link
            aria-label={dictionary.signIn}
            data-cy="sign-in-button"
            href="/auth/signin"
            className="rounded-md bg-secondary-accent-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-accent-600"
          >
            {dictionary.signIn} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/discover"
              className="-m-1.5 p-1.5 text-white"
              aria-label="home"
            >
              <AppLogo />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">{dictionary.closeMainMenu}</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 text-gray-100">
                {dictionary.navigation.map((item) => (
                  <Link
                    aria-label={item.name}
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7  hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 text-gray-100">
                <Link
                  aria-label={dictionary.signIn}
                  href="auth/signin"
                  data-cy="sign-in-button-mobile"
                  className="rounded-md bg-secondary-accent-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-accent-600"
                >
                  {dictionary.signIn} <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
