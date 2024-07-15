interface props {
    isNav: boolean
    navType?: string
}

const Webuild = ({ isNav, navType }: props) => {
    return (
        <section
            className={`h-screen w-full flex justify-center items-center overflow-hidden ${navType} ${
                isNav && 'navChange'
            }`}
        >
            <h1 className=" font-rowdies text-[40vw] text-nowrap weBuildText">
                We build
            </h1>
        </section>
    )
}

export default Webuild
