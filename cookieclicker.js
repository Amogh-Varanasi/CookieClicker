let cookieEl = document.getElementById(`cookie`)

// let cookieEl = document.getElementsByClassName(`siz`)

let scoreEl = document.getElementById(`score`)
let cookieCount = 0
let doublerButton = document.getElementById(`doubler`)
let countChange = 1
let clickCount = 0
let yayEl = document.getElementById(`yay`)
let autoEl = document.getElementById(`auto`)
let auto = 1


let greenEl = document.getElementById(`green`)
let gyellowEl = document.getElementById(`gyellow`)


function cookieClicked() {
    cookieCount = cookieCount + countChange
    scoreEl.innerHTML = cookieCount
    clickCount = clickCount + 1


    if (cookieCount === 10) {
        if (countChange === 1) {
            doublerButton.classList.remove(`remove`)
        }
    }

    if (cookieCount >= 20) {
        if (auto === 1) {
            autoEl.classList.remove(`remove`)
        }
    }

    if (cookieCount % 10 === 0) {
        yayEl.classList.remove(`remove`)
    }

    if (cookieCount % 10 !== 0) {
        yayEl.classList.add(`remove`)
    }

    if (clickCount % 2 === 0) {
        greenEl.classList.add(`green`)
        greenEl.classList.remove(`gyellow`)
    }

    if (clickCount % 2 !== 0) {
        greenEl.classList.remove(`green`)
        greenEl.classList.add(`gyellow`)
    }
}
 


function buyDoubler() {
    cookieCount = cookieCount - 10
    // Have to buy it
    scoreEl.innerHTML = cookieCount 

    doublerButton.classList.add(`remove`)
    countChange = 2
}

function buyAuto() {
    cookieCount = cookieCount - 20
    scoreEl.innerHTML = cookieCount

    autoEl.classList.add(`remove`)
    setInterval(cookieClicked, 1000);
    auto = auto + 1
}


doublerButton.addEventListener(`click`, buyDoubler)

autoEl.addEventListener(`click`, buyAuto)




function shrink(){
    cookieEl.classList.add('shrink')
}



function grow() {
    cookieEl.classList.remove(`shrink`)
}




cookieEl.addEventListener(`click`, cookieClicked)

cookieEl.addEventListener('mousedown', shrink)
cookieEl.addEventListener('mouseup', grow)



let removeEl = document.getElementById(`remove`)
let showEl = document.getElementById(`show`)

function removeCookie() {
    cookieEl.classList.add(`remove`)

    showEl.classList.remove(`remove`)
    removeEl.classList.add(`remove`)
}

function showCookie() {
    cookieEl.classList.remove(`remove`)

    showEl.classList.add(`remove`)
    removeEl.classList.remove(`remove`)
}

removeEl.addEventListener(`click`, removeCookie)
showEl.addEventListener(`click`, showCookie)