"use client";
import React, { useState, useEffect } from "react";
import { Info, ChevronDown, CloudSun, Cloud, CloudFog, CloudRainWind, CloudSnow, Sun, CloudAlert, MountainSnow, MoveVertical, Wind, MoveDown, MoveUp, MoveLeft, MoveRight, MoveDownRight, MoveDownLeft, MoveUpRight, MoveUpLeft, WindArrowDown, Droplets, Eye, Thermometer, Radio, Check, ThermometerSnowflake } from "lucide-react";
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


	function weatherIcon(description: string, purpose: string){
		let strokeWidth = 0;
		let size = 0;
		let className = ""
		if(purpose==="Conditions"){
			strokeWidth = 1.5
			size = 50
			className="md:h-[70px] md:w-[70px]"
		}else if (purpose==="Forecast"){
			strokeWidth = 1.2
			size = 2
			className="md:h-[50px] md:w-[50px] mr-1"
		}

		if (description === "Sunny" || description === "Clear" || description === "Mostly Sunny"){
			return (<Sun strokeWidth={strokeWidth} size={size} className={className} />)
		}else if (description === "Mostly Cloudy" || description==="Partly Cloudy" || description==="Mostly Clear"){
			return (<CloudSun strokeWidth={strokeWidth} size={size} className={className} />)
		}else if (description ==="Cloudy"){
			return (<Cloud strokeWidth={strokeWidth} size={size} className={className} />)
		}else if (description ==="Rain" || description==="Showers"){
			return (<CloudRainWind strokeWidth={strokeWidth} size={size} className={className} />)
		}else if (description==="Snow"){
			return (<CloudSnow strokeWidth={strokeWidth} size={size} className={className} />)
		}else if (description==="Fog"){
			return (<CloudFog strokeWidth={strokeWidth} size={size} className={className} />)
		}else{
			if(purpose==="Conditions"){
				return (<CloudAlert strokeWidth={strokeWidth} size={size} className={className} />)
			}else if (purpose==="Forecast"){
				return ("")
			}
		}
	}

	function windDirection(angle: number){
		const directions = ["North", "Northeast", "East", "Southeast", "South", "Southwest", "West", "Northwest", "North"];
		
    	let index = Math.round(angle / 45) % 8;
		let direction = directions[index];
		if((speed !== null ? `${speed}` : "N/A") == "N/A" || (speed !== null ? `${speed}` : "N/A") == "0"){
			return (<div className="flex flex-col items-start">
				<h2 className="flex justify-center text-lg md:text-xl text-gray-600">
					<MoveUp className="mr-2" strokeWidth={1.5} /> Wind Direction:{" "}
				</h2>
				<p className="text-2xl md:text-3xl font-medium font-mono">N/A</p>
			</div>)
		}else if(direction === "North"){
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
	return (
		<div className="flex flex-col justify-between pb-2">
			<div className="p-2 flex flex-col md:flex-row justify-between">
				<div className="w-full md:w-2/3 lg:w-2/3 flex flex-col justify-between px-2 md:px-5 mb-4 md:mb-0">
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
							{weatherIcon(conditions !== "Unknown" ? `${conditions}` : "Unknown", "Conditions")}
							<h3 className="text-sm md:text-md text-gray-600">{conditions !== "Unknown" ? `${conditions}` : "Unknown"}</h3>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full md:w-1/3 lg:w-1/3 items-start rounded-3xl bg-gray-200 p-3 md:p-5">
					<h2 className="font-medium text-lg md:text-xl text-gray-700 uppercase">Elevation</h2>
					<div className="flex flex-row flex-grow items-center gap-5">
						<div className="flex flex-row items-center justify-center py-3 md:py-6">
							<MountainSnow size={50} className="md:h-[50px] md:w-[50px]" strokeWidth={1} />
							<MoveVertical size={35} className="md:h-[40px] md:w-[40px]" strokeWidth={1} />
						</div>
						<Popover open={openElv} onOpenChange={setOpenElv}>
							<PopoverTrigger asChild>
								<Button variant="outline" role="combobox" aria-expanded={openElv} className="justify-start text-xl md:text-2xl pr-2 pl-1 w-full">
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
									<p className="text-2xl md:text-3xl font-medium font-mono">{pressure !== null ? `${pressure}` : "N/A"} inHg</p>
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
								{weatherIcon(forecastData && forecastData.length > 0 ? forecastData[0].shortForecast: "N/A", "Forecast")} {forecastData && forecastData.length > 0 
							? forecastData[0].shortForecast: "N/A"}
							</h3>
							<h3 className="text-sm md:text-md flex justify-center items-center whitespace-nowrap">
							{forecastData && forecastData.length > 0  ? forecastData[0].temperature: "N/A"}&deg;F
							</h3>
						</div>
						<div className="w-full border-b-2 border-gray-400 flex flex-row justify-between py-2">
							<h3 className="text-sm md:text-md text-gray-500 flex items-center w-1/6">{forecastData && forecastData.length > 0 
							? forecastData[1].name: "N/A"}</h3>
							<h3 className="text-sm md:text-md flex justify-center items-center">
							{weatherIcon(forecastData && forecastData.length > 0 ? forecastData[1].shortForecast: "N/A", "Forecast")} {forecastData && forecastData.length > 0 
							? forecastData[1].shortForecast: "N/A"}
							</h3>
							<h3 className="text-sm md:text-md flex justify-center items-center whitespace-nowrap">
							{forecastData && forecastData.length > 0  ? forecastData[1].temperature: "N/A"}&deg;F
							</h3>
						</div>
						<div className="w-full border-b-2 border-gray-400 flex flex-row justify-between py-2">
							<h3 className="text-sm md:text-md text-gray-500 flex items-center w-1/6">{forecastData && forecastData.length > 0 
							? forecastData[2].name: "N/A"}</h3>
							<h3 className="text-sm md:text-md flex justify-center items-center">
							{weatherIcon(forecastData && forecastData.length > 0 ? forecastData[2].shortForecast: "N/A", "Forecast")} {forecastData && forecastData.length > 0 
							? forecastData[2].shortForecast: "N/A"}
							</h3>
							<h3 className="text-sm md:text-md flex justify-center items-center whitespace-nowrap">
							{forecastData && forecastData.length > 0  ? forecastData[2].temperature: "N/A"}&deg;F
							</h3>
						</div>
						<div className="w-full border-b-2 border-gray-400 flex flex-row justify-between py-2">
							<h3 className="text-sm md:text-md text-gray-500 flex items-center w-1/6">{forecastData && forecastData.length > 0 
							? forecastData[3].name: "N/A"}</h3>
							<h3 className="text-sm md:text-md flex justify-center items-center">
							{weatherIcon(forecastData && forecastData.length > 0 ? forecastData[3].shortForecast: "N/A", "Forecast")} {forecastData && forecastData.length > 0 
							? forecastData[3].shortForecast: "N/A"}
							</h3>
							<h3 className="text-sm md:text-md flex justify-center items-center whitespace-nowrap">
							{forecastData && forecastData.length > 0  ? forecastData[3].temperature: "N/A"}&deg;F
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConditionsData;
