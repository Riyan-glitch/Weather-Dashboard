function getWeather(){

    const city =
    document.getElementById("cityInput").value;

    if(city === ""){
        alert("Please enter a city");
        return;
    }

    document.getElementById("city")
    .textContent = city;

    const temp =
    Math.floor(Math.random()*15)+20;

    const humidity =
    Math.floor(Math.random()*40)+40;

    const wind =
    Math.floor(Math.random()*15)+5;

    document.getElementById("temp")
    .textContent =
    temp + "°C";

    document.getElementById("humidity")
    .textContent =
    humidity + "%";

    document.getElementById("wind")
    .textContent =
    wind + " km/h";

    document.getElementById("condition")
    .textContent =
    "Partly Cloudy";
}
