const AreaData = () => {
    return (
        <header className="bg-white w-full h-screen pb-6">
            <div className="h-2/6 w-full pt-10 flex">
                <div className="w-1/3 h-full">
                    <h2 className="uppercase font-bold text-xl">Explore The Area</h2>
                </div>
                <div className="w-2/3 h-full">
                    <h3 className="font-medium text-4xl">Southern California may be know for its warm weather and beautiful beaches, but during its winter, the SoCal backcountry receives tons of snow, allowing for perfect climbing and skiing conditions.</h3>
                </div>
            </div>
            <div className="h-1/6 w-full flex items-center gap-52">
                <div className="h-full w-1/6 items-center flex justify-center">
                    <h3 className="font-bold text-6xl">&#42;</h3>
                </div>
                <div className="h-full w-5/6 flex items-center">
                    <button className="w-full h-2/3 text-right font-medium text-3xl p-6 border-b-2 border-black">-&gt;</button>
                </div>
            </div>
        <div className="h-3/6 w-full flex p-12 justify-center gap-24">
            <div className="w-72 h-72 rounded-full bg-gray-300 flex flex-col justify-center items-center">
                <h2 className="text-7xl text-center w-full font-semibold">###</h2>
                <h3 className="text-xl text-center w-full font-medium">square miles of terrain</h3>
            </div>
            <div className="w-72 h-72 rounded-full bg-gray-300 flex flex-col justify-center items-center">
                <h2 className="text-7xl text-center w-full font-semibold">###</h2>
                <h3 className="text-xl text-center w-full font-medium">mountain ranges</h3>
            </div>
            <div className="w-72 h-72 rounded-full bg-gray-300 flex flex-col justify-center items-center">
                <h2 className="text-7xl text-center w-full font-semibold">###</h2>
                <h3 className="text-xl text-center w-full font-medium">peaks taller than 10,000 ft</h3>
            </div>
        </div>
        </header>
    )
}

export default AreaData