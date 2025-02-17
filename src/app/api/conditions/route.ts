import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const range = searchParams.get("range");

	let observationLink = "";
	let forecastLink = "";
	if (range === "San Gabriel") {
		observationLink = "https://api.weather.gov/stations/KCCB/observations/latest"; //https://api.weather.gov/points/34.288,-117.64
		forecastLink = "https://api.weather.gov/gridpoints/SGX/51,86/forecast"
	} else if (range === "San Bernardino") {
		observationLink = "https://api.weather.gov/stations/KL35/observations/latest"; //https://api.weather.gov/points/34.09,-116.82
		forecastLink = "https://api.weather.gov/gridpoints/SGX/79,72/forecast"
	} else if (range === "San Jacinto") {
		observationLink = "https://api.weather.gov/stations/KNWC1/observations/latest"; //https://api.weather.gov/points/33.81,-116.67
		forecastLink = "https://api.weather.gov/gridpoints/SGX/82,59/forecast"
	} else {
		return NextResponse.json({ error: "Invalid range" }, { status: 400 });
	}

	try {
		const [observationResponse, forecastResponse] = await Promise.all([
			fetch(observationLink),
			fetch(forecastLink)
		]);

		if (!observationResponse.ok || !forecastResponse.ok) {
			throw new Error("Failed to fetch weather or forecast data");
		}

		const observationData = await observationResponse.json();
		const forecastData = await forecastResponse.json();

		return NextResponse.json({
			observation: observationData,
			forecast: forecastData
		});
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch weather data" }, { status: 500 });
	}
}
