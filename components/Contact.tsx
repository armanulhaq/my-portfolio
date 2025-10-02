import { Card } from "@/components/ui/card";
import { Copy, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import EmailCopyButton from "./EmailCopyButton";

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10 space-y-2">
                    <h2 className="text-4xl sm:text-5xl font-bold">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="text-muted-foreground text-lg">
                        Let&apos;s collaborate on your next project
                    </p>
                </div>

                <Card className="p-6 sm:p-12">
                    <div className="space-y-8">
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
                            <div className="flex items-center gap-4 p-4">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                                    <Mail className="w-7 h-7 text-primary" />
                                </div>
                                <EmailCopyButton />
                            </div>

                            <Link
                                href="https://linkedin.com/in/armanulhaq"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4"
                            >
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                                    <Linkedin className="w-7 h-7 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-muted-foreground">
                                        LinkedIn
                                    </p>
                                    <p className="font-medium hover:text-primary hover:scale-105 transition-all">
                                        Connect with me
                                    </p>
                                </div>
                            </Link>
                        </div>

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
