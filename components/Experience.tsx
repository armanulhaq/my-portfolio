import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Experience = () => {
    const experiences = [
        {
            role: "Associate Software Developer Trainee",
            company: "KPIT",
            duration: "Dec 2023 - Aug 2024",
            location: "Bengaluru, IN",
            description:
                "Contributed to learning and development in the automotive domain, focusing on advanced driver-assistance systems (ADAS) and in-vehicle communication protocols in real-world automotive scenarios.",
            technologies: [
                "AUTOSAR",
                "ADAS",
                "CAN",
                "LIN",
                "IPC",
                "SOME/IP",
                "Automotive Software Architecture",
                "Soft Skills",
                "C",
                "C++",
                "Modern C++",
            ],
            achievements: [
                "Completed professional development training in email writing, meeting etiquette, and time management, strengthening workplace readiness.",
                "Gained exposure to the architecture and design of the ADAS Probe Application, understanding its role in vehicle data processing.",
                "Developed an introductory understanding of inter-process and inter-ECU communication protocols such as IPC and SOME/IP.",
                "Learned about CAN and LIN protocols and their significance in enabling efficient in-vehicle communication.",
                "Acquired foundational knowledge of both Classic and Adaptive AUTOSAR frameworks for software integration in automotive systems.",
            ],
        },
    ];

    return (
        <section id="experience" className="py-20 px-4">
            <div className="container max-w-6xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl sm:text-5xl font-bold">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore my professional journey
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <Card
                            key={index}
                            className="p-8 hover:shadow-lg transition-all"
                        >
                            <div className="space-y-6">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <h3 className="text-2xl font-bold">
                                                {exp.role}
                                            </h3>
                                        </div>
                                        <Link
                                            href="https://www.kpit.com/"
                                            target="_blank"
                                            className="flex items-center gap-3"
                                        >
                                            <Image
                                                src="/KPIT.png"
                                                alt="KPIT"
                                                width={25}
                                                height={25}
                                                className="rounded-md"
                                            />
                                            <p className="text-xl font-semibold hover:text-primary transition-colors hover:scale-105 cursor-pointer">
                                                {exp.company}
                                            </p>
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors hover:scale-105 cursor-pointer">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm font-medium">
                                                {exp.duration}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors hover:scale-105 cursor-pointer">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm font-medium">
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-foreground/80">
                                    {exp.description}
                                </p>

                                <div className="space-y-3">
                                    <h4 className="font-semibold uppercase text-lg">
                                        Key Achievements
                                    </h4>
                                    <ul className="space-y-2">
                                        {exp.achievements.map(
                                            (achievement, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                    <span className="text-foreground/80">
                                                        {achievement}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="font-semibold text-lg uppercase">
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, idx) => (
                                            <Badge
                                                key={idx}
                                                variant="secondary"
                                                className="px-4 py-2 text-sm font-medium bg-muted/50 hover:bg-primary/20 hover:text-primary border border-border hover:border-primary/50 transition-colors flex items-center"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
