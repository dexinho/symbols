const addFiveStarButton = document.getElementById('addFiveStarsButton')
const addTenStarsButton = document.getElementById('addTenStarsButton')
const addOneStarButton = document.getElementById('addOneStarButton')
const removeAllButton = document.getElementById('removeAllButton')
const smallButtons = document.querySelectorAll('.smallButtons')
const deleteFiveButton = document.getElementById('deleteFive')
const deleteTenButton = document.getElementById('deleteTen')
const customSymbol = document.getElementById('customSymbol')
const deleteOneButton = document.getElementById('deleteOne')
const bigButtons = document.querySelectorAll('.bigButtons')
const symbolPlace = document.getElementById('symbolPlace')
const container = document.getElementById('container')
const chosenStar = document.createElement('button')
const slider = document.getElementById('slider')
const mainDiv = document.getElementById('mainDiv')
const eightOtherSymbols = document.querySelectorAll('.otherSymbols')
const extraSymbolsDiv = document.getElementById('eightExtraSymbolsDiv')
const secondSymbol = document.getElementById('secondSymbol')
const thirdSymbol = document.getElementById('thirdSymbol')
const fourthSymbol = document.getElementById('fourthSymbol')
const fifthSymbol = document.getElementById('fifthSymbol')
const sixthSymbol = document.getElementById('sixthSymbol')
const seventhSymbol = document.getElementById('seventhSymbol')
const eightSymbol = document.getElementById('eightSymbol')
const ninthSymbol = document.getElementById('ninthSymbol')
const getTestBtn = document.querySelectorAll('.testBtn')
const sliderAndNumbers = document.getElementById('sliderAndNumbers')
const numbers = document.getElementsByClassName('numbers')
const allButtons = document.querySelectorAll('.allButtons')

sliderAndNumbers.style.width = '100%'
sliderAndNumbers.style.display = 'flex'
sliderAndNumbers.style.justifyContent = 'center'
sliderAndNumbers.style.alignItems = 'center'

numbers[0].style.marginLeft = '20px'
numbers[1].style.marginRight = '20px'

chosenStar.style.border = '0px solid black'
chosenStar.style.backgroundColor = 'azure'

extraSymbolsDiv.style.width = '100%'
extraSymbolsDiv.style.height = '3.5%'
extraSymbolsDiv.style.display = 'flex'
extraSymbolsDiv.style.justifyContent = 'center'
extraSymbolsDiv.style.alignItems = 'center'
extraSymbolsDiv.style.margin = '25px 0'

mainDiv.style.width = '500px'
mainDiv.style.height = '650px'

chosenStar.innerText = '⭐'
chosenStar.style.display = 'inline-block'
chosenStar.style.textAlign = 'center'
chosenStar.style.height = '31px'
chosenStar.style.width = '10%'
chosenStar.className = 'testBtn'

symbolPlace.style.width = '70px'
symbolPlace.style.height = '70px'
symbolPlace.style.border = '1px solid red'
symbolPlace.style.borderRadius = '50%'
symbolPlace.style.display = 'flex'
symbolPlace.style.justifyContent = 'center'
symbolPlace.style.alignItems = 'center'
symbolPlace.style.marginBottom = '10px'
symbolPlace.append(chosenStar.innerText)
symbolPlace.style.margin = '90px auto 0 auto'
symbolPlace.style.fontSize = '30px'

container.style.wordWrap = 'breakword'
container.style.overflow = 'hidden'

slider.style.margin = '10px auto'
slider.style.maxWidth = '400px'
slider.style.width = '90%'
slider.value = 0
slider.min = 0
slider.max = 100

numbers[0].innerText = slider.min
numbers[1].innerText = slider.max

addOneStarButton.style.backgroundColor = 'skyblue'
addFiveStarButton.style.backgroundColor = 'yellowgreen'
addTenStarsButton.style.backgroundColor = 'pink'
deleteOneButton.style.backgroundColor = 'blue'
deleteFiveButton.style.backgroundColor = 'darkgreen'
deleteTenButton.style.backgroundColor = 'brown'

removeAllButton.style.backgroundColor = 'purple'
removeAllButton.style.marginTop = '10px'
customSymbol.style.backgroundColor = 'maroon'

container.style.width = '100%'
container.style.maxWidth = '500px'
container.style.height = '310px'
container.style.backgroundColor = 'azure'
container.style.marginBottom = '10px'

for (let i = 0; i < numbers.length; i++) {
    numbers[i].style.fontWeight = 'bold'
}

for (let i = 0; i < eightOtherSymbols.length; i++) {
    eightOtherSymbols[i].style.display = 'flex'
    eightOtherSymbols[i].style.justifyContent = 'center'
    eightOtherSymbols[i].style.alignItems = 'center'
    eightOtherSymbols[i].style.margin = '0 10px'
    eightOtherSymbols[i].style.width = '10%'
    eightOtherSymbols[i].style.height = '200%'
    eightOtherSymbols[i].style.borderRadius = '100%'
    eightOtherSymbols[i].style.border = '1px solid purple'
}

