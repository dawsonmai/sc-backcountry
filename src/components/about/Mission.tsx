const Mission = () => {
    return (
        <div className="flex flex-col md:flex-row w-full py-10 gap-5">
            <div className="w-full md:w-1/3 h-full">
                <h2 className="uppercase font-semibold text-lg sm:text-xl tracking-wider">Our Mission</h2>
            </div>
            <div className="w-full md:w-2/3 h-full">
                <h3 className="text-3xl sm:text-4xl">
                    Making the Southern California mountains safer by spreading information and educating the population. 
                </h3>
            </div>
		</div>
    );
};

export default Mission;