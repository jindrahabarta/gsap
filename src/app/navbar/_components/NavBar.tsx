'use client'
import React, { useEffect, useState } from 'react'
import NavLink from './NavLink'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const NavBar = (data: any) => {
    gsap.registerPlugin(ScrollTrigger)
    const [navProgressWidth, setNavProgressWidth] = useState<number>(0)

    useGSAP(() => {
        document.getElementsByClassName('navBar')[0].classList.add('hidden')

        ScrollTrigger.create({
            trigger: '.navPageTrigger',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            onUpdate: (self) => {
                setNavProgressWidth(self.progress * 100)
            },
        })

        const sections = document.querySelectorAll('section')

        sections.forEach((section) => {
            const secName = section.classList[4]
            const navLink = document.querySelector(`.navLinkBg-${secName}`)

            setTimeout(() => {
                gsap.set(navLink, {
                    visibility: 'visible',
                })
            }, 1000)

            gsap.set(navLink, {
                xPercent: '-101',
            })

            if (navLink) {
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top center',
                    end: 'bottom center',

                    scrub: 0,
                    onUpdate: (self: any) => {
                        const prog = self.progress
                        const x = prog * 100 - 101

                        gsap.set(navLink, {
                            xPercent: x,
                            right: 0,
                        })
                    },
                    onLeave: () => {
                        gsap.to(navLink, {
                            xPercent: 101,
                            duration: 0.3,
                            ease: 'power3.inOut',
                        })
                    },
                })
            }
        })
    }, [])

    return (
        <aside className="fixed flex justify-center items-center gap-4 py-4 w-full bg-grayCustom1 overflow-hidden rounded-b-xl z-40">
            <div
                className="absolute top-0 left-0 h-full w-full bg-grayCustom2 navProgress"
                style={{ width: navProgressWidth + '%' }}
            ></div>
            {data &&
                data.data.map((link: any, i: number) => (
                    <React.Fragment key={i}>
                        <NavLink
                            index={i}
                            text={link.text}
                            link={link.link}
                        ></NavLink>
                    </React.Fragment>
                ))}
        </aside>
    )
}

export default NavBar
