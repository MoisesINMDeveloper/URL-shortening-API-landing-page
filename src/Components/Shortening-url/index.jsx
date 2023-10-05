import { useEffect, useState } from "react"
export default function ShorteningUrl() {
    const [links, setLinks] = useState([]);
    const [errorMessage, setErrorMessage] = useState("")
    useEffect(() => {
        // Obtener los datos de localStorage al cargar la página
        const savedLinks = JSON.parse(localStorage.getItem('shortenedLinks')) || [];
        if (savedLinks) {
            setLinks(savedLinks);
        }
    }, []);
    const copyToClipboard = (str, e) => {
        e.preventDefault()
        setTimeout(() => {
            e.target.textContent = "Copy"
            e.target.classList.remove('copied')
        }, 5000)
        e.target.classList.add('copied')
        e.target.textContent = "Copied!"
        if (navigator && navigator.clipboard && navigator.clipboard.writeText)
            return navigator.clipboard.writeText(str);
        return Promise.reject("The Clipboard API is not available.");
    };


    const handleShortenLink = async (e) => {
        e.preventDefault();

        const inputLink = document.getElementById("linkInput").value;

        try {
            // Validar el formato del URL utilizando una expresión regular
            const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

            if (!urlRegex.test(inputLink)) {
                throw new Error("Invalid URL");
            }

            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink}`);

            if (!response.ok) throw new Error(response.statusText);

            const data = await response.json();

            setLinks(prevState => [...prevState, data.result]);
            localStorage.setItem("shortenedLinks", JSON.stringify([...links, data.result]));

            document.getElementById("linkInput").value = "";

        } catch (error) {

            let errorMessage = {
                1: "No URL specified",
                2: "Invalid URL",
                3: "Rate limit reached. Wait a second and try again",
                4: "IP-Address has been blocked because of violating our terms of service",
                5: "shrtcode code (slug) already taken/in use",
                6: "Unknown error",
                7: "No code specified ('code' parameter is empty)",
                8: "Invalid code submitted (code not found/there is no such short-link)",
                9: "Missing required parameters",
                10: "Trying to shorten a disallowed Link. More information on disallowed links"
            };

            if (inputLink === "") {
                errorMessage = "Please add a link";

            } else {
                // Establecer mensaje de error según la causa
                errorMessage = error.message || "Something went wrong";
            }

            // Actualizar estado global de errorMessage
            setErrorMessage(errorMessage);

            return;
        }
    };

    return (
        <section className="mt-[11rem] lg:mt-[40rem] bg-[#f3f3f3] w-[100vw] lg:w-[full]
        ] flex flex-col items-center">
            <form className="relative mt-[-5rem] bg-[#3b3054] p-5 lg:p-[3rem] w-[90vw] flex flex-col rounded-lg items-center lg:flex-row lg:h-[10rem] lg:justify-center lg:items-center" action="">
                <div className="lg:flex-col">
                    <input className={`h-[3rem] w-[18rem] lg:w-[53rem] lg:h-[4rem] rounded-lg mb-4 p-3 lg:mb-[0rem] ${errorMessage ? ' border-2 outline-none border-red-500 hover:border-red-500 placeholder:text-red-300' : ''}`} type="text" id="linkInput" placeholder="Shorten a link here..." />
                    <div className="relative mt-[-1rem] mb-4 w-[20vw]">
                        {errorMessage && (
                            <p className="text-red-500 text-sm italic lg:mt-[1rem] lg:absolute">{errorMessage}</p>
                        )}
                    </div>
                </div>
                <button className="bg-[#2acfcf] h-[3rem] w-[18rem] rounded-lg lg:h-[4rem] lg:w-[10rem] lg:ml-[2rem]" onClick={handleShortenLink} >Shorten it!</button>
            </form>
            <div>
                <div>
                    {links.map((link, index) => (
                        <>
                            <ul key={index} className="w-[90vw] bg-[white] my-6 rounded-lg lg:flex lg:items-center lg:h-[5rem]">
                                <li className="border-b lg:border-none w-[90vw] py-2 px-4">
                                    <p className="text-black text-base py-2 pr-12 overflow-hidden">{link.original_link}</p>
                                </li>
                                <li className="my-4 px-4">
                                    <p className="text-[#2acfcf] text-base">{link.full_short_link}</p>
                                </li>

                                <button className="bg-[#2acfcf] hover:bg-[#3b3054] mx-4 mt-2 mb-4 lg:mb-[0.5rem] h-[2.5rem] w-[81vw] lg:w-[10rem] rounded-lg" onClick={() => copyToClipboard(link.full_short_link, event)}>Copy</button>
                            </ul>
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}