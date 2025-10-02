"use client";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

type ProjectItem = {
    title: string;
    description: string;
    gifUrl: string;
    demo?: string;
    github: string;
};

const ProjectButtons = ({ project }: { project: ProjectItem }) => {
    return (
        <div className="px-7 pb-10 flex gap-4 justify-between items-center">
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
                    <Button
                        variant="outline"
                        className="py-6 flex items-center"
                    >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                    </Button>
                </Link>
            )}
        </div>
    );
};

export default ProjectButtons;
