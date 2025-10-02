import { Github, Linkedin, Mail, Heart, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="pt-12 border-t">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center gap-8 mb-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold gradient-text">
                            Arman Ul Haq
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            Full Stack Developer crafting beautiful and
                            functional web experiences.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Connect</h4>
                        <div className="flex gap-3">
                            <Link
                                href="https://github.com/armanulhaq"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                            >
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://instagram.com/r_manulhaq"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                            >
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t text-center">
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        Made with{" "}
                        <Heart className="w-6 h-6 text-accent fill-red-500" />{" "}
                        by Arman Ul Haq © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
