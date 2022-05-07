// Defining the position of the train,
// it has to be in the middle of the screen:

let screenWidth = 0;

function placeTrainInMiddle() {
  screenWidth = window.innerWidth;
  let train = document.getElementsByClassName("trainWrapper");

  function positionTrain() {
    let trainPosition = (screenWidth - train[0].clientWidth) / 2;
    train[0].style.marginLeft = `${trainPosition}px`;
  }
  positionTrain();
}

placeTrainInMiddle();

window.addEventListener("resize", checkScreeSize);
