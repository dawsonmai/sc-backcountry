"use client";
import { text } from "node:stream/consumers";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Types
export interface ObservationProperties {
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

export interface Observation {
	date: string;
	title: string;
	description: string;
	location: string;
}

interface GlobalContextType {
	// Mountain range state
	selectedRange: string;
	setSelectedRange: (range: string) => void;

	// Elevation state
	selectedElevation: string;
	setSelectedElevation: (elevation: string) => void;

	// Weather data state
	weatherData: ObservationProperties | null;
	setWeatherData: (data: ObservationProperties | null) => void;

	// Calculated temperature state
	calculatedTemp: number | null;
	setCalculatedTemp: (temp: number | null) => void;

	// Snow observations state
	observations: Observation[];
	addObservation: (observation: Observation) => void;

	// Fetch weather data function
	fetchWeatherData: () => Promise<void>;

	// Calculated heat index state
	calculatedHeatIndex: number | null;
	setCalculatedHeatIndex: (headIndex: number | null) => void;

	//Calculated wind chill state
	calculatedWindChill: number | null;
	setCalculatedWindChill: (windChill: number | null) => void;

	//Calculated freezing level state
	calculatedFreezeLevel: number | null;
	setCalculatedFreezeLevel: (freezeLevel: number | null) => void;

	pressure: number | null;
	setBarometer: (pressure: number | null) => void;

	speed: number | null;
	setWindspeed: (speed: number | null) => void;

	direction: number | null;
	setWindDirection: (angle: number | null) => void;

	humidity: number | null;
	setHumidity: (humidity: number | null) => void;

	conditions: string;
	setConditions: (conditions: string) => void
}

// Create context with default values
const GlobalContext = createContext<GlobalContextType>({
	selectedRange: "San Gabriel",
	setSelectedRange: () => {},
	selectedElevation: "7031",
	setSelectedElevation: () => {},
	weatherData: null,
	setWeatherData: () => {},
	calculatedTemp: null,
	setCalculatedTemp: () => {},
	calculatedHeatIndex: null,
	setCalculatedHeatIndex: () => {},
	calculatedWindChill: null,
	setCalculatedWindChill: () => {},
	calculatedFreezeLevel: null,
	setCalculatedFreezeLevel: () => {},
	setBarometer: () => {},
	setHumidity: () => {},
	setWindDirection: () => {},
	setWindspeed: () => {},
	setConditions: () => {},
	conditions: "N/A",
	pressure: null,
	speed: null,
	direction: null,
	humidity: null,
	observations: [],
	addObservation: () => {},
	fetchWeatherData: async () => {},
});

// Provider component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
	const [selectedRange, setSelectedRange] = useState<string>("San Gabriel");
	const [selectedElevation, setSelectedElevation] = useState<string>("7031");
	const [weatherData, setWeatherData] = useState<ObservationProperties | null>(null);
	const [calculatedTemp, setCalculatedTemp] = useState<number | null>(null);
	const [calculatedHeatIndex, setCalculatedHeatIndex] = useState<number | null>(null);
	const [calculatedFreezeLevel, setCalculatedFreezeLevel] = useState<number | null>(null);
	const [calculatedWindChill, setCalculatedWindChill] = useState<number | null>(null);
	const [speed, setWindspeed] = useState<number | null>(null);
	const [direction, setWindDirection] = useState<number | null>(null);
	const [humidity, setHumidity] = useState<number | null>(null);
	const [pressure, setBarometer] = useState<number | null>(null);
	const [conditions, setConditions] = useState<string>("N/A");
	const [observations, setObservations] = useState<Observation[]>([
		{
			date: "Jan 4, 2025",
			title: "Avalanche",
			description: "Slide spotted off Baldy Bowl!",
			location: "Mt. Baldy",
		},
		{
			date: "Jan 2, 2025",
			title: "Snow Pack",
			description: "Weak layer detected",
			location: "Mt. Baden Powell",
		},
		{
			date: "Dec 30, 2024",
			title: "Wind Slab",
			description: "High winds forming slabs",
			location: "Mt. Whitney",
		},
	]);