for (let i = 0; i < smallButtons.length; i++) {
    smallButtons[i].style.display = 'inline-block'
    smallButtons[i].style.width = '33%'
    smallButtons[i].style.height = '30px'
    smallButtons[i].style.maxWidth = '164px'
    smallButtons[i].style.margin = '10px auto'
    smallButtons[i].style.border = '1px solid black'
    smallButtons[i].style.color = 'white'
    smallButtons[i].style.borderRadius = '50px'
}

for (let i = 0; i < bigButtons.length; i++) {
    bigButtons[i].style.display = 'block'
    bigButtons[i].style.width = '300px'
    bigButtons[i].style.height = '30px'
    bigButtons[i].style.maxWidth = '250px'
    bigButtons[i].style.margin = '0 auto'
    bigButtons[i].style.border = '1px solid black'
    bigButtons[i].style.color = 'white'
    bigButtons[i].style.borderRadius = '10px'
}

for (let i = 0; i < eightOtherSymbols.length; i++) {
    eightOtherSymbols[i].style.position = 'absolute'
    eightOtherSymbols[i].style.width = '50px'
    eightOtherSymbols[i].style.height = '50px'
}

secondSymbol.style.margin = '50px 65px 340px 0'
thirdSymbol.style.position = 'absolute'
thirdSymbol.style.margin = '0px 160px 90px 0'
fourthSymbol.style.margin = '0px 0 90px 160px'
fifthSymbol.style.margin = '0 0 210px 160px'
sixthSymbol.style.margin = '0 160px 210px 0'
seventhSymbol.style.margin = '0 65px 0 0'
eightSymbol.style.margin = '0 0 0 65px'
ninthSymbol.style.margin = '50px 0px 340px 65px'

removeAllButton.style.marginTop = '0'

function addClickEffect(button, originalColor){

    button.style.backgroundColor = 'white'
    button.style.outline = '5px solid gold'

    setTimeout(() => {
        button.style.backgroundColor = originalColor
        button.style.outline = '0'
    }, 20);
}


function addStars(){
    let counter = 1
    
    addClickEffect(this, this.style.backgroundColor)

    if (this.id === 'addFiveStarsButton') counter = 5 
    else if (this.id === 'addTenStarsButton') counter = 10

    for (let i = 0; i < counter; i++) {
        if (container.childElementCount >= slider.max)
            break

        container.appendChild(chosenStar.cloneNode(true))
    }
    slider.value = container.childElementCount  
}

function removeStars(){
    let counter = 1
    const spanStars = document.querySelectorAll('span')

    addClickEffect(this, this.style.backgroundColor)

    if (this.id === 'removeAllButton') counter = container.childNodes.length;
    else if (this.id === 'deleteFive') counter = 5;
    else if (this.id === 'deleteTen') counter = 10;

    for (let i = counter - 1; i >= 0; i--) {
        if (container.childElementCount === 0) {
            break;
        }
        container.removeChild(container.lastChild)
    }

    slider.value = container.childElementCount
}

function symbolChoice(){

    let previousSymbol = chosenStar.innerText
    if (this.id === 'customSymbol')
        chosenStar.innerText = prompt('Input your desired symbol:')
    else {
        chosenStar.innerText = this.innerText
        addClickEffect(this, this.style.backgroundColor)
    }
    if (chosenStar.innerHTML === '') {
        chosenStar.innerHTML = previousSymbol
    }
    symbolPlace.innerText = chosenStar.innerHTML

    const otherSymbols = document.getElementsByClassName('otherSymbols')   
    for (let i = 0; i < otherSymbols.length; i++) {
        if (otherSymbols[i].innerText === symbolPlace.innerText)
            otherSymbols[i].innerText = previousSymbol
    }   
}

function sliderStars(){
    container.innerText = ''
    for (let i = 0; i < this.value; i++) {
        container.append(chosenStar.cloneNode(true))
    }
}

console.log(slider)

document.body.addEventListener('click', (event) => {
    if (event.target.matches('.testBtn') && !event.target.matches('.otherSymbols')) {
        event.target.innerText = chosenStar.innerText
    }
    else if (event.target.matches('.addButton')) {
        addStars.call(event.target)
    }
    else if (event.target.matches('.delButton')) {
        removeStars.call(event.target)
    }
    else if (event.target.matches('.otherSymbols')) {
        symbolChoice.call(event.target)
    }
    else if(event.target.matches('#customSymbol')) {
        symbolChoice.call(event.target)
    }
    // else if(event.target.matches('#slider')) {
    // }
})

allButtons.forEach(button => {
    button.addEventListener('mouseover', (event) => {
        event.target.style.outline = '2px solid black'
        event.target.style.color = 'black'

    })
    button.addEventListener('mouseout', (event) => {
        event.target.style.outline = '0'
        event.target.style.color = 'white'
    })
})

slider.oninput = sliderStars