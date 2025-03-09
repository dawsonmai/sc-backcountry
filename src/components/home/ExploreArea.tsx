import { ArrowRight } from "lucide-react";

const ExploreArea = () => {
	return (
		<div className="flex flex-col justify-center md:flex-row w-full py-6 gap-4 lg:gap-8">
			<div className="h-full md:w-1/6 lg:w-1/5">
				<h2 className="uppercase font-semibold text-lg sm:text-xl tracking-wider">Explore By Region</h2>
			</div>
			<div className="w-full items-center flex justify-center">
				<div className="flex flex-col md:flex-row w-2/3 md:w-full lg:w-full p-4 gap-5 lg:gap-8">
					<div className="h-96 border-2 border-gray-400 rounded-3xl flex flex-col">
						<div className="flex-1 bg-gray-400 rounded-2xl" style={{
							backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(SanBernardinoMountainsAerial.jpeg)",
							backgroundSize: "cover",
							backgroundPosition: "bottom",
						}} />
						<div className="flex w-full p-3 justify-between items-center">
							<h3 className="text-lg md:text-lg lg:text-2xl">San Bernardino Mountains</h3>
							<a href="/routes/san-bernardino-mountains">
								<button className="flex items-center justify-center">
									<ArrowRight className="size-9 text-white bg-black rounded-full p-2" />
								</button>
							</a>
						</div>
					</div>

					<div className="h-96 border-2 border-gray-400 rounded-3xl flex flex-col">
						<div className="flex-1 bg-gray-400 rounded-2xl" style={{
							backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(SanJacintoMountainsAerial.jpeg)",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}} />
						<div className="flex w-full p-3 justify-between items-center">
							<h3 className="text-lg md:text-lg lg:text-2xl">San Jacinto Mountains</h3>
							<a href="/routes/san-jacinto-mountains">
								<button className="flex items-center justify-center">
									<ArrowRight className="size-9 text-white bg-black rounded-full p-2" />
								</button>
							</a>
						</div>
					</div>

					<div className="h-96 border-2 border-gray-400 rounded-3xl flex flex-col">
						<div className="flex-1 bg-gray-400 rounded-2xl" style={{
							backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(SanGabrielMountainsAerial.jpeg)",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}} />
						<div className="flex w-full p-3 justify-between items-center">
							<h3 className="text-lg md:text-lg lg:text-2xl">San Gabriel Mountains</h3>
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
