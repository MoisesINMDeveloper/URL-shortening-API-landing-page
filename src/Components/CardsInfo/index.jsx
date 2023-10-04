import BrandIcon from "/icon-brand-recognition.svg"
import DetailedIcon from "/icon-detailed-records.svg"
import FullyIcon from "/icon-fully-customizable.svg"
export default function CardsDetails() {
    return (
        <article className="relative px-[24px] flex flex-col gap-[90px] lg:px-0 before:block before:w-[8px] before:h-[750px] before:right-[50%] before:translate-x-[50%] before:absolute before:bg-primary md:before:hidden desktop:flex-row desktop:w-full desktop:gap-0 desktop:justify-between desktop:before:block desktop:before:h-[8px] desktop:before:w-[1000px] desktop:before:top-[50%] desktop:before:translate-y-[-50%]">
            <div className="lg:w-[75%] lg:mx-auto">
                <h2 className="mb-[20px] text-darkViolet text-center text-[27px] font-bold lg:text-4xl lg:mb-[30px]">Advanced Statistics</h2>
                <p className="text-center text-[16px] text-gray-400 mb-[95px] lg:text-[18px] lg:max-w-[530px] lg:mx-auto lg:leading-9">Track how your links are performing across the web with our advanced statistics dashboard.</p>

                {/* Cards Container*/}
                <div className="relative px-[24px] flex flex-col gap-[90px] lg:px-0 before:block before:w-[8px] before:h-[750px] before:right-[50%] before:translate-x-[50%] before:absolute before:bg-primary md:before:hidden desktop:flex-row desktop:w-full desktop:gap-0 desktop:justify-between desktop:before:block desktop:before:h-[8px] desktop:before:w-[1000px] desktop:before:top-[50%] desktop:before:translate-y-[-50%]">
                    {/* Card Brand Recognition */}
                    <div className="bg-white relative pt-[70px] px-[20px] pb-[45px] rounded-[10px] md:w-[350px] md:self-start md:h-[270px] md:px-[35px]">
                        <div className="w-[90px] h-[90px] bg-secondary absolute top-[-45px] left-[50%] -translate-x-[50%] rounded-full flex justify-center items-center md:left-[25%]">
                            <img src={BrandIcon} alt="" />
                        </div>
                        <h3 className="text-center font-bold text-[18px] text-darkViolet md:text-start md:text-[22px]">Brand Recognition</h3>
                        <p className="text-[14px] text-gray-400 mt-[10px] text-center leading-6 md:text-start md:text-[15px] md:leading-7">Boost your brand recognition with each click. Generic links don&apos;t mean a thing. Branded links help instil confidence in your content.</p>
                    </div>

                    {/* Card Detailed Records*/}
                    <div className="bg-white relative pt-[70px] px-[20px] pb-[45px] rounded-[10px] md:w-[350px] md:self-center md:h-[270px] md:px-[35px] desktop:mt-[45px]">
                        <div className="w-[90px] h-[90px] bg-secondary absolute top-[-45px] left-[50%] -translate-x-[50%] rounded-full flex justify-center items-center md:left-[25%]">
                            <img src={DetailedIcon} alt="" />
                        </div>
                        <h3 className="text-center font-bold text-[18px] text-darkViolet md:text-start md:text-[22px]">Detailed Records</h3>
                        <p className="text-[14px] text-gray-400 mt-[10px] text-center leading-6 md:text-start md:text-[15px] md:leading-7">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions</p>
                    </div>

                    {/* Card Fully Customizable */}
                    <div className="bg-white relative pt-[70px] px-[15px] pb-[45px] rounded-[10px] md:w-[350px] md:self-end md:h-[270px] md:px-[35px] desktop:mt-[90px]">
                        <div className="w-[90px] h-[90px] bg-secondary absolute top-[-45px] left-[50%] -translate-x-[50%] rounded-full flex justify-center items-center ">
                            <img src={FullyIcon} alt="" />
                        </div>
                        <h3 className="text-center font-bold text-[18px] text-darkViolet md:text-start md:text-[22px]">Fully Customizable</h3>
                        <p className="text-[15px] text-gray-400 mt-[10px] text-center leading-6 md:text-start md:text-[14px] md:leading-7">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement</p>
                    </div>
                </div>
            </div>
        </article >
    )
}