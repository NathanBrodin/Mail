import { Metadata } from 'next';
import Link from 'next/link';

import { UserAuthForm } from './components/user-auth-form';
import AppLogo from '@/components/ui/app-logo';
import { PageProps } from '@/lib/types/page-props';
import { getDictionary } from '@/lib/get-dictionary';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication to Mail.',
};

export default async function AuthenticationPage({
  params: { lang },
}: PageProps) {
  const { auth } = await getDictionary(lang);
  const signin = auth.signin;

  return (
    <div className="container relative isolate h-screen overflow-clip flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-slate-900" />
        <div
          className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-accent-500 to-secondary-accent-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
          <div
            className="relative rigth-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate--1/2 rotate-[30deg] bg-gradient-to-tr from-primary-accent-500 to-secondary-accent-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <AppLogo />
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">&ldquo;{signin.quote}&rdquo;</p>
            <footer className="text-sm text-gray-300">{signin.author}</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              {signin.title}
            </h1>
            <p className="text-sm text-muted-foreground">{signin.subtitle}</p>
          </div>
          <UserAuthForm signin={signin} />
          <p className="px-8 text-center text-sm text-muted-foreground">
            {signin.continue}{' '}
            <Link
              href="/discover/terms-of-service"
              className="underline underline-offset-4 hover:text-primary"
            >
              {signin.terms}
            </Link>{' '}
            {signin.and}{' '}
            <Link
              href="/discover/privacy-policy"
              className="underline underline-offset-4 hover:text-primary"
            >
              {signin.privacy}
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
