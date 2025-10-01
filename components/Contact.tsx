import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-4xl  mx-auto">
                <div className="text-center mb-10 space-y-2">
                    <h2 className="text-4xl sm:text-5xl font-bold">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="text-muted-foreground text-lg">
                        Let&apos;s collaborate on your next project
                    </p>
                </div>

                <Card className="p-6 sm:p-12 relative overflow-hidden">
                    <div className="relative space-y-8">
                        <div className="text-center space-y-4">
                            <h3 className="text-2xl font-bold">
                                Ready to start a conversation?
                            </h3>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Whether you have a project in mind, want to
                                collaborate, or just want to say hello, I&apos;d
                                love to hear from you!
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <a
                                href="mailto:armanulhaq10@gmail.com"
                                className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-custom-sm hover:shadow-custom-md transition-smooth group"
                            >
                                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-bounce">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-muted-foreground">
                                        Email
                                    </p>
                                    <p className="font-medium">
                                        armanulhaq10@gmail.com
                                    </p>
                                </div>
                            </a>

                            <a
                                href="https://linkedin.com/in/armanulhaq"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-custom-sm hover:shadow-custom-md transition-smooth group"
                            >
                                <div className="w-12 h-12 rounded-lg  flex items-center justify-center shadow-glow group-hover:scale-110 transition-bounce">
                                    <Linkedin className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-muted-foreground">
                                        LinkedIn
                                    </p>
                                    <p className="font-medium">
                                        Connect with me
                                    </p>
                                </div>
                            </a>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button size="lg" className="gap-2 text-white">
                                <Send className="w-4 h-4" />
                                Send a Message
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2 shadow-custom-sm hover:shadow-custom-md transition-smooth"
                            >
                                <Github className="w-4 h-4" />
                                View GitHub
                            </Button>
                        </div>

                        {/* Additional info */}
                        <div className="text-center pt-6 border-t">
                            <p className="text-sm text-muted-foreground">
                                Available for freelance opportunities and
                                full-time positions
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Contact;
