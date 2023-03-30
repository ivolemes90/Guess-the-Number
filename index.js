let computerNumber
let userNumbers = []
let attempts = 0
let maxAttempts = 10

function newGame() {
    window.location.reload()
}

function int() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers
    if (attempts < maxAttempts) {
        if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too LOW!'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        } else if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too HIGH!'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        } else {
            document.getElementById('textOutput').innerHTML = 'Congratulaions!'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly','Readonly') 
        }
    } else {
        document.getElementById('textOutput').innerHTML = 'You lose! The computer number was ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly','Readonly')
    }
}