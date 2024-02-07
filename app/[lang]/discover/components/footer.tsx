import { getDictionary } from '@/lib/get-dictionary';
import Link from 'next/link';

export default async function Footer({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['discover']['footer'];
}) {
  return (
    <div className="mt-16 py-24 w-full flex flex-col items-center gap-8">
      <div className="grid grid-cols-2 ml-4 sm:ml-0 self-start sm:self-center sm:flex gap-4 sm:gap-8 text-gray-200 text-sm">
        {dictionary.navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="hover:text-gray-100"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <p className="text-sm font-light text-gray-300">© {dictionary.rights}</p>
    </div>
  );
}
