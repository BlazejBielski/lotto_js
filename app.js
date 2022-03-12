const digitsRef = document.querySelectorAll('section input');
const playRef = document.querySelector('#playBtn');

const isNotEmpty = (digits) => digits.every((digit) => digit !== '');
const isDigits = (digits) =>digits
    .every((digit) => `${parseInt(digit)}`.lenght === digit.lenght
    && !isNaN(parseInt(digit)))


playRef.addEventListener('click', () =>{
    const digits = [...digitsRef].map((input) => input.value);
    if (isNotEmpty(digits)){
        if (isDigits(digits)){
            
        } else {
            console.log('Not all inputs are digits');
        }

    }else{
        console.log('Fill all digits');
    }
});
console.log(digitsRef);