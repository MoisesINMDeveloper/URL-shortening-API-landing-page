import ShorteningURL from "../../Components/Shortening-url"
import CardsInfo from "../../Components/CardsInfo"
import IllustrationWorking from "/illustration-working.svg"

export default function Home() {
    return (
        <main className="flex flex-col items-center mt-8 lg:mx-[6rem] lg:mt-6">
            <div className="w-[100%] flex flex-col items-center justify-center lg:flex lg:flex-row-reverse lg:justify-between lg:absolute">
                <img className="object-cover object-left lg:ml-[0] lg:w-[38rem] w-[24rem] lg:h-[28rem] h-[20rem] pl-[2rem] mt-[-1rem] lg:mt-[0rem]" src={IllustrationWorking} alt="Illustration Working" />
                <div className=" flex flex-col justify-center items-center lg:justify-start lg:items-start lg:w-[32rem] lg:text-start lg:ml-[6rem]">
                    <h1 className="mt-6 mx-[1.5rem] text-[2.6rem] lg:text-[4rem] text-center lg:text-start lg:ml-[0rem] leading-tight font-bold">More than just shorter links </h1>
                    <p className="mx-[1.5rem] mt-3 lg:ml-[0rem] lg:text-start text-center text-[#9e9aa7]">Build your brand&apos;s recognition and get detailed insights on how your links are perfoming.</p>
                    <button className="relative mt-[2rem] bg-[#2acfcf] hover:bg-[#2acfcfa1] h-[3rem] w-[11rem] rounded-3xl ">Get Started</button>
                </div>
            </div>
            <ShorteningURL />
            <article className="bg-[#f3f3f3] w-[100vw] lg:w-[full]">
                <div>
                    <h2 className="mt-[3rem] mb-[1.5rem] text-[1.8rem] text-center leading-tight font-bold">Advanced Statistics</h2>
                    <p className="text-center text-[#9e9aa7]">Track how your links are perfoming across the web with our advanced statistics dashboard.</p>
                </div>
                <CardsInfo />
            </article>
            <section className="w-[100vw] lg:w-[full]">
                <div className="flex flex-col justify-center items-center bg-[url('/bg-boost-mobile.svg')] lg:bg-[url('/bg-boost-desktop.svg')] bg-[#3b3054] w-full lg:w-[100%] h-[15rem]">
                    <h3 className="text-white mt-[2rem] mb-[1.8rem] text-[1.6rem] text-center leading-tight font-bold">Boost your links today</h3>
                    <button className="relative bg-[#2acfcf] hover:bg-[#2acfcfa1] hover:text-[#ffffffc4] h-[3rem] w-[11rem] rounded-3xl ">Get Started</button>
                </div>
            </section>
        </main>
    )
}