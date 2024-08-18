'use client'
import React, { useEffect, useState } from 'react'
import Chat from '../_icons/Chat'
import Link from 'next/link'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'
import Button from './Button'
import Cross from '../_icons/Cross'
import Dots from '../_icons/Dots'
import InitAnimation from '../_utils/AnimationInit'
import InitMainPage from '../_utils/InitMainPage'

const NavBar = () => {
    const path = usePathname()

    useEffect(() => {
        //inicializace LAYOUT Věcí
        InitAnimation(path)

        //inicializace Main page
        path === '/' && InitMainPage()
    }, [path])

    const Links: { link: string; text: string }[] = [
        {
            link: '/',
            text: 'Home',
        },
        {
            link: '/gsap',
            text: 'Gsap',
        },
        {
            link: '/navbar',
            text: 'Navbar',
        },
        {
            link: '/skeleton',
            text: 'Skeleton',
        },
    ]

    const [isOpen, setIsOpen] = useState(true)

    // const open = () => {
    //     setIsOpen(!isOpen)

    //     isOpen
    //         ? gsap.to('.open', {
    //               width: '100%',
    //               paddingRight: '2rem',
    //               paddingLeft: '2rem',
    //               duration: 0.2,
    //               ease: 'power2',
    //           })
    //         : gsap.to('.close', {
    //               width: 0,
    //               paddingRight: 0,
    //               paddingLeft: 0,
    //               duration: 0.2,
    //               ease: 'power2',
    //           })

    //     const navTl = gsap.timeline()

    //     navTl.from('.navLink', {
    //         opacity: 0,
    //         x: 100,
    //     })

    //     isOpen && navTl.play()

    //     isOpen
    //         ? document.body.classList.add('noScroll')
    //         : document.body.classList.remove('noScroll')
    // }

    return (
        <nav className=" flex items-center justify-between px-8 py-4 fixed w-full select-none z-40 bg-transparent navBar">
            {/* <Loader path={path}></Loader> */}
            <Link href="/">
                <h1
                    className={`text-5xl text-darkBlue font-rowdies ${
                        path === '/' ? 'navLogo opacity-0' : 'navLogoDefault'
                    } `}
                >
                    Scroll
                </h1>
            </Link>

            <div className="flex gap-10">
                <div className="sm:flex items-center gap-7 hidden">
                    {Links.map((link, i: number) => (
                        <Link
                            className={`text-xl font-bold text-black hover:text-lightGreen headerLink pcNavLink`}
                            href={link.link}
                            key={i}
                        >
                            <span
                                className="hover:text-lightGreen duration-200 "
                                style={
                                    path === link.link ? { color: '#10f' } : {}
                                }
                            >
                                {link.text}
                            </span>
                        </Link>
                    ))}
                </div>
                <Button className="sm:block hidden">
                    <Chat className="w-7"></Chat>
                </Button>
                <Button className="block sm:hidden">
                    <Dots className="w-7"></Dots>
                </Button>
            </div>

            <aside
                className={`${
                    isOpen ? 'open' : 'close'
                } absolute top-0 right-0 flex flex-col justify-between bg-darkBlue w-0 h-[100dvh] px-0 py-4  overflow-hidden z-50`}
            >
                <div className="w-full flex justify-end ">
                    <Button>
                        <Cross
                            fill="#000"
                            stroke="#000"
                            className="w-7"
                        ></Cross>
                    </Button>
                </div>
                <div className="mt-10 flex flex-col gap-10">
                    {Links.map((link, i: number) => (
                        <Link
                            className={`text-3xl font-bold text-center navLink`}
                            href={link.link}
                            key={i}
                        >
                            {link.text}
                        </Link>
                    ))}
                </div>
                <div>
                    <button
                        className={` border-2 border-lightGreen w-full flex justify-center gap-4 items-center py-2 rounded-full hover:bg-lightGreen duration-200 z-50`}
                    >
                        <Chat className="w-10" color="white "></Chat>
                        <h1 className=" text-3xl font-bold text-white">
                            Write mail
                        </h1>
                    </button>
                </div>
            </aside>
        </nav>
    )
}

export default NavBar
