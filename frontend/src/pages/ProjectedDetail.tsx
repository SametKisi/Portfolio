import ReactMarkdown from "react-markdown"
import useRepos, { useReadme } from "../hooks/useRepos"
import { Link, useParams } from "react-router-dom"
import { ArrowLeftIcon } from "@phosphor-icons/react"

const ProjectedDetail = () => {
    const { name } = useParams() // url alır


    const { data, isPending, error } = useRepos()
    const { data: readme, isPending: readmePending } = useReadme(name)

    if (error) {
        alert("something went wrong")
    }



    const repo = data?.find((f) => f.name === name)
    
    if(!repo){
        return;
    }

    if (isPending) {
        return (
            <div className="animate-pulse">Yükleniyor...</div>
        )
    }
    if (error) {
        alert("Bir sorun oluştu")
    }

    return (
        <div className="p-5">
            <div className="relative w-full h-fit bg-white border border-gray-200 rounded-lg whitespace-break-word">
                <Link className="absolute p-2 box-content cursor-pointer" to="/"><ArrowLeftIcon className="size-6"></ArrowLeftIcon></Link>
                <div className="p-10">
                    <p className="absolute right-5 ">⭐ {repo.stargazers_count}</p>
                    <h3 className="text-lg font-semibold">{repo.name}</h3>
                    {name === "MailGo" && (<div className="border-b-2 border-gray-200">MailGo bir çoklu mail gönderme platformudur.</div>)}
                    {readmePending ? <div className="animate-pulse">Read Me Yükleniyor...</div> : <div className="[&_pre]:whitespace-pre-wrap [&_pre]:break-words"><ReactMarkdown>{readme}</ReactMarkdown></div>}
                    <div className="flex flex-1">
                        <p className="flex flex-1">{new Date(repo.created_at).toLocaleDateString("tr-TR")}</p>
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-[#2563EB]">
                            GitHub'da aç
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectedDetail