const AreaMap = () => {
	return (
        <div className="flex flex-col flex-grow bg-gray-700 w-full rounded-3xl sm:p-10 text-8xl justify-center items-center" style={{
			backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(mtBaldy.jpeg)",
			backgroundSize: "cover",
			backgroundPosition: "center",
		  }}>
			<h1 className="inline text-4xl sm:text-6xl md:text-7xl font-medium text-white hyphens-manual lg:hyphens-none">
				Routes
			</h1>
		</div>
    );
};

export default AreaMap;