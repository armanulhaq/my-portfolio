import Image from "next/image";
import Link from "next/link";
import HeroButtons from "./HeroButtons";

const Hero = () => {
    return (
        <section className="h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid xl:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center items-center xl:order-2">
                    <Image
                        src="/Me.jpg"
                        alt="Me"
                        height={300} // default for small devices
                        width={300}
                        className="rounded-full lg:h-[450px] lg:w-[450px]"
                    />
                </div>

                <div className="space-y-6 xl:order-1">
                    <div className="space-y-2">
                        <p className="text-primary font-medium text-lg lg:text-xl">
                            Hello, I&apos;m
                        </p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                            Arman Ul Haq
                        </h1>
                        <div className="flex items-center gap-3">
                            <div className="h-2 w-12 bg-primary rounded-full"></div>
                            <h2 className="text-lg lg:text-2xl sm:text-3xl font-semibold">
                                Full Stack Developer
                            </h2>
                        </div>
                    </div>

                    <p className="text-md lg:text-lg text-muted-foreground ">
                        Crafting elegant solutions with modern web technologies.
                        Passionate about creating beautiful, functional, and
                        user-centric applications.
                    </p>

                    <div className="flex gap-4 ">
                        <HeroButtons />
                    </div>

                    <div className="flex gap-2">
                        <Link
                            href="https://github.com/armanulhaq"
                            target="_blank"
                            className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                            <Image
                                src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
                                alt="Github"
                                width={35}
                                height={35}
                            />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/armanulhaq"
                            target="_blank"
                            className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                            <Image
                                src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
                                alt="Linkedin"
                                width={35}
                                height={35}
                            />
                        </Link>
                        <Link
                            href="https://figma.com/@r_manulhaq"
                            target="_blank"
                            className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                            <Image
                                src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"
                                alt="Figma"
                                width={35}
                                height={35}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
