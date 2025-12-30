const apiKey = "b8d0404d740d47bc9ee20143253012";

function getWeather() {
    const location = document.getElementById("locationInput").value;
    const weatherCard = document.getElementById("weatherCard");

    if (location === "") {
        alert("Please enter a location");
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=b8d0404d740d47bc9ee20143253012&q=London&aqi=yes`.replace("London", encodeURIComponent(location));

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("cityName").innerText =
                `${data.location.name}, ${data.location.country}`;

            document.getElementById("temperature").innerText =
                `${data.current.temp_c}°C`;

            document.getElementById("condition").innerText =
                data.current.condition.text;

            weatherCard.style.display = "block";
        })
        .catch(error => {
            alert("Location not found");
            weatherCard.style.display = "none";
        });
}
