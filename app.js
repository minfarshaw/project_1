console.log('Yes Im connected');
// CACHED DOM NODES

const beginButton = document.querySelector(".begin-game");
const letsGoBtn = document.querySelector('.lets-go');



class Player {
    constructor (name, hitpoints) {
        this.name = name;
        this.hitpoints = hitpoints;
    }
}

class Floor {
    constructor (name, points) {
        this.name = name;
        this.points = points;
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



/* =============================
EVENT LISTENERS
============================= */



/* ======================
GLOBAL VARS
=========================*/

const firstPlayer = new Player("Player", 0);

const floor41 = new Floor("Corpse Bride", 5);




// Get the modal
const modal = document.getElementById("myModal");


// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}