'use client'
import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Button from '../_globalComponents/Button'
import Reload from '../_icons/Reload'

const page = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 1000)
    }, [])

    return (
        <main className="h-screen flex flex-col gap-4 justify-center items-center">
            {isLoaded ? (
                <div className=" max-w-[30rem] p-4 bg-slate-100 flex gap-4 items-center">
                    <div className="rounded-full min-w-20 h-20 bg-green-500"></div>
                    <div>
                        <h1 className=" text-2xl font-rowdies">Heading</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ex eligendi placeat vel blanditiis quia amet
                            laboriosam velit perspiciatis animi cum!
                        </p>
                    </div>
                </div>
            ) : (
                <div className=" max-w-[30rem] p-4 bg-slate-100 flex gap-4 items-center">
                    <Skeleton
                        circle
                        height="100%"
                        className="min-w-20 min-h-20"
                    />
                    <div className="block w-96">
                        <Skeleton height={25} />
                        <Skeleton count={4} />
                    </div>
                </div>
            )}
            <Button
                handleClick={() => {
                    location.reload()
                }}
            >
                <div className="flex gap-2 z-20">
                    <p>Reload</p>
                    <Reload className="w-6 group-hover:rotate-180 duration-200"></Reload>
                </div>
            </Button>
            {/* <div className="block w-60">
                <h1>
                    <Skeleton height={25} />
                </h1>
                <Skeleton count={5} />
            </div> */}
        </main>
    )
}

export default page
