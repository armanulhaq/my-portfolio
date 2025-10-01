import Image from "next/image";
import Link from "next/link";
import HeroButtons from "./HeroButtons";

const Hero = () => {
    return (
        <section className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center items-center lg:order-2">
                    <Image
                        src="/Me.jpg"
                        alt="Me"
                        height={300} // default for small devices
                        width={300}
                        className="rounded-full lg:h-[450px] lg:w-[450px]"
                    />
                </div>

                <div className="space-y-6 lg:order-1">
                    <div className="space-y-2">
                        <p className="text-primary font-medium text-xl">
                            Hello, I&apos;m
                        </p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                            Arman Ul Haq
                        </h1>
                        <div className="flex items-center gap-3">
                            <div className="h-2 w-12 bg-primary rounded-full"></div>
                            <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
                                Full Stack Developer
                            </h2>
                        </div>
                    </div>

                    <p className="text-lg text-muted-foreground ">
                        Crafting elegant solutions with modern web technologies.
                        Passionate about creating beautiful, functional, and
                        user-centric applications.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <HeroButtons />
                    </div>

                    <div className="flex gap-2">
                        <Link
                            href="https://github.com/armanulhaq"
                            target="_blank"
                            className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                            <Image
                                src="/github.png"
                                alt="Github"
                                width={30}
                                height={30}
                            />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/armanulhaq"
                            target="_blank"
                            className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                            <Image
                                src="/linkedin.png"
                                alt="Linkedin"
                                width={30}
                                height={30}
                            />
                        </Link>
                        <Link
                            href="https://figma.com/@r_manulhaq"
                            target="_blank"
                            className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                            <Image
                                src="/figma.png"
                                alt="Figma"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
