import { ArrowRight, Snowflake } from "lucide-react";

const AreaData = () => {
	return (
		<header className="bg-white w-full h-screen">
			<div className="w-full py-10 flex">
				<div className="w-1/3 h-full">
					<h2 className="uppercase font-semibold text-xl tracking-wider">Explore The Area</h2>
				</div>
				<div className="w-2/3 h-full">
					<h3 className="text-4xl">
						Southern California may be know for its warm weather and beautiful beaches, but during its winter, the SoCal backcountry receives tons of snow, allowing for perfect climbing
						and skiing conditions.
					</h3>
				</div>
			</div>
			<div className="w-full flex items-center">
				<div className="h-full w-1/6 items-center flex justify-start">
					<Snowflake strokeWidth={1} className="inline size-12" />
				</div>
				<div className="h-full w-5/6 flex items-center">
					<button className="flex justify-end w-full h-2/3 font-medium text-3xl p-3 border-b-[1.5px] border-black">
						<ArrowRight className="text-black size-10" />
					</button>
				</div>
			</div>
			<div className="flex w-full p-12 justify-center gap-24">
				<div className="w-72 aspect-square rounded-full bg-gray-200 flex flex-col justify-center items-center p-6">
					<h2 className="text-7xl text-center w-full font-medium font-mono">123</h2>
					<h3 className="text-xl text-center w-full font-medium">square miles of terrain</h3>
				</div>
				<div className="w-72 aspect-square rounded-full bg-gray-200 flex flex-col justify-center items-center p-6">
					<h2 className="text-7xl text-center w-full font-medium font-mono">456</h2>
					<h3 className="text-xl text-center w-full font-medium">mountain ranges</h3>
				</div>
				<div className="w-72 aspect-square rounded-full bg-gray-200 flex flex-col justify-center items-center p-6">
					<h2 className="text-7xl text-center w-full font-medium font-mono">789</h2>
					<h3 className="text-xl text-center w-full font-medium">peaks taller than 10,000 ft</h3>
				</div>
			</div>
		</header>
	);
};

export default AreaData;
