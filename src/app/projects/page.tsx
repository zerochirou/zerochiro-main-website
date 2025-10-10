// import { ProjectCardIsland } from "@/components/island/card-island"
import { Badge } from "@/components/ui/badge"
import { getUserRepo } from "@/lib/api/github"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import { Suspense } from "react"

const ProjectCardIsland = dynamic(() => import("@/components/island/project-card-island"))

export const metadata: Metadata = {
  title: "Zerochiro main website | Projects",
  description: "Student as programmer, currently in education 🎭",
  keywords: ["zerochiro", "zero", "chiro", "herya", "programmer", "student programmer", "herya", "kafie", "kafie el azzam heryadi", "archimedes hub", "archimedes", "mtsn2kotakediri", "mtsn 2", "kota kediri", "kediri", "jawa timur"],
   alternates: {
    canonical: "https://zerochiro.netlify.app/projects",
  },
   twitter: {
    card: "summary_large_image",
    title: "Project - Zerochiro main website",
    description: "Student as programmer, currently in education 🎭",
    images: ["https://zerochiro.netlify.app/images/gallery/image-2.png"],
  },
  openGraph: {
    title: "Zerochiro main website | projects",
    description: "Student as programmer, currently in education 🎭",
    siteName: "Zerochiro main website | projects",
    url: "https://zerochiro.netlify.app/projects",
    images: [
       {
        url: "https://zerochiro.netlify.app/images/gallery/image-2.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://zerochiro.netlify.app/favicon.ico",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default async function ProjectsPage() {
    const repos = await getUserRepo()
    return (
        <main className="mx-auto max-w-3xl sm:px-0 px-4 ">
            <div className="flex flex-col items-center">
                <Badge className="font-mono mt-4 mb-2">{repos.length} Repositories active</Badge>
                <h3 className="font-bold scroll-m-20 text-4xl text-center">Projects Vault</h3>
            </div>
            <p className="text-center opacity-50">My small and simple project</p>
            <ul className="mt-10 grid grid-cols-1 gap-4">
                <Suspense fallback={<p>loading...</p>}>
                    {repos.map((i, index) => {
                        return (
                            <ProjectCardIsland key={index} title={i.name} description={i?.description || "no description"} branch={i.default_branch} lisence={i.license?.name || "no license"} lang={i.language || "no lang"} htmlLink={i.html_url} />
                        )
                    })}
                </Suspense>
            </ul>
        </main>
    )
}