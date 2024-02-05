import Link from 'next/link';

const navigation = [
  { name: 'Features', href: '#' },
  { name: 'Privacy', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Terms of service', href: '#' },
  { name: 'Privacy policy', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Footer() {
  return (
    <div className="mt-16 py-24 w-full flex flex-col items-center gap-8">
      <div className="grid grid-cols-2 ml-4 sm:ml-0 self-start sm:self-center sm:flex gap-4 sm:gap-8 text-gray-200 text-sm">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="hover:text-gray-100"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <p className="text-sm font-light text-gray-300">
        © 2024 Brodin Mail. All rights reserved.
      </p>
    </div>
  );
}
