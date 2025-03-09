import { Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-gray-300 w-full flex flex-col items-center">
            <div className="flex flex-row border-b-2 w-full justify-between py-10 px-24 text-black text-xl uppercase">
                <Link href="/about">About</Link>
				<Link href="/routes">Routes</Link>
				<Link href="/conditions">Conditions</Link>
				<Link href="/education">Education</Link>
                <Link href="mailto:scbackcountry@gmail.com">Contact</Link>
            </div>
            <h3 className="text-center text-xl text-black font-light px-56 py-12">Raising awareness, educating, and preparing adventurers for Southern California&apos;s vast and snowy winter backcountry</h3>
            <div className="flex flex-row justify-center items-center gap-6">
                <div className="h-14 w-14" style={{
                        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(../logoDark.png)",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                    }}></div>
                <div><Instagram strokeWidth={1.5} className="size-10" /></div>
            </div>
            <div className="p-8 border-b-2 w-full items-center flex justify-center">
                <Link href="mailto:scbackcountry@gmail.com" className="bg-gray-300 border-2 border-black rounded-full py-2 px-4 font-medium">Contact Us</Link>
            </div>
            <div className="p-3 font-light text-gray-600 text-sm">
                <p>&copy;2025 SC Backcountry</p>
            </div>
        </div>
    );
};

export default Footer;