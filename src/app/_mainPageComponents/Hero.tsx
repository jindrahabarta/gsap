interface props {
    isNav: boolean
    navType?: string
}

const Hero = ({ isNav, navType }: props) => {
    return (
        <section
            className={`h-[300vh] w-full px-4 flex flex-col items-center trigger z-20 ${navType} ${
                isNav && 'navChange'
            }`}
        >
            <div className="h-screen w-full sticky top-0 overflow-hidden">
                <div className="h-full flex flex-col justify-center md:flex-row md:items-center md:gap-4 opacity-0 heroContainer">
                    <h1 className="sm:text-[22vw] text-[19vw] leading-[22.3vw] origin-left font-rowdies text-darkBlue  heroText">
                        Scroll
                    </h1>
                    <div>
                        <p className="font-rowdies lg:leading-[64px] text-[25px]  sm:text-[30px] lg:text-[60px] opacity-0 heroTextSmall">
                            Forging
                        </p>

                        <p className="font-rowdies lg:leading-[64px]  text-[25px]  sm:text-[30px] lg:text-[60px] heroTextSmall">
                            Digital
                        </p>
                        <p className="font-rowdies lg:leading-[64px] text-[25px]  sm:text-[30px] lg:text-[60px] heroTextSmall">
                            Something...
                        </p>
                    </div>
                </div>
            </div>

            <div className=" w-full px-4 fixed bottom-0">
                <div className="h-[10vh] relative w-full overflow-hidden rounded-t-3xl">
                    <div
                        className={`h-[10vh] absolute top-0 left-0 w-full min-w-[20%] bg-black rounded-t-3xl invisible videoSec`}
                    ></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
