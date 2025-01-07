const AreaList = () => {
    return (
        <div>
            <div className="py-6 border-b-2 border-black flex flex-col md:flex-row">
                <div className="bg-gray-700 h-72 w-full md:w-6/12 rounded-2xl"></div>
                    <div className="w-full md:px-10 flex flex-col justify-center text-center md:justify-between md:text-left">
                    <div>
                        <h3 className="text-3xl font-semibold mb-2">San Gabriel Mountains</h3>
                        <p className="text-2xl mb-5">
                        Located just north of Los Angeles, the San Gabriel mountains are perfect for weekend warriors. From gradual snow paths for those looking for a relaxing hike to steep chutes for those looking for a technical climb, these mountains have it all.
                        </p>
                    </div>
                    <a href="/routes/san-gabriel-mountains">
                        <button className="border-2 border-black rounded-full py-1 px-5 text-l font-semibold self-start max-w-fit">EXPLORE</button>
                    </a>
                </div>
            </div>
            <div className="py-6 border-b-2 border-black flex flex-col md:flex-row">
                <div className="bg-gray-700 h-72 w-full md:w-6/12 rounded-2xl"></div>
                    <div className="w-full md:px-10 flex flex-col justify-center text-center md:justify-between md:text-left">
                    <div>
                        <h3 className="text-3xl font-semibold mb-2">San Bernardino Mountains</h3>
                        <p className="text-2xl mb-5">
                        Home to Southern California&apos;s tallest mountain, Mt. San Gorgonio standing at 11,503 feet, the San Bernardino mountains are great for those looking to reach new heights and ski new lines.
                        </p>
                    </div>
                    <button className="border-2 border-black rounded-full py-1 px-5 text-l font-semibold self-start max-w-fit">EXPLORE</button>
                </div>
            </div>
            <div className="py-6 flex flex-col md:flex-row">
                <div className="bg-gray-700 h-72 w-full md:w-6/12 rounded-2xl"></div>
                    <div className="w-full md:px-10 flex flex-col justify-center text-center md:justify-between md:text-left">
                    <div>
                        <h3 className="text-3xl font-semibold mb-2">San Jacinto Mountains</h3>
                        <p className="text-2xl mb-5">
                            Rising high above the Palm Desert, the San Jacinto Mountains offer many types of terrain for skiers and climbers, from gladed tree runs to steep continuous chutes, all of which can be easily accessed from the Aerial Tram.
                        </p>
                    </div>
                    <button className="border-2 border-black rounded-full py-1 px-5 text-l font-semibold self-start max-w-fit">EXPLORE</button>
                </div>
            </div>
        </div>
        
        
    );
};

export default AreaList;