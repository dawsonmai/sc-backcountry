import { Instagram } from "lucide-react";
import Link from "next/link";

const Footer2 = () => {
    return (
        <div className="bg-gray-300 p-6 items-center flex flex-col justify-center">
            <div className="h-28 w-28 mb-6" style={{
                        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(../logoDark.png)",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
            }}></div>
            <div className="w-full flex flex-col sm:flex-row justify-between px-2 sm:px-8 md:px-12">
                <div className="flex flex-col w-full justify-between text-xl mb-4 sm:md-0">
                    <Link href="/about" className="py-4">About Us</Link>
                    <Link href="/routes" className="py-4">Routes</Link>
                    <Link href="/conditions" className="py-4">Conditions</Link>
                    <Link href="/education" className="py-4">Education</Link>
                </div>
                <div className="w-full sm:w-5/6 h-full flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-medium mb-3">Contact Us</h3>
                        <p className="text-lg font-light mb-6">We love hearing from our community! Contact us about involvement, suggestions, and questions.</p>
                        <div className="mb-6">
                            <Link href="mailto:scbackcountry@gmail.com" className="bg-gray-300 border-2 border-black rounded-full py-2 px-4 font-medium">Contact Us</Link>
                        </div>
                        <div className="bg-gray-200 rounded-full w-9 h-9 flex flex-row justify-center items-center">
                            <Instagram strokeWidth={1.5} className="size-5" />
                        </div>
                    </div>
                    <p className="p-3 font-light text-gray-600 text-sm text-end">&copy;2025 SC Backcountry</p>
                </div>
            </div>
        </div>
    );
};

export default Footer2;