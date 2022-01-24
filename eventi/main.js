let bottone = document.getElementById('cliccami');

bottone.addEventListener('dblclick', 
    function() {
        alert('CIAO');
    }
);

let casuale = document.querySelector('.random');

casuale.addEventListener('click',
    function() {
        alert( Math.floor( Math.random() * 10 ) );
    }
);