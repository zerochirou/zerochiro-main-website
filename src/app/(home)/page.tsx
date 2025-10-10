import dynamic from "next/dynamic";
import { homeData } from "./_data/home-data";
import { Metadata } from "next";

const HeaderIsland = dynamic(() => import("@/components/island/header-island"))
const SchoolCard = dynamic(() => import("@/components/island/school-card-island"))
const WeaponBlock = dynamic(() => import("./_components/weapon-block"))

export const metadata: Metadata = {
  title: "Zerochiro main website | Homepage",
  description: "Student as programmer, currently in education 🎭",
  keywords: ["zerochiro", "zero", "chiro", "herya", "programmer", "student programmer", "herya", "kafie", "kafie el azzam heryadi", "archimedes hub", "archimedes", "mtsn2kotakediri", "mtsn 2", "kota kediri", "kediri", "jawa timur"],
   alternates: {
    canonical: "https://zerochiro.netlify.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - Zerochiro main website",
    description: "Student as programmer, currently in education 🎭",
    images: ["https://zerochiro.netlify.app/images/gallery/image-1.png"],
  },
  openGraph: {
    title: "Zerochiro main website",
    description: "Student as programmer, currently in education 🎭",
    siteName: "Zerochiro main website | Homepage",
    url: "https://zerochiro.netlify.app/",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://zerochiro.netlify.app/images/gallery/image-1.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://zerochiro.netlify.app/favicon.ico",
        width: 800,
        height: 600,
      },
    ]
  },
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pt-10">
      <HeaderIsland />
      <div className="w-full border border-primary/20 my-10"></div>
      <WeaponBlock />
      <section>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Education</h3>
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
          {homeData.schools.map((i, index) => {
            return (
              <SchoolCard key={index} title={i.title} description={i.description} image={i.image} />
            )
          })}
        </ul>
      </section>
    </main >
  );
}
