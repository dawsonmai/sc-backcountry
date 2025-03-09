"use client";
import { text } from "node:stream/consumers";
import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from "react";

// Types
export interface ObservationProperties {
	properties: {
		textDescription: string;
		elevation: {
			value: number;
		};
		temperature: {
			value: number | null;
		};
		dewpoint: {
			value: number | null;
		};
		windDirection: {
			value: number | null;
		};
		windSpeed: {
			value: number | null;
		};
		barometricPressure: {
			value: number | null;
		};
		relativeHumidity: {
			value: number | null;
		};
	};
}

export interface ForecastProperties {
		number: number;
		name: string;
		temperature: number;
		temperatureUnit: string;
		windSpeed: string;
		windDirection: string;
		shortForecast: string;
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

	forecastData: ForecastProperties[] | null;
	setForecastData: (data: ForecastProperties[] | null) => void;

	// Fetch weather data function
	fetchWeatherData: () => Promise<void>;

	// Calculated heat index state
	calculatedHeatIndex: number | null;
	setCalculatedHeatIndex: (headIndex: number | null) => void;

	//Calculated wind chill state
	calculatedWindChill: number | null;
	setCalculatedWindChill: (windChill: number | null) => void;

	SGTemp: number | null;
	setSGTemp: (temp: number | null) => void;

	SGWindspeed: number | null;
	setSGWindspeed: (speed: number | null) => void;

	SGPressure: number | null;
	setSGPressure: (pressure: number | null) => void;

	SGWindDirection: number | null;
	setSGWindDirection: (direction: number | null) => void;

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
	setConditions: (conditions: string) => void;

	temperature: number | null;
	setTemperature: (temp: number | null) => void;
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
	setSGPressure: () => {},
	setSGTemp: () => {},
	setSGWindDirection: () => {},
	setSGWindspeed: () => {},
	SGPressure: null,
	SGTemp: null,
	SGWindDirection: null,
	SGWindspeed: null,
	setBarometer: () => {},
	setHumidity: () => {},
	setWindDirection: () => {},
	setWindspeed: () => {},
	setConditions: () => {},
	setForecastData: () => {},
	forecastData: null,
	conditions: "N/A",
	pressure: null,
	speed: null,
	direction: null,
	humidity: null,
	observations: [],
	addObservation: () => {},
	setTemperature: () => {},
	temperature: null,
	fetchWeatherData: async () => {},
});

