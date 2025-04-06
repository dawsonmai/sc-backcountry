import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar } from "lucide-react";

const SnowDepthResources = () => {
    return (
        <div className="px-4">
            <div className="flex flex-row mb-6">
                <Calendar size={28}className="mr-2" />
                <h3 className="text-2xl font-semibold">March 27, 2025</h3>
            </div>
            <p className="text-xl mb-6">
                Snow depth and snowpack can greatly affect your trip. Deep and less stable snow can make your trip much more difficult and increase the risk of avalanche. A lower snowpack can expose rocks and dirt patches, which makes backcountry skiing much less enjoyable. A great resource to check snow depth and snow pack is our <span><Link href="/conditions" className="hover:underline font-bold">Conditions</Link></span> page, which includes a detailed snow profile graph that gives you information on snow depth and snow stability. The <span><Link href="https://www.fs.usda.gov/Internet/FSE_DOCUMENTS/fseprd1045012.html" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">USDA Snow Depth Map</Link></span> is another useful resource to check snow depth since it provides data for mountains all over the US. While it&apos;s great for checking overall snowpack in larger areas, such as the Sierras, it&apos;s less reliable and accurate for smaller areas such as the mountain ranges in Southern California.
            </p>
            <p className="text-xl mb-6">
                Checking data from local ski resorts, such as <span><Link href="https://www.bigbearmountainresort.com/mountain-information" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">Big Bear Mountain Resort</Link></span>, and <span><Link href="https://www.mthigh.com/site/trails-and-conditions/conditions/snow-and-weather-report/snow-and-weather-report" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">Mountain High</Link></span> in the San Gabriels is also a good idea, but resorts tend to rely on artificial snow making in order to maintain their snow base, so this data may not always be applicable to conditions in the wilderness.
            </p>
            <p className="text-xl">
            You can also look at webcams to visually check snowpack in the wilderness. You can view the webcams of <span><Link href="https://www.bigbearmountainresort.com/webcams" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">Big Bear Mountain Resort</Link></span> to check snowpack near the lake, and <span><Link href="https://www.bensweather.com/benscamsang.php" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">Ben&apos;s Weather</Link></span>, which provides a camera that allows you to see Mt. San Gorgonio directly. <span><Link href="https://www.mtbaldyresort.com/mountain-report" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">Mt. Baldy Resort</Link></span> also occasionally posts updates which can include data about their snowpack. Stay safe in the backcountry!
            </p>
        </div>
    )
}

export default SnowDepthResources;