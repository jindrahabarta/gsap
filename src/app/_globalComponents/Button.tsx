import React, { ReactElement } from 'react'

interface props {
    children?: ReactElement
    handleClick?: any
    className?: string
}

const Button = ({ children, handleClick, className }: props) => {
    return (
        <button
            onClick={handleClick}
            className={`${className} group bg-white border-2 border-darkBlue px-4 py-2 rounded-3xl hover:bg-lightGreen duration-200 z-30`}
        >
            {children}
        </button>
    )
}

export default Button
