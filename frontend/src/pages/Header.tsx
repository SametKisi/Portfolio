import { ArrowRightIcon, GithubLogoIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import About from "./About"

const Header = () => {
    return (
        <>
            <div className="flex w-full bg-[#1A2332] h-fit items-center px-10 p-5">
                <div className="text-white ">{'</> Samet.dev'}</div>
                <div className="flex flex-1 justify-center gap-3 text-white ">
                    <Link to={"/"} className="cursor-pointer">Ana sayfa</Link>
                    <Link to={"About"} className="cursor-pointer">Hakkımda</Link>
                    <div className="cursor-pointer">İletişim</div>
                </div>
                <a href={"https://github.com/SametKisi/"}
                    target="_blank"
                    rel="noreferrer" className=" text-black rounded-full bg-white p-1 shrink-0 box-content " >
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