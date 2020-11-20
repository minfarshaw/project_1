console.log('Yes Im connected');
// CACHED DOM NODES
const modal = document.getElementById("myModal");
const modalBody = document.getElementsByClassName("modal-body")[0];
const img = document.getElementById("myImg");

const rideButton = document.getElementById("rideBtn");
const newGameButton = document.getElementById("newGameBtn");
const getAdviceButton = document.getElementById("getAdviceBtn");
const answerQuestionButton = document.getElementById("answerQuestionBtn");

const closeSpan = document.getElementsByClassName("close")[0];
const closeButton = document.getElementsByClassName("close-button")[0];

const currentStatsContainer = document.querySelector('.life-stats');

const frightGameHome = document.querySelector("#fright-Game-home")

const floors = [
    {
        image: src="images/david-pumpkins.png",
        name: "David Pumpkins",
        points: 5,
        floorNumber: 10,
        catchphrase: "'How's it hangin'? I'm David Pumpkins, and I'm here to scare the HELL out of YOU!'"
    },
    {
        image: src="images/corpse-bride.png",
        name: "Corpse Bride",
        points: 5,
        floorNumber: 46,
        catchphrase: "'Winifred Mancheseter got cold feet, and hung herself in the honeymoon suiiiiiite!'"
    },
    {
        image: src="images/chainsaw-lady.png",
        name: "Chainsaw Lady",
        points: 5,
        floorNumber: 97,
        catchphrase: "'I'M CRAZY!'"
    },
    {
        image: src="images/decapitated-waiter.png",
        name: "Decapitating Waiter",
        points: 5,
        floorNumber: 12,
        catchphrase: "'Tonight's Special....YOUR HEAD!!!'"
    },
    {
        image: src="images/the-ring-girl.png",
        name: "Girl from The Ring",
        points: 5,
        floorNumber: 29,
        catchphrase: "'Can I sleep in your bed tonight?'"
    },
  ];

 const advice = [
    "Did you know this place used to be a movie studio? Crazy!",
    
    "My favorite floor is the one where you watch your hopes and dreams smashed to bits by Gritty",
    
    "I think these emotional support companions have gone too far. One lady brought in a goldfish. Carried the tank around and everything!",
    
    "This hotel has a 2 star rating on Yelp!",

    "Did you know my last name is yMarkandthefunkybunch? I wish I knew where it came from.",

    "I can't wait til I'm off. My friends and I are gonna have a viewing party for the new Paul Blart movie!",

    "You're not supposed to eat in here, but I brought in some deviled eggs. Hungry?",
    
  ];


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

    // // // Update points in DOM 
    // updateCurrentPoints() {
    // currentStatsContainer.innerHTML = `
    // <div> Get Points </div>
    // `
    //  fright-Game-home.appendChild(currentStatsContainer);
    // }
      
    //  
 
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

 function getFloor() {

    const randomNumber = Math.floor(Math.random() * Math.floor(floors.length-1));
    // console.log(randomNumber);
    return floors[randomNumber];

}

function getAdvice() {

    const randomNumber = Math.floor(Math.random() * Math.floor(advice.length-1));
    // console.log(randomNumber);
    // Set my function to pull from the array of objects
    return advice[randomNumber];
    
}

function answerQuestion() {

}

/* ======================
GLOBAL VARS
=========================*/

const firstPlayer = new Player("Player", 0);


newGameButton.onclick = function() {
    modal.style.display = "block";
    modalBody.innerHTML = 
    `<h1>Welcome to 100 Floors of Frights!</h1>
    <p>Here are the basic rules</p>`;
}

rideButton.onclick = function() {
    modal.style.display = "block";
    modalBody.innerHTML = floorArrival();
    
}

getAdviceButton.onclick = function() {
    modal.style.display = "block";
    modalBody.innerText = "Mark: " + getAdvice();
}

answerQuestionButton.onclick = function() {
    modal.style.display = "block";
    modalBody.innerText = "Mark: " + ();
}

function floorArrival () {
    let floor = getFloor();
    firstPlayer.addPoints(5);
    let arrivalMessage = "You have arrived at floor " + floor.floorNumber + ". " + floor.image;
    return arrivalMessage += " " + floor.catchphrase + " " + " You have earned " + floor.points + " points!";
    // Now give me my points
    
    
}   

// When the user clicks on <span> (x), close the modal
closeSpan.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks OK, close the modal
closeButton.onclick = function() {
    modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

