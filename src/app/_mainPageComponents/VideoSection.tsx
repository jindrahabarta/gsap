import { useGSAP } from '@gsap/react'
import Circle from './Circle'

interface props {
    isNav: boolean
    navType?: string
}

const VideoSection = ({ isNav, navType }: props) => {
    return (
        <section
            className={`w-full h-[250vh] px-4 trigger2 z-10 videoCont ${navType} ${
                isNav && 'navChange'
            }`}
        >
            <div className="w-full h-screen overflow-hidden bg-black rounded-3xl sticky top-0 flex justify-center items-center video">
                <Circle></Circle>
            </div>
        </section>
    )
}

export default VideoSection
