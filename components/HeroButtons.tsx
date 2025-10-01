"use client";
import { Button } from "./ui/button";
import { Download, Mail } from "lucide-react";

const CVDownloadButton = () => {
    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = "/Arman_Ul_Haq.pdf";
        link.download = "Arman_Ul_Haq_CV.pdf";
        link.click();
    };
    return (
        <div className="flex gap-4 pt-4">
            <Button
                size="lg"
                className="gap-2 text-white hover:scale-105 transition-transform"
                onClick={downloadCV}
            >
                <Download className="w-4 h-4" />
                Download CV
            </Button>
            <Button
                type="button"
                size="lg"
                variant="outline"
                className="gap-2 hover:scale-105 transition-transform"
                onClick={() => {
                    window.location.href = "mailto:armanulhaq10@gmail.com";
                }}
            >
                <Mail className="w-4 h-4" />
                Get in Touch
            </Button>
        </div>
    );
};

export default CVDownloadButton;
