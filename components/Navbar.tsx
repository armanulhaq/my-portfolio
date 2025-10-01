import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center lg:px-20">
            <div className="flex justify-center items-center">
                <span className="ml-2 text-2xl font-extrabold">Arman</span>{" "}
                <span className="text-primary text-4xl pb-3 pl-1">.</span>
            </div>
            <nav className="flex justify-between items-center">
                <ul className="flex space-x-4 lg:space-x-10 mx-5 lg:mx-10 text-sm md:text-md lg:text-lg">
                    <li className="hover:scale-110 hover:text-primary cursor-pointer transition-transform">
                        About
                    </li>
                    <li className="hover:scale-110 hover:text-primary cursor-pointer transition-transform">
                        Skills
                    </li>
                    <li className="hover:scale-110 hover:text-primary cursor-pointer transition-transform">
                        Projects
                    </li>
                    <li className="hover:scale-110 hover:text-primary cursor-pointer transition-transform">
                        Contact
                    </li>
                </ul>
                <ModeToggle />
            </nav>
        </div>
    );
};

export default Navbar;
