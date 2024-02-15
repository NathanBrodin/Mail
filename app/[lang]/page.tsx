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
