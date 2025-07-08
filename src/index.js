function updateWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = response.data.temperature.current;
}
function searchCity(city) {
    let apiKey ="09bdf26t323b4a9f4410fdob3dbedc7c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);

}
function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);