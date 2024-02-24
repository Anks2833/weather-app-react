import axios from "axios"
import { useEffect, useState } from "react"

const Mainapp = () => {

    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState("");
    // const [pos, setPos] = useState("")
    const [giveDate, setGiveDate] = useState("");
    const [giveTime, setGiveTime] = useState(new Date());


    const getData = () => {

        const apiKey = "f3e42830a3464c12fb695fe3db03782c";
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

        axios
            .get(api)
            .then((res) => {
                setWeatherData(res.data)
                // console.log(res.data)
            })
            .catch((err) => console.log(err))
    }

    const handleCity = (e) => {
        e.preventDefault()
        setCity(e.target.value);
    }

    useEffect(() => {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const today = new Date();

        const month = months[today.getMonth()];
        const date = today.getDate();
        const year = today.getFullYear();
        const day = days[today.getDay()];

        // setGiveTime(`${hours}:${mins}:${seconds}`)
        setGiveDate(`${day}, ${date} ${month}'${year}`)
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setGiveTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [])

    const hours = giveTime.getHours().toString().padStart(2, '0');
    const mins = giveTime.getMinutes().toString().padStart(2, '0');
    const seconds = giveTime.getSeconds().toString().padStart(2, '0');


    // useEffect(() => {

    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition((position)=> {
    //             console.log(position);
    //         });
    //     } else {
    //         console.log("Geolocation is not available in your browser.");
    //     }

    // }, [])




    return (

        <div className=" w-2/3 h-4/5 rounded overflow-hidden flex shadow-2xl">
            <div className="w-3/5 bg-[url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center">
                <div className="flex flex-col gap-[23vw] px-20 py-10 text-white">
                    <div className="flex justify-between">
                        <h4 className="font-semibold">the.mausam</h4>
                        <div className="flex gap-1 items-center">
                            <h1>{`${hours}:${mins}:${seconds}`} / </h1>
                            <h1>{giveDate}</h1>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-[6vw]">{weatherData.length !== 0 ? Math.floor(weatherData?.main?.temp) + "°C" : "X°C"}</h1>
                        <div className="flex flex-col">
                            <h2 className="text-[2.5vw]">{weatherData.length !== 0 ? weatherData.name : "City"}</h2>

                        </div>

                    </div>
                </div>
            </div>

            <div className="relative w-2/5 bg-zinc-900">
                <img className="w-full h-full blur-[6px] object-cover object-center" src="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>

            <div className="absolute right-0 w-2/5">

                <div className="flex py-10 gap-2">
                    <input
                        value={city}
                        onChange={handleCity}
                        className="w-[15vw] bg-transparent border-b-[1px] border-zinc-400 text-zinc-400 outline-none px-2 py-2 placeholder:text-zinc-400 placeholder:font-semibold" type="text" placeholder="Add Location"
                    />
                    <img
                        onClick={() => { getData() }}
                        className="rounded px-5 bg-zinc-100 cursor-pointer" src="https://www.svgrepo.com/show/532555/search.svg" width="70px" alt=""
                    />
                </div>

                <div className="w-[20vw] px-2 pb-5 flex flex-col items-center gap-2 border-b-[1px] border-zinc-400 text-zinc-400">
                    <img
                        src={weatherData.length !== 0 ? `https://openweathermap.org/img/wn/${weatherData.length !== 0 && weatherData.weather[0].icon}@2x.png` : "https://www.svgrepo.com/show/503853/weather.svg"} width={"120px"} alt="no img"
                    />
                    <h1 className="text-zinc-100">{weatherData.length !== 0 ? weatherData.weather[0].main : ""}</h1>
                </div>

                <div className="w-[20vw] pb-5 flex flex-col text-zinc-400 mt-10 border-b-[1px] border-zinc-400">
                    <h1 className="text-white">Weather Details</h1>

                    <div className="w-[20vw] flex flex-col gap-5 justify-center mt-8">
                        <div className="flex justify-between items-center gap-20">
                            <h1>Cloudy</h1>
                            <h1 className="">{weatherData.length !== 0 ? weatherData?.clouds?.all + "%" : "..."}</h1>
                        </div>

                        <div className="flex justify-between items-center gap-20">
                            <h1>Humidity</h1>
                            <h1 className="">{weatherData.length !== 0 ? weatherData?.main?.humidity : "..."}</h1>
                        </div>

                        <div className="flex justify-between items-center gap-20">
                            <h1>Wind</h1>
                            <h1 className="">{weatherData.length !== 0 ? weatherData?.wind?.speed + "km/h" : "..."}</h1>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
export default Mainapp

// bg-[url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center blur-3xl