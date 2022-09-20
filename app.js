// var icon = document.getElementById("icon");
// icon.onclick = function(){
//     document.body.classList.toggle("dark-theme");
//     if(document.body.classList.contains("dark-theme")){
//         icon.src ="img/sun.png";
//     }else{
//         icon.src = "img/moon.png";
//     }
// }
// function loadCoupon(){
//     document.getElementById('coupon').style.display="block";
//     document.getElementsByClassName('container').style.opacity="0.2";
// }

// const closeCoupon = () => {
//     document.getElementById('coupon').style.display="none";
//     document.getElementsByClassName('container').style.opacity="1";
// }
// window.onload=loadCoupon()


let x = document.getElementById('out');
let y = document.getElementById('weather');
let z = document.getElementById('location');
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText= "Geo Not Supported"
    }
}

function showPosition(data){
    console.log(data)
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    x.innerText = `Lat=${lat} long=${long}`;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    //api calling
    fetch(url,{method:'GET'})
    //return promise
    .then((res) => res.json())
    // resolve the promise
    .then((data) => {
        y.innerText = `${data.city.name}`
        z.innerText = `${data.list[0].temp.day} °C`
    })

}