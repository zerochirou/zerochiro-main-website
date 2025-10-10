import Image from "next/image";
import { Card } from "../ui/card";

export default function IconCard(props: { image: string, title: string, description: string }) {
    return (
        <Card className="py-2 px-2 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 transition-colors ease-in-out">
            <div className="flex flex-row items-center gap-4">
                <Image
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${props.image}`}
                    width={100}
                    height={100}
                    className="w-10 rounded-sm"
                    alt={props.title}
                    placeholder="empty"
                />
                <div>
                    <h3 className="font-semibold text-sm">{props.title}</h3>
                    <p className="opacity-50 text-xs">{props.description} weapon type</p>
                </div>
            </div>
        </Card>
    )
}