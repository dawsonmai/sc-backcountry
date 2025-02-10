"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Info } from "lucide-react";
import * as React from "react";
import { useGlobalContext } from "@/context/GlobalContext";

const SnowProfile = () => {
	const { observations } = useGlobalContext();

	return (
		<div className="flex flex-row justify-between">
			<div className="w-2/3 px-5">
				<h2 className="uppercase font-medium text-gray-700 text-xl pb-2 flex flex-row items-center">
					Snow Profile <Info size={20} className="ml-2" />
				</h2>
				<div className="w-full h-screen bg-gray-400"></div>
			</div>
			<div className="w-1/3 flex flex-col">
				<div className="bg-gray-200 rounded-3xl p-5 h-2/3 mb-4">
					<h2 className="uppercase font-medium text-gray-700 text-xl">Observations</h2>
					<ScrollArea className="h-full pb-4">
						<div>
							{observations.map((observation, index) => (
								<Card key={index} className="mb-4">
									<CardHeader>
										<CardTitle>{observation.date}</CardTitle>
										<CardDescription>{observation.title}</CardDescription>
										<p>{observation.description}</p>
									</CardHeader>
									<CardFooter>
										<CardDescription>Location: {observation.location}</CardDescription>
									</CardFooter>
								</Card>
							))}
						</div>
					</ScrollArea>
				</div>
				<div className="rounded-3xl bg-gray-200 h-1/3 p-5">
					<h2 className="uppercase font-medium text-gray-700 text-xl">Notes</h2>
					<p className="text-lg">No notes</p>
				</div>
			</div>
		</div>
	);
};

export default SnowProfile;
