console.log('Yes Im connected');
// CACHED DOM NODES


class Player {
    constructor (name, points) {
        this.name = name;
        this.points = points;
    }

    getName () {
        return this.name;
    }

    getPoints () {
        return this.points;
    }

    addPoints (pointsToAdd) {
        this.points += pointsToAdd;
    }

    removePoints (pointsToRemove) {
        this.points -= pointsToRemove;
    }
}

class Floor {
    constructor (floor, name, points) {
        this.floor = floor;
        this.name = name;
        this.points = points;
    }

    getFloorNumber () {
        return this.floor;
    }

    getFloorName () {
        return this.name;
    }

    getFloorPoints () {
        return this.points;
    }
}

/* =============================
FUNCTIONS
============================= */


const randomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// console.log(randomInt(1,15));

 function visitFloor() {
    return randomInt(1, 15); 
}







/* ======================
GLOBAL VARS
=========================*/

const firstPlayer = new Player("Player", 0);

const floor41 = new Floor(41, "Corpse Bride", 5);

const floor79 = new Floor(71, "Chainsaw Lady", 5)




// Get the modal
const modal = document.getElementById("myModal");
const modalBody = document.getElementsByClassName("modal-body")[0];

// Get the button that opens the modal
const rideButton = document.getElementById("rideBtn");
const newGameButton = document.getElementById("newGameBtn");

// Get the <span> element that closes the modal
const closeSpan = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
rideButton.onclick = function() {
    modal.style.display = "block";
    modalBody.innerText = floorArrival();
}

function floorArrival () {
    let arrivalMessage = "You have arrived at floor " + visitFloor();
    return arrivalMessage += " So scary!";
}

newGameButton.onclick = function() {
    modal.style.display = "block";
    modalBody.innerText = "moooooooooo";
}

// When the user clicks on <span> (x), close the modal
closeSpan.onclick = function() {
    modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// modal[1].on('open', function () {
//     console.log("I fookin did it");
//   });
