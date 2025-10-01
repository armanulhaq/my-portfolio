import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
    return (
        <div className="flex justify-center items-center gap-10">
            <nav className="sticky flex justify-between w-[90%] lg:w-[40%] rounded-4xl px-5 lg:px-10 py-4 border border-blue-900 backdrop-blur-2xl text-xs md:text-md lg:text-lg">
                <ul className="flex space-x-4">About Me</ul>
                <ul className="flex space-x-4">Skills</ul>
                <ul className="flex space-x-4">Projects</ul>
                <ul className="flex space-x-4">Contact</ul>
            </nav>
            <ModeToggle />
        </div>
    );
};

export default Navbar;
