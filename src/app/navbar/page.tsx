import React from 'react'
import NavBar from './_components/NavBar'

const page = () => {
    const links: { link: string; text: string }[] = [
        {
            link: '#section-0',
            text: 'Section 1',
        },
        {
            link: '#section-1',
            text: 'Section 2',
        },
        {
            link: '#section-2',
            text: 'Section 3',
        },
        {
            link: '#section-3',
            text: 'Section 4',
        },
    ]

    return (
        <main className="navPageTrigger scroll-smooth">
            <NavBar data={links}></NavBar>

            {links &&
                links.map((section, index) => (
                    <section
                        key={index}
                        id={`section-${index}`}
                        className={`h-screen flex justify-center items-center ${index}`}
                    >
                        <h1 className="text-6xl font-roboto">{section.text}</h1>
                    </section>
                ))}
        </main>
    )
}

export default page
