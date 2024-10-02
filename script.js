let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let location=document.getElementById("location").value
    console.log(location)
    let fetchData=async()=>{
        let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f6717d2d7abc4cfb0de2f9c072a203e3`)
        let finalData=await data.json()
        console.log(finalData)
        let tempvalue=(Math.round(finalData.main.temp-273))
        let humidvalue=(finalData.main.humidity)
        let weatherDescription=(finalData.weather[0].main).toUpperCase()
        
        let desc=document.getElementById("desc")
        desc.innerHTML=weatherDescription.toUpperCase()

        let temp=document.getElementById("temp")
        temp.innerHTML=`${tempvalue}<sup>0</sup>`

        let humid=document.getElementById("humid")
        humid.innerHTML=humidvalue

        let img=document.getElementById("img")
        let bgc=document.getElementById("maincontainer")

        switch(weatherDescription){
            case "CLEAR":
                img.src='./Assets/clear.png'
                bgc.style.backgroundImage="url(./Assets/clearWeather.gif)"
                break;
            case "CLOUDS":
                img.src='./Assets/clouds.png'
                bgc.style.backgroundImage="url(./Assets/cloudsWeather.gif)"
                break;
            case "MIST":
                img.src='./Assets/mist.png'
                bgc.style.backgroundImage="url(./Assets/mistWeather.gif)"
                break;
            case "HAZE":
                img.src='./Assets/haze.png'
                bgc.style.backgroundImage="url(./Assets/hazeWeather.gif)"
                break;

            case "RAIN":
                img.src='./Assets/rain.png'
                bgc.style.backgroundImage="url(./Assets/rainWeather.gif)"
                break;

            case "SNOW":
                img.src='./Assets/snow.png'
                bgc.style.backgroundImage="url(./Assets/snowWeather.gif)"
                break;

            case "SANDSTORM":
                img.src='./Assets/sandstorm.png'
                bgc.style.backgroundImage="url(./Assets/dustWeather.gif)"
                break;

            default:
                img.src='./Assets/clear-sky.png'   
                bgc.style.backgroundImage="url(./Assets/clear-skyWeather.gif)"

        }
    }
    fetchData()
})