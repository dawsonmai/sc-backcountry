const Header = () => {
    return(
        <div className="flex sm:flex-row flex-col items-center sm:justify-between pb-10">
            <h1 className="text-lg font-semibold">DAWSON MAI</h1>

            <div className=" flex text-sm gap-5 items-center">
                <p>About</p>
                <p>School</p>
                <p>Projects</p>
                <button className="bg-stone-800 text-white px-4 py-1 rounded-full">Contact</button>
            </div>
        </div>
    )
}

export default Header