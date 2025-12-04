const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=18.5204&longitude=73.8567&current=temperature_2m,wind_speed_10m' ;

// One approch
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network responce was not ok') ;
        }
        return response.json() ;
    })

    .then(data => {
        const temperature = data.current.temperature_2m ;
        const windSpeed = data.current.wind_speed_10m ;
        document.getElementById('temperature').textContent = `${temperature}` ;
        document.getElementById('wind-speed').textContent = `${windSpeed} km/h` ;
        
    })

    .catch(error => {
        console.error('There was a problem with the fetch operation',error) ;
        document.getElementById('temperature').textContent = 'Error' ;
        document.getElementById('wind-speed').textContent = 'Error' ;
    }) ;

// Second approch
document.getElementById('btn').addEventListener('click', async ()=>{
    await fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network responce was not ok') ;
        }
        return response.json() ;
    })

    .then(data => {
        const temperature = data.current.temperature_2m ;
        const windSpeed = data.current.wind_speed_10m ;
        console.log(data);
        document.getElementById('temperature').textContent = `${temperature}` ;
        document.getElementById('wind-speed').textContent = `${windSpeed} km/h` ;
        
    })

    .catch(error => {
        console.error('There was a problem with the fetch operation',error) ;
        document.getElementById('temperature').textContent = 'Error' ;
        document.getElementById('wind-speed').textContent = 'Error' ;
    }) ;
});
