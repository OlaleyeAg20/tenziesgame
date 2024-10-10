// selecting necessary DOM elements
const boxContainer = document.querySelector('.boxContainer')
const btn = document.querySelector('.btn')
const btn2 = document.getElementById('btn2')
const winView = document.querySelector('.winView')
const timer = document.querySelector('.timer')


let gameEnded = false
let clicktracker = 0
let elements = []
const allEqual = arr => arr.every(val => val === arr[0]);


let numberArray = []

function render(){
    function checkGamOver(){
        if(allEqual(numberArray)){
            winView.style.display = 'flex'
            gameOutput.textContent = `You completed the game with ${clicktracker} clicks`
            gameEnded = true
            btn2.focus()
        }
    }
    clicktracker++
    
    numberArray = []

    for(let i = 0; i < 10; i++){
        let randomNumber = Math.floor(Math.random() * 6) + 1
        if(!elements.includes(i)){
            numberArray.push(randomNumber)
        }else{
            numberArray[i] = document.querySelectorAll('.box')[i].textContent
        }
    }
    
    let j = -1
    boxContainer.innerHTML = numberArray.map(e => {
        j++
        return `
            <button class="box" id=${j}>${e}</button>
        `
    }).join('')

    let box = document.querySelectorAll('.box')

    box.forEach(e => {
        e.addEventListener('click', () => {
                clicktracker++

                if(elements.includes(Number(e.id))){ 
                    elements.splice(elements.indexOf(Number(e.id)), 1)
                    e.classList.toggle('btnClicked')
                }else{
                    elements.push(Number(e.id))
                    e.classList.toggle('btnClicked')
                }
        })
})

elements.map(e => {
    document.querySelectorAll('.box')[e].classList.add('btnClicked')
})

checkGamOver()
}

render()

btn.addEventListener('click', () => {
    render()
})


function newGame(){
    elements = []
    numberArray = []
    clicktracker = 0
    gameEnded = false
    winView.style.display = 'none'
    render()
}


