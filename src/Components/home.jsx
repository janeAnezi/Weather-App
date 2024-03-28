export default function Home() {
    return (
        <>
            <div className="bg-gradient-to-r from-sky-500 to-indigo-500 p-4 text-white">
                <nav className="">City / Country</nav>
                <div className="flex justify-center items-center">
                    <div className="inline-block w-80">
                        <img src="./src/assets/images/cloud1.png" alt="cloud image" />
                        <img className=" pt-8 w-80" src="./src/assets/images/cloud2.png" alt="cloud image" />
                        <h1 className=" font-bold text-5xl text-center">WEATHER FORECASTS</h1>
                        <img className="ml-20" src="./src/assets/images/cloud1.png" alt="cloud image" />
                        <p className=" text-sm inline-block w-64 px-10 ml-8 font-bold">What is the current weather condition in your city?</p>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-amber-700 hover:text-amber-100 px-4 py-2 ml-24 mt-10 mb-6 rounded-lg font-bold">GET STARTED</button>
                    </div>
                
                </div>
           </div>
        </>
    )
}