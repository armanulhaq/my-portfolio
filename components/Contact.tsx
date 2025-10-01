import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
        >
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl sm:text-5xl font-bold">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
                    <p className="text-muted-foreground text-lg">
                        Let&apos;s collaborate on your next project
                    </p>
                </div>

                <Card className="p-8 sm:p-12 shadow-custom-lg relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 gradient-accent opacity-5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 gradient-primary opacity-5 rounded-full blur-3xl"></div>

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

                        {/* Contact methods */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <a
                                href="mailto:armanulhaq10@gmail.com"
                                className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-custom-sm hover:shadow-custom-md transition-smooth group"
                            >
                                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-bounce">
                                    <Mail className="w-5 h-5 text-primary-foreground" />
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
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-custom-sm hover:shadow-custom-md transition-smooth group"
                            >
                                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center shadow-glow group-hover:scale-110 transition-bounce">
                                    <Linkedin className="w-5 h-5 text-primary-foreground" />
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
                            <Button
                                size="lg"
                                className="gap-2 shadow-custom-md hover:shadow-custom-lg transition-smooth"
                            >
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
                        <div className="text-center pt-8 border-t">
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
