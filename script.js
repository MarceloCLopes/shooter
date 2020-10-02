const yourShip = document.querySelector(".player-shooter");
const playArea = document.querySelector("#main-play-game");

//Movimento e tiro da nave
function flyAhip(event) {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    moveUp();
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    moveDown();
  } else if (event.key === " ") {
    event.preventDefault();
    fireLaser();
  }
}

//Função de subir
function moveUp() {
  let topPosition = getComputedStyle(yourShip).getPropertyValue("top");
  if (topPosition === "0px") {
    return;
  } else {
    let position = parseInt(topPosition);
    position -= 50;
    yourShip.style.top = `${position}px`;
  }
}

//Função de descer
function moveDown() {
  let topPosition = getComputedStyle(yourShip).getPropertyValue("top");
  if (topPosition === "700px") {
    return
  } else {
    let position = parseInt(topPosition);
    position += 50;
    yourShip.style.top = `${position}px`;
  }
}

//Funcionalidade de tiro
function fireLaser() {
  let laser = createLaserElement();
  playArea.appendChild(laser);
  moveLaser();
}

//Função de criação do laser
function createLaserElement() {
  let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue("left"));
  let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue("top"));
  let newLaser = document.createElement("img");
  newLaser.src = "img/shoot.png";
  newLaser.classList.add("laser");
  newLaser.style.left = `${xPosition}px`;
  newLaser.style.top = `${yPosition - 10}px`;
  return newLaser;
}


window.addEventListener('keydown', flyAhip);