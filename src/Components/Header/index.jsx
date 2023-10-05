import { useState } from "react"
import IconNavMobile from "/nav-icon.svg"
export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <nav className="flex justify-between items-center mx-6 mt-8 md:mx-[6rem] md:mt-6">
            <h1 className="text-[2.9rem] md:text-[2.9rem] font-bold" >Shortly</h1>
            <ul className={`${isNavOpen ? "" : "hidden"} md:inline-flex bg-[#3b3054] absolute mt-[33rem] md:mt-[0] w-[87vw] md:w-[0] h-[62vh] md:h-[0] flex flex-col md:flex-row items-center rounded-xl md:ml-[12rem]`}>
                <li className="md:text-[Gray] hover:text-black cursor-pointer md:mx-[1rem] mt-[2.3rem] md:mt-[0]">Features</li>
                <li className="md:text-[Gray] hover:text-black cursor-pointer md:mx-[1rem] mt-[2.3rem] md:mt-[0]">Pricing</li>
                <li className="md:text-[Gray] hover:text-black cursor-pointer md:mx-[1rem] mt-[2.3rem] md:mt-[0]">Resources</li>
                <li className="mt-[2.5rem] hover:text-black cursor-pointer mb-[2rem] w-[17rem] border-t-[1px] lg:border-t-[0] border-[#9e9aa75b] text-center pt-[2rem] md:text-[Gray] md:mx-[1rem] md:mt-[0] md:ml-[20rem]">Login</li>
                <div>
                    <button className="bg-[Cyan] hover:bg-[#2acfcfa1] w-[17rem] h-[3rem] rounded-3xl md:w-[7rem] md:h-[2.5rem] md:ml-[1rem]">Sign Up</button>
                </div>

            </ul>
            <img className="w-[2rem] h-[2rem] md:hidden" src={IconNavMobile} onClick={handleToggleNav} alt="" />
        </nav >
    )
}