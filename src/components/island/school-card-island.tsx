import Image from "next/image";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { GitBranch, Github, Scale } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function SchoolCard(props: { image: string, title: string, description: string }) {
    return (
        <Card className='flex flex-row items-center gap-4 py-2 px-2 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 transition-colors ease-in-out'>
            <div>
                <Image
                    src={`/images/schools/${props.image}`}
                    alt={props.title}
                    width={300}
                    height={300}
                    className='w-15'
                    placeholder="empty"
                />
            </div>
            <div>
                <h3 className='font-bold text-md'>{props.title}</h3>
                <p className='opacity-50 text-sm wrap-normal w-60'>{props.description}</p>
            </div>
        </Card>
    );
}

export function ProjectCardIsland(props: { title: string, description: string, branch: string, lisence: string, lang: string, htmlLink: string }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-semibold font-mono text-xl">{props.title}</CardTitle>
                <CardDescription>{props.description}</CardDescription>
                <CardAction className="flex flex-wrap items-center gap-2">
                    <Badge className="md:flex hidden flex-row items-center gap-1 font-mono">
                        <GitBranch />{props.branch}
                    </Badge>
                    <Badge className="md:flex hidden flex-row items-center gap-1 font-mono">
                        <Scale />{props.lisence}
                    </Badge>
                </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col justify-end">
                <div className="sm:mb-0 mb-4 flex flex-wrap items-center gap-2">
                    <Badge className="md:hidden flex flex-row items-center gap-1 font-mono">
                        <GitBranch />{props.branch}
                    </Badge>
                    <Badge className="md:hidden flex flex-row items-center gap-1 font-mono">
                        <Scale />{props.lisence}
                    </Badge>
                </div>
                <a href={props.htmlLink}>
                    <Button size={'sm'}><Github /> Github</Button>
                </a>
            </CardContent>
        </Card>
    )
}