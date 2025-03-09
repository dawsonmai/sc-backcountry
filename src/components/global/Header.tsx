import Link from "next/link";

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

			<div className=" flex text-sm gap-5 items-center">
				<Link href="/about">About</Link>
				<Link href="/routes">Routes</Link>
				<Link href="/conditions">Conditions</Link>
				<Link href="/education">Education</Link>
				<Link href="mailto:scbackcountry@gmail.com" className="bg-stone-800 text-white px-4 py-1 rounded-full">Contact</Link>
			</div>
		</div>
	);
};

export default Header;
