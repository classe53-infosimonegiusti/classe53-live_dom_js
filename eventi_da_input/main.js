let name = document.getElementById('name');
let color = document.getElementById('color');


let button = document.getElementById("elabora");

button.addEventListener('click',    
    function() {

        if (color.value == "") {
            alert('Seleziona un colore!!!');
        } else {
            alert("Il nome è:" + name.value + " il colore è " + color.value);
            name.value = "";
            color.value = "";
        }
    }
);