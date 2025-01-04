import { Info, ChevronDown, CloudSun, MountainSnow, MoveVertical, Wind, MoveDown, WindArrowDown, Droplets, Eye, Thermometer, Radio } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const ConditionsSanGabriel = () => {
    return (
        <div className="flex flex-col justify-between pb-2">
            <div className="p-2 flex md:flex-row justify-between">
                <div className="w-2/3 flex flex-col justify-between px-5">
                    <div>
                        <h2 className="font-semibold text-3xl flex flex-row items-center justify-start">San Gabriel Mountains <ChevronDown className="ml-2" /></h2>
                        <h3 className="text-sm flex flex-row justify-start items-center text-gray-600"><Info size={15} strokeWidth={1.5} className="mr-1"/> Weather of the Mt. Baldy area</h3>
                    </div>
                    <div className="flex flex-row justify-between">
                            <div className="flex flex-col justify-end">
                                <h2 className="font-bold text-5xl">70&deg; F</h2>
                                <p className="text-md text-gray-600">Feels Like: 60&deg; F</p>
                            </div>
                            <div className="flex flex-col justify-center items-center px-10">
                                <CloudSun strokeWidth={1.5} size={70} />
                                <h3 className="text-md text-gray-600">Partly Cloudy</h3>
                            </div>
                        </div>
                </div>
                <div className="w-1/3 flex flex-row rounded-3xl bg-gray-200 p-5">
                    <div className="flex flex-col">
                        <h2 className="font-medium text-xl text-gray-700 uppercase">Elevation</h2>
                        <div className="flex flex-row items-center justify-center py-6">
                            <MountainSnow size={110} strokeWidth={1} />
                            <MoveVertical size={65} strokeWidth={1} />
                        </div>
                    </div>
                    <RadioGroup defaultValue="4000 ft" className="flex flex-col justify-between items-center p-5">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1000 ft" id="r1" />
                        <h3 className="text-xl text-gray-500 ">10000 ft</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="6000 ft" id="r1" />
                        <h3 className="text-xl text-gray-500 ">6000 ft</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="4000 ft" id="r1" />
                        <h3 className="text-xl text-gray-500 ">4000 ft</h3>
                    </div>
                    </RadioGroup>
                </div>
            </div>
            <div className="p-2 flex flex-row">
                <div className="pr-4 w-2/3">
                    <div className="bg-gray-200 rounded-3xl px-5 pt-5 pb-2">
                        <h2 className="text-xl text-gray-700 font-medium pb-3 uppercase">Conditions</h2>
                        <div className="flex flex-row justify-center">
                            <div className="w-1/2 flex flex-col justify-between">
                                <div className="flex flex-col items-start">
                                    <h2 className="flex justify-center text-xl text-gray-600"><Wind className="mr-2" strokeWidth={1.5}/> Wind Speed: </h2>
                                    <p className="text-3xl font-medium">12 mph</p>
                                </div>
                                <div className="flex flex-col items-start">
                                    <h2 className="flex justify-center text-xl text-gray-600"><MoveDown className="mr-2" strokeWidth={1.5} /> Wind Direction: </h2>
                                    <p className="text-3xl font-medium">North</p>
                                </div>
                                <div className="flex flex-col items-start">
                                    <h2 className="flex justify-center text-xl text-gray-600"><WindArrowDown className="mr-2" strokeWidth={1.5} /> Barometer: </h2>
                                    <p className="text-3xl font-medium">29.88 in</p>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col justify-between">
                                <div className="flex flex-col items-start p-2">
                                    <h2 className="flex justify-center text-xl text-gray-600"><Droplets className="mr-2" strokeWidth={1.5} /> Humidity: </h2>
                                    <p className="text-3xl font-medium">14%</p>
                                </div>
                                <div className="flex flex-col items-start p-2">
                                    <h2 className="flex justify-center text-xl text-gray-600"><Eye className="mr-2" strokeWidth={1.5} /> Visibility: </h2>
                                    <p className="text-3xl font-medium">N/A</p>
                                </div>
                                <div className="flex flex-col items-start p-2">
                                    <h2 className="flex justify-center text-xl text-gray-600"><Thermometer className="mr-2" strokeWidth={1.5} /> Dewpoint: </h2>
                                    <p className="text-3xl font-medium">11&deg; F</p>
                                </div>
                            </div>
                        </div>
                        <p className="flex flex row justify-end text-sm text-light text-gray-600">Last updated at 12:46 pm</p>
                    </div>
                </div>
                <div className="w-1/3 rounded-3xl bg-gray-200 px-5 pt-5 pb-2">
                    <h2 className="font-medium text-xl text-gray-700 uppercase">4-Day Forecast</h2>
                    <div className="flex flex-col ">
                        <div className="w-full border-b-2 border-gray-400 flex flex-row justify-between py-2">
                            <h3 className="text-md text-gray-500 flex items-center">Sat</h3>
                            <h3 className="text-md flex justify-center items-center"><CloudSun size={50} strokeWidth={1.2} className="mr-1"/> Partly Cloudy</h3>
                            <h3 className="text-md flex justify-center items-center">60&deg; F/<span className="text-gray-500">40&deg; F</span></h3>
                        </div>
                        <div className="w-full border-b-2 border-gray-400 flex flex-row justify-between py-2">
                            <h3 className="text-md text-gray-500 flex items-center">Sun</h3>
                            <h3 className="text-md flex justify-center items-center"><CloudSun size={50} strokeWidth={1.2} className="mr-1"/> Partly Cloudy</h3>
                            <h3 className="text-md flex justify-center items-center">60&deg; F/<span className="text-gray-500">40&deg; F</span></h3>
                        </div>
                        <div className="w-full border-b-2 border-gray-400 flex flex-row justify-between py-2">
                            <h3 className="text-md text-gray-500 flex items-center">Mon</h3>
                            <h3 className="text-md flex justify-center items-center"><CloudSun size={50} strokeWidth={1.2} className="mr-1"/> Partly Cloudy</h3>
                            <h3 className="text-md flex justify-center items-center">60&deg; F/<span className="text-gray-500">40&deg; F</span></h3>
                        </div>
                        <div className="w-full flex flex-row justify-between pt-2">
                            <h3 className="text-md text-gray-500 flex items-center">Tue</h3>
                            <h3 className="text-md flex justify-center items-center"><CloudSun size={50} strokeWidth={1.2} className="mr-1"/> Partly Cloudy</h3>
                            <h3 className="text-md flex justify-center items-center">60&deg; F/<span className="text-gray-500">40&deg; F</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConditionsSanGabriel;