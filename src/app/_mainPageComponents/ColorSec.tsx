interface props {
    isNav: boolean
    navType?: string
}

const ColorSec = ({ isNav, navType }: props) => {
    return (
        <section className={`w-full  px-4 ${navType} ${isNav && 'navChange'}`}>
            <div className="w-full h-[100dvh] sm:h-full flex justify-center items-center overflow-hidden bg-green-400 border-4 border-black rounded-3xl ">
                <div className=" flex justify-center items-center p-10 text-center">
                    <h3 className=" text-[9vw] font-rowdies">
                        PRODUCT AND DEV PARTNERS FOR YOUR
                        <span className="text-[9vw] font-bold big"> BIG </span>
                        IDEA.
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default ColorSec
