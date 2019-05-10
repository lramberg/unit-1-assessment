var total = document.getElementById('running-total');
var entry = document.getElementById('entry');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var runningTotal = 0;

plus.addEventListener('click', addToTotal);
minus.addEventListener('click', subtractFromTotal);

function addToTotal() {
    var num = parseInt(entry.value);
    runningTotal = runningTotal + num;
    total.textContent = `${runningTotal}`;
    checkNegative();
}   
    
function subtractFromTotal() {
    var num = parseInt(entry.value);
    runningTotal = runningTotal - num;
    total.textContent = `${runningTotal}`;
    checkNegative();
}

function checkNegative() {
    if (runningTotal < 0) {
        total.setAttribute('class', 'negative');
    } else if (runningTotal >= 0) {
        total.setAttribute('class', 'positive');
    }
}