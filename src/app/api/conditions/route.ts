import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const range = searchParams.get("range");

	let URI = "";
	if (range === "San Gabriel") {
		URI = "https://api.weather.gov/stations/KCCB/observations/latest";
	} else if (range === "San Bernardino") {
		URI = "https://api.weather.gov/stations/KL35/observations/latest";
	} else if (range === "San Jacinto") {
		URI = "https://api.weather.gov/stations/KNWC1/observations/latest";
	} else {
		return NextResponse.json({ error: "Invalid range" }, { status: 400 });
	}

	try {
		const response = await fetch(URI);
		if (!response.ok) throw new Error("Failed to fetch weather data");
		const data = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch weather data" }, { status: 500 });
	}
}
