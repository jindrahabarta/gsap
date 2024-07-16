import React from 'react'
import Image from 'next/image'
import Tag from './Tag'

interface props {
    isNav: boolean
    navType?: string
}

const ChangeBgSection = ({ isNav, navType }: props) => {
    return (
        <section
            className={`w-full pt-64 px-20 ] bg-black rounded-t-3xl ${navType} ${
                isNav && 'navChange'
            }`}
            id="changeBgSection"
        >
            <div className="flex justify-center gap-14">
                <div className=" flex-2">
                    <h2 className="text-white font-rowdies text-5xl">
                        Marketplaces
                    </h2>
                    <Image
                        className="rounded-3xl mt-52 w-full"
                        src="https://iguana.technology/images/projects/boatsetter-big.webp"
                        alt="image1"
                        width={500}
                        height={500}
                    ></Image>
                    <div className="mt-2 w-full flex items-center justify-between">
                        <h3 className=" text-white font-rowdies text-3xl">
                            BOATSETTER
                        </h3>
                        <div className="flex gap-2">
                            <Tag color="violet">Design</Tag>
                            <Tag color="violet">Dev</Tag>
                        </div>
                    </div>
                </div>
                <div className=" flex-3">
                    <Image
                        className="rounded-3xl w-full"
                        src="https://iguana.technology/images/projects/campiri-big.webp"
                        alt="image1"
                        width={500}
                        height={500}
                    ></Image>
                    <div className="mt-2 w-full flex items-center justify-between">
                        <h3 className=" text-white font-rowdies text-3xl">
                            CARIVIO
                        </h3>
                        <div className="flex gap-2">
                            <Tag color="violet">Design</Tag>
                            <Tag color="violet">Dev</Tag>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-14 mt-32">
                <div className=" flex-3">
                    <Image
                        className="rounded-3xl w-full"
                        src="https://iguana.technology/images/projects/carivio-big.webp"
                        alt="image1"
                        width={500}
                        height={500}
                    ></Image>
                    <div className="mt-2 w-full flex items-center justify-between">
                        <h3 className=" text-white font-rowdies text-3xl">
                            CAMPIRI
                        </h3>
                        <div className="flex gap-2">
                            <Tag color="green">Design</Tag>
                            <Tag color="green">Dev</Tag>
                        </div>
                    </div>
                </div>
                <div className=" text-right flex-2">
                    <h2 className="text-white font-rowdies text-5xl">SAAS</h2>
                    <h2 className="text-white font-rowdies text-5xl">
                        PRODUCTS
                    </h2>
                </div>
            </div>

            <div className="flex justify-center gap-14 mt-32">
                <div className=" text-left flex-2">
                    <h2 className="text-white font-rowdies text-5xl">UX AND</h2>
                    <h2 className="text-white font-rowdies text-5xl">
                        CREATIVE
                    </h2>
                    <h2 className="text-white font-rowdies text-5xl">DESIGN</h2>
                </div>
                <div className=" flex-3">
                    <Image
                        className="rounded-3xl w-full"
                        src="https://iguana.technology/images/projects/vivodeportes-big.webp"
                        alt="image1"
                        width={500}
                        height={500}
                    ></Image>
                    <div className="mt-2 w-full flex items-center justify-between">
                        <h3 className=" text-white font-rowdies text-3xl">
                            VIVODEPORTES
                        </h3>
                        <div className="flex gap-2">
                            <Tag color="yellow">Design</Tag>
                            <Tag color="yellow">Dev</Tag>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChangeBgSection
