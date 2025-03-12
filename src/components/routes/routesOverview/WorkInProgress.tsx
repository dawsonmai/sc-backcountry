import Link from "next/link";

const WorkInProgress = () =>{
    return(
        <div className="flex flex-col flex-grow bg-gray-700 w-full rounded-3xl sm:p-10 text-8xl justify-center items-center p-4" style={{
			backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/sunny.jpeg)",
			backgroundSize: "cover",
			backgroundPosition: "center",
		  }}>
            <h1 className="inline text-4xl md:text-7xl font-medium text-white hyphens-manual lg:hyphens-none mb-2">
				Coming Soon
			</h1>
            <h3 className="text-center text-lg md:text-xl font-light text-white hyphens-manual lg:hyphens-none mb-2">
				Have a route or area you want us to cover? <br></br>Contact us for suggestions!
			</h3>
            <Link href="mailto:scbackcountry@gmail.com" className="bg-white text-black font-medium text-lg rounded-full py-1 px-5">Contact Us</Link>

        </div>
    );
};

export default WorkInProgress;