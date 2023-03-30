'use strict';

console.log('funguju!');

function spustMinutku(event) {

    event.preventDefault();
    let casEl = document.querySelector('#time');
    let odcitam = Number(casEl.value);
 
    document.querySelector('.alarm__seconds').textContent = String(odcitam);

    const odecitej = () => {

        if (odcitam > 0){
             odcitam -= 1;
             document.querySelector('.alarm__seconds').textContent = String(odcitam);
        } 

        if (odcitam <= 0){
            clearInterval(casovac);
		 	document.querySelector('.alarm').classList.add('alarm--ring');
		 	document.querySelector('audio').play();
         }
            
    }

    const casovac = setInterval(odecitej, 1000);

} 

const formElm = document.querySelector('.controls');

formElm.addEventListener('submit', spustMinutku)
