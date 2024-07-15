import Link from 'next/link'
import React from 'react'

const NavLink = ({
    text,
    link,
    index,
}: {
    text: string
    link: string
    index: number
}) => {
    return (
        <Link
            href={link}
            className={`bg-whiteishCustom1 px-4 py-2 rounded-lg shadow-xl relative overflow-hidden`}
        >
            <div
                className={`absolute invisible top-0 left-0 bg-orangeCustom1 h-full z-10 w-full duration-200 navLinkBg-${index}`}
            ></div>
            <p className="text-xl text-grayCustom1font-semibold relative z-20">
                {text}
            </p>
        </Link>
    )
}

export default NavLink
