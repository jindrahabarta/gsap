import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const useInitMainPage = () => {
    gsap.registerPlugin(ScrollTrigger)

    // HERO section
    //FOUC
    gsap.set('.heroContainer', {
        opacity: 100,
        duration: 0.2,
    }).then(() =>
        gsap.set('.videoSec', {
            visibility: 'visible',
        })
    )

    const textTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.trigger',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
        },
    })
    textTl
        .fromTo(
            '.heroText',
            {
                scale: 1.5,
            },
            {
                scale: 1,
            }
        )
        .fromTo(
            '.heroTextSmall',
            {
                opacity: 0,
                x: 100,
                stagger: 0.5,
            },

            {
                opacity: 1,
                x: 0,
                stagger: 0.5,
            }
        )
        .to(
            '.heroTextSmall',

            {
                opacity: 0,
            }
        )

        .set('.heroText', {
            opacity: 0,
        })
        .fromTo(
            '.navLogo',
            {
                y: 200,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
            }
        )

    //Black line HERO
    gsap.set('.videoSec', {
        xPercent: -60,
    })
    ScrollTrigger.create({
        trigger: '.trigger',
        start: 'top top',
        end: '80% 80%',
        scrub: 0,

        onUpdate: (self) => {
            let x = self.progress * 100 * 0.6
            gsap.to('.videoSec', {
                xPercent: x - 60,
            })
        },
    })
    ScrollTrigger.create({
        trigger: '.trigger2',
        start: 'top 90%',
        end: 'top 90%',

        onEnter: () => {
            gsap.set('.videoSec', {
                visibility: 'hidden',
            })
        },
        onEnterBack: () => {
            gsap.set('.videoSec', {
                visibility: 'visible',
            })
        },
    })

    //Video Section
    const videoTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.trigger2',
            scrub: 1,
            once: false,

            start: 'top',
            end: 'bottom 100%',
        },
    })

    videoTl
        .to(
            '.videoCont',

            {
                padding: 0,
            }
        )
        .to(
            '.video',

            {
                borderRadius: 0,
                duration: 0.2,
            },
            '-=100%'
        )
        .to(
            '.videoCont',
            {
                paddingLeft: '1rem',
                paddingRight: '1rem',
            },
            '10'
        )
        .to(
            '.video',

            { borderRadius: '1.5rem', duration: 0.2 },
            '-=100%'
        )

    //Circle animation
    gsap.to('.circleText', {
        rotate: 365,
        duration: 20,
        ease: 'none',
        repeat: -1,
    })

    //Text BIG
    const bigTl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        defaults: {
            ease: 'power1.inOut',
            duration: 1,
        },
    })

    bigTl
        .to('.big', {
            color: '#10f',
        })
        .to('.big', {
            color: 'yellow',
        })
        .to('.big', {
            color: 'red',
        }),
        bigTl.play()

    //WEBuild text
    gsap.to('.weBuildText', {
        scrollTrigger: {
            trigger: '.weBuildText',
            start: '0% 50%',
            end: '100% 50%',

            toggleActions: 'play reverse play reverse',
        },
        ease: 'power2.',
        scale: 0.5,
        duration: 0.2,
    })

    //Change bg section

    const changeBg = gsap.timeline({
        scrollTrigger: {
            trigger: '#changeBgSection',
            start: '20% 50%',
            end: '80% 50%',
            scrub: 1,
            markers: true,
        },
    })

    changeBg
        .to('#changeBgSection', {
            background: '#15e499',
        })
        .to('#changeBgSection', {
            background: '#bd7bff',
        })

    // gsap.to('#changeBgSection', {
    //     scrollTrigger: {
    //         trigger: '#changeBg1',
    //         start: 'top top',
    //         end: 'bottom bottom',
    //         toggleActions: 'play none reverse none',
    //     },
    //     background: 'blue',
    // })

    // gsap.to('#changeBgSection', {
    //     scrollTrigger: {
    //         trigger: '#changeBg2',
    //         start: 'top top',
    //         end: 'bottom bottom',

    //         scrub: 1,
    //     },
    //     background: 'red',
    // })
    // gsap.to('#changeBgSection', {
    //     scrollTrigger: {
    //         trigger: '#changeBg3',
    //         start: 'top top',
    //         end: 'bottom bottom',

    //         scrub: 1,
    //     },
    //     background: 'green',
    // })
}

export default useInitMainPage
