import FacebookLogo from "/icon-facebook.svg"
import TwitterLogo from "/icon-twitter.svg"
import PinteresLogo from "/icon-pinterest.svg"
import InstagramLogo from "/icon-instagram.svg"
export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center lg:flex-row bg-[#1c1827] w-[100%] lg:w-[100vw] pb-[3rem]">
            <div className="lg:flex lg:items-center lg:justify-center text-center my-[3rem]">
                <h3 className="text-[2.9rem] md:text-[2.9rem] font-bold text-white mb-[2rem] lg:mr-[50rem] lg:mt-[-7rem] lg:block lg:absolute" >Shortly</h3>
                <div className="lg:flex lg:items-center lg:justify-start lg:ml-[15rem]">
                    <ul className="lg:flex lg:flex-col lg:items-start lg:mx-[4rem]">
                        <li className="mb-[2rem] mt-[1.5rem] lg:mt-[0]">Features</li>
                        <p className="text-[#9e9aa7] mb-[.5rem] lg:cursor-pointer lg:hover:text-[#2acfcf]">Link Shortening</p>
                        <p className="text-[#9e9aa7] mb-[.5rem] lg:cursor-pointer lg:hover:text-[#2acfcf]">Branded Links</p>
                        <p className="text-[#9e9aa7] mb-[.5rem] lg:cursor-pointer lg:hover:text-[#2acfcf]">Analytics</p>
                    </ul>
                    <ul className="lg:flex lg:flex-col lg:items-start lg:mx-[2rem]">
                        <li className="mb-[2rem] mt-[3.5rem] lg:mt-[0]">Resources</li>
                        <p className="text-[#9e9aa7] mb-[.5rem] lg:cursor-pointer lg:hover:text-[#2acfcf]">Blog</p>
                        <p className="text-[#9e9aa7] mb-[.5rem] lg:cursor-pointer lg:hover:text-[#2acfcf]">Developers</p>
                        <p className="text-[#9e9aa7] mb-[.5rem] lg:cursor-pointer lg:hover:text-[#2acfcf]">Support</p>
                    </ul>
                    <ul className="lg:flex lg:flex-col lg:items-start lg:mt-[0rem] lg:mx-[4rem]">
                        <li className="mb-[2rem] mt-[3.5rem] lg:mt-[2.2rem]">Company</li>
                        <p className="text-[#9e9aa7] mb-[.5rem] lg:cursor-pointer lg:hover:text-[#2acfcf]">About</p>
                        <p className="text-[#9e9aa7] mb-[.5rem] lg:cursor-pointer lg:hover:text-[#2acfcf]">Our Team</p>
                        <p className="text-[#9e9aa7] mb-[.5rem] lg:cursor-pointer lg:hover:text-[#2acfcf]">Careers</p>
                        <p className="text-[#9e9aa7] mb-[.5rem] lg:cursor-pointer lg:hover:text-[#2acfcf]">Contact</p>
                    </ul>
                </div>
            </div>
            <div className="flex lg:mt-[-8.5rem] lg:ml-[1rem]">
                <img className="mx-[.7rem] lg:cursor-pointer lg:hover:text-[#2acfcf]" src={FacebookLogo} alt="Facebook Logo" />
                <img className="mx-[.7rem] lg:cursor-pointer lg:hover:text-[#2acfcf]" src={TwitterLogo} alt="Twitter Logo" />
                <img className="mx-[.7rem] lg:cursor-pointer lg:hover:text-[#2acfcf]" src={PinteresLogo} alt="Pinteres Logo" />
                <img className="mx-[.7rem] lg:cursor-pointer" src={InstagramLogo} alt="Instagram Logo" />
            </div>
        </footer>
    )
}