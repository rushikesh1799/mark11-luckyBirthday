const dateOfBirth = document.querySelector('#date-of-birth')

const luckyNumber = document.querySelector('#lucky-number')

const checkNumberButton = document.querySelector('#check-number')

const output = document.querySelector('#output-box')

function compareValues(sum, luckyNumber) {
    if (sum%luckyNumber === 0) {
        output.innerText = `${luckyNumber} is a lucky number!! 🥳 🥳 `;
    } else {
        output.innerText = `${luckyNumber} is not that lucky number 😕`;
    }
}

function checkBirthDateIsLucky(e) {
    const dob = dateOfBirth.value
    const sum = calculateSum(dob)
    if (sum && dob) {
        compareValues(sum , Number(luckyNumber.value)) 
    } else {
        output.innerText = "Please enter both the required fields";
    }
    
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "")
    // dob = Number(dob.split('-').join(''))
    let sum = 0
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob[index])
    }
    // console.log(sum);
    return sum
}

checkNumberButton.addEventListener('click', checkBirthDateIsLucky)