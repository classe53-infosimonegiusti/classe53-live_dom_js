let name = prompt('Come ti chiami?');

let htmlName = document.querySelector('.name');

//metodo tramite classi aggiunte via js
//htmlName.classList.add('rosso');

//agisco sull attributo style del tag
//htmlName.style.color = "blue";

htmlName.innerHTML = name;