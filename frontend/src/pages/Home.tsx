import { useQuery } from "@tanstack/react-query"
import { ArrowRightIcon, CalendarBlankIcon, ClockIcon, GithubLogoIcon } from "@phosphor-icons/react"
interface Repo {
    id: number
    name: string
    description: string | null
    stargazers_count: number
    created_at: string
    pushed_at: string
    html_url: string
}

const Home = () => {

    const { data, isPending, error } = useQuery({
        queryKey: ['repos'],
        queryFn: getRepos,
    })

    if (error) {
        alert("something went wrong")
    }
    const repos = data?.filter((f) => f.name !== "SametKisi") ?? []

    const recent = [...repos]
        .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
        .slice(0, 4)

    return (
        <div>

            {isPending ?
                //skeleeton
                <div className="w-full px-8 py-6 flex gap-6">
                    <div className="flex-1 min-w-0 animate-pulse">
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-2xl font-bold shrink-0">Projeler</h2>
                            <div className="flex-1 border-t border-gray-200"></div>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div
                                className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-h-50 flex flex-col items-start text-left"
                            >
                                <div className="self-end"><div className="bg-gray-200 p-3 rounded-md"/></div>

                                <h3 className="font-semibold break-words"><div className="bg-gray-200 p-3 w-40 rounded-md mb-2"/></h3>
                                <p className="text-gray-500 line-clamp-3">
                                    <div className="bg-gray-200 p-3 w-30 rounded-md"/>
                                </p>

                                <div className="mt-auto pt-4 w-full flex items-center justify-between gap-2">
                                    <div className="flex flex-1 items-center gap-2 text-[#aab7c8]">
                                        <CalendarBlankIcon className="size-5" />
                                        <div className="bg-gray-200 p-3 w-20 rounded-md"/>
                                    </div>
                                    <a
                                        target="_blank"
                                        rel="noreferrer">
                                        <GithubLogoIcon className="size-6" />
                                    </a>
                                    <div
                                        className="bg-[#2564eb8c] p-3 w-20 flex items-center gap-2 rounded-md "
                                    >
                                    </div>
                                </div>
                            </div>
                        </ul>

                    </div>
                </div>
                :
                <div className="min-h-screen w-full bg-[#FAFBFC] flex flex-col">

                    <div className="w-full px-8 py-6 flex gap-6">

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-4 mb-4">
                                <h2 className="text-2xl font-bold shrink-0">Projeler</h2>
                                <div className="flex-1 border-t border-gray-200"></div>
                            </div>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {repos.map((p) => (
                                    <li
                                        key={p.id}
                                        className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-h-50 flex flex-col items-start text-left"
                                    >
                                        <div className="self-end">⭐ {p.stargazers_count}</div>

                                        <h3 className="font-semibold break-words">{p.name}</h3>
                                        <p className="text-gray-500 line-clamp-3">
                                            {p.description ?? "Açıklama yok"}
                                        </p>

                                        <div className="mt-auto pt-4 w-full flex items-center justify-between gap-2">
                                            <div className="flex flex-1 items-center gap-2 text-[#aab7c8]">
                                                <CalendarBlankIcon className="size-5" />
                                                {new Date(p.created_at).toLocaleDateString("tr-TR")}
                                            </div>
                                            <a
                                                href={p.html_url}
                                                target="_blank"
                                                rel="noreferrer">
                                                <GithubLogoIcon className="size-6" />
                                            </a>
                                            <div
                                                className="text-[#2563EB] flex items-center gap-2 cursor-pointer"
                                            >
                                                Devamını Oku <ArrowRightIcon className="size-4" />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <aside className="hidden lg:block w-72 shrink-0 self-start p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
                            <p className="flex items-center gap-2 font-semibold mb-4">
                                <ClockIcon className="size-5" />
                                Son Projeler
                            </p>

                            <ul className="flex flex-col gap-4">
                                {recent.map((p) => (
                                    <li key={p.id}>
                                        <a
                                            href={p.html_url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block text-sm font-medium hover:text-[#2563EB]"
                                        >
                                            {p.name}
                                        </a>
                                        <span className="text-xs text-gray-400">
                                            {new Date(p.pushed_at).toLocaleDateString("tr-TR")}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </aside>

                    </div>
                </div>
            }
        </div>

    )
}
const getRepos = async (): Promise<Repo[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await fetch("https://api.github.com/users/SametKisi/repos")
    if (!response.ok) {
        throw new Error(`GitHub API hatası: ${response.status}`)
    }
    return await response.json()
}

export default Home

