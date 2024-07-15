'use client'
import { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface props {
    isNav: boolean
    navType?: string
}

const TextEffect = ({ isNav, navType }: props) => {
    const [textProgress, setTextProgress] = useState(0)

    useGSAP(() => {
        const textEff = gsap.timeline({
            scrollTrigger: {
                trigger: '.textEff',
                start: 'top 70%',
                end: '70% 70%',
                scrub: 1,

                onUpdate: (self) => {
                    setTextProgress(self.progress * 100)
                },
            },
        })
    }, [])

    return (
        <section
            className={`h-screen flex items-center ${navType} ${
                isNav && 'navChange'
            }`}
        >
            <div className="relative flex justify-center items-center text-center select-none textEff">
                <h3
                    className=" text-[9vw] font-rowdies from-transparent  bg-clip-text text-transparent"
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
