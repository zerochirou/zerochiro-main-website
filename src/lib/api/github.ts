import { fetcher } from "@/lib/fetcher";
import { GithubRepo } from "@/types/github-type";

export async function getUserRepo() {
    return fetcher<GithubRepo[]>("https://api.github.com/users/zerochirou/repos")
}
