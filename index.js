
import { Snake } from './snake';
import { generateFood, eat } from './food';
const canvas = document.getElementsByTagName('canvas')[0].getContext('2d');
const canvasHeight = 200;
const canvasWidth = 200;
const snake = new Snake(canvasWidth, canvasWidth);
let food = generateFood(canvasWidth, canvasHeight, snake);

document.addEventListener('keydown', (event) => {
  if (event.keyCode == 37 && snake.dx != 1) {
    // left arrow
    snake.dx = -1;
    snake.dy = 0;
  } else if (event.keyCode == 38  && snake.dy != 1) {
    // up arrow
    snake.dy = -1;
    snake.dx = 0;
  } else if (event.keyCode == 39 && snake.dx != -1) {
    // right arrow
    snake.dx = 1;
    snake.dy = 0;
  } else if (event.keyCode == 40  && snake.dy != -1) {
    // down arrow
    snake.dy = 1;
    snake.dx = 0;
  }
})

function update() {
  snake.update(canvas);
  if(snake.dead()){
    console.log('Game over');
  }
  if (eat(food, snake)) {
    food = generateFood(canvasWidth, canvasHeight, snake);
    snake.grow();
  }
}

function show() {
  canvas.clearRect(0, 0, canvasWidth, canvasHeight);
  canvas.fillStyle = 'red';
  canvas.fillRect(food.x, food.y, snake.width, snake.height);
  snake.show(canvas);
}

setInterval(() => {
  update();
  show();
}, 200);

