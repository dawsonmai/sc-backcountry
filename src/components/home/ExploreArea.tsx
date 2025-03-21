import { ArrowRight } from "lucide-react";

const ExploreArea = () => {
	return (
		<div className="flex flex-col justify-between md:flex-row w-full py-6 gap-4 lg:gap-8">
			<div className="h-full md:w-1/5 lg:w-1/5">
				<h2 className="uppercase font-semibold text-lg sm:text-xl tracking-wider">Explore By Region</h2>
			</div>
			<div className="w-full md:w-3/4 items-center flex justify-center">
				<div className="grid grid-cols-2 sm:grid-cols-3 p-4 gap-5 lg:gap-8 w-full">
					<div className="h-72 md:h-80 lg:h-96 border-2 border-gray-400 rounded-3xl flex flex-col w-full">
						<div className="flex-1 bg-gray-400 rounded-2xl" style={{
							backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(SanBernardinoMountainsAerial.jpeg)",
							backgroundSize: "cover",
							backgroundPosition: "bottom",
						}} />
						<div className="flex w-full p-3 justify-between items-center">
							<h3 className="text-md md:text-lg lg:text-2xl">San Bernardino Mountains</h3>
							<a href="/routes/san-bernardino-mountains">
								<button className="flex items-center justify-center">
									<ArrowRight className="size-9 text-white bg-black rounded-full p-2" />
								</button>
							</a>
						</div>
					</div>

					<div className="h-72 md:h-80 lg:h-96 border-2 border-gray-400 rounded-3xl flex flex-col w-full">
						<div className="flex-1 bg-gray-400 rounded-2xl" style={{
							backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(SanJacintoMountainsAerial.jpeg)",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}} />
						<div className="flex w-full p-3 justify-between items-center">
							<h3 className="text-md md:text-lg lg:text-2xl pr-4">San Jacinto Mountains</h3>
							<a href="/routes/san-jacinto-mountains">
								<button className="flex items-center justify-center">
									<ArrowRight className="size-9 text-white bg-black rounded-full p-2" />
								</button>
							</a>
						</div>
					</div>

					<div className="h-72 md:h-80 lg:h-96 border-2 border-gray-400 rounded-3xl flex flex-col w-full">
						<div className="flex-1 bg-gray-400 rounded-2xl" style={{
							backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(SanGabrielMountainsAerial.jpeg)",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}} />
						<div className="flex w-full p-3 justify-between items-center">
							<h3 className="text-md md:text-lg lg:text-2xl pr-4">San Gabriel Mountains</h3>
							<a href="/routes/san-gabriel-mountains">
								<button className="flex items-center justify-center">
									<ArrowRight className="size-9 text-white bg-black rounded-full p-2" />
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExploreArea;
