async function getWeatherData(coordinates){
    console.log('get function');
    // https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=2968585e2af4a2de583859cd030b5ec0
    var link1 = 'https://api.openweathermap.org/data/2.5/onecall?lat=';
    var link2 = '&lon=';
    var link3 = '&units=metric&appid=2968585e2af4a2de583859cd030b5ec0';

    var finalLink = link1 + coordinates.lat + link2 + coordinates.lng + link3;
    let res = await fetch(finalLink)
    .then(res => res.json());

   return res;
}

async function getCoordinates(city){
    var link1 = 'http://open.mapquestapi.com/geocoding/v1/address?key=Ca3LcbcbWpjnoSeBueW41NkN7qdFgvhX&location=';
    
// http://open.mapquestapi.com/geocoding/v1/address?key=Ca3LcbcbWpjnoSeBueW41NkN7qdFgvhX&location=lucknow
    var finalLink = link1 + city;
    let res = await fetch(finalLink)
    .then(res => res.json());

   return res;
}

function setImg(img, weather){
    if(weather == 800){
        document.getElementsByClassName(img)[0].children[0].src = './img/sunny.png';
    }

    else if(weather > 299 && weather <= 531){
        document.getElementsByClassName(img)[0].children[0].src = './img/raining.png';
    }

    else if(weather >= 800 && weather <= 804){
        document.getElementsByClassName(img)[0].children[0].src = './img/cloudy.png';
    }

    else if(weather > 599 && weather < 623){
        document.getElementsByClassName(img)[0].children[0].src = './img/snow.png';
    }

    else if(weather > 199 && weather <= 232){
        document.getElementsByClassName(img)[0].children[0].src = './img/thunder.png';
    }

    else{
        document.getElementsByClassName(img)[0].children[0].src = './img/suncloud.png';
    }


    
}

async function srch(){

    let cityName = document.getElementById('cityname').value;

    /*if(cityName == '')
    {
        cityName = 'lucknow';
    }*/

    var coordinates = await getCoordinates(cityName).then();
    // cordinates.results[0].locations[0].displayLatLng;

    let finalData = await getWeatherData(coordinates.results[0].locations[0].displayLatLng).then();
    console.log(finalData);

    if(finalData.cod == '404'){
        alert('Incorrect city name');
    }

    else{
        document.getElementsByClassName("city")[0].innerHTML = cityName[0].toUpperCase() + cityName.substring(1);

        document.getElementById("temp").innerText = finalData.current.temp;

        setImg("hours-pic", finalData.current.weather[0].id);


        document.getElementById("pressure").innerText = finalData.current.pressure;
        document.getElementById("humidity").innerText = finalData.current.humidity;
        document.getElementById("visibility").innerText = finalData.current.visibility;
        document.getElementById("wind").innerText = finalData.current.wind_speed;

        document.getElementById("t1").innerText = finalData.hourly[6].temp;
        document.getElementById("w1").innerText = finalData.hourly[6].wind_speed;
        document.getElementById("h1").innerText = finalData.hourly[6].humidity;
        document.getElementById("c1").innerText = finalData.hourly[6].weather[0].description;        

        document.getElementById("t2").innerText = finalData.hourly[12].temp;
        document.getElementById("w2").innerText = finalData.hourly[12].wind_speed;
        document.getElementById("h2").innerText = finalData.hourly[12].humidity;
        document.getElementById("c2").innerText = finalData.hourly[12].weather[0].description;

        document.getElementById("t3").innerText = finalData.hourly[18].temp;
        document.getElementById("w3").innerText = finalData.hourly[18].wind_speed;
        document.getElementById("h3").innerText = finalData.hourly[18].humidity;
        document.getElementById("c3").innerText = finalData.hourly[18].weather[0].description;

        document.getElementById("t4").innerText = finalData.hourly[24].temp;
        document.getElementById("w4").innerText = finalData.hourly[24].wind_speed;
        document.getElementById("h4").innerText = finalData.hourly[24].humidity;
        document.getElementById("c4").innerText = finalData.hourly[24].weather[0].description;

        document.getElementById("dt1").innerText = finalData.daily[1].temp.day;
        document.getElementById("dw1").innerText = finalData.daily[1].wind_speed;
        document.getElementById("dh1").innerText = finalData.daily[1].humidity;
        document.getElementById("dc1").innerText = finalData.daily[1].weather[0].description;
        setImg('1', finalData.daily[1].weather[0].id);
        
        document.getElementById("dt2").innerText = finalData.daily[2].temp.day;
        document.getElementById("dw2").innerText = finalData.daily[2].wind_speed;
        document.getElementById("dh2").innerText = finalData.daily[2].humidity;
        document.getElementById("dc2").innerText = finalData.daily[2].weather[0].description;
        setImg('2', finalData.daily[2].weather[0].id);

        document.getElementById("dt3").innerText = finalData.daily[3].temp.day;
        document.getElementById("dw3").innerText = finalData.daily[3].wind_speed;
        document.getElementById("dh3").innerText = finalData.daily[3].humidity;
        document.getElementById("dc3").innerText = finalData.daily[3].weather[0].description;
        setImg('3', finalData.daily[3].weather[0].id);

        document.getElementById("dt4").innerText = finalData.daily[4].temp.day;
        document.getElementById("dw4").innerText = finalData.daily[4].wind_speed;
        document.getElementById("dh4").innerText = finalData.daily[4].humidity;
        document.getElementById("dc4").innerText = finalData.daily[4].weather[0].description;
        setImg('4', finalData.daily[4].weather[0].id);

        document.getElementById("dt5").innerText = finalData.daily[5].temp.day;
        document.getElementById("dw5").innerText = finalData.daily[5].wind_speed;
        document.getElementById("dh5").innerText = finalData.daily[5].humidity;
        document.getElementById("dc5").innerText = finalData.daily[5].weather[0].description;
        setImg('5', finalData.daily[5].weather[0].id);

        document.getElementById("dt6").innerText = finalData.daily[6].temp.day;
        document.getElementById("dw6").innerText = finalData.daily[6].wind_speed;
        document.getElementById("dh6").innerText = finalData.daily[6].humidity;
        document.getElementById("dc6").innerText = finalData.daily[6].weather[0].description;
        setImg('6', finalData.daily[6].weather[0].id);

        document.getElementById("dt7").innerText = finalData.daily[7].temp.day;
        document.getElementById("dw7").innerText = finalData.daily[7].wind_speed;
        document.getElementById("dh7").innerText = finalData.daily[7].humidity;
        document.getElementById("dc7").innerText = finalData.daily[7].weather[0].description;
        setImg('7', finalData.daily[7].weather[0].id);
     }


}