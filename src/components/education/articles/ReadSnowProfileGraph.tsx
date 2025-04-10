import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Image from "next/image";

const ReadSnowProfileGraph = () => {
    return (
        <div className="px-4">
            <div className="flex flex-row mb-6">
                <Calendar size={28}className="mr-2" />
                <h3 className="text-2xl font-semibold">April 9, 2025</h3>
            </div>
            <p className="text-xl mb-6">
                Reading a snow profile graph is important in keeping you safe when you travel on snow as it gives valuable information about snow depth and the stability of the snow. As complicated as the graph may look at first, it&apos;s actually quite simple to read. Let&apos;s begin with the basics. On the side and top of the chart, there is information on where this data was taken, such as the date, location name, as well as elevation, slope aspect, and coordinates. Elevation and slope aspect information are important since snow conditions at different elevations and on slopes facing different directions can vary significantly. For example, in the winter, north-facing slopes tend to have more snow since they are shaded from direct sunlight. South-facing slopes, on the other hand, are warmer and drier since they are usually facing in the direction of sunlight. 
            </p>
            <div className="flex flex-col text-center items-center mb-6">
                <div className="w-full h-[65vh] sm:h-[80vh] lg:h-screen mb-2 relative">
                    <Image
                        src="/article-images/how-to-read-snow-profile-graph/GraphMetadata.jpeg"
                        alt="High Trail Profile"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                        className="absolute inset-0"
                    />
                </div>
                <p className="text-md w-full md:w-1/2 text-center">On the side and top of the chart, there is information on where this data was taken, such as the date, location name, as well as elevation, slope aspect, and coordinates.</p>
            </div>
            <p className="text-xl">
                Let&apos;s now look at the graph itself. Data for the graph is collected by digging a snow pit and analyzing the snow pack visually. The vertical axis measures snow depth in centimeters, since this is the standard around the world and on snow probes, and the horizontal axis measures snow hardness. The horizontal axis is labeled with values of F, 4F, 1F, P, and K, which are defined as:
            </p>
            <ul className="ml-10 list-disc text-xl mb-6">
                <li><span className="font-semibold">F (Fist)</span>: Soft, loose snow.</li>
                <li><span className="font-semibold">4F (Four fingers)</span>: Soft, but firmer than fist-hard snow.</li>
                <li><span className="font-semibold">1F (One finger)</span>: Firm and compact snow.</li>
                <li><span className="font-semibold">P (Pencil)</span>: Quite firm and hard, similar to the hardness of a pencil.</li>
                <li><span className="font-semibold">K (Knife)</span>: Very hard snow, usually ice.</li>
            </ul>
            <p className="text-xl mb-6">
                A box on the graph represents a snow layer and how far the box extends to the right depicts how hard the snow layer is. If the box extends far out to the right from the vertical axis, it indicates that that snow layer is harder. Conversely, a box that doesn&apos;t extend far and remains near the vertical axis indicates that the snow layer is softer.
            </p>
            <div className="flex flex-col text-center items-center mb-6">
                <div className="w-full h-[65vh] sm:h-[80vh] lg:h-screen mb-2 relative">
                    <Image
                        src="/article-images/how-to-read-snow-profile-graph/GraphLayer.jpeg"
                        alt="Graph Layer"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                        className="absolute inset-0"
                    />
                </div>
                <p className="text-md w-full md:w-1/2 text-center">A box on the graph represents a snow layer and how far the box extends to the right depicts how hard the snow layer is.</p>
            </div>
            <p className="text-xl mb-6">
            So what does this data mean? As mentioned before, a snow profile graph gives valuable information on snow stability and can be helpful for avoiding avalanches. If the graph has a significantly softer layer below a firm layer, this creates a weak layer and increases the risk of a slab avalanche. A slightly softer layer underneath another snow layer shouldn&apos;t be an issue. Generally, you would want a snow pack that has uniform firmness or is softer on top and firmer on the bottom. Snow profiles will vary depending on your exact location, so conditions may vary. We will usually only publish an updated snow profile graph in our <span><Link href="/conditions" className="hover:underline font-bold">Conditions</Link></span> page if there has been recent snowfall, so it&apos;s important that you still evaluate your surroundings when you are out there yourself. Stay safe in the backcountry!
            </p>
            <div className="flex flex-col text-center items-center mb-6">
                <div className="w-72 h-72 md:h-80 md:w-80 lg:w-96 md:h-96 relative">
                    <Image
                    src="/article-images/how-to-read-snow-profile-graph/SlabAvalanche.png"
                    alt="North Aspect"
                    layout="fill" // Makes the image fill the container
                    objectFit="cover" // Ensures the image covers the container without stretching
                    objectPosition="center" // Centers the image
                    className="absolute inset-0"
                    />
                </div>
                <p className="text-md w-full md:w-1/2 text-center">The aftermath of a slab avalanche.</p>
            </div>
        </div>
    )
}

export default ReadSnowProfileGraph;