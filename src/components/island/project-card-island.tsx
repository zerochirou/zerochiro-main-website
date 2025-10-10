import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { GitBranch, Github, Scale } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function ProjectCardIsland(props: { title: string, description: string, branch: string, lisence: string, lang: string, htmlLink: string }) {
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