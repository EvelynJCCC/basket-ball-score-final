let homeAddOneBtn = document.getElementById('home-1-btn');
let homeScoreText = document.getElementById('home-score');


let homeScore = 0

function addOneToHomeScore() {
    homeScore += 1
    homeScoreText.textContent = homeScore
}

function addTwoToHomeScore() {
    homeScore += 2
    homeScoreText.textContent = homeScore
}

function addThreeToHomeScore() {
    homeScore += 3
    homeScoreText.textContent = homeScore
}


let guestScoreText = document.getElementById('guest-score');
let guestScore = 0 

function addOneGuest() {
    guestScore += 1 
    guestScoreText.textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2
    guestScoreText.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    guestScoreText.textContent = guestScore
}

function resetButton() {
    guestScore = 0
    homeScore = 0
    guestScoreText.textContent = guestScore
    homeScoreText.textContent = homeScore
}