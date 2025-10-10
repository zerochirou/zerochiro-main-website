"use client";

import { Github, Home, Menu, Slash } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { ModeIsland } from './mode-island';
import { Card, CardContent } from '../ui/card';
import { navigationIslandData } from '@/data/navigation-island-data';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function NavigationIsland() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname()
    return (
        <nav className='px-4 sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className=' flex h-16 items-center justify-between'>
                <Card className='py-1 px-6 sm:flex hidden border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 transition-colors ease-in-out'>
                    <ul className='flex flex-row items-center gap-8'>
                        {navigationIslandData.map((i, index) => {
                            const Icon = i.icon
                            return (
                                <Link key={index} href={i.path} className={cn("text-foreground/50 font-medium hover:text-foreground transition-colors ease-in-out flex flex-row items-center gap-2", pathname === i.path && "text-primary")}>
                                    <Icon strokeWidth={pathname === i.path ? 2.25 : 2} /> {i.page}
                                </Link>
                            )
                        })}
                    </ul>
                </Card>

                {/* Desktop CTA Button */}
                <div className='hidden sm:flex items-center space-x-2'>
                    <ModeIsland />
                    <a href="https://github.com/zerochirou/zerochiro-main-website">
                        <Button variant={'outline'} className='w-20'>
                            <Github />
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant='ghost'
                            className='sm:hidden'
                            size='icon-lg'
                            aria-label='Toggle menu'
                        >
                            <Menu className='h-10 w-20' />
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side='right'
                        className='w-[300px] sm:w-[400px]'
                    >
                        <SheetHeader>
                            <SheetTitle>Navigation</SheetTitle>
                            <SheetDescription>
                                Navigate through our website sections
                            </SheetDescription>
                        </SheetHeader>
                        <nav className='flex flex-col gap-4 px-2'>
                            {navigationIslandData.map((i, index) => {
                                const Icon = i.icon
                                return (
                                    <Link
                                        key={index}
                                        href={i.path}
                                        onClick={() => setIsOpen(false)}
                                        className={cn('flex flex-row items-center gap-4 px-2 py-1 text-lg font-medium hover:text-primary transition-colors', i.path === pathname ? "font-bold text-primary" : "")}
                                    >
                                        <span><Icon /></span> {i.page}
                                    </Link>
                                )
                            })}
                            <div className='border-t pt-4 mt-4'>
                                <div className='flex flex-row gap-2'>
                                    <Button
                                        asChild
                                        className='w-1/2'
                                        size={'icon'}
                                    >
                                        <a
                                            href='https://github.com/zerochirou/zerochiro-main-website'
                                        >
                                            <Github />
                                        </a>
                                    </Button>
                                    <ModeIsland />
                                </div>
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}