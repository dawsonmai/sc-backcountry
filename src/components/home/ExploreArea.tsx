import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const ExploreArea = () => {
	return (
		<div className="flex flex-col justify-between md:flex-row w-full py-6 gap-4 lg:gap-8">
			<div className="h-full md:w-1/5 lg:w-1/5">
				<h2 className="uppercase font-semibold text-lg sm:text-xl tracking-wider">Explore By Region</h2>
			</div>
			<div className="w-full md:w-3/4 items-center flex justify-center">
				<div className="grid grid-cols-2 sm:grid-cols-3 md:p-4 gap-5 lg:gap-8 w-full">
					<div className="h-72 md:h-80 lg:h-96 rounded-3xl flex flex-col justify-between w-full shadow-lg shadow-neutral-300 bg-neutral-50 p-3">
						<div className="h-3/4">
							<div className="bg-gray-400 rounded-2xl h-3/4" style={{
								backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(SanBernardinoMountainsAerial.jpeg)",
								backgroundSize: "cover",
								backgroundPosition: "bottom",
							}} />
							<h3 className="sm:text-md md:text-lg lg:text-xl p-2 w-full">San Bernardino Mountains</h3>
						</div>
						<div className="flex justify-end">
							<Button className="bg-transparent border-2 border-black rounded-full py-2 px-4 font-medium text-black hover:bg-black hover:text-white font-normal text-md">
								<Link href="/routes/san-bernardino-mountains"><ArrowRight strokeWidth={2.5} className="size-9 p-0" /></Link>
							</Button>
						</div>
					</div>
					<div className="h-72 md:h-80 lg:h-96 rounded-3xl flex flex-col justify-between w-full shadow-lg shadow-neutral-300 bg-neutral-50 p-3">
						<div className="h-3/4">
							<div className="bg-gray-400 rounded-2xl h-3/4" style={{
								backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(SanGabrielMountainsAerial.jpeg)",
								backgroundSize: "cover",
								backgroundPosition: "bottom",
							}} />
							<h3 className="sm:text-md md:text-lg lg:text-xl p-2 w-full">San Gabriel Mountains</h3>
						</div>
						<div className="flex justify-end">
							<Button className="bg-transparent border-2 border-black rounded-full py-2 px-4 font-medium text-black hover:bg-black hover:text-white font-normal text-md">
								<Link href="/routes/san-gabriel-mountains"><ArrowRight strokeWidth={2.5} className="size-9 p-0" /></Link>
							</Button>
						</div>
					</div>

					<div className="h-72 md:h-80 lg:h-96 rounded-3xl flex flex-col justify-between w-full shadow-lg shadow-neutral-300 bg-neutral-50 p-3">
						<div className="h-3/4">
							<div className="bg-gray-400 rounded-2xl h-3/4" style={{
								backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(SanJacintoMountainsAerial.jpeg)",
								backgroundSize: "cover",
								backgroundPosition: "bottom",
							}} />
							<h3 className="sm:text-md md:text-lg lg:text-xl p-2 w-full">San Jacinto Mountains</h3>
						</div>
						<div className="flex justify-end">
							<Button className="bg-transparent border-2 border-black rounded-full py-2 px-4 font-medium text-black hover:bg-black hover:text-white font-normal text-md">
								<Link href="/routes/san-jacinto-mountains"><ArrowRight strokeWidth={2.5} className="size-9 p-0" /></Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExploreArea;
