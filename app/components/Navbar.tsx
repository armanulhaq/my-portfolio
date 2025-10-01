import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center lg:px-20">
            <div className="text-5xl">🧑🏻‍💻</div>
            <nav className="flex justify-between items-center">
                <ul className="flex space-x-4 lg:space-x-10 mx-5 lg:mx-10 text-sm md:text-md lg:text-lg">
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <ModeToggle />
            </nav>
        </div>
    );
};

export default Navbar;
