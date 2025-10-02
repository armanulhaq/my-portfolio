"use client";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type ProjectItem = {
    title: string;
    description: string;
    gifUrl: string;
    demo?: string;
    github: string;
};

const ProjectButtons = ({ project }: { project: ProjectItem }) => {
    return (
        <div className="px-7 pb-4 flex gap-4 justify-between items-center">
            {project.demo && (
                <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="p-6 flex items-center text-white">
                        <ExternalLink className="w-4 h-4 " />
                        View Project
                    </Button>
                </Link>
            )}
            {project.github && (
                <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="py-6 flex items-center bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80">
                        <Image
                            src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
                            alt="Github"
                            width={25}
                            height={25}
                        />
                        View Code
                    </Button>
                </Link>
            )}
        </div>
    );
};

export default ProjectButtons;