	const addObservation = (observation: Observation) => {
		setObservations((prev) => [observation, ...prev]);
	};

	const fetchWeatherData = async () => {
		try {
			const response = await fetch(`/api/conditions?range=${encodeURIComponent(selectedRange)}`);
			if (!response.ok) throw new Error("Failed to fetch weather data");
			const data = await response.json();
			setWeatherData(data);

			// Calculate temperature at selected elevation
			if (data && data.properties) {
				const { elevation, temperature, relativeHumidity, windSpeed, windDirection, barometricPressure, textDescription } = data.properties;
				if (elevation?.value !== undefined && temperature?.value !== undefined) {
					const forecastElv = Math.round(elevation.value * 3.280839895);
					const forecastTemp = Math.round((temperature.value * 9) / 5 + 32);
					let altitudeDiff = Math.abs(forecastElv - Number(selectedElevation));
					const tempDif = altitudeDiff * 0.00356;

					let tempAtAlt = forecastTemp;
					if (forecastElv > Number(selectedElevation)) {
						tempAtAlt += tempDif;
					} else {
						tempAtAlt -= tempDif;
					}
					setCalculatedTemp(Math.round(tempAtAlt));
					const humidityRatio = relativeHumidity.value / 100;
					const feelsLike =
						-42.397 +
						2.04901523 * tempAtAlt +
						10.14333127 * humidityRatio -
						0.22475541 * tempAtAlt * humidityRatio -
						0.00683783 * tempAtAlt ** 2 -
						0.05481717 * humidityRatio ** 2 +
						0.00122874 * tempAtAlt ** 2 * humidityRatio +
						0.00085282 * tempAtAlt * humidityRatio ** 2 -
						0.00000199 * tempAtAlt ** 2 * humidityRatio ** 2;
					setCalculatedHeatIndex(Math.round(feelsLike));
					
					const chill = 35.74 + 0.6215 * tempAtAlt - 35.75 * windSpeed.value ** 0.16 + 0.4275 * tempAtAlt * windSpeed.value ** 0.16;
					setCalculatedWindChill(Math.round(chill));

					const freezeAlt = ((forecastTemp - 32) * 1000) / 3.5;
					setCalculatedFreezeLevel(Math.round(freezeAlt));

					setHumidity(Math.round(relativeHumidity.value));
					setWindDirection(Math.round(windDirection.value));
					setBarometer(barometricPressure.value);
					setWindspeed(Math.round(windSpeed.value));
					console.log(data.properties.textDescription.value)
					setConditions(textDescription);
					
				}
			}
		} catch (error) {
			console.error("Error fetching weather data:", error);
			setWeatherData(null);
			setCalculatedTemp(null);
		}
	};

	// Fetch weather data when range changes
	useEffect(() => {
		fetchWeatherData();
	}, [selectedRange, selectedElevation]);

	const value = {
		selectedRange,
		setSelectedRange,
		selectedElevation,
		setSelectedElevation,
		weatherData,
		setWeatherData,
		calculatedTemp,
		setCalculatedTemp,
		calculatedFreezeLevel,
		setCalculatedFreezeLevel,
		calculatedHeatIndex,
		setCalculatedHeatIndex,
		calculatedWindChill,
		setCalculatedWindChill,
		setConditions,
		conditions,
		speed,
		direction,
		pressure,
		humidity,
		setHumidity,
		setWindDirection,
		setWindspeed,
		setBarometer,
		observations,
		addObservation,
		fetchWeatherData,
	};

	return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

// Custom hook to use the global context
export const useGlobalContext = () => {
	const context = useContext(GlobalContext);
	if (context === undefined) {
		throw new Error("useGlobalContext must be used within a GlobalProvider");
	}
	return context;
};
