import { Card } from "@/components/ui/card";
import projects from "@/constants/projects";
import Image from "next/image";
import ProjectButtons from "./ProjectButtons";

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl sm:text-5xl font-bold">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="text-muted-foreground text-lg">
                        Check out my recent work
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <Card key={project.title} className="p-0">
                            <Image
                                src={project.gifUrl}
                                alt={project.title}
                                width={500}
                                height={500}
                                className="w-full h-auto rounded-t-lg"
                            />
                            <div className="px-7">
                                <h3 className="text-2xl font-bold">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {project.description}
                                </p>
                            </div>
                            <ProjectButtons project={project} />
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
