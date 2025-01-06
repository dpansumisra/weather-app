const button = document.getElementById("Search-btn")
const input = document.getElementById("city-input")
const cityName = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")

async function getData(name){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=c7e6bfd4643f410da3d103711250601&q=${name}&aqi=no`
    );

    return await promise.json();
}
button.addEventListener("click", async()=>{
    const value = input.value;
    const result = await getData(value);
    // console.log(result)
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = `${result.current.temp_c} degree Celsius`

})