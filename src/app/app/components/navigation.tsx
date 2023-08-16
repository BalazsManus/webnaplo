'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import * as Icon from 'react-feather';

function profileClick() {

}

export default function Navigation() {
    const path = usePathname()
    const navLinks: { href: string; name: string; }[] = [
        {
            href: '/app/home',
            name: 'Home',
        },
        {
            href: '/app/grades',
            name: 'Grades',
        },
        {
            href: '/app/timetable',
            name: 'Timetable',
        },
        {
            href: '/app/messages',
            name: 'Messages',
        },
        {
            href: '/app/absences',
            name: 'Absences',
        },
    ];

    return (
        <div className='flex flex-row p-5 items-center justify-between w-full h-max text-white fixed gap-5 bg-black'>
            <div className='flex flex-row items-center justify-start w-max h-max flex-1 pl-1'>
                <Image alt='logo' src='/image/brand/full_logo.svg' width={130} height={44}/>
            </div>
            <div className='flex flex-row items-center justify-center w-max h-max flex-1'>
                {navLinks.map((link) => {
                    const isActive = path == link.href;
            
                    return (
                        <Link href={link.href} key={link.name}>
                            <div className={(isActive ? 'bg-refilc-sec bg-opacity-40' : 'bg-transparent') + ' rounded-xl p-3 text-refilc-sec'}>
                                {link.name.toLowerCase() == 'home' ? <Icon.Home className={/*(isActive ? 'fill-current' : '') + */' w-[20px] h-[20px]'} /> :
                                    link.name.toLowerCase() == 'grades' ? <Icon.Bookmark className={/*(isActive ? 'fill-current' : '') + */' w-[20px] h-[20px]'} /> :
                                    link.name.toLowerCase() == 'timetable' ? <Icon.Calendar className={/*(isActive ? 'fill-current' : '') + */' w-[20px] h-[20px]'} /> :
                                    link.name.toLowerCase() == 'messages' ? <Icon.MessageSquare className={/*(isActive ? 'fill-current' : '') + */' w-[20px] h-[20px]'} /> :
                                    link.name.toLowerCase() == 'absences' ? <Icon.Clock className={/*(isActive ? 'fill-current' : '') + */' w-[20px] h-[20px]'} /> :
                                    <Icon.HelpCircle className={/*(isActive ? 'fill-current' : '') + */' w-[20px] h-[20px]'} />
                                }
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className='flex flex-row items-center justify-end w-max h-max gap-5 flex-1 pr-1'>
                <p className='font-bold'>Szép napot, János!</p>
                <div onClick={profileClick}>
                    <div className='rounded-full bg-refilc w-[44px] h-[44px] flex items-center justify-center'>
                        <p className='text-sm'>J</p>
                    </div>
                </div>
            </div>
        </div>
    );
}