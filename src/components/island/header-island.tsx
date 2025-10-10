"use client"

import Image from "next/image";
import { useEffect } from "react";
import { usePersonality } from "@/store/usePersonality";
import { toast } from "sonner"

export default function HeaderIsland() {
    const { personality, setPersonality } = usePersonality()
    useEffect(() => {
        setTimeout(() => {
            toast.info(<div className="text-lg font-semibold">Click profile photo 👆🏻</div>)
        }, 3000);
    }, [])
    return (
        <main>
            <section className='flex flex-col items-center justify-center  gap-4'>
                <div>
                    <button
                        onClick={setPersonality}
                        className={`rounded-full overflow-hidden p-1 transition-transform duration-300 hover:scale-105`}
                    >
                        <Image
                            src={personality ? "/images/icon/zerochiro-human.png" : "/favicon.ico"}
                            alt="Herya"
                            width={300}
                            height={300}
                            className={`sm:w-50 w-40 rounded-full transition-all duration-500 ease-in-out ${personality ? "opacity-100 scale-100" : "opacity-100 scale-95"
                                }`}
                        />
                    </button>
                </div>
                <div className='text-center'>
                    <h1
                        key={personality ? "herya" : "zerochiro"}
                        className="text-6xl font-bold transition-opacity duration-700 ease-in-out opacity-100 animate-fade"
                    >

                        <span className="">
                            {personality ? "Hi There, I'm Herya 👋" : "Zerochiro 🎭"}
                        </span>{" "}

                    </h1>
                    <h4 className='sm:text-2xl text-lg mt-2 font-semibold opacity-50'>
                        {personality ? "Student" : "Programmer"}
                    </h4>
                </div>
            </section>

            <section className="mt-10">
                <h1 className='scroll-m-20 text-2xl font-semibold tracking-tight'>About</h1>
                <p className='leading-7 tracking-wide sm:text-xl text-sm opacity-60'>
                    {personality ? "Saya siswa kelas 9 di MTsN 2 Kota Kediri, berusia 15 tahun, dengan minat besar pada teknologi 💻 dan ekonomi 📈." : "Saya adalah alter ego dari Herya, lahir dari obsesi dan ambisi untuk menjadi yang terbaik di dunia teknologi 🧠💻 dan komputer ⚡."}
                </p>
            </section>
            <style jsx>{`
                .animate-fade {
                    animation: fade 0.6s ease-in-out;
                    }
                    @keyframes fade {
                    0% {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </main>
    )
}