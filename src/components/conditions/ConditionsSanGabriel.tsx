import { Info, ChevronDown, CloudSun } from "lucide-react";
const ConditionsSanGabriel = () => {
    return (
        <div className="flex flex-row justify-between p-5">
            <div className="debug w-2/3">
                <div className=" h-60 flex flex-row justify-between">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="font-semibold text-3xl">San Gabriel Mountains</h2>
                            <p className="flex items-center text-lg">4000 ft <ChevronDown strokeWidth = {1.5} className="ml-1"/></p>
                        </div>
                        <div>
                            <h2 className="font-bold text-4xl">70&deg; F</h2>
                            <p className="text-md">Feels Like: 60&deg; F</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center px-10">
                        <CloudSun strokeWidth={1.25} size={100} />
                    </div>
                </div>
            </div>
            <div className="h-full w-1/3 debug"></div>
        </div>
    );
};

export default ConditionsSanGabriel;