import { Thermometer, Snowflake, Wind } from "lucide-react";

const ConditionsPreview = () => {
	return (
		<div className="w-full h-[50vh] bg-gray-700 rounded-3xl p-6">
			<h2 className="uppercase font-medium text-5xl text-white">Conditions</h2>

			<div className="flex flex-row items-center gap-3 justify-center text-white">
				<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
					<Thermometer strokeWidth={1.5} className="size-5" />
					<p>75°F</p>
				</div>
				<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
					<Snowflake strokeWidth={1.5} className="size-5" />
					<p>Snowing</p>
				</div>
				<div className="flex flex-row border border-white rounded-full px-2.5 py-1 gap-2 items-center">
					<Wind strokeWidth={1.5} className="size-5" />
					<p>Wind speed 10 mph</p>
				</div>
			</div>
		</div>
	);
};

export default ConditionsPreview;
