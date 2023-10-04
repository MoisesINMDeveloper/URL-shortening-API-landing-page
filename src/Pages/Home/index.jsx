import ShorteningURL from "../../Components/Shortening-url"
import CardsInfo from "../../Components/CardsInfo"
import IllustrationWorking from "/illustration-working.svg"

export default function Home() {
    return (
        <main className="flex flex-col items-center mt-8 md:mx-[6rem] md:mt-6">
            <div className="w-[100%]">
                <img className="object-cover object-left w-[24rem] h-[20rem] pl-[1rem] mt-[-1rem]" src={IllustrationWorking} alt="" />
            </div>
            <h1 className="mt-6 mx-[1.5rem] text-[2.6rem] text-center leading-tight font-bold">More than just shorter links </h1>
            <p className="mx-[1.5rem] mt-3 text-center text-[#9e9aa7]">Build your brand&apos;s recognition and get detailed insights on how your links are perfoming.</p>
            <ShorteningURL />
            <section className="bg-[#f3f3f3] w-[100vw]">
                <div>
                    <h1 className="mt-[3rem] mb-[1.5rem] text-[1.8rem] text-center leading-tight font-bold">Advanced Statistics</h1>
                    <p className="text-center text-[#9e9aa7]">Track how your links are perfoming across the web with our advanced statistics dashboard.</p>
                </div>
                <CardsInfo />
            </section>
        </main>
    )
}