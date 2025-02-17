import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const range = searchParams.get("range");

	let forecastLink = "";
	if (range === "San Gabriel") {
		forecastLink = "https://api.weather.gov/gridpoints/SGX/51,86/forecast"
	} else if (range === "San Bernardino") {
		forecastLink = "https://api.weather.gov/gridpoints/SGX/79,72/forecast"
	} else if (range === "San Jacinto") {
		forecastLink = "https://api.weather.gov/gridpoints/SGX/82,59/forecast"
	} else {
		return NextResponse.json({ error: "Invalid range" }, { status: 400 });
	}
	const SG_observationLink = "https://api.weather.gov/stations/KCCB/observations/latest"; //https://api.weather.gov/points/34.288,-117.64
	const SB_observationLink = "https://api.weather.gov/stations/KL35/observations/latest"; //https://api.weather.gov/points/34.09,-116.82
	const SJ_observationLink = "https://api.weather.gov/stations/KNWC1/observations/latest"; //https://api.weather.gov/points/33.81,-116.67


	try {
		const [SGobsResponse, SBobsResponse, SJobsResponse, forecastResponse] = await Promise.all([
			fetch(SG_observationLink),
			fetch(SB_observationLink),
			fetch(SJ_observationLink),
			fetch(forecastLink)
		]);

		if (!SGobsResponse.ok || !SBobsResponse.ok || !SJobsResponse.ok || !forecastResponse.ok) {
			throw new Error("Failed to fetch weather or forecast data");
		}

		const SGobservationData = await SGobsResponse.json();
		const SBobservationData = await SBobsResponse.json();
		const SJobservationData = await SJobsResponse.json();
		const forecastData = await forecastResponse.json();

		return NextResponse.json({
			SGobservation: SGobservationData,
			SBobservation: SBobservationData,
			SJobservation: SJobservationData,
			forecast: forecastData
		});
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch weather data" }, { status: 500 });
	}
}
