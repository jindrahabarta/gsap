'use client'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

const Loader = ({ path }: { path: string }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(false)
        document.body.classList.add('noScroll')
        setTimeout(() => {
            setIsLoaded(true)
            document.body.classList.remove('noScroll')
        }, 2000)

        // //LOADER
        // gsap.fromTo(
        //     '.loadingDot',
        //     {
        //         autoAlpha: 0,
        //     },
        //     {
        //         autoAlpha: 1,

        //         stagger: 0.2,
        //         duration: 0.2,
        //         repeat: -1,
        //     }
        // )
    }, [path])

    if (!isLoaded) {
        return (
            <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-white z-50">
                <h1 className=" font-rowdies text-3xl">
                    Loading
                    <span className="loadingDot font-rowdies invisible">.</span>
                    <span className="loadingDot font-rowdies invisible">.</span>
                    <span className="loadingDot font-rowdies invisible">.</span>
                </h1>
            </div>
        )
    }
}

export default Loader
