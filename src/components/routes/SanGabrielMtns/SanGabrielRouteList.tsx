import { MapPinned, Map, MountainSnow, ChartArea, Snowflake, SunSnow } from "lucide-react";
const SanGabrielRouteList = () => {
    return (
        <div className="flex flex-row">
            <div className="w-2/3"></div>

            <div className="w-1/3 px-2">
                <div className="bg-gray-200 rounded-3xl h-full p-5 shadow-lg shadow-neutral-300">
                    <h3 className="text-2xl font-medium mb-4">Region Info</h3>
                    <p className="flex flex-row text-lg mb-4"><SunSnow strokeWidth={1.5} className="mr-1 size-7"/> Season: Dec - Apr</p>
                    <p className="flex flex-row text-lg mb-4"><MapPinned strokeWidth={1.5} className="mr-1 size-7"/> Nearest City: Los Angeles</p>
                    <p className="flex flex-row text-lg mb-4"><Map strokeWidth={1.5} className="mr-1 size-7"/> Area: 970 mi²</p>
                    <p className="flex flex-row text-lg mb-4"><MountainSnow strokeWidth={1.5} className="mr-1 size-7"/> Tallest Peak: Mt. San Antonio</p>
                    <p className="flex flex-row text-lg mb-4"><ChartArea strokeWidth={1.5} className="mr-1 size-7"/> Highest Point: 10,064 ft</p>
                    <p className="flex flex-row text-lg mb-4"><Snowflake strokeWidth={1.5} className="mr-1 size-7"/> Snowfall (avg): 163.9 in</p>
                </div>
            </div>
            
        </div>
    )
}

export default SanGabrielRouteList;