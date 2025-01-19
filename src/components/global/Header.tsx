import Link from "next/link";
import { MountainSnow } from "lucide-react";

const Header = () => {
	return (
		<div className="flex sm:flex-row flex-col items-center sm:justify-between pb-5 bg-transparent">
			<Link href="/" className="flex flex-row items-center gap-2">
				<MountainSnow className="inline size-6" />
				<h1 className="text-lg font-semibold">SC Backcountry</h1>
			</Link>

			<div className=" flex text-sm gap-5 items-center">
				<Link href="/about">About</Link>
				<Link href="/routes">Routes</Link>
				<Link href="/conditions">Conditions</Link>
				<Link href="/education">Education</Link>
				<button className="bg-stone-800 text-white px-4 py-1 rounded-full">Contact</button>
			</div>
		</div>
	);
};

export default Header;
