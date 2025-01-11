"use client"
import { Info, ChevronDown, CloudSun, MountainSnow, MoveVertical, Wind, MoveDown, WindArrowDown, Droplets, Eye, Thermometer, Radio, Check, MoveUp } from "lucide-react";
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

import * as React from "react";
  
  const elevations = [
    {
      value: "4000",
      label: "4000 ft",
    },
    {
      value: "6000",
      label: "6000 ft",
    },
    {
      value: "10000",
      label: "10000 ft",
    },
  ];

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

  

const ConditionsSanGabriel = () => {
    const [openElv, setOpenElv] = React.useState(false);
    const [valueElv, setValueElv] = React.useState("4000");

    const [openRange, setOpenRange] = React.useState(false);
    const [valueRange, setValueRange] = React.useState("San Gabriel");
    
    function dataMountain(){
        if(valueRange === "San Gabriel"){
            return <h3 className="text-sm flex flex-row justify-start items-center text-gray-600"><Info size={15} strokeWidth={1.5} className="mr-1"/> Weather of the Mt. Baldy area</h3>;
        }else if(valueRange==="San Jacinto"){
            return <h3 className="text-sm flex flex-row justify-start items-center text-gray-600"><Info size={15} strokeWidth={1.5} className="mr-1"/> Weather of the Mt. San Jacinto area</h3>;
        }else if(valueRange==="San Bernardino"){
            return <h3 className="text-sm flex flex-row justify-start items-center text-gray-600"><Info size={15} strokeWidth={1.5} className="mr-1"/> Weather of the Mt. San Gorgonio area</h3>;
        }
    };

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
                    <h2 className="flex justify-center text-xl text-gray-600"><WindArrowDown className="mr-2" strokeWidth={1.5} /> Barometer: </h2>
                    <p className="text-3xl font-medium font-mono">29.88 in</p>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between">
                <div className="flex flex-col items-start p-2">
                    <h2 className="flex justify-center text-xl text-gray-600"><Droplets className="mr-2" strokeWidth={1.5} /> Humidity: </h2>
                    <p className="text-3xl font-medium font-mono">14%</p>
                </div>
                <div className="flex flex-col items-start p-2">
                    <h2 className="flex justify-center text-xl text-gray-600"><Eye className="mr-2" strokeWidth={1.5} /> Visibility: </h2>
                    <p className="text-3xl font-medium font-mono">N/A</p>
                </div>
                <div className="flex flex-col items-start p-2">
                    <h2 className="flex justify-center text-xl text-gray-600"><Thermometer className="mr-2" strokeWidth={1.5} /> Dewpoint: </h2>
                    <p className="text-3xl font-medium font-mono">11&deg; F</p>
                </div>
            </div>
            </>
            );
        }else if(valueRange==="San Jacinto"){
            return( <>
                <div className="w-1/2 flex flex-col justify-between">
                    <div className="flex flex-col items-start">
                        <h2 className="flex justify-center text-xl text-gray-600"><Wind className="mr-2" strokeWidth={1.5}/> Wind Speed: </h2>
                        <p className="text-3xl font-medium font-mono">5 mph</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="flex justify-center text-xl text-gray-600"><MoveUp className="mr-2" strokeWidth={1.5} /> Wind Direction: </h2>
                        <p className="text-3xl font-medium font-mono">South</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="flex justify-center text-xl text-gray-600"><WindArrowDown className="mr-2" strokeWidth={1.5} /> Barometer: </h2>
                        <p className="text-3xl font-medium font-mono">13.09 in</p>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-between">
                    <div className="flex flex-col items-start p-2">
                        <h2 className="flex justify-center text-xl text-gray-600"><Droplets className="mr-2" strokeWidth={1.5} /> Humidity: </h2>
                        <p className="text-3xl font-medium font-mono">2%</p>
                    </div>
                    <div className="flex flex-col items-start p-2">
                        <h2 className="flex justify-center text-xl text-gray-600"><Eye className="mr-2" strokeWidth={1.5} /> Visibility: </h2>
                        <p className="text-3xl font-medium font-mono">9 mi</p>
                    </div>
                    <div className="flex flex-col items-start p-2">
                        <h2 className="flex justify-center text-xl text-gray-600"><Thermometer className="mr-2" strokeWidth={1.5} /> Dewpoint: </h2>
                        <p className="text-3xl font-medium font-mono">98&deg; F</p>
                    </div>
                </div>
                </>
                );
        }else if(valueRange==="San Bernardino"){
            return( <>
                <div className="w-1/2 flex flex-col justify-between">
                    <div className="flex flex-col items-start">
                        <h2 className="flex justify-center text-xl text-gray-600"><Wind className="mr-2" strokeWidth={1.5}/> Wind Speed: </h2>
                        <p className="text-3xl font-medium font-mono">35 mph</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="flex justify-center text-xl text-gray-600"><MoveDown className="mr-2" strokeWidth={1.5} /> Wind Direction: </h2>
                        <p className="text-3xl font-medium font-mono">North</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="flex justify-center text-xl text-gray-600"><WindArrowDown className="mr-2" strokeWidth={1.5} /> Barometer: </h2>
                        <p className="text-3xl font-medium font-mono">29.18 in</p>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-between">
                    <div className="flex flex-col items-start p-2">
                        <h2 className="flex justify-center text-xl text-gray-600"><Droplets className="mr-2" strokeWidth={1.5} /> Humidity: </h2>
                        <p className="text-3xl font-medium font-mono">18%</p>
                    </div>
                    <div className="flex flex-col items-start p-2">
                        <h2 className="flex justify-center text-xl text-gray-600"><Eye className="mr-2" strokeWidth={1.5} /> Visibility: </h2>
                        <p className="text-3xl font-medium font-mono">0.1 mi</p>
                    </div>
                    <div className="flex flex-col items-start p-2">
                        <h2 className="flex justify-center text-xl text-gray-600"><Thermometer className="mr-2" strokeWidth={1.5} /> Dewpoint: </h2>
                        <p className="text-3xl font-medium font-mono">-4&deg; F</p>
                    </div>
                </div>
                </>
                );
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
                                <h2 className="font-bold text-5xl"><span className="font-mono">70</span>&deg; F</h2>
                                <p className="text-md text-gray-600">Feels Like: <span className="font-mono">60&deg; F</span></p>
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
                            <ChevronDown className="opacity-50"/>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                                <CommandList>
                                    <CommandGroup>
                                    {elevations.map((elevation) => (
                                        <CommandItem
                                        key={elevation.value}
                                        value={elevation.value}
                                        onSelect={(currentValue) => {
                                            if (currentValue !== valueElv) {
                                              setValueElv(currentValue);
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

export default ConditionsSanGabriel;