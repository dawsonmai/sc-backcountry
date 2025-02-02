"use client"
import { Info, ChevronDown, CloudSun, MountainSnow, MoveVertical, Wind, MoveDown, WindArrowDown, Droplets, Eye, Thermometer, Radio, Check, MoveUp, ThermometerSnowflake } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"

  import React, { useState, useEffect } from "react";
  

  const ranges = [
    {
        value: "San Gabriel",
        label: "San Gabriel Mountains",
      },
      {
        value: "San Bernardino",
        label: "San Bernardino Mountains",
      },
      {
        value: "San Jacinto",
        label: "San Jacinto Mountains",
      },
  ];

  

const ConditionsData = () => {
    const [openRange, setOpenRange] = React.useState(false);
    const [valueRange, setValueRange] = React.useState("San Gabriel");
    
    const [openElv, setOpenElv] = React.useState(false);
    const [valueElv, setValueElv] = React.useState("7031");
    
    function dataMountain(){
        if(valueRange === "San Gabriel"){
            return <h3 className="text-sm flex flex-row justify-start items-center text-gray-600"><Info size={15} strokeWidth={1.5} className="mr-1"/> Weather of the Mt. Baldy area</h3>;
        }else if(valueRange==="San Jacinto"){
            return <h3 className="text-sm flex flex-row justify-start items-center text-gray-600"><Info size={15} strokeWidth={1.5} className="mr-1"/> Weather of the Mt. San Jacinto area</h3>;
        }else if(valueRange==="San Bernardino"){
            return <h3 className="text-sm flex flex-row justify-start items-center text-gray-600"><Info size={15} strokeWidth={1.5} className="mr-1"/> Weather of the Mt. San Gorgonio area</h3>;
        }
    };

    function tempChange(forecastElv: number, forecastTemp: number){
        let altitudeDiff;
        let tempAtAlt;
        if(forecastElv>Number(valueElv)){
            altitudeDiff = forecastElv-Number(valueElv);
        }else{
            altitudeDiff = Number(valueElv) - forecastElv;
        }
        const tempDif = altitudeDiff * 0.00356;
        if(forecastElv>Number(valueElv)){
            tempAtAlt = forecastTemp + tempDif;
        }else{
            tempAtAlt = forecastTemp - tempDif;
        }
        console.log(tempAtAlt)
        return Math.round(tempAtAlt);

    }

    function heatIndex(temp: number, humidity: number){
        const humidityRatio = humidity/100;
        const feelsLike = -42.397+(2.04901523 * temp) + (10.14333127 * humidityRatio) - (0.22475541 * temp * humidityRatio) - (0.00683783 * (temp**2)) - (0.05481717 * (humidityRatio**2)) + (0.00122874 * (temp**2) * humidityRatio) + (0.00085282 * temp * (humidityRatio**2)) - (0.00000199 * (temp**2) * (humidityRatio**2));
        return <p className="text-md text-gray-600">Feels Like: <span className="font-mono">{Math.round(Number(feelsLike))}&deg; F</span></p>
    }

    function windChill(temp: number, windspeed: number){
        const chill = 35.74 + (0.6215 * temp) - (35.75*(windspeed**0.16)) + ((0.4275*temp)*(windspeed**0.16));
        return Math.round(chill);
    }

    function freezingLevel(temp: number, tempElv: number){
        const freezeAlt = ((temp-32)*1000)/3.5;
        return Math.round(freezeAlt);
    }

    function elvDrop(){
         if(valueRange === "San Gabriel"){
            return [
                {
                value: "4000",
                label: "4000 ft",
                },
                {
                value: "7031",
                label: "7031 ft",
                },
                {
                value: "10064",
                label: "10064 ft",
                },
            ];
        } else if(valueRange==="San Jacinto"){
            return [
                {
                value: "2000",
                label: "2000 ft",
                },
                {
                value: "6000",
                label: "6000 ft",
                },
                {
                value: "10800",
                label: "10800 ft",
                },
            ];
        } else if(valueRange==="San Bernardino"){
            return [
                {
                value: "6000",
                label: "6000 ft",
                },
                {
                value: "9800",
                label: "9800 ft",
                },
                {
                value: "11500",
                label: "11500 ft",
                },
            ];
        }
        return []
    }
    
    const elevations = elvDrop();

    useEffect(() => {
        if (elevations.length > 0) {
            setValueElv(elevations[1].value);
        }
    }, [valueRange]);

    function Conditions(){
        if(valueRange === "San Gabriel"){
            return( <>
            <div className="w-1/2 flex flex-col justify-between">
                <div className="flex flex-col items-start">
                    <h2 className="flex justify-center text-xl text-gray-600"><Wind className="mr-2" strokeWidth={1.5}/> Wind Speed: </h2>
                    <p className="text-3xl font-medium font-mono">12 mph</p>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="flex justify-center text-xl text-gray-600"><MoveDown className="mr-2" strokeWidth={1.5} /> Wind Direction: </h2>
                    <p className="text-3xl font-medium font-mono">North</p>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="flex justify-center text-xl text-gray-600"> <Thermometer className="mr-2" strokeWidth={1.5} /> Wind Chill: </h2>
                    <p className="text-3xl font-medium font-mono">{windChill(tempChange(1645, 45), 3)}&deg; F</p>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between">
                <div className="flex flex-col items-start p-2">
                    <h2 className="flex justify-center text-xl text-gray-600"><ThermometerSnowflake className="mr-2" strokeWidth={1.5} />Freezing Level: </h2>
                    <p className="text-3xl font-medium font-mono">{freezingLevel(45, 1645)} ft</p>
                </div>
                <div className="flex flex-col items-start p-2">
                    <h2 className="flex justify-center text-xl text-gray-600"><WindArrowDown className="mr-2" strokeWidth={1.5} />Barometer: </h2>
                    <p className="text-3xl font-medium font-mono">13.09in</p>
                </div>
                <div className="flex flex-col items-start p-2">
                    <h2 className="flex justify-center text-xl text-gray-600"><Droplets className="mr-2" strokeWidth={1.5} /> Humidity: </h2>
                    <p className="text-3xl font-medium font-mono">60%</p>
                </div>
            </div>
            </>
            );
        }else if(valueRange==="San Jacinto"){
            return( <>
                <div className="w-1/2 flex flex-col justify-between">
                <div className="flex flex-col items-start">
                    <h2 className="flex justify-center text-xl text-gray-600"><Wind className="mr-2" strokeWidth={1.5}/> Wind Speed: </h2>
                    <p className="text-3xl font-medium font-mono">12 mph</p>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="flex justify-center text-xl text-gray-600"><MoveDown className="mr-2" strokeWidth={1.5} /> Wind Direction: </h2>
                    <p className="text-3xl font-medium font-mono">North</p>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="flex justify-center text-xl text-gray-600"> <Thermometer className="mr-2" strokeWidth={1.5} /> Wind Chill: </h2>
                    <p className="text-3xl font-medium font-mono">{windChill(tempChange(1645, 45), 20)}&deg; F</p>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between">
                <div className="flex flex-col items-start p-2">
                    <h2 className="flex justify-center text-xl text-gray-600"><ThermometerSnowflake className="mr-2" strokeWidth={1.5} />Freezing Level: </h2>
                    <p className="text-3xl font-medium font-mono">{freezingLevel(45, 1645)} ft</p>
                </div>
                <div className="flex flex-col items-start p-2">
                    <h2 className="flex justify-center text-xl text-gray-600"><WindArrowDown className="mr-2" strokeWidth={1.5} />Barometer: </h2>
                    <p className="text-3xl font-medium font-mono">13.09in</p>
                </div>
                <div className="flex flex-col items-start p-2">
                    <h2 className="flex justify-center text-xl text-gray-600"><Droplets className="mr-2" strokeWidth={1.5} /> Humidity: </h2>
                    <p className="text-3xl font-medium font-mono">60%</p>
                </div>
            </div>
                </>
                );
        }else if(valueRange==="San Bernardino"){
            return( <>
                <div className="w-1/2 flex flex-col justify-between">
                <div className="flex flex-col items-start">
                    <h2 className="flex justify-center text-xl text-gray-600"><Wind className="mr-2" strokeWidth={1.5}/> Wind Speed: </h2>
                    <p className="text-3xl font-medium font-mono">12 mph</p>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="flex justify-center text-xl text-gray-600"><MoveDown className="mr-2" strokeWidth={1.5} /> Wind Direction: </h2>
                    <p className="text-3xl font-medium font-mono">North</p>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="flex justify-center text-xl text-gray-600"> <Thermometer className="mr-2" strokeWidth={1.5} /> Wind Chill: </h2>
                    <p className="text-3xl font-medium font-mono">{windChill(tempChange(1645, 45), 8)}&deg; F</p>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between">
                <div className="flex flex-col items-start p-2">
                    <h2 className="flex justify-center text-xl text-gray-600"><ThermometerSnowflake className="mr-2" strokeWidth={1.5} />Freezing Level: </h2>
                    <p className="text-3xl font-medium font-mono">{freezingLevel(45, 1645)} ft</p>
                </div>
                <div className="flex flex-col items-start p-2">
                    <h2 className="flex justify-center text-xl text-gray-600"><WindArrowDown className="mr-2" strokeWidth={1.5} />Barometer: </h2>
                    <p className="text-3xl font-medium font-mono">13.09in</p>
                </div>
                <div className="flex flex-col items-start p-2">
                    <h2 className="flex justify-center text-xl text-gray-600"><Droplets className="mr-2" strokeWidth={1.5} /> Humidity: </h2>
                    <p className="text-3xl font-medium font-mono">60%</p>
                </div>
            </div>
                </>
                );
        }
    };

    async function fetchData(dataType: String){
        try{
            let URI = "";
            if(valueRange==="San Gabriel"){
                URI = "https://api.weather.gov/stations/CMOC1/observations/latest"
                //URI = "https://api.weather.gov/gridpoints/LOX/174,44" //for Mt. Baldy
            } else if(valueRange==="San Bernardino"){
                //URI = "https://api.weather.gov/gridpoints/SGX/77,79" //for San Gorgonio
                URI = "https://api.weather.gov/stations/KL35/observations/latest"
            } else if (valueRange==="San Jacinto"){
                URI = "https://api.weather.gov/stations/KNWC1/observations/latest"
                //URI = "https://api.weather.gov/gridpoints/SGX/81,56" //for San Jacinto
            }

            const response = await fetch(URI)
            const data = await response.json()

            const temperature = Math.round((Number(data.properties.temperature.value)*(9/5))+32)
            const elevation = Math.round(Number(data.properties.elevation.value) * 3.280839895)
            console.log(temperature)
            console.log(elevation)
            if(dataType === "Temp"){
                return temperature
            }else if(dataType === "Elv"){
                return elevation
            }
        }catch(error){
            console.log("Error" + error);
        }
    };
    
    return (
        <div className="flex flex-col justify-between pb-2">
            <div className="p-2 flex md:flex-row justify-between">
                <div className="w-2/3 flex flex-col justify-between px-5">
                    <div>
                        <Popover open={openRange} onOpenChange={setOpenRange}>
                            <PopoverTrigger asChild>
                                <Button
                                variant="ghost"
                                role="combobox"
                                aria-expanded={openRange}
                                className="justify-start text-3xl font-medium pr-2 pl-1"
                                >
                                {valueRange
                                    ? ranges.find((range) => range.value === valueRange)?.label
                                    : "Select Range"}
                                <ChevronDown className="opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-0">
                                <Command>
                                    <CommandList>
                                        <CommandGroup>
                                        {ranges.map((range) => (
                                            <CommandItem
                                            key={range.value}
                                            value={range.value}
                                            onSelect={(currentValue) => {
                                                if (currentValue !== valueRange) {
                                                  setValueRange(currentValue);
                                                }
                                                setOpenRange(false);
                                              }}
                                              className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                            >
                                              {range.label}
                                            <Check
                                                className={cn(
                                                "ml-auto",
                                                valueRange === range.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            </CommandItem>
                                        ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                        {dataMountain()}
                    </div>
                    <div className="flex flex-row justify-between">
                            <div className="flex flex-col justify-end">
                                <h2 className="font-bold text-5xl"><span className="font-mono">{tempChange(Number(fetchData("Elv")), Number(fetchData("Temp")))}</span>&deg; F</h2>
                                {heatIndex(Number(tempChange(1645, 45)), 98)}
                            </div>
                            <div className="flex flex-col justify-center items-center px-10">
                                <CloudSun strokeWidth={1.5} size={70} />
                                <h3 className="text-md text-gray-600">Partly Cloudy</h3>
                            </div>
                        </div>
                </div>
                <div className="w-1/3 flex flex-row items-center rounded-3xl bg-gray-200 p-5">
                    <div className="flex flex-col">
                        <h2 className="font-medium text-xl text-gray-700 uppercase">Elevation</h2>
                        <div className="flex flex-row items-center justify-center py-6">
                            <MountainSnow size={110} strokeWidth={1} />
                            <MoveVertical size={65} strokeWidth={1} />
                        </div>
                    </div>
                    
                    <Popover open={openElv} onOpenChange={setOpenElv}>
                        <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openElv}
                            className="justify-center text-2xl font-mono"
                        >
                            {valueElv
                            ? elevations.find((elevation) => elevation.value === valueElv)?.label
                            : "Select Elevation"}
                            <ChevronDown className="opacity-50" />
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandList>
                            <CommandGroup>
                                {elevations.map((elevation) => (
                               <CommandItem
                               key={elevation.value}
                               value={elevation.value.toString()}
                               onSelect={(currentValue) => {
                                   const selectedValue = parseInt(currentValue, 10);
                                   if (parseInt(valueElv) !== selectedValue) {
                                       setValueElv(selectedValue.toString());
                                   }
                                   setOpenElv(false);
                               }}
                               className="text-sm font-medium font-mono text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                             >
                                 {elevation.label}
                                 <Check
                                     className={cn(
                                       "ml-auto",
                                       valueElv === elevation.value ? "opacity-100" : "opacity-0"
                                     )}
                                 />
                             </CommandItem>
                             
                             
                                ))}
                            </CommandGroup>
                            </CommandList>
                        </Command>
                        </PopoverContent>
                    </Popover>

                </div>
            </div>
            <div className="p-2 flex flex-row">
                <div className="pr-4 w-2/3">
                    <div className="bg-gray-200 rounded-3xl px-5 pt-5 pb-2">
                        <h2 className="text-xl text-gray-700 font-medium pb-3 uppercase">Conditions</h2>
                        <div className="flex flex-row justify-center">
                            <Conditions />
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

export default ConditionsData;