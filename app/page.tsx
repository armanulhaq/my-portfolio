import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto py-5">
            <Hero />
            <About />
            <Contact />
        </div>
    );
}
