let main = document.querySelector('.board');

const sity = [
    {
        'lat' : 50.45466,
        'lon' : 30.5238,
        'name' : 'Kyiv'
    },
    {
        'lat' : 40.714272,
        'lon' : -74.005966,
        'name' : 'New York'    
    },
    {
        'lat' : 48.853401,
        'lon' : 2.3486,
        'name' : 'Paris'    
    },

];

setSity(sity[0]);

function setSity(s) {
    const getSity = () => fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${s.lat}&lon=${s.lon}&lang=ua&exclude=current,minutely,hourly,alerts&cnt=4&units=metric&appid=1b6d77397e480008bd7b5fc37d1a6366`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let sityBox = document.querySelector('.top');
        sityBox.innerHTML = `${s.name}`;
        showInfo(data);
    })
    getSity();
}

let formatDate = (date) => {
    let f_date = new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(date);
    return f_date;
}

function showInfo(data) {
    let inner = '';
    for (let i = 0; i < data.daily.length - 2; i++) {
        let objDate = new Date(data.daily[i].dt * 1000);
        let date = formatDate(objDate.getDate()) + '.' + formatDate(objDate.getMonth() + 1);
        let temp = '';
        if (Math.round(data.daily[i].temp.eve) > 0) {
            temp = `+ ${Math.round(data.daily[i].temp.eve)} &deg`; 
        }
        else {
            temp = `- ${Math.abs(Math.round(data.daily[i].temp.eve))} &deg`; 
        }
        inner += `<div class="info"> <div class="title">${date}</div>
        <img src="https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png" alt="icon">
        <div class="temp">${temp}</div></div>`;
    }
    main.insertAdjacentHTML('beforeend', inner);
}

