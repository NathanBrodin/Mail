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

export default async function AuthenticationPage({ params: { lang } }: PageProps) {
  const { auth } = await getDictionary(lang);
  const signin = auth.signin;

  return (
    <>
      <div className="container relative  h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <AppLogo />
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;{signin.quote}&rdquo;
              </p>
              <footer className="text-sm">{signin.author}</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {signin.title}
              </h1>
              <p className="text-sm text-muted-foreground">
                {signin.subtitle}
              </p>
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
    </>
  );
}
