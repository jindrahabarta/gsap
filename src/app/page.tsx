import ChangeBgSection from './_mainPageComponents/ChangeBgSection'
import ColorSec from './_mainPageComponents/ColorSec'
import Hero from './_mainPageComponents/Hero'
import TextEffect from './_mainPageComponents/TextEffect'
import VideoSection from './_mainPageComponents/VideoSection'
import Webuild from './_mainPageComponents/Webuild'

export default function Home() {
    return (
        <main className="flex flex-col items-center mainContainer ">
            <Hero isNav={false}></Hero>
            <VideoSection isNav={true} navType="blackNav"></VideoSection>
            <Webuild isNav={true} navType="blackNav"></Webuild>

            <ColorSec isNav={true} navType="blackNav"></ColorSec>

            <TextEffect isNav={true} navType="blackNav"></TextEffect>

            <ChangeBgSection isNav={false} navType="blackNav"></ChangeBgSection>
            <section className="h-[70vh] w-full bg-gradient-to-b from-[#bd7bff] via-[#ffeca7b3] to-white"></section>
        </main>
    )
}
