import { Card } from "@/components/ui/card";
import Image from "next/image";

const About = () => {
    return (
        <section
            id="about"
            className="py-12 min-h-screen flex flex-col items-center justify-center"
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl sm:text-5xl font-bold">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Get to know more about my journey
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 flex transition-smooth group">
                        <div className="space-y-6 flex flex-col items-center justify-between">
                            <Image
                                src="/graduation.gif"
                                alt="University"
                                width={220}
                                height={220}
                                className="rounded-full shadow-md"
                                unoptimized
                            />

                            <div className="flex items-center gap-4">
                                <div className="flex flex-col items-center">
                                    <p className="text-2xl font-bold">
                                        B.Tech in Computer Science
                                    </p>
                                    <p className="text-primary">
                                        Vellore Institute of Technology
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="text-muted-foreground leading-relaxed">
                                    During my time at university, I honed my
                                    abilities in core computer science subjects
                                    and cultivated a robust proficiency in
                                    full-stack web development. I&apos;m
                                    committed to perpetual learning and aim to
                                    make a meaningful contribution to the field.
                                </p>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-8 transition-smooth relative overflow-hidden group">
                        <div className="absolute -top-20 -right-20 w-64 h-64 gradient-accent opacity-10 rounded-full blur-3xl group-hover:scale-125 transition-smooth"></div>

                        <div className="space-y-6">
                            <div className="w-full flex items-center justify-center">
                                <Image
                                    src="/fullstack.gif"
                                    alt="Profile"
                                    width={220}
                                    height={220}
                                    className="rounded-full shadow-md"
                                    unoptimized
                                />
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold">
                                    Full-Stack Developer
                                </h3>
                                <p className="text-primary">
                                    Building digital experiences
                                </p>
                            </div>

                            <div className="space-y-3 pt-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Passionate about creating intuitive and
                                        responsive web applications
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Experienced in modern frameworks and
                                        best practices
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Committed to writing clean,
                                        maintainable, and scalable code
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default About;
