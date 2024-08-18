import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const AnimationInit = (path) => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    gsap.registerPlugin(ScrollTrigger)

    //NAVBAR Default
    gsap.set('.navLogoDefault', {
        y: 0,
        opacity: 100,
    })
    gsap.set('.navBar', {
        backgroundColor: 'transparent',
    })
    gsap.set('.pcNavLink', {
        color: 'black',
    })

    //NAVBAR
    const sections = document.querySelectorAll('section')
    document.getElementsByClassName('navBar')[0].classList.remove('hidden')

    sections.forEach((section) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: 'bottom bottom',
            duration: 0.5,

            onEnter: () => {
                if (section.classList.contains('blackNav')) {
                    gsap.to('.navBar', {
                        backgroundColor: 'black',
                    })
                    gsap.to('.pcNavLink', {
                        color: 'white',
                    })
                } else {
                    gsap.to('.navBar', {
                        backgroundColor: 'transparent',
                    })
                    gsap.to('.pcNavLink', {
                        color: 'black',
                    })
                }
            },
            onEnterBack: () => {
                if (section.classList.contains('blackNav')) {
                    gsap.to('.navBar', {
                        backgroundColor: 'black',
                    })
                    gsap.to('.pcNavLink', {
                        color: 'white',
                    })
                } else {
                    gsap.to('.navBar', {
                        backgroundColor: 'transparent',
                    })
                    gsap.to('.pcNavLink', {
                        color: 'black',
                    })
                }
            },
            onUpdate: (self) => {
                if (section.classList.contains('navChange')) {
                    if (self.direction === 1) {
                        gsap.to('.navBar', {
                            y: -100,
                        })
                    } else {
                        gsap.to('.navBar', {
                            y: 0,
                        })
                    }
                } else {
                    gsap.to('.navBar', {
                        y: 0,
                    })
                }
            },
        })
    })

    //FOOTER
    gsap.set('.footerText', {
        visibility: 'visible',
    })
    gsap.fromTo(
        '.footerText',
        {
            y: 200,
        },
        {
            y: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.footerTextTrigger',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: 1,
                toggleActions: 'play none none reset',
            },
        }
    )
}
export default AnimationInit
