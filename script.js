let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let botDoorPath = "./assets/robot.svg";
let beachDoorPath = "./assets/beach.svg";
let spaceDoorPath = "./assets/space.svg";
let numClosedDoor = 3;
let openDoor1, openDoor2, openDoor3;
const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoor);
    switch (choreDoor) {
        case 0:
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case 1:
            openDoor2 = botDoorPath;
            openDoor1 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case 2:
            openDoor3 = botDoorPath;
            openDoor1 = beachDoorPath;
            openDoor2 = spaceDoorPath;
            break;
    }
}
doorImage1.onclick = () => {
    doorImage1.src = openDoor1;
}
doorImage2.onclick = () => {
    doorImage2.src = openDoor2;
}
doorImage3.onclick = () => {
    doorImage3.src = openDoor3;
}
randomChoreDoorGenerator();