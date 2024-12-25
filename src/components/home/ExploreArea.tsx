const ExploreArea = () => {
	return (
		<header className="h-[60vh] w-full py-6 flex">
			<div className="h-full w-1/5 pl-4">
				<h2 className="uppercase font-semibold text-xl">Explore By Region</h2>
			</div>
			<div className="h-full w-4/5 p-4 flex gap-8 pt-0">
				<div className="h-full w-72 border-2 border-gray-400 rounded-3xl">
					<div className="w-full h-4/5 bg-gray-400 rounded-2xl"></div>
					<div className="w-full h-1/5 flex">
						<div className="h-full w-2/3 p-2">
							<h3 className="w-full h-full font-normal text-2xl">San Gorgonio Mountains</h3>
						</div>
						<div className="w-1/3 h-full flex items-center justify-center">
							<button className="bg-black rounded-full text-white h-10 w-10 text-center font-semibold text-xl">-&gt;</button>
						</div>
					</div>
				</div>

				<div className="h-full w-72 border-2 border-gray-400 rounded-3xl">
					<div className="w-full h-4/5 bg-gray-400 rounded-2xl"></div>
					<div className="w-full h-1/5 flex">
						<div className="h-full w-2/3 p-2">
							<h3 className="w-full h-full font-normal text-2xl">San Jacinto Mountains</h3>
						</div>
						<div className="w-1/3 h-full flex items-center justify-center">
							<button className="bg-black rounded-full text-white h-10 w-10 text-center font-semibold text-xl">-&gt;</button>
						</div>
					</div>
				</div>

				<div className="h-full w-72 border-2 border-gray-400 rounded-3xl">
					<div className="w-full h-4/5 bg-gray-400 rounded-2xl"></div>
					<div className="w-full h-1/5 flex">
						<div className="h-full w-2/3 p-2">
							<h3 className="w-full h-full font-normal text-2xl">San Gabriel Mountains</h3>
						</div>
						<div className="w-1/3 h-full flex items-center justify-center">
							<button className="bg-black rounded-full text-white h-10 w-10 text-center font-semibold text-xl">-&gt;</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default ExploreArea;
