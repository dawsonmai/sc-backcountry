const IntroImage = () => {
    return(
        <header className="bg-gray-400 w-full h-screen rounded-3xl">
            <div className="bg-transparent w-full h-2/5 text-left p-14 text-white flex items-center">
                <h1 className="text-7xl font-semibold">
                    Welcome to the <br/>
                    SOCAL BACKCOUNTRY
                </h1>
            </div>
            <div className="bg-transparent w-full h-3/5 flex p-14 items-center justify-between">
                <div className="bg-white rounded-full w-96 h-16 flex items-center justify-between pl-8 pr-2">
                    <h2 className="text-black font-medium text-left uppercase text-xl">Explore</h2>
                    <button className="bg-black rounded-full text-white rounded-full h-10 w-10 text-center font-bold text-xl">-&gt;</button>
                </div>
                <div className="bg-white rounded-3xl w-52 h-60">
                    <div className="bg-gray-300 w-full h-1/5 rounded-t-3xl flex items-center p-3 gap-6">
                        <div className="bg-red-600 rounded-full h-9 w-9 flex items-center justify-center">
                            <h2 className="text-black font-medium text-2xl">!</h2>
                        </div>
                        <h2 className="text-black font-medium text-2xl uppercase">Caution</h2>
                    </div>
                    <div className="h-4/5 w-full rounded-b-3xl bg-white px-4 py-2">
                        <p className="font-light">Backcountry activities are dangerous! Before you go, make sure to check forecasts and conditions and have packed sufficient gear and clothing.</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default IntroImage