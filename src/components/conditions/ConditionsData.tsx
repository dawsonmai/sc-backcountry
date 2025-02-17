"use client";
import React, { useState, useEffect } from "react";
import { Info, ChevronDown, CloudSun, MountainSnow, MoveVertical, Wind, MoveDown, MoveUp, MoveLeft, MoveRight, MoveDownRight, MoveDownLeft, MoveUpRight, MoveUpLeft, WindArrowDown, Droplets, Eye, Thermometer, Radio, Check, ThermometerSnowflake } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { useGlobalContext } from "@/context/GlobalContext";

interface ObservationProperties {
	properties: {
		textDescription: string;
		elevation: {
			value: number;
		};
		temperature: {
			value: number;
		};
		dewpoint: {
			value: number;
		};
		windDirection: {
			value: number;
		};
		windSpeed: {
			value: number;
		};
		barometricPressure: {
			value: number;
		};
		relativeHumidity: {
			value: number;
		};
	};
}

const ConditionsData = () => {
	const [openRange, setOpenRange] = React.useState(false);
	const [openElv, setOpenElv] = React.useState(false);

	const {
		selectedRange: valueRange,
		setSelectedRange: setValueRange,
		selectedElevation: valueElv,
		setSelectedElevation: setValueElv,
		weatherData: weather,
		forecastData,
		calculatedTemp,
		calculatedFreezeLevel,
		calculatedHeatIndex,
		calculatedWindChill,
		humidity,
		speed,
		direction,
		conditions,
		pressure,
		fetchWeatherData,
	} = useGlobalContext();

	const ranges = [
		{
			value: "San Gabriel",
			label: "San Gabriel Mountains",
		},
		{
			value: "San Bernardino",
			label: "San Bernardino Mountains",
		},
		{
			value: "San Jacinto",
			label: "San Jacinto Mountains",
		},
	];

	// Update useEffect to use fetchWeatherData from context
	useEffect(() => {
		if (valueRange) {
			fetchWeatherData();
		}
	}, [valueRange, fetchWeatherData]);

	function tempChange(data: ObservationProperties): number | null {
		if (data && data.properties) {
			const { elevation, temperature } = data.properties;

			// Make sure both elevation and temperature values are defined
			if (elevation?.value !== undefined && temperature?.value !== undefined) {
				const forecastElv = Math.round(elevation.value * 3.280839895); // Convert elevation to feet
				const forecastTemp = Math.round((temperature.value * 9) / 5 + 32); // Convert temperature to °F

				let altitudeDiff = Math.abs(forecastElv - Number(valueElv)); // Ensure difference is positive
				const tempDif = altitudeDiff * 0.00356; // Calculate temperature difference per altitude

				let tempAtAlt = forecastTemp;
				if (forecastElv > Number(valueElv)) {
					tempAtAlt += tempDif; // If forecast elevation is higher, increase temp
				} else {
					tempAtAlt -= tempDif; // If forecast elevation is lower, decrease temp
				}

				console.log("Temperature at " + valueElv + " is " + tempAtAlt);
				return Math.round(tempAtAlt); // Return the calculated temperature
			}
		}
		return null;
	}
	

	function heatIndex(temp: number, humidity: number) {
		const humidityRatio = humidity / 100;
		const feelsLike =
			-42.397 +
			2.04901523 * temp +
			10.14333127 * humidityRatio -
			0.22475541 * temp * humidityRatio -
			0.00683783 * temp ** 2 -
			0.05481717 * humidityRatio ** 2 +
			0.00122874 * temp ** 2 * humidityRatio +
			0.00085282 * temp * humidityRatio ** 2 -
			0.00000199 * temp ** 2 * humidityRatio ** 2;
		return (
			<p className="text-md text-gray-600">
				Feels Like: <span className="font-mono">{Math.round(Number(feelsLike))}&deg;F</span>
			</p>
		);
	}

	function windChill(temp: number, windspeed: number) {
		const chill = 35.74 + 0.6215 * temp - 35.75 * windspeed ** 0.16 + 0.4275 * temp * windspeed ** 0.16;
		return Math.round(chill);
	}

	function freezingLevel(temp: number, tempElv: number) {
		const freezeAlt = ((temp - 32) * 1000) / 3.5;
		return Math.round(freezeAlt);
	}

	function windDirection(angle: number){
		const directions = ["North", "Northeast", "East", "Southeast", "South", "Southwest", "West", "Northwest", "North"];
    	let index = Math.round(angle / 45) % 8;
		let direction = directions[index];
		if(direction === "North"){
			return (<div className="flex flex-col items-start">
				<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
					<MoveDown className="mr-2" strokeWidth={1.5} /> Wind Direction:{" "}
				</h2>
				<p className="text-2xl md:text-3xl font-medium font-mono">{direction}</p>
			</div>)
		}else if(direction === "Northeast"){
			return (<div className="flex flex-col items-start">
				<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
					<MoveDownLeft className="mr-2" strokeWidth={1.5} /> Wind Direction:{" "}
				</h2>
				<p className="text-2xl md:text-3xl font-medium font-mono">{direction}</p>
			</div>)
		}else if(direction === "East"){
			return (<div className="flex flex-col items-start">
				<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
					<MoveLeft className="mr-2" strokeWidth={1.5} /> Wind Direction:{" "}
				</h2>
				<p className="text-2xl md:text-3xl font-medium font-mono">{direction}</p>
			</div>)
		}else if(direction === "Southeast"){
			return (<div className="flex flex-col items-start">
				<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
					<MoveUpLeft className="mr-2" strokeWidth={1.5} /> Wind Direction:{" "}
				</h2>
				<p className="text-2xl md:text-3xl font-medium font-mono">{direction}</p>
			</div>)
		}else if(direction === "South"){
			return (<div className="flex flex-col items-start">
				<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
					<MoveUp className="mr-2" strokeWidth={1.5} /> Wind Direction:{" "}
				</h2>
				<p className="text-2xl md:text-3xl font-medium font-mono">{direction}</p>
			</div>)
		}else if(direction === "Southwest"){
			return (<div className="flex flex-col items-start">
				<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
					<MoveUpRight className="mr-2" strokeWidth={1.5} /> Wind Direction:{" "}
				</h2>
				<p className="text-2xl md:text-3xl font-medium font-mono">{direction}</p>
			</div>)
		}else if(direction === "West"){
			return (<div className="flex flex-col items-start">
				<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
					<MoveRight className="mr-2" strokeWidth={1.5} /> Wind Direction:{" "}
				</h2>
				<p className="text-2xl md:text-3xl font-medium font-mono">{direction}</p>
			</div>)
		}else if(direction === "Southwest"){
			return (<div className="flex flex-col items-start">
				<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
					<MoveDownRight className="mr-2" strokeWidth={1.5} /> Wind Direction:{" "}
				</h2>
				<p className="text-2xl md:text-3xl font-medium font-mono">{direction}</p>
			</div>)
		}else if(direction === "South"){
			return (<div className="flex flex-col items-start">
				<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
					<MoveDown className="mr-2" strokeWidth={1.5} /> Wind Direction:{" "}
				</h2>
				<p className="text-2xl md:text-3xl font-medium font-mono">{direction}</p>
			</div>)
		}else if(direction === "Northwest"){
			return (<div className="flex flex-col items-start">
				<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
					<MoveDownRight className="mr-2" strokeWidth={1.5} /> Wind Direction:{" "}
				</h2>
				<p className="text-2xl md:text-3xl font-medium font-mono">{direction}</p>
			</div>)
		}
	}

	function dataMountain() {
		if (valueRange === "San Gabriel") {
			return (
				<h3 className="text-sm flex flex-row justify-start items-center text-gray-600">
					<Info size={15} strokeWidth={1.5} className="mr-1" /> Weather of the Mt. Baldy area
				</h3>
			);
		} else if (valueRange === "San Jacinto") {
			return (
				<h3 className="text-sm flex flex-row justify-start items-center text-gray-600">
					<Info size={15} strokeWidth={1.5} className="mr-1" /> Weather of the Mt. San Jacinto area
				</h3>
			);
		} else if (valueRange === "San Bernardino") {
			return (
				<h3 className="text-sm flex flex-row justify-start items-center text-gray-600">
					<Info size={15} strokeWidth={1.5} className="mr-1" /> Weather of the Mt. San Gorgonio area
				</h3>
			);
		}
	}

	function elvDrop(valueRange: string) {
		if (valueRange === "San Gabriel") {
			return [
				{
					value: "4000",
					label: "4000 ft",
				},
				{
					value: "7031",
					label: "7031 ft",
				},
				{
					value: "10064",
					label: "10064 ft",
				},
			];
		} else if (valueRange === "San Jacinto") {
			return [
				{
					value: "2000",
					label: "2000 ft",
				},
				{
					value: "6000",
					label: "6000 ft",
				},
				{
					value: "10800",
					label: "10800 ft",
				},
			];
		} else if (valueRange === "San Bernardino") {
			return [
				{
					value: "6000",
					label: "6000 ft",
				},
				{
					value: "9800",
					label: "9800 ft",
				},
				{
					value: "11500",
					label: "11500 ft",
				},
			];
		}
		return [];
	}

	const elevations = elvDrop(valueRange);

	useEffect(() => {
		if (elevations.length > 0) {
			setValueElv(elevations[1]?.value || elevations[0]?.value || "");
		}
	}, [valueRange]);
	

	function Conditions() {
		if (valueRange === "San Gabriel") {
			return (
				<>
					<div className="w-1/2 flex flex-col justify-between">
						<div className="flex flex-col items-start">
							<h2 className="flex justify-center text-xl text-gray-600">
								<Wind className="mr-2" strokeWidth={1.5} /> Wind Speed:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">{speed !== null ? `${speed}` : "N/A"} mph</p>
						</div>
						<div className="flex flex-col items-start">
							<h2 className="flex justify-center text-xl text-gray-600">
								<MoveDown className="mr-2" strokeWidth={1.5} /> Wind Direction:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">North</p>
						</div>
						<div className="flex flex-col items-start">
							<h2 className="flex justify-center text-xl text-gray-600">
								{" "}
								<Thermometer className="mr-2" strokeWidth={1.5} /> Wind Chill:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">{calculatedWindChill !== null ? `${calculatedWindChill}` : "N/A"}&deg;F</p>
						</div>
					</div>
					<div className="w-1/2 flex flex-col justify-between">
						<div className="flex flex-col items-start p-2">
							<h2 className="flex justify-center text-xl text-gray-600">
								<ThermometerSnowflake className="mr-2" strokeWidth={1.5} />
								Freezing Level:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">{calculatedFreezeLevel !== null ? `${calculatedFreezeLevel}` : "N/A"} ft</p>
						</div>
						<div className="flex flex-col items-start p-2">
							<h2 className="flex justify-center text-xl text-gray-600">
								<WindArrowDown className="mr-2" strokeWidth={1.5} />
								Barometer:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">{pressure !== null ? `${pressure}` : "N/A"} in</p>
						</div>
						<div className="flex flex-col items-start p-2">
							<h2 className="flex justify-center text-xl text-gray-600">
								<Droplets className="mr-2" strokeWidth={1.5} /> Humidity:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">{humidity !== null ? `${humidity}` : "N/A"}%</p>
						</div>
					</div>
				</>
			);
		} else if (valueRange === "San Jacinto") {
			return (
				<>
					<div className="w-1/2 flex flex-col justify-between">
						<div className="flex flex-col items-start">
							<h2 className="flex justify-center text-xl text-gray-600">
								<Wind className="mr-2" strokeWidth={1.5} /> Wind Speed:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">{speed !== null ? `${speed}` : "N/A"} mph</p>
						</div>
						<div className="flex flex-col items-start">
							<h2 className="flex justify-center text-xl text-gray-600">
								<MoveDown className="mr-2" strokeWidth={1.5} /> Wind Direction:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">North</p>
						</div>
						<div className="flex flex-col items-start">
							<h2 className="flex justify-center text-xl text-gray-600">
								{" "}
								<Thermometer className="mr-2" strokeWidth={1.5} /> Wind Chill:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">{calculatedWindChill !== null ? `${calculatedWindChill}` : "N/A"}&deg;F</p>
						</div>
					</div>
					<div className="w-1/2 flex flex-col justify-between">
						<div className="flex flex-col items-start p-2">
							<h2 className="flex justify-center text-xl text-gray-600">
								<ThermometerSnowflake className="mr-2" strokeWidth={1.5} />
								Freezing Level:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">{calculatedFreezeLevel !== null ? `${calculatedFreezeLevel}` : "N/A"} ft</p>
						</div>
						<div className="flex flex-col items-start p-2">
							<h2 className="flex justify-center text-xl text-gray-600">
								<WindArrowDown className="mr-2" strokeWidth={1.5} />
								Barometer:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">{pressure !== null ? `${pressure}` : "N/A"} in</p>
						</div>
						<div className="flex flex-col items-start p-2">
							<h2 className="flex justify-center text-xl text-gray-600">
								<Droplets className="mr-2" strokeWidth={1.5} /> Humidity:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">{humidity !== null ? `${humidity}` : "N/A"}%</p>
						</div>
					</div>
				</>
			);
		} else if (valueRange === "San Bernardino") {
			return (
				<>
					<div className="w-1/2 flex flex-col justify-between">
						<div className="flex flex-col items-start">
							<h2 className="flex justify-center text-xl text-gray-600">
								<Wind className="mr-2" strokeWidth={1.5} /> Wind Speed:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">{speed !== null ? `${speed}` : "N/A"} mph</p>
						</div>
						<div className="flex flex-col items-start">
							<h2 className="flex justify-center text-xl text-gray-600">
								<MoveDown className="mr-2" strokeWidth={1.5} /> Wind Direction:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">North</p>
						</div>
						<div className="flex flex-col items-start">
							<h2 className="flex justify-center text-xl text-gray-600">
								{" "}
								<Thermometer className="mr-2" strokeWidth={1.5} /> Wind Chill:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">{calculatedWindChill !== null ? `${calculatedWindChill}` : "N/A"}&deg;F</p>
						</div>
					</div>
					<div className="w-1/2 flex flex-col justify-between">
						<div className="flex flex-col items-start p-2">
							<h2 className="flex justify-center text-xl text-gray-600">
								<ThermometerSnowflake className="mr-2" strokeWidth={1.5} />
								Freezing Level:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">{calculatedFreezeLevel !== null ? `${calculatedFreezeLevel}` : "N/A"} ft</p>
						</div>
						<div className="flex flex-col items-start p-2">
							<h2 className="flex justify-center text-xl text-gray-600">
								<WindArrowDown className="mr-2" strokeWidth={1.5} />
								Barometer:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">{pressure !== null ? `${pressure}` : "N/A"} in</p>
						</div>
						<div className="flex flex-col items-start p-2">
							<h2 className="flex justify-center text-xl text-gray-600">
								<Droplets className="mr-2" strokeWidth={1.5} /> Humidity:{" "}
							</h2>
							<p className="text-3xl font-medium font-mono">{humidity !== null ? `${humidity}` : "N/A"}%</p>
						</div>
					</div>
				</>
			);
		}
	}
	console.log("KNIGHT")
	console.log("KNIGHT 1:", forecastData)
	console.log("KNIGHT 2:", forecastData ? forecastData[0] : "null")

	return (
		<div className="flex flex-col justify-between pb-2">
			<div className="p-2 flex flex-col md:flex-row justify-between">
				<div className="w-full md:w-2/3 flex flex-col justify-between px-2 md:px-5 mb-4 md:mb-0">
					<div>
						<Popover open={openRange} onOpenChange={setOpenRange}>
							<PopoverTrigger asChild>
								<Button variant="ghost" role="combobox" aria-expanded={openRange} className="justify-start text-2xl md:text-3xl font-medium pr-2 pl-1">
									{valueRange ? ranges.find((range) => range.value === valueRange)?.label : "Select Range"}
									<ChevronDown className="opacity-50" />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="p-0">
								<Command>
									<CommandList>
										<CommandGroup>
											{ranges.map((range) => (
												<CommandItem
													key={range.value}
													value={range.value}
													onSelect={(currentValue) => {
														if (currentValue !== valueRange) {
															setValueRange(currentValue);
														}
														setOpenRange(false);
													}}
													className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
												>
													{range.label}
													<Check className={cn("ml-auto", valueRange === range.value ? "opacity-100" : "opacity-0")} />
												</CommandItem>
											))}
										</CommandGroup>
									</CommandList>
								</Command>
							</PopoverContent>
						</Popover>
						{dataMountain()}
					</div>
					<div className="flex flex-row justify-between mt-4 md:mt-0">
						<div className="flex flex-col justify-end">
							<h2 className="font-bold text-4xl md:text-5xl">
								<span className="font-mono">{calculatedTemp !== null ? `${calculatedTemp}` : "N/A"}</span>&deg;F 
							</h2>
							<p className="text-md text-gray-600">
								Feels Like: <span className="font-mono">{calculatedHeatIndex !== null ? `${calculatedHeatIndex}` : "N/A"}&deg;F</span>
							</p>
						</div>
						<div className="flex flex-col justify-center items-center px-4 md:px-10">
							<CloudSun strokeWidth={1.5} size={50} className="md:h-[70px] md:w-[70px]" />
							<h3 className="text-sm md:text-md text-gray-600">{conditions !== "N/A" ? `${conditions}` : "N/A"}</h3>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full md:w-1/3 items-start rounded-3xl bg-gray-200 p-3 md:p-5">
					<h2 className="font-medium text-lg md:text-xl text-gray-700 uppercase">Elevation</h2>
					<div className="flex flex-row flex-grow items-center gap-5">
						<div className="flex flex-row items-center justify-center py-3 md:py-6">
							<MountainSnow size={50} className="md:h-[50px] md:w-[50px]" strokeWidth={1} />
							<MoveVertical size={35} className="md:h-[40px] md:w-[40px]" strokeWidth={1} />
						</div>
						<Popover open={openElv} onOpenChange={setOpenElv}>
							<PopoverTrigger asChild>
								<Button variant="outline" role="combobox" aria-expanded={openElv} className="justify-start text-2xl md:text-3xl font-medium pr-2 pl-1">
									{valueElv ? elevations.find((elevation) => elevation.value === valueElv)?.label : "Select Elevation"}
									<ChevronDown className="opacity-50" />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="p-0">
								<Command>
									<CommandList>
										<CommandGroup>
											{elevations.map((elevation) => (
												<CommandItem
													key={elevation.value}
													value={elevation.value}
													onSelect={(currentValue) => {
														if (currentValue !== valueElv) {
															setValueElv(currentValue); 
														}
														setOpenElv(false);
													}}
													className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
												>
													{elevation.label}
													<Check className={cn("ml-auto", valueElv === elevation.value ? "opacity-100" : "opacity-0")} />
												</CommandItem>
											))}
										</CommandGroup>
									</CommandList>
								</Command>
							</PopoverContent>
						</Popover>
					</div>
				</div>
			</div>
			<div className="p-2 flex flex-col md:flex-row gap-4 md:gap-0">
				<div className="w-full md:w-2/3 md:pr-4">
					<div className="bg-gray-200 rounded-3xl px-3 md:px-5 pt-5 pb-2">
						<h2 className="text-xl text-gray-700 font-medium pb-3 uppercase">Conditions</h2>
						<div className="flex flex-col md:flex-row justify-center gap-4 md:gap-0">
							<div className="w-full md:w-1/2 flex flex-col justify-between space-y-4 md:space-y-0">
								<div className="flex flex-col items-start">
									<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
										<Wind className="mr-2" strokeWidth={1.5} /> Wind Speed:{" "}
									</h2>
									<p className="text-2xl md:text-3xl font-medium font-mono">{speed !== null ? `${speed}` : "N/A"} mph</p>
								</div>
								{windDirection(Number(direction))}
								{/* <div className="flex flex-col items-start">
									<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
										<MoveDown className="mr-2" strokeWidth={1.5} /> Wind Direction:{" "}
									</h2>
									<p className="text-2xl md:text-3xl font-medium font-mono">North</p>
								</div> */}
								<div className="flex flex-col items-start">
									<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
										{" "}
										<Thermometer className="mr-2" strokeWidth={1.5} /> Wind Chill:{" "}
									</h2>
									<p className="text-2xl md:text-3xl font-medium font-mono">{calculatedWindChill !== null ? `${calculatedWindChill}` : "N/A"}&deg;F</p>
								</div>
							</div>
							<div className="w-full md:w-1/2 flex flex-col justify-between space-y-4 md:space-y-0">
								<div className="flex flex-col items-start p-2">
									<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
										<ThermometerSnowflake className="mr-2" strokeWidth={1.5} />
										Freezing Level:{" "}
									</h2>
									<p className="text-2xl md:text-3xl font-medium font-mono">{calculatedFreezeLevel !== null ? `${calculatedFreezeLevel}` : "N/A"} ft</p>
								</div>
								<div className="flex flex-col items-start p-2">
									<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
										<WindArrowDown className="mr-2" strokeWidth={1.5} />
										Barometer:{" "}
									</h2>
									<p className="text-2xl md:text-3xl font-medium font-mono">{pressure !== 0 ? `${pressure}` : "N/A"} inHg</p>
								</div>
								<div className="flex flex-col items-start p-2">
									<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
										<Droplets className="mr-2" strokeWidth={1.5} /> Humidity:{" "}
									</h2>
									<p className="text-2xl md:text-3xl font-medium font-mono">{humidity !== null ? `${humidity}` : "N/A"}%</p>
								</div>
							</div>
						</div>
						<p className="flex flex row justify-end text-sm text-light text-gray-600">Last updated at 12:46 pm</p>
					</div>
				</div>
				<div className="w-full md:w-1/3 rounded-3xl bg-gray-200 px-3 md:px-5 pt-5 pb-2">
					<h2 className="font-medium text-xl text-gray-700 uppercase">Forecast</h2>
					<div className="flex flex-col">
						<div className="w-full border-b-2 border-gray-400 flex flex-row justify-between py-2">
							<h3 className="text-sm md:text-md text-gray-500 flex items-center w-1/6">{forecastData && forecastData.length > 0 
							? forecastData[0].name: "N/A"}</h3>
							<h3 className="text-sm md:text-md flex justify-center items-center">
								<CloudSun size={35} className="md:h-[50px] md:w-[50px] mr-1" strokeWidth={1.2} /> Partly Cloudy
							</h3>
							<h3 className="text-sm md:text-md flex justify-center items-center whitespace-nowrap">
								60&deg; F/<span className="text-gray-500">40&deg; F</span>
							</h3>
						</div>
						<div className="w-full border-b-2 border-gray-400 flex flex-row justify-between py-2">
							<h3 className="text-sm md:text-md text-gray-500 flex items-center w-1/6">Tonight</h3>
							<h3 className="text-sm md:text-md flex justify-center items-center">
								<CloudSun size={35} className="md:h-[50px] md:w-[50px] mr-1" strokeWidth={1.2} /> Partly Cloudy
							</h3>
							<h3 className="text-sm md:text-md flex justify-center items-center whitespace-nowrap">
								60&deg; F/<span className="text-gray-500">40&deg; F</span>
							</h3>
						</div>
						<div className="w-full border-b-2 border-gray-400 flex flex-row justify-between py-2">
							<h3 className="text-sm md:text-md text-gray-500 flex items-center w-1/6">Mon</h3>
							<h3 className="text-sm md:text-md flex justify-center items-center">
								<CloudSun size={35} className="md:h-[50px] md:w-[50px] mr-1" strokeWidth={1.2} /> Partly Cloudy
							</h3>
							<h3 className="text-sm md:text-md flex justify-center items-center whitespace-nowrap">
								60&deg; F/<span className="text-gray-500">40&deg; F</span>
							</h3>
						</div>
						<div className="w-full flex flex-row justify-between pt-2">
							<h3 className="text-sm md:text-md text-gray-500 flex items-center w-1/6">Tue</h3>
							<h3 className="text-sm md:text-md flex justify-center items-center">
								<CloudSun size={35} className="md:h-[50px] md:w-[50px] mr-1" strokeWidth={1.2} /> Partly Cloudy
							</h3>
							<h3 className="text-sm md:text-md flex justify-center items-center whitespace-nowrap">
								60&deg; F/<span className="text-gray-500">40&deg; F</span>
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConditionsData;
