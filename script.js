document.getElementsByTagName('button')[0].addEventListener("click", function () {
    const apiKey = '878b41b264b178e82230359d4555f65d'
    const city = document.getElementById('weathercity').value;
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    if (city === '') {
        alert("Enter the city name to display the weather!");

        return;

    }
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.success == false) {
                document.getElementById('weatheroutput').innerHTML = `<p>Error fetching Weather</p>`
                return;
            }

            const weather = `
            <p>This is your Weather</p>
            <p>${data.location.name}</p>
            <p>${data.location.country}</p>
            <br>
            <p>${data.location.localtime}</p>
            <p>${data.current.temperature} °C</p>
            <p>${data.current.weather_descriptions}</p>
          
            `
            const weather_description = data.current.weather_descriptions[0].toLowerCase();
            document.getElementById('weatheroutput').innerHTML = weather;
            var img = document.createElement("img");
            img.height = 150;
            img.width = 200;
            if (weather_description.includes("sunny")) {
                img.src = "./image/sunny.jpg";
                img.alt = "sunny image";
                document.getElementsByClassName('container')[0].appendChild(img)
            }
            else if (weather_description.includes("rain")|| weather_description.includes("light rain shower")) {
                img.src = "./image/Rainy.jpg";
                img.alt = "rainy image";
                document.getElementsByClassName('container')[0].appendChild(img)
            }
            else if (weather_description.includes("hazy") || weather_description.includes("haze")) {
                img.src = "./image/hazy.jpg";
                img.alt = "hazy image";
                document.getElementsByClassName('container')[0].appendChild(img)
            }
            else if (weather_description.includes("cloudy")|| weather_description.includes("partial cloudy")) {
                img.src = "./image/cloudy.jpg";
                img.alt = "cloudy image";
                document.getElementsByClassName('container')[0].appendChild(img)
            }
            else if (weather_description.includes("smoke")) {
                img.src = "./image/smoke.jpg";
                img.alt = "smoke image";
                document.getElementsByClassName('container')[0].appendChild(img)
            }


        })
        .catch(error => {
            document.getElementById('weatheroutput').innerHTML = '<p>Error fetching Weather'
        })
})