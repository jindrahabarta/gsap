'use client'
import { useEffect, useState } from 'react'
import gsap from 'gsap'

import ScrollTrigger from 'gsap/dist/ScrollTrigger'

interface props {
    isNav: boolean
    navType?: string
}

gsap.registerPlugin(ScrollTrigger)

const TextEffect = ({ isNav, navType }: props) => {
    const [textProgress, setTextProgress] = useState(0)

    useEffect(() => {
        ScrollTrigger.create({
            trigger: '.textEff',
            start: 'top 20%',
            end: 'bottom 80%',
            scrub: 1,

            onUpdate: (self) => {
                setTextProgress(self.progress * 100)
            },
        })
    }, [])

    return (
        <section
            className={`h-screen flex items-center textEff ${navType} ${
                isNav && 'navChange'
            }`}
        >
            <div className="relative flex justify-center items-center text-center select-none ">
                <h3
                    className=" text-[9vw] font-rowdies from-transparent  bg-clip-text text-transparent textBg"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right,rgb(0, 0, 0) ' +
                            textProgress +
                            '%, rgba(255, 255, 255,0) ' +
                            textProgress +
                            '%)',
                    }}
                >
                    PRODUCT AND DEV PARTNERS FOR YOUR BIG IDEA.
                </h3>
                <div className=" absolute top-0 left-0 w-full ">
                    <h3 className=" text-[9vw] font-rowdies text-stroke-1 text-stroke-black text-transparent">
                        PRODUCT AND DEV PARTNERS FOR YOUR BIG IDEA.
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default TextEffect
