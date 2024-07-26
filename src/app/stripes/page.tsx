'use client'
import React, { useState } from 'react'
import './style.css'

const page = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    setTimeout(() => {
        setIsLoaded(true)
        console.log(isLoaded)
    }, 200)

    return (
        <main className="h-screen w-full flex">
            <section className="flex-1 h-full bg-red-300">
                <div
                    className={`${
                        isLoaded && 'stripe'
                    } stripeDelay1 bg-red-400 h-full opacity-0`}
                ></div>
            </section>
            <section className="flex-1 h-full bg-green-300">
                <div
                    className={`${
                        isLoaded && 'stripe'
                    } stripeDelay1 bg-red-400 h-full opacity-0`}
                ></div>
            </section>
            <section className="flex-1 h-full bg-blue-300">
                <div
                    className={`${
                        isLoaded && 'stripe'
                    } stripeDelay1 bg-red-400 h-full opacity-0`}
                ></div>
            </section>
        </main>
    )
}

export default page
