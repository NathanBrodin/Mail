import { ThemeWrapper } from '@/components/theme-wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import {
  Cog6ToothIcon,
  InformationCircleIcon,
  PlusCircleIcon,
  SwatchIcon,
} from '@heroicons/react/24/outline';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Search } from 'lucide-react';
import Link from 'next/link';
import ThemeCustomizer from '@/components/theme-customizer';
import { AccountSwitcher } from './components/account-switcher';

const accounts = [
  {
    label: 'Alicia Koch',
    email: 'alicia@example.com',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Vercel</title>
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Alicia Koch',
    email: 'alicia@gmail.com',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Gmail</title>
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'Alicia Koch',
    email: 'alicia@me.com',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>iCloud</title>
        <path
          d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <ThemeWrapper className="relative flex flex-col items-start gap-12 h-screen bg-background">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          className="flex flex-col justify-between p-4"
          defaultSize={265}
          collapsedSize={4}
          collapsible={true}
          minSize={15}
          maxSize={20}
        >
          <div className="relative flex flex-col gap-2">
            <AccountSwitcher isCollapsed={false} accounts={accounts} />
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-8" />
              </div>
            </form>
            <Button className="w-full flex gap-1 bg-primary">
              <PlusCircleIcon className="w-6 h-6" />
              <span>Compose</span>
            </Button>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <Link href="">
                <Cog6ToothIcon className="w-5 h-5 text-muted-foreground" />
              </Link>
              <Popover>
                <PopoverTrigger>
                  <SwatchIcon className="w-5 h-5 text-muted-foreground" />
                </PopoverTrigger>
                <PopoverContent sideOffset={10} className="ml-4" side="top">
                  <ThemeCustomizer />
                </PopoverContent>
              </Popover>
            </div>
            <Link href="">
              <InformationCircleIcon className="w-5 h-5 text-muted-foreground" />
            </Link>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
    </ThemeWrapper>
  );
}
