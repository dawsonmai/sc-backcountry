import Header from "@/components/global/Header";
import Footer2 from "@/components/global/Footer2";
import Footer from "@/components/global/Footer";
import { Calendar } from "lucide-react";

const SanJacintoReport = () => {
    return (
        <div>
            <div className="flex flex-col p-5">
                <Header />
                <h1 className="text-4xl mb-2">San Jacinto Mountains Report</h1>
                <div className="flex flex-row mb-6">
                    <Calendar size={28}className="mr-2" />
                    <h3 className="text-2xl font-semibold">March 30, 2025</h3>
                </div>
                <p className="text-xl mb-6">
                    Despite April arriving soon, hazardous alpine conditions still exist in the San Jacinto backcountry. There is still over 2 ft of snow on trails, so traction devices such as microspikes or snowshoes are recommended. Cold temperatures and snow showers are in the forecast in the upcoming week, so expect a couple of inches of new snow. This report covers the east &#40;Tramway&#41; side of Mt. San Jacinto.
                </p>
                <div className="w-full h-[65vh] sm:h-[80vh] lg:h-screen mb-6" style={{
								backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/san-jacinto-report-3-30-25/san-jacinto-report-overview.png)",
								backgroundSize: "contain",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
							}} />

                <h2 className="font-semibold text-2xl mb-2">Trail Conditions</h2>
                <p className="text-xl mb-6">
                    The Round Valley trail begins to be completely covered in snow at about 8,450 ft, since that is when the trail crosses from a south-facing slope to a north-facing slope. North-facing slopes continue to be snow-covered down to the tramway upper station, while south-facing slopes have significantly less snow cover, with occasional deep snow patches, for most of the trail. 
                </p>
                <div className="flex flex-col text-center items-center mb-6">
                    <div className="flex flex-col sm:flex-row gap-2 lg:gap-6 justify-center mb-2">
                        <div className="w-72 h-72 md:h-80 md:w-80 lg:w-96 md:h-96" style={{
                                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/san-jacinto-report-3-30-25/north-aspect.jpeg)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }} />
                        <div className="w-72 h-72 md:h-80 md:w-80 lg:w-96 md:h-96" style={{
                                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/san-jacinto-report-3-30-25/south-aspect.jpeg)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }} />
                    </div>
                    <p className="text-md w-full md:w-1/2 text-center">North-facing slopes are completely snow covered while south-facing slopes have only snow patches.</p>
                </div>
                <p className="text-xl mb-6">
                    The snow on the trail is firm, but not icy, with reliable footings in the snow. Traction devices are always recommended, but it may not be necessary with these conditions if you remain on the main trail. The trail remains well tracked at lower elevations, but as you travel higher, it becomes more difficult to navigate. Ensure that you are familiar with the area or have some sort of navigation method, such as a map and compass or GPS device. There is still around 60&#8211;95 cm (~2&#8211;3 ft) of snow on the trail, and this measurement remains consistent even at higher elevations (see above image for detailed snow depths), but due to the firm conditions, postholing should not be an issue. If you decide to go off-trail, expect to posthole more frequently due to the deeper and sometimes softer snow.
                </p>

                <h2 className="font-semibold text-2xl mb-2">Snow Conditions</h2>
                <h3 className="text-2xl mb-2 underline">Point A</h3>
                <div className="w-full h-[65vh] sm:h-[80vh] lg:h-screen mb-2" style={{
								backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/san-jacinto-report-3-30-25/round-valley-profile.png)",
								backgroundSize: "contain",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
							}} />
                <p className="text-xl mb-6">
                    A snow pit was dug near the Round Valley campsite on an east aspect slope at 9,200 ft. Depth of the pit was 90 cm, but depths of the area surrounding it ranged from 90&#8211;100 cm deep. The snowpack is firm, with most layers being in between 1 finger and pencil hardness. No weak layers were detected, so slab avalanches on east-facing slopes should not be an issue.
                </p>
                <h3 className="text-2xl mb-2 underline">Point B</h3>
                <div className="w-full h-[65vh] sm:h-[80vh] lg:h-screen mb-2" style={{
								backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/san-jacinto-report-3-30-25/high-trail-profile.png)",
								backgroundSize: "contain",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
							}} />
                <p className="text-xl mb-6">
                A snow pit was dug near the Round Valley/High Trail junction on a north aspect slope at 9,030 ft. Depth of the pit was 105 cm, with depths of the surrounding area ranging from 65&#8211;103 cm. Snowpack here is much firmer than the east aspect pit analysis, with most layers ranging in between pencil and knife hardness. No weak layers were detected, but the bottom-most layer is softer than the upper layers.
                </p>
            </div>
            <Footer2 />
        </div>
    )
}

export default SanJacintoReport;