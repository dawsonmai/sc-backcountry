import { Instagram } from "lucide-react";

const Footer = () => {
    return (
        <div className="bg-gray-500 w-full flex flex-col">
            <div className="flex flex-row border-b-2 w-full justify-between py-10 px-16 text-gray-100 text-2xl font-medium uppercase">
                <h2>About</h2>
                <h2>Routes</h2>
                <h2>Conditions</h2>
                <h2>Education</h2>
                <h2>Contact</h2>
            </div>
            <h3 className="text-center text-xl text-gray-100 font-light px-56 py-12">Lorem ipsum odor amet, consectetuer adipiscing elit. Id aliquam facilisi sed sit feugiat venenatis montes magna nulla. </h3>
            <div className="flex flex-row justify-center">
                <div className="h-24 w-24" style={{
                        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(logoColored.png)",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                    }}></div>
                <div className="rounded-full bg-white items-center p-3 h-full"><Instagram strokeWidth={1.5} className="size-18" /></div>
            </div>
        </div>
    );
};

export default Footer;