import { ArrowRight } from "lucide-react";

const ExploreArea = () => {
	return (
		<div className="flex flex-row w-full py-6 gap-4">
			<div className="h-full w-1/5">
				<h2 className="uppercase font-semibold text-lg sm:text-xl tracking-wider">Explore By Region</h2>
			</div>
			<div className="w-4/5 p-4 flex gap-8">
				<div className="h-96 border-2 border-gray-400 rounded-3xl flex flex-col">
					<div className="flex-1 bg-gray-400 rounded-2xl" />
					<div className="flex w-full p-3">
						<h3 className="font-normal md:text-xl lg:text-2xl">San Gorgonio Mountains</h3>
						<div className="flex items-center justify-center">
							<ArrowRight className="size-9 text-white bg-black rounded-full p-2" />
						</div>
					</div>
				</div>

				<div className="h-96 border-2 border-gray-400 rounded-3xl flex flex-col">
					<div className="flex-1 bg-gray-400 rounded-2xl" />
					<div className="flex w-full p-3">
						<h3 className="font-normal md:text-xl lg:text-2xl">San Jacinto Mountains</h3>
						<div className="flex items-center justify-center">
							<ArrowRight className="size-9 text-white bg-black rounded-full p-2" />
						</div>
					</div>
				</div>

				<div className="h-96 border-2 border-gray-400 rounded-3xl flex flex-col">
					<div className="flex-1 bg-gray-400 rounded-2xl" />
					<div className="flex w-full p-3">
						<h3 className="font-normal md:text-xl lg:text-2xl">San Gabriel Mountains</h3>
						<div className="flex items-center justify-center">
							<ArrowRight className="size-9 text-white bg-black rounded-full p-2" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExploreArea;
