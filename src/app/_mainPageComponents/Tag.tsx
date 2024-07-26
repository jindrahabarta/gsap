import React from 'react'

const Tag = ({ children, color }: { children: string; color: string }) => {
    return (
        <div
            className={`
        ${color === 'violet' && 'bg-[#d478ff] hover:bg-[#c954ff]'}
        ${color === 'yellow' && 'bg-[#ffec00] hover:bg-[#fff350]'}
        ${color === 'green' && 'bg-[#15e499] hover:bg-[#2fbe8a]'}
        px-2 py-1 h-fit w-fit uppercase  text-md font-roboto rounded-lg duration-200 hover:cursor-pointer`}
        >
            {children}
        </div>
    )
}

export default Tag
