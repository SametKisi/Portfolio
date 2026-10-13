import { useQuery } from "@tanstack/react-query"

export interface Repo {
    id: number
    name: string
    description: string | null
    stargazers_count: number
    created_at: string
    pushed_at: string
    html_url: string
}

const useRepos = () => {
    return useQuery({
        queryKey: ['repos'],
        queryFn: getRepos,
    })
}
export const useReadme = (name: string | undefined) => {
    return useQuery({
        queryKey: ['readme', name],
        queryFn: () => getReadme(name!),
        enabled: !!name
    })
}

export const getRepos = async (): Promise<Repo[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await fetch("https://api.github.com/users/SametKisi/repos")
    if (!response.ok) {
        throw new Error(`GitHub API hatası: ${response.status}`)
    }
    return await response.json()
}
export const getReadme = async (name: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await fetch(`https://api.github.com/repos/SametKisi/${name}/readme`, { headers: { Accept: "application/vnd.github.raw+json" } })
    if (response.status === 404) {
        return null
    }
    if (!response.ok) {
        throw new Error(`GitHub API hatası: ${response.status}`)
    }
    return await response.text()
}

export default useRepos