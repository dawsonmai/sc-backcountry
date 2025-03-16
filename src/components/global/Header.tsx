import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
	return (
		<div className="flex sm:flex-row flex-col items-center sm:justify-between pb-5 bg-transparent">
			<Link href="/" className="flex flex-row items-center gap-2">
				<div className="h-12 w-12" style={{
					backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(../logoColored.png)",
					backgroundSize: "contain",
					backgroundPosition: "center",
				}}></div>
				<h1 className="text-lg font-semibold">SoCal Backcountry</h1>
			</Link>

			<div className="flex text-sm gap-3 items-center h-full">
				<Button variant="ghost" className="px-2 font-normal" asChild>
					<Link href="/about">About</Link>
				</Button>
				<Button variant="ghost" className="px-2 font-normal" asChild>
					<Link href="/routes">Routes</Link>
				</Button>
				<Button variant="ghost" className="px-2 font-normal" asChild>
					<Link href="/conditions">Conditions</Link>
				</Button>
				<Button variant="ghost" className="px-2 font-normal" asChild>
					<Link href="/education">Education</Link>
				</Button>
				
				<Button asChild className="bg-stone-800 text-white p-0 rounded-full">
					<Link href="mailto:scbackcountry@gmail.com" className="px-4 py-0">Contact</Link>
				</Button>

			</div>
		</div>
	);
};

export default Header;
