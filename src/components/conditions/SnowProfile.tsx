import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area";
import {Info} from "lucide-react";
import * as React from "react";
const cards = [
    {
        date: "Jan 4, 2025",
        title: "Avalanche",
        description: "Slide spotted off Baldy Bowl!",
        location: "Mt. Baldy",
    },
    {
        date: "Jan 2, 2025",
        title: "Snow Pack",
        description: "Weak layer detected",
        location: "Mt. Baden Powell",
    },
    {
        date: "Dec 30, 2024",
        title: "Wind Slab",
        description: "High winds forming slabs",
        location: "Mt. Whitney",
    },
];
const SnowProfile = () =>{
    return (
        
        <div className="flex flex-row justify-between">
            <div className="w-2/3 px-5">
                <h2 className="uppercase font-medium text-gray-700 text-xl pb-2 flex flex-row items-center">Snow Profile <Info size={20} className="ml-2" /></h2>
                <div className="w-full h-screen bg-gray-400"></div>
            </div>
            <div className="w-1/3 flex flex-col">
                <div className="bg-gray-200 rounded-3xl p-5 h-2/3 mb-4">
                    <h2 className="uppercase font-medium text-gray-700 text-xl">Observations</h2>
                    <ScrollArea className="h-full pb-4">
                        <div>
                            {cards.map((card, index) => (
                            <Card key={index} className="mb-4">
                                <CardHeader>
                                    <CardTitle>{card.date}</CardTitle>
                                    <CardDescription>{card.title}</CardDescription>
                                    <p>{card.description}</p>
                                </CardHeader>
                                <CardFooter>
                                    <CardDescription>Location: {card.location}</CardDescription>
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