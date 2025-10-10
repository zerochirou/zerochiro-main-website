"use client"

import { homeData } from "@/app/(home)/_data/home-data"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { usePersonality } from "@/store/usePersonality"
const IconCard = dynamic(() => import("@/components/island/icon-card-island"))


export default function WeaponBlock() {
  const { personality } = usePersonality()
  if (!personality) {
    return (
      <section className="mt-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">My Weapons</h3>
        <p className="leading-7 opacity-50">My favourite weapons</p>
        <ul className="grid md:grid-cols-3 grid-cols-2 gap-4 mt-4">
          <Suspense fallback={<p>Loading...</p>}>
            {homeData.weapons.map((i, index) => {
              return (
                <IconCard key={index} image={i.image} title={i.title} description={i.type} />
              )
            })}
          </Suspense>
        </ul>
        <div className="w-full border border-primary/20 my-10"></div>
      </section>
    )
  }
}