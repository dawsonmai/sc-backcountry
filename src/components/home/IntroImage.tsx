import { ArrowRight, CircleAlert, MountainSnow } from "lucide-react";

const IntroImage = () => {
	return (
		<div className="flex flex-col flex-grow bg-gray-700 w-full rounded-3xl p-6 sm:p-10 justify-between">
			<h1 className="inline text-4xl sm:text-6xl md:text-7xl font-medium text-white hyphens-manual lg:w-2/3">
				Welcome to the Southern California Back&shy;country <MountainSnow strokeWidth={1.5} className="inline size-12" />
			</h1>

			<div className="flex flex-col md:flex-row justify-between md:items-end gap-5">
				<div className="bg-white rounded-full w-full md:w-96 py-2 flex items-center justify-between pl-6 pr-2">
					<h2 className="text-black font-medium text-left uppercase sm:text-lg">Explore</h2>
					<button className="bg-black rounded-full text-white p-3 justify-center items-center text-center font-semibold text-xl">
						<ArrowRight color="white" size={26} />
					</button>
				</div>
				<div className="bg-white rounded-2xl md:w-1/4">
					<div className="flex flex-row bg-gray-200 w-full h-1/5 rounded-t-2xl items-center p-3 gap-3">
						<CircleAlert strokeWidth={2.5} className="text-rose-600 size-6" />
						<h2 className="text-black font-medium sm:text-lg uppercase">Caution</h2>
					</div>
					<div className="h-4/5 w-full rounded-b-2xl bg-white px-4 py-3">
						<p className="font-light text-sm md:text-base">
							Backcountry activities are dangerous! Before you go, make sure to check forecasts and conditions and have packed sufficient gear and clothing.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IntroImage;
