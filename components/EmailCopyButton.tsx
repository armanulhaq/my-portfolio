"use client";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const EmailCopyButton = () => {
    const emailToCopy = "armanulhaq10@gmail.com";
    const handleCopy = () => {
        try {
            navigator.clipboard.writeText(emailToCopy);
            toast("Email copied to clipboard");
        } catch (error) {
            console.error("Failed to copy email:", error);
        }
    };
    return (
        <div className="flex-1">
            <p className="text-sm text-muted-foreground">Email</p>
            <div
                onClick={handleCopy}
                className="flex items-center gap-3 group cursor-pointer"
            >
                <p className="font-medium transition-all group-hover:text-primary group-hover:scale-105">
                    {emailToCopy}
                </p>
                <Copy className="w-5 h-5 transition-all group-hover:text-primary group-hover:scale-105" />
            </div>
        </div>
    );
};

export default EmailCopyButton;
