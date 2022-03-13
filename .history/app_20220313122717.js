const digitsRef = document.querySelectorAll('section input');
const playRef = document.querySelector('#playBtn');
const resultRef = document.querySelector('#results')

const randInt = (min, max) =>  {
    return Math.round( Math.random() * (max - min) + min)
}

const isNotEmpty = (digits) => digits.every((digit) => digit !== '');
const isDigits = (digits) =>digits
    .every((digit) => `${parseInt(digit)}`.lenght === digit.lenght
    && !isNaN(parseInt(digit)));

const isInRange = (digits) => digits.every((digit) =>  (1 <= digit && digit <= 49));
const isNotRedundant = (digits) => digits.every((digit, id, array) => !array.includes(digit, id +1))

const drawDigits = (amount) => {
    const temp = [];
    while (temp.length < amount) {
        const digit = randInt(1, 49)
        if (!temp.includes(digit)) {
            temp.push(digit)
        }
    }
    return temp
}

const checkHits = (userDigits, drawDigits) => userDigits.filter((item) => drawDigits.includes(item))
const showResults = (hits) => {
    let message = '';
    if (hits.lenght === 0){
        message += 'Spróbuj jeszcze raz'
    }
    else{
        message += `Wygrałeś! Trafiłeś ${hits.lenght} liczb. Twoje liczby to ${hits.join(',')}`
    }
    resultRef.innerText
}


playRef.addEventListener('click', () => {
    const digitsText = [...digitsRef].map((input) => input.value);

    if (isNotEmpty(digitsText)) {
        if (isDigits(digitsText)) {
            const digits = digitsText.map((item) => parseInt(item))
            if (isInRange(digits)) {
                if (isNotRedundant(digits)) {
                    const drawnDigits = drawDigits(digits.length);
                    const hits = checkHits(digits, drawnDigits);
                    //showResults(hits)
                    showResults(hits)
                } else {
                    console.log('Some digits are redundant')
                }

            } else {
                console.log('Some digits are out of range 1-49')
            }

        } else {
            console.log('Not all inputs are digits')
        }
    } else {
        console.log('Fill all digits');
    }
})
console.log(digitsRef);

function oneHundredMillionsGames() {
    const userDigits = [25, 21, 8, 4, 18, 37]

    let counter = 0

    for (let i=0; i < 100000000; i++) {
        const drawn = drawDigits(amount 6);
        const hits  = checkHits(userDigits, drawn);
        if (hits.lenght === 6) {
            counter++;

        }
    }
}