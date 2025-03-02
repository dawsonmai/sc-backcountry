import { Instagram } from "lucide-react";

const Footer2 = () => {
    return (
        <div className="bg-gray-300 p-6">
            <div className="w-full flex flex-row border-b-2 pb-6">
                <div className="w-1/6">
                <div className="h-24 w-24" style={{
                            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(logoColored.png)",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                        }}></div>
                </div>
                <div className="w-4/6 text-black text-lg flex flex-row justify-between items-center px-24">
                        <h3>About</h3>
                        <h3>Routes</h3>
                        <h3>Conditions</h3>
                        <h3>Education</h3>
                        <h3>Contact</h3>
                </div>
                <div className="w-1/6 items-center flex justify-center">
                        <Instagram strokeWidth={1.5} className="size-8" />
                </div>
            </div>
            <h3 className="text-center text-xl text-black font-light px-56 py-12">Lorem ipsum odor amet, consectetuer adipiscing elit. Id aliquam facilisi sed sit feugiat venenatis montes magna nulla. </h3>
        </div>
    );
};

export default Footer2;