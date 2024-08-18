import Button from './Button'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className=" px-2 sm:px-4  mt-10 flex justify-center">
            <div className="max-w-[1200px] bg-darkBlue w-full p-2 sm:p-10 pb-10 sm:pb-0 border-black border-2 border-t-4 rounded-t-2xl">
                <div className="flex flex-col lg:flex-row justify-center gap-10">
                    <div className="bg-purple text-white p-4 lg:w-1/3 w-full rounded-2xl flex flex-col gap-4">
                        <h2>our habitat</h2>

                        <div>
                            <p>
                                <span className="font-bold">USA</span>
                                ,1064 Angie Drive Pomona, CA 91766
                            </p>
                        </div>
                        <p>
                            VAT Number: 000000000 <br />
                            Bank Account: 00000000000/0000 <br />
                            IBAN: CZ0000000000000000000000
                        </p>
                        <Link href="tel:222333333">
                            <Button className="w-full">
                                <h3 className="text-darkBlue font-bold text-2xl">
                                    +420 333 333 333
                                </h3>
                            </Button>
                        </Link>
                        <Link
                            target="_blank"
                            href="https://www.google.com/maps/place/REMA+1000+PARADIS/@60.3361334,5.3461062,16.92z/data=!4m15!1m8!3m7!1s0x46390d4966767d77:0x9e42a03eb4de0a08!2sBergen!3b1!8m2!3d60.3912628!4d5.3220544!16zL20vMGZtN3M!3m5!1s0x463cf90fa5beefe1:0x32b49eb886996f48!8m2!3d60.3365012!4d5.3451764!16s%2Fg%2F11jj36fvpj?entry=ttu"
                        >
                            <Button className="w-full">
                                <h3
                                    className="text-darkBlue font-bold
                             text-2xl"
                                >
                                    View on map
                                </h3>
                            </Button>
                        </Link>
                    </div>
                    <div className="bg-lightGreen p-4 lg:w-1/3 w-full rounded-2xl flex flex-col justify-between gap-4">
                        <div>
                            <h2>our colony</h2>
                            <p>
                                <span className=" font-bold">USA</span>, 4717
                                Worthington Drive, Red Oak, TX 75154
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Link href="tel:222333333">
                                <Button className="w-full">
                                    <h3 className="text-darkBlue font-bold text-2xl">
                                        +420 333 333 333
                                    </h3>
                                </Button>
                            </Link>
                            <Link
                                target="_blank"
                                href="https://www.google.com/maps/place/REMA+1000+PARADIS/@60.3361334,5.3461062,16.92z/data=!4m15!1m8!3m7!1s0x46390d4966767d77:0x9e42a03eb4de0a08!2sBergen!3b1!8m2!3d60.3912628!4d5.3220544!16zL20vMGZtN3M!3m5!1s0x463cf90fa5beefe1:0x32b49eb886996f48!8m2!3d60.3365012!4d5.3451764!16s%2Fg%2F11jj36fvpj?entry=ttu"
                            >
                                <Button className="w-full">
                                    <h3
                                        className="text-darkBlue font-bold
                             text-2xl"
                                    >
                                        View on map
                                    </h3>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-yellow p-4 lg:w-1/3 w-full rounded-2xl flex flex-col justify-between">
                        <h2>lets chat</h2>
                        <div className="flex flex-col gap-4">
                            <Link href="mailto:eee@email.cz">
                                <Button className="w-full">
                                    <h3 className="text-darkBlue font-bold text-2xl">
                                        eee@email.cz
                                    </h3>
                                </Button>
                            </Link>
                            <Link href="mailto:eee@email.cz">
                                <Button className="w-full">
                                    <h3 className="text-darkBlue font-bold text-2xl">
                                        eee@email.cz
                                    </h3>
                                </Button>
                            </Link>
                            <Link href="mailto:eee@email.cz">
                                <Button className="w-full">
                                    <h3 className="text-darkBlue font-bold text-2xl">
                                        eee@email.cz
                                    </h3>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center overflow-hidden footerTextTrigger">
                    <h1 className="text-[6vw] text-center font-rowdies text-white invisible footerText">
                        GSAP{'\u00A0'}
                    </h1>

                    <h1 className="text-[6vw] text-center font-rowdies text-white invisible footerText">
                        Technology
                    </h1>
                </div>
            </div>
        </footer>
    )
}

export default Footer
