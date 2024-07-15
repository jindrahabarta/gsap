import React from 'react'

interface props {
    isNav: boolean
    navType?: string
}

const ChangeBgSection = ({ isNav, navType }: props) => {
    return (
        <section
            className={`w-full px-4 h-[300vh] bg-black rounded-t-3xl ${navType} ${
                isNav && 'navChange'
            }`}
            id="changeBgSection"
        >
            <div
                className="h-screen border border-red-500"
                id="changeBg1"
            ></div>
            <div
                className="h-screen border border-green-500"
                id="changeBg2"
            ></div>
            <div
                className="h-screen border border-blue-500"
                id="changeBg3"
            ></div>
        </section>
    )
}

export default ChangeBgSection
