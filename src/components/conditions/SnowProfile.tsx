"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Info } from "lucide-react";
import * as React from "react";
import { useGlobalContext } from "@/context/GlobalContext";

const SnowProfile = () => {
	const { observations } = useGlobalContext();

	return (
		<div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
			<div className="w-full md:w-2/3 px-2 md:px-5">
				<h2 className="uppercase font-medium text-gray-700 text-lg md:text-xl pb-2 flex flex-row items-center">
					Snow Profile <Info size={18} className="ml-2" />
				</h2>
				<div className="w-full h-[50vh] md:h-screen bg-gray-400"></div>
			</div>
			<div className="w-full md:w-1/3 flex flex-col gap-4">
				<div className="bg-gray-200 rounded-3xl p-3 md:p-5 h-[40vh] md:h-2/3">
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
				<div className="rounded-3xl bg-gray-200 h-[20vh] md:h-1/3 p-3 md:p-5">
					<h2 className="uppercase font-medium text-gray-700 text-lg md:text-xl mb-2">Notes</h2>
					<p className="text-base md:text-lg">No notes</p>
				</div>
			</div>
		</div>
	);
};

export default SnowProfile;
