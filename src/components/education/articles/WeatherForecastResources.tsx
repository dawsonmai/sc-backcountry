import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar } from "lucide-react";

const WeatherForecastResources = () => {
    return (
        <div className="px-4">
            <div className="flex flex-row mb-6">
                <Calendar size={28}className="mr-2" />
                <h3 className="text-2xl font-semibold">March 16, 2025</h3>
            </div>
            <p className="text-xl mb-6">
            The weather in the mountains is constantly changing and it&apos;s important that you are updated with forecasts before you embark on your trip. Unfortunately, it&apos;s impossible to always predict what conditions to expect accurately, since there are so many factors that go into mountain weather. You should consult multiple weather forecasts from different forecast providers for the area you plan to travel to in order to gain a good understanding of what you might expect. Since different providers use different data, models, and sources, each forecast may be a little different. For example, one provider may forecast strong wings, while another forecasts low temperatures. Track the data and analyze patterns and inconsistencies, treat conditions that show up more often as more likely to happen. You should always prepare for the worst.
            </p>
            <p className="text-xl mb-8">
            Below are a couple of other weather resources, in addition to our <span><Button variant="link" asChild className="p-0 text-xl font-semibold"><Link href="/conditions">Conditions</Link></Button></span> page, based on area that you should analyze before traveling into the SoCal backcountry:
            </p>

            <h2 className="font-semibold text-2xl mb-2">San Gabriel Mountains</h2>
            <ul className="flex flex-col justify-start items-start mb-6 w-full max-w-full pl-6 gap-2">
                <li className="text-xl font-normal text-left w-full overflow-x-auto whitespace-normal">
                    <Link 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://www.mountain-forecast.com/peaks/Mount-Baldy-San-Gabriel/forecasts/3068"
                        className="hover:underline"
                    >
                        Mountain Forecast for Mt. San Antonio (Mt. Baldy)
                    </Link>
                </li>
                <li className="text-xl font-normal text-left w-full overflow-x-auto whitespace-normal">
                    <Link 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://www.mountain-forecast.com/peaks/Mount-Baden-Powell/forecasts/2867"
                        className="hover:underline"
                    >
                        Mountain Forecast for Mt. Baden Powell
                    </Link>
                </li>
                <li className="text-xl font-normal text-left w-full overflow-x-auto whitespace-normal">
                    <Link 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://www.mtbaldyresort.com/mountain-report"
                        className="hover:underline"
                    >
                        Mt. Baldy Ski Resort Forecast
                    </Link>
                </li>
                <li className="text-xl font-normal text-left w-full overflow-x-auto whitespace-normal">
                    <Link 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://www.mthigh.com/site/trails-and-conditions/conditions/snow-and-weather-report/@@snow-and-weather-report"
                        className="hover:underline"
                    >
                        Mountain High Ski Resort Forecast
                    </Link>
                </li>
            </ul>

            <h2 className="font-semibold text-2xl mb-2">San Bernardino Mountains</h2>
            <ul className="flex flex-col justify-start items-start mb-6 w-full max-w-full pl-6 gap-2">
                <li className="text-xl font-normal text-left w-full overflow-x-auto whitespace-normal">
                    <Link 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://www.www-forecast.com/peaks/Mount-Baldy-San-Gabriel/forecasts/3068"
                        className="hover:underline"
                    >
                        Mountain Forecast for Mt. San Gorgonio
                    </Link>
                </li>
                <li className="text-xl font-normal text-left w-full overflow-x-auto whitespace-normal">
                    <Link 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://www.bigbearmountainresort.com/mountain-information"
                        className="hover:underline"
                    >
                        Big Bear Mountain Resorts Forecast
                    </Link>
                </li>
                <li className="text-xl font-normal text-left w-full overflow-x-auto whitespace-normal">
                    <Link 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://www.bensweather.com/"
                        className="hover:underline"
                    >
                       Ben&apos;s Weather
                    </Link>
                </li>
            </ul>

            <h2 className="font-semibold text-2xl mb-2">San Jacinto Mountains</h2>
            <ul className="flex flex-col justify-start items-start mb-6 w-full max-w-full pl-6 gap-2">
                <li className="text-xl font-normal text-left w-full overflow-x-auto whitespace-normal">
                    <Link 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://www.mountain-forecast.com/peaks/Mount-San-Jacinto-Peak/forecasts/3293"
                        className="hover:underline"
                    >
                        Mountain Forecast for Mt. San Jacinto
                    </Link>
                </li>
                <li className="text-xl font-normal text-left w-full overflow-x-auto whitespace-normal">
                    <Link 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://pstramway.com/weather/"
                        className="hover:underline"
                    >
                        Palm Springs Aerial Tramway Forecast
                    </Link>
                </li>
                <li className="text-xl font-normal text-left w-full overflow-x-auto whitespace-normal">
                    <Link 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://sanjacjon.com/"
                        className="hover:underline"
                    >
                        San Jacinto Trail Report
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default WeatherForecastResources;