import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let eat = addRandomPositionEat()
const EXPANSION_RATE = 3

export function update() {
    if (onSnake(eat)) {
        expandSnake(EXPANSION_RATE)
        eat = addRandomPositionEat()
    }
}

export function draw(gameField) {
    const eatElement = document.createElement('div')
    eatElement.style.gridRowStart = eat.y
    eatElement.style.gridColumnStart = eat.x
    eatElement.classList.add('eat')
    gameField.appendChild(eatElement)
}

function addRandomPositionEat() {
    let newEatPosition
    while (newEatPosition == null || onSnake(newEatPosition)) {
        newEatPosition = randomGridPosition()
    }
    return newEatPosition
}