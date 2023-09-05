



const key =  "fd5279d236492a9014721f9483ac61e1"


function searchClick() {
    const city = document.querySelector(".city-input").value

    searchCity(city)
}


async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json() )
     
    showData(data)
    console.log(data)
 }


 function showData(data){
    document.querySelector(".tempo-em").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".tempo-previsao").innerHTML = data.weather[0].description
    document.querySelector(".umidade").innerHTML = data.main.humidity + "% de umidade"
    document.querySelector(".icone-tempo").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector(".city-input").value = ""
}