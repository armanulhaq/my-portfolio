import { Badge } from "@/components/ui/badge";
import skills from "@/constants/skills";
import Image from "next/image";

const Skills = () => {
    return (
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-3">
                    <p className="text-primary text-sm font-semibold uppercase">
                        Explore my
                    </p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                        Skills
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div
                            key={category}
                            className="bg-card border rounded-xl p-8 shadow-md backdrop-blur-sm transition-shadow hover:shadow-lg hover:border-primary/50"
                        >
                            <h3 className="text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill) => (
                                    <Badge
                                        variant="outline"
                                        key={skill.name}
                                        className="px-4 py-2 text-sm font-medium bg-muted/50 hover:bg-primary/20 hover:text-primary border border-border hover:border-primary/50 transition-colors flex items-center gap-2"
                                    >
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={20}
                                            height={20}
                                        />
                                        {skill.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
