export default function Home() {
    return (
        <>
            <div className="bg-gradient-to-r from-sky-500 to-indigo-500 ">
                <nav className="text-white">City / Country</nav>
                <div className="flex justify-center items-center">
                    <div className="inline-block w-80">
                        <img src="./src/assets/images/cloud1.png" alt="cloud image" />
                        <img src="./src/assets/images/cloud2.png" alt="cloud image" />
                        <h1>WEATHER FORECASTS</h1>
                        <img src="./src/assets/images/cloud1.png" alt="cloud image" />
                        <p>What is the current weather condition in your city?</p>
                        <button>GET STARTED</button>
                    </div>
                
                </div>
           </div>
        </>
    )
}