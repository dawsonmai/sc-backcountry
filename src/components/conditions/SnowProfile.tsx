"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Info } from "lucide-react";
import * as React from "react";
import { useGlobalContext } from "@/context/GlobalContext";

const SnowProfile = () => {
	const { observations,
			selectedRange: valueRange,
			setSelectedRange: setValueRange,
	 } = useGlobalContext();

	 function setProfileChart(){
		if(valueRange === "San Gabriel"){
			return(
				<div className="w-full h-[50vh] md:h-screen items-center flex justify-center text-3xl">No Data</div>
			);
		}else if(valueRange === "San Bernardino"){
			return(
				<div className="w-full h-[50vh] md:h-screen items-center flex justify-center text-3xl">No Data</div>
			);
		}else if(valueRange === "San Jacinto"){
			return(
				<div className="w-full h-[50vh] md:h-screen items-center flex justify-center text-3xl">No Data</div>
			);
		}
	 }

	 function setNotes(){
		if(valueRange === "San Gabriel"){
			return(
				<p className="text-base md:text-lg">No notes</p>
			);
		}else if(valueRange === "San Bernardino"){
			return(
				<p className="text-base md:text-lg">No notes</p>
			);
		}else if(valueRange === "San Jacinto"){
			return(
				<p className="text-base md:text-lg">No notes</p>
			);
		}
	 }

	return (
		<div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
			<div className="w-full md:w-2/3 px-2 md:px-5">
				<h2 className="uppercase font-medium text-gray-700 text-lg md:text-xl pb-2 flex flex-row items-center">
					Snow Profile <Info size={18} className="ml-2" />
				</h2>
				{setProfileChart()}
			</div>
			<div className="w-full md:w-1/3 flex flex-col gap-4">
				<div className="bg-gray-200 rounded-3xl p-3 md:p-5 h-[40vh] md:h-2/3 shadow-lg shadow-neutral-300">
					<h2 className="uppercase font-medium text-gray-700 text-lg md:text-xl mb-2">Observations</h2>
					<ScrollArea className="h-[calc(100%-2rem)] pb-4">
						<div className="space-y-3">
							{observations.map((observation, index) => (
								<Card key={index} className="p-3">
									<CardHeader className="p-0 pb-2">
										<CardTitle className="text-base md:text-lg">{observation.date}</CardTitle>
										<CardDescription className="text-sm md:text-base">{observation.title}</CardDescription>
										<p className="text-sm md:text-base">{observation.description}</p>
									</CardHeader>
									<CardFooter className="p-0">
										<CardDescription className="text-xs md:text-sm">Location: {observation.location}</CardDescription>
									</CardFooter>
								</Card>
							))}
						</div>
					</ScrollArea>
				</div>
				<div className="rounded-3xl bg-gray-200 h-[20vh] md:h-1/3 p-3 md:p-5 shadow-lg shadow-neutral-300">
					<h2 className="uppercase font-medium text-gray-700 text-lg md:text-xl mb-2">Notes</h2>
					{setNotes()}
				</div>
			</div>
		</div>
	);
};

export default SnowProfile;
