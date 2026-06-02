async function getWeather() {

    const city =
    document.getElementById("cityInput").value;

    if(city === ""){

        alert("Enter a city name");

        return;
    }

    const apiKey =
    "236505b959db62d6b0dcc65b34462330";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response =
        await fetch(url);

        const data =
        await response.json();

        if(data.cod != 200){

            alert("City not found");

            return;
        }

        document.getElementById("city")
        .textContent =
        data.name;

        document.getElementById("temp")
        .textContent =
        Math.round(data.main.temp) + "°C";

        document.getElementById("humidity")
        .textContent =
        data.main.humidity + "%";

        document.getElementById("wind")
        .textContent =
        data.wind.speed + " km/h";

        document.getElementById("condition")
        .textContent =
        data.weather[0].description;

        const icon =
        data.weather[0].icon;

        document.getElementById("weatherIcon")
        .src =
        `https://openweathermap.org/img/wn/${icon}@2x.png`;

    }

    catch(error){

        alert("Something went wrong");
    }
}
