import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
const DropdownInfo = () => {
    return (
        <div>
            <Accordion type="single" collapsible className="w-full px-10">
                <AccordionItem value="history">
                    <AccordionTrigger className="text-2xl font-semibold uppercase">Our History</AccordionTrigger>
                    <AccordionContent className="text-lg">
                        <p className="py-2">Lorem ipsum odor amet, consectetuer adipiscing elit. Id aliquam facilisi sed sit feugiat venenatis montes magna nulla. Massa fermentum nullam venenatis id a mus leo habitant. Himenaeos eu per placerat elementum proin neque? Fames dictum erat fames, at non consectetur. Dictum egestas integer sollicitudin molestie cras; consectetur augue. Parturient neque fusce ligula vulputate faucibus auctor. Tempor augue cras nostra primis netus ad. Aliquet odio mi nostra inceptos tristique; cubilia nec.</p>
                        <p className="py-2">Feugiat euismod taciti porta primis class orci vitae. Magna id nunc nec nascetur, aliquet gravida cursus. Erat ipsum fringilla aliquam parturient rhoncus tempor. Faucibus platea maximus fames orci cursus tristique. Aliquet curabitur ultrices dui aenean lacus mus lorem? Vulputate dictumst inceptos pharetra dictumst metus quis potenti venenatis. Senectus ante iaculis arcu iaculis augue. Et class tortor quam nunc; sit semper est.</p>
                        <p className="py-2">Facilisi pretium felis congue venenatis, maximus vitae semper aptent. Proin dictum elit magna volutpat eget urna, dui curabitur. Auctor pharetra eget parturient purus libero proin inceptos diam imperdiet. Urna mi porttitor habitasse, efficitur per diam tortor. Volutpat arcu a quis quisque fames justo suscipit. Class natoque dis neque mollis vel tincidunt molestie. Ipsum erat cubilia nisl fusce malesuada odio vulputate parturient?</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="team">
                    <AccordionTrigger className="text-2xl font-semibold uppercase">Our Team</AccordionTrigger>
                    <AccordionContent className="text-lg">
                        <div className="flex flex-row">
                            <div className="w-1/4 flex flex-col justify-between">
                                <div>
                                    <h2 className="font-semibold text-xl uppercase">Dawson Mai</h2>
                                    <h3 className="text-lg">Founder</h3>
                                </div>
                                <div className="rounded-xl bg-gray-400 h-60"></div>
                            </div>
                            <div className="w-3/4 px-6 flex flex-col items-end">
                                <p className="py-2">Lorem ipsum odor amet, consectetuer adipiscing elit. Id aliquam facilisi sed sit feugiat venenatis montes magna nulla. Massa fermentum nullam venenatis id a mus leo habitant. Himenaeos eu per placerat elementum proin neque? Fames dictum erat fames, at non consectetur. Dictum egestas integer sollicitudin molestie cras; consectetur augue. Parturient neque fusce ligula vulputate faucibus auctor. Tempor augue cras nostra primis netus ad. Aliquet odio mi nostra inceptos tristique; cubilia nec.</p>
                                <p className="pt-2">Feugiat euismod taciti porta primis class orci vitae. Magna id nunc nec nascetur, aliquet gravida cursus. Erat ipsum fringilla aliquam parturient rhoncus tempor. Faucibus platea maximus fames orci cursus tristique. Aliquet curabitur ultrices dui aenean lacus mus lorem? Vulputate dictumst inceptos pharetra dictumst metus quis potenti venenatis. Senectus ante iaculis arcu iaculis augue. Et class tortor quam nunc; sit semper est.</p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="report">
                    <AccordionTrigger className="text-2xl font-semibold uppercase">Season Report</AccordionTrigger>
                    <AccordionContent className="text-lg">
                        Each season, we release a report documenting our impact and other important statistics. Since this is our first season in operation, we have yet to publish a report.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default DropdownInfo;