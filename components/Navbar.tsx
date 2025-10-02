import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center lg:px-20">
            <div className="flex justify-center items-center">
                <span className="ml-2 text-2xl font-extrabold">Arman</span>{" "}
                <span className="text-primary text-4xl pb-3 pl-1">.</span>
            </div>

            <ModeToggle />
        </div>
    );
};

export default Navbar;
