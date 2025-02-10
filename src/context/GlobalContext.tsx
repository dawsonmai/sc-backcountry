"use client";
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
				const { elevation, temperature } = data.properties;
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