// Provider component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
	const [selectedRange, setSelectedRange] = useState<string>("San Gabriel");
	const [selectedElevation, setSelectedElevation] = useState<string>("7031");
	const [weatherData, setWeatherData] = useState<ObservationProperties | null>(null);
	const [forecastData, setForecastData] = useState<ForecastProperties[] | null>(null);
	const [calculatedTemp, setCalculatedTemp] = useState<number | null>(null);
	const [calculatedHeatIndex, setCalculatedHeatIndex] = useState<number | null>(null);
	const [calculatedFreezeLevel, setCalculatedFreezeLevel] = useState<number | null>(null);
	const [calculatedWindChill, setCalculatedWindChill] = useState<number | null>(null);
	const [speed, setWindspeed] = useState<number | null>(null);
	const [direction, setWindDirection] = useState<number | null>(null);
	const [humidity, setHumidity] = useState<number | null>(null);
	const [pressure, setBarometer] = useState<number | null>(null);
	const [conditions, setConditions] = useState<string>("N/A");
	const [temperature, setTemperature] = useState<number | null>(null);
	const [SGTemp, setSGTemp] = useState<number | null>(null);
	const [SGWindspeed, setSGWindspeed] = useState<number | null>(null);
	const [SGWindDirection, setSGWindDirection] = useState<number | null>(null);
	const [SGPressure, setSGPressure] = useState<number | null>(null);
	const [observations, setObservations] = useState<Observation[]>([
	]);

	const addObservation = (observation: Observation) => {
		setObservations((prev) => [observation, ...prev]);
	};
	
	const latestRequestRef = useRef(0);

	const fetchWeatherData = async () => {
		const requestId = Date.now();
		latestRequestRef.current = requestId; // Store the latest request
	
		try {
			console.log("Fetching weather data for:", selectedRange);
			const response = await fetch(`/api/conditions?range=${encodeURIComponent(selectedRange)}`);
			if (!response.ok) throw new Error("Failed to fetch weather data");
	
			const data = await response.json();
			
			// Check for the latest request before updating state
			if (latestRequestRef.current === requestId) {
				setWeatherData(data);
			}
	
			// Extract observation and forecast data
			let observation;
			let SanGabrielObs = data.SGobservation?.properties;
			let SanBernardinoObs = data.SBobservation?.properties;
			let SanJacintoObs = data.SJobservation?.properties;
				
			if(selectedRange==="San Gabriel"){
				observation = SanGabrielObs;
			}else if(selectedRange==="San Bernardino"){
				observation = SanBernardinoObs;
			}else if(selectedRange==="San Jacinto"){
				observation = SanJacintoObs;
			}
			const forecast = data.forecast?.properties;
	
			if (observation) {
				const { elevation, temperature, relativeHumidity, windSpeed, windDirection, barometricPressure, textDescription } = observation;

				if (elevation?.value !== undefined && temperature?.value !== undefined) {
					const forecastElv = Math.round(elevation.value * 3.280839895); // Convert meters to feet
					if (temperature.value!=null){
					const forecastTemp = Math.round((temperature.value * 9) / 5 + 32); // Convert Celsius to Fahrenheit
					console.log(forecastTemp)
					const altitudeDiff = Math.abs(forecastElv - Number(selectedElevation));
					const tempDif = altitudeDiff * 0.00356;
	
					let tempAtAlt = forecastTemp;
					if (forecastElv > Number(selectedElevation)) {
						tempAtAlt += tempDif;
					} else {
						tempAtAlt -= tempDif;
					}
					setCalculatedTemp(Math.round(tempAtAlt));
	
					const humidityRatio = relativeHumidity?.value / 100 || 0;
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
					
	
					const chill = 35.74 + 0.6215 * tempAtAlt - 35.75 * (windSpeed?.value ** 0.16 || 0) + 0.4275 * tempAtAlt * (windSpeed?.value ** 0.16 || 0);
					setCalculatedWindChill(Math.round(chill));
					
					const freezeAlt = ((forecastTemp - 32) * 1000) / 3.5;
					setCalculatedFreezeLevel(Math.round(freezeAlt));
				}else{
					setCalculatedTemp(null);
					setCalculatedFreezeLevel(null);
					setCalculatedHeatIndex(null);
					setCalculatedWindChill(null);
				}
				if(relativeHumidity.value != null){
					setHumidity(Math.round(relativeHumidity?.value || 0));
				}else{
					setHumidity(null);
				}
				if(windDirection.value != null){
					setWindDirection(Math.round(windDirection?.value || 0));
				}else{
					setWindDirection(null);
				}
				if(barometricPressure.value != null){
					setBarometer(Number((barometricPressure?.value / 3386 || 0).toFixed(2))); // Convert Pa to inHg
				}else{
					setBarometer(null)
				}if(windSpeed.value != null){
					setWindspeed(Math.round(windSpeed?.value || 0));
				}
					setConditions(textDescription || "Unknown");
				}
			}

			if (forecast && forecast.periods) {
				console.log("Forecast Data:", forecast.periods);
				setForecastData(forecast.periods);
			}
	
		} catch (error) {
			if (latestRequestRef.current === requestId) {
				console.error("Error fetching weather data:", error);
				setForecastData(null);
				setWeatherData(null);
				setCalculatedTemp(null);
			}
		}
	};
	
	// Fetch weather data when range changes
	useEffect(() => {
		fetchWeatherData(); // Fetch data initially

		const intervalId = setInterval(() => {
			fetchWeatherData(); // Fetch every 5 minutes
		}, 300000); // 5 minutes in milliseconds

		// Cleanup interval on component unmount
		return () => {
			clearInterval(intervalId);
		};
	}, []);
	
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
		setSGPressure,
		setSGTemp,
		setSGWindDirection,
		setSGWindspeed,
		SGTemp,
		SGWindDirection,
		SGWindspeed,
		SGPressure,
		calculatedWindChill,
		setCalculatedWindChill,
		setForecastData,
		setTemperature,
		temperature,
		forecastData,
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
