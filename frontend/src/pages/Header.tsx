import { ArrowRightIcon, GithubLogoIcon, EnvelopeSimpleIcon, XIcon, EnvelopeIcon, InstagramLogoIcon } from "@phosphor-icons/react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    return (
        <>
            {isContactOpen && <div className="fixed h-screen w-full  bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="w-80 h-fit flex flex-col bg-gray-800 rounded-lg p-6 text-white gap-5 shadow-2xl">
                    <div className="flex">
                        <h3 className="text-center text-xl flex flex-1">
                            İletişim Bilgileri
                        </h3>
                        <XIcon onClick={() => setIsContactOpen(false)} className="size-5 cursor-pointer hover:bg-gray-500 p-1 box-content rounded-full transition-all" />
                    </div>
                    <div className="flex flex-col w-full bg-gray-700/40 rounded-xl border border-gray-600/50 hover:bg-gray-700/60 transition-colors p-3 cursor-pointer">
                        <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
                            <EnvelopeIcon className="size-4" /> E-Posta
                        </div>
                        <div className="text-gray-200 text-sm font-medium">
                            samet12kisi@gmail.com
                        </div>
                    </div>
                    <div className="flex flex-col w-full bg-gray-700/40 rounded-xl border border-gray-600/50 hover:bg-gray-700/60 transition-colors p-3 cursor-pointer">
                        <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
                            <InstagramLogoIcon className="size-4" /> Instagram
                        </div>
                        <a href="https://instagram.com/_samet.kisi_" target="_blank" rel="noreferrer" className="text-gray-200 text-sm font-medium">
                            @_samet.kisi_
                        </a>
                    </div>
                </div>
            </div>}
            <div className="flex w-full bg-[#1A2332] h-fit items-center px-10 p-5 whitespace-nowrap ">
                <div className="text-white mr-2">{'</> Samet.dev |'}</div>
                <div className="flex flex-1 justify-center gap-3 text-white ">
                    <Link to={"/"} className="cursor-pointer ">Ana sayfa</Link>
                    <Link to={"About"} className="cursor-pointer">Hakkımda</Link>
                    <a onClick={() => setIsContactOpen(true)} className="cursor-pointer">İletişim</a>
                </div>
                <a href={"https://github.com/SametKisi/"}
                    target="_blank"
                    rel="noreferrer" className=" text-black rounded-full bg-white p-1 shrink-0 box-content hidden md:block" >
                    <GithubLogoIcon className="size-6" />
                </a>
            </div>
            <div className="flex flex-col bg-[#0E1620] h-fit w-full text-white gap-4 p-10">
                <div className="font-semibold text-[#AAB7C8]">
                    Merhaba. Ben Samet
                </div>
                <h3 className="text-3xl font-bold text-white">
                    Yazılım Projelerim ve Denemelerim
                </h3>
                <div className="font-semibold text-[#AAB7C8]">Burada geliştirdiğim web uygulamalarını ve okul projelerimi bulabilirsin.</div>
                <div className="flex flex-1 gap-2">
                    <a href={"https://github.com/SametKisi/"}
                        target="_blank"
                        rel="noreferrer"
                        className="border-2 border-[#AAB7CB] rounded-full py-2.5 px-4 w-fit cursor-pointer select-none  flex justify-center items-center gap-2 hover:bg-white transition-all hover:text-black duration-200">
                        <GithubLogoIcon />
                        <div>Github'ı Ziyaret Et</div>
                        <ArrowRightIcon className="size-5" />
                    </a>
                    <a href={"https://github.com/SametKisi/"}
                        target="_blank"
                        rel="noreferrer"
                        className="border-2 border-[#AAB7CB] rounded-full py-2.5 px-4 w-fit cursor-pointer select-none  flex justify-center items-center gap-2 hover:bg-white transition-all hover:text-black duration-200">
                        <EnvelopeSimpleIcon />
                        <a href="mailto:samet12kisi@gmail.com">
                            İletişime geç
                        </a>
                        <ArrowRightIcon className="size-5" />
                    </a>
                </div>

            </div>
        </>
    )
}

export default Header