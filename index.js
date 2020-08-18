import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from "./snake.js";
import {update as updateEat, draw as drawEat} from "./eat.js";
import {outsideGrid} from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameField = document.getElementById('game-field')

function main(currentTime) {
    if (gameOver) {
        if (confirm('You lose, press OK when restart game')) {
            window.location.reload()
        }
        return;
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateEat()
    checkDeath()
}

function draw() {
    gameField.innerHTML = ''
    drawSnake(gameField)
    drawEat(gameField)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}