console.log('Yes Im connected');

/* ======================
CACHED DOM NODES
=========================*/

const frightGameHome = document.querySelector("#fright-Game-home")

const modal = document.getElementById("myModal");
const modalBody = document.getElementsByClassName("modal-body")[0];
const modalImg = document.getElementById("myImg");
const modalCloseSpan = document.getElementById("close");

const rideButton = document.getElementById("rideBtn");
const newGameButton = document.getElementById("newGameBtn");
const talkToMarkButton = document.getElementById("talkToMarkBtn");
const answerButton = document.getElementById("answer-btn");
const closeButton = document.getElementById("closeBtn");

const roundContainer = document.getElementById("round")
const currentStatsContainer = document.querySelector('.life-stats');
const questionText = document.getElementById("question");


/* ======================
GLOBAL VARS
=========================*/

const DAVID_PUMPKINS = "David S. Pumpkins";
let DAVID_PUMPKINS_IMAGE = "images/dp-giphy.gif";   
let DAVID_PUMPKINS_CATCHPHRASE = "'How's it hangin'? I'm David Pumpkins, and I'm here to scare the HELL out of YOU! Any questions?'"

let skeletons_image = "images/skeletons";
let skeletons_catchphrase = "Ready or not, here...we...dance?"

let mark_photo = "images/mark-2.png"

const losing_image = "images/so-afraid";
const winning_image = "images/winning-image";
const YOU_WIN_MESSAGE = "You have made it through 100 Floors of FRIGHTS! YOU WIN!!!";
const YOU_LOSE = "LOSER";

let round = 1;
let myFloors = [];
let myQuestions = [];
let currentQuestion = null;

const initLoadList = [
    {
        image: "images/corpse-bride.gif",
        name: "Corpse Bride",
        points: 10,
        floorNumber: 46,
        catchphrase: "'Winifred Mancheseter got cold feet, and hung herself in the honeymoon suiiiiiite!'"
    },
    {
        image: "images/chainsaw-lady.gif",
        name: "Chainsaw Lady",
        points: 10,
        floorNumber: 97,
        catchphrase: "'IT'S CRAZY CHAINSAW LADY AAAAAAAAHHHH!'"
    },
    {
        image: "images/decapitating-waiter.gif",
        name: "Decapitating Waiter",
        points: 5,
        floorNumber: 12,
        catchphrase: "'Tonight's Special....YOUR HEAD!!!'"
    },
    {
        image: "images/the-ring-girl.gif",
        name: "Girl from The Ring",
        points: 5,
        floorNumber: 29,
        catchphrase: "'Can I sleep in your bed tonight?'"
    },
    {
        image: "images/cullen-coven.png",
        name: "Vampires-Cullen",
        points: 5,
        floorNumber: 82,
        catchphrase: "'Ohhhh it's vampires, so scary. Wait...it's just the sparkly ones. Nevermind.'"
    },
    {
        image: "images/rowling.jpg",
        name: "JK Rowling",
        points: 5,
        floorNumber: 40,
        catchphrase: "'OH GOD, JK ROWLING IS WRITING ANOTHER TWEET. MAKE IT STOP, PLEASE!'"
    },
    {
        image: "images/murder-hornets.jpg",
        name: "Murder Hornets",
        points: 5,
        floorNumber: 17,
        catchphrase: "'MURDER HORNETS?! Not today, Satan! Don't need anymore horrors this year, be gone!'"
    },
    {
        image: "images/woman-laughing.jpg",
        name: "Surprise MLM Encounter",
        points: 5,
        floorNumber: 62,
        catchphrase: "SURPRISE MLM ENCOUNTER! Your new friend starts telling you about an amazing 'business opportunity' and asks if you want to be your own boss and take charge of your financial future."
    },
    {
        image: "images/vampires.jpg",
        name: "Vampires",
        points: 5,
        floorNumber: 35,
        catchphrase: "It's vampires! You're dead and out of this world! Noooooooo!"
    },
    {
        image: "images/grandpa.png",
        name: "Grandpa",
        points: 5,
        floorNumber: 71,
        catchphrase: "Grandpa corners you at Thanksgiving and asks you to fix his computer!"
    },
    {
        image: "images/sanderson-sisters.jpg",
        name: "Sanderson Sisters",
        points: 5,
        floorNumber: 6,
        catchphrase: "The Sanderson sisters are here to run amuck! Amuck! Amuck! Amuck!"
    },
    {
        image: "images/killer-klowns.jpg",
        name: "Killer Klowns",
        points: 5,
        floorNumber: 80,
        catchphrase: "It's the Killer Klowns from Outer Space! What? Pennywise is at the Chiropracter tonight so this is all we had!"
    },
    {
        image: "images/audit.jpg",
        name: "Tax Audit",
        points: 5,
        floorNumber: 19,
        catchphrase: "IT'S A TAX AUDIT! NOOOOOOOOOOO"
    }
  ];

const advice = [
    "Did you know this place used to be a hospital for radioactive Covid-19 patients? Crazy!",
    
    "My favorite floor is 42 because it's the answer to everything.",
    
    "I think these service animals have gone too far. One lady brought in a goldfish. Pulled the whole tank around in a red wagon!",
    
    "This hotel has a 2 star rating on Yelp!",

    "Did you know my middle name is yMarkandthefunkybunch? I wish I knew where it came from.",

    "I can't wait til I'm off. My friends and I are gonna have a viewing party for the new Paul Blart movie!",

    "You're not supposed to eat in here, but I brought in some deviled eggs. Hungry?",

    "I don't recommend eating the cotton candy sold in the lobby. I heard it's made from troll hair."
    
  ];

const initQuestionList = [
    {
        question: "TEMPLATE",
        answer: "TEMPLATE",
        wrong: {
            first: "FIRST",
            second: "SECOND",
            third: "THRID"
        }
    },
    {
        question: "Which food did Mark bring to work?",
        answer: "Deviled Eggs",
        wrong: {
            first: "Dunkaroos",
            second: "Dill Pickles",
            third: "Donuts"
        }
    },
    {
        question: "What is Mark's middle name?",
        answer: "yMarkandtheFunkyBunch",
        wrong: {
            first: "yourTerritory",
            second: "myWords",
            third: "getSetGo"
        }
    },
    {
        question: "What is the strangest service animal Mark has ever seen?",
        answer: "A goldfish",
        wrong: {
                first: "A peacock",
                second: "A raccoon",
                third: "A platypus"
            }
    },
    {
        question: "How many stars does this hotel have on Yelp?",
        answer: "2",
        wrong: {
                first: "0",
                second: "1",
                third: "3"
            }
    },
    {
        question: "What movie is Mark going to watch after his shift ends?",
        answer: "Paul Blart",
        wrong: {
                first: "Hotel Transylvania",
                second: "Grown Ups",
                third: "I Now Pronounce You Chuck and Larry"
            }
    },
    {
        question: "What is Mark's favorite floor?",
        answer: "42",
        wrong: {
                first: "41",
                second: "45",
                third: "47"
            }
    },
    {
        question: "What lobby food does Mark not recommend you eat?",
        answer: "Cotton Candy",
        wrong: {
                first: "Corndogs",
                second: "Deep fried candy bars",
                third: "Elephant Ears"
            }
    },
    {
        question: "What did this hotel used to be?",
        answer: "A hospital for radioactive Covid-19 patients",
        wrong: {
                first: "A highrise apartment building for superhero photographers",
                second: "An Amazon headquarters before it gentrified itself out of its own neighborhood",
                third: "A movie theater for action-packed rom-coms based on YA books"
            }
    }
];

/* ======================
CLASS OBJECTS
=========================*/

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
        this.updatePointsContainer();
    }

    removePoints (pointsToRemove) {
        this.points -= pointsToRemove;
        this.updatePointsContainer();
    }

    updatePointsContainer() {
        currentStatsContainer.innerHTML = `<div>Score: <span>${this.points}</span></div>`;
    }
}

class Floor {
    constructor (floorNumber, name, points, image, catchphrase) {
        this.floorNumber = floorNumber;
        this.name = name;
        this.points = points;
        this.image = image;
        this.catchphrase = catchphrase;
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

class Question {
    constructor (question, answer, wrong1, wrong2, wrong3) {
        this.question = question;
        this.answer = answer;
        this.wrong1 = wrong1;
        this.wrong2 = wrong2;
        this.wrong3 = wrong3;
    }

    getQuestion () {
        return this.question;
    }
    
    getAnswer () {
        return this.answer;
    }

    getFirstWrongAnswer() {
        return this.wrong1;
    }

    getSecondWrongAnswer() {
        return this.wrong2;
    }

    getThirdWrongAnswer() {
        return this.wrong3;
    }
}


/* =============================
FUNCTIONS
============================= */

function getFloor() {
    let max = myFloors.length;

    if (max === 0) {
        return null;
    }

    let randomNumber = Math.floor(Math.random() * (max - 1) + 1);

    return myFloors[randomNumber - 1];

}

function getQuestion() {
    let max = myQuestions.length;

    if (max === 0) {
        return null;
    }

    let randomNumber = Math.floor(Math.random() * (max - 1) + 1);
    
    return myQuestions[randomNumber];

}

function checkAnswer(guess) {
    if(guess === currentQuestion.answer) {
        // do correct answer action
        modalBody.innerText = "CORRECT!";
        firstPlayer.addPoints(5);
    } else {
        modalBody.innerText = "WRONG!"; 
    }

    myQuestions = myQuestions.filter(q => q.answer !== guess);
}

function talkToMark() {

    const randomNumber = Math.floor(Math.random() * Math.floor(advice.length-1));
    // console.log(randomNumber);
    // Set my function to pull from the array of objects
    return advice[randomNumber] + " <img src='" + mark_photo + "' />";
    
}

function getQuestions() {
    currentQuestion = getQuestion();

    if (currentQuestion == null) {
        return "<h1>Mark is tired of talking to you.</h1>";
    }

    return "<h1>" + currentQuestion.question + 
        "<div><button onclick='checkAnswer(\"" + currentQuestion.wrong1 + "\")'>" + currentQuestion.wrong1 + "</button>" +
            "<button onclick='checkAnswer(\"" + currentQuestion.wrong2 + "\")'>" + currentQuestion.wrong2 + "</button>" +
            "<button onclick='checkAnswer(\"" + currentQuestion.answer + "\")'>" + currentQuestion.answer +"</button>" +
            "<button onclick='checkAnswer(\"" + currentQuestion.wrong3 + "\")'>" + currentQuestion.wrong3 + "</button></div>";                
}

function populateMyFloors() {
    for (let i = 0; i < initLoadList.length; i++) {
        let newFloor = new Floor(initLoadList[i].floorNumber, initLoadList[i].name, initLoadList[i].points, initLoadList[i].image, initLoadList[i].catchphrase);
        myFloors.push(newFloor);
    }
}

function populateMyQuestions() {
    for (let i = 0; i < initQuestionList.length; i++) {
        let newQuestion = new Question(initQuestionList[i].question, initQuestionList[i].answer, initQuestionList[i].wrong.first, initQuestionList[i].wrong.second, initQuestionList[i].wrong.third );
        myQuestions.push(newQuestion);
    }
}

function getPercentageOfDP() {
    const numberOfDPFloors = myFloors.filter(f => f === davidPumpkins);
    return Math.floor(numberOfDPFloors.length * 100 / myFloors.length);
}

function addOrRemoveMrPumpkins() {
    if (getPercentageOfDP() < 50) {
        myFloors.push(davidPumpkins);
    } else if (getPercentageOfDP() > 75) {
        // Pop Pop Pop
        myFloors.pop();
    }
}

function floorArrival () {
    let floor = getFloor();

    if(checkGameEnd() === YOU_WIN_MESSAGE || floor === null) {
        return YOU_WIN_MESSAGE;
    } else if(checkGameEnd() === YOU_LOSE) {
        return "You have " + firstPlayer.points + " hitpoints! You have FAINTED from FEAR, as we knew you would! Any questions?"
    }

    addOrRemoveMrPumpkins();
    addSurpriseRound();
    console.log("Current # of David S. Pumpkins: " + getPercentageOfDP() + "%");

    if (floor !== davidPumpkins) {
        firstPlayer.addPoints(floor.points);

        let arrivalMessage = "You have arrived at Floor " + 
                                floor.floorNumber + " . " + 
                                floor.catchphrase + 
                                " <img src='" + floor.image + "' />" +
                                "You have earned " + floor.points + " points!";
        
        myFloors = myFloors.filter(f => f.name !== floor.name);

        return arrivalMessage;
        
    } else {
            firstPlayer.removePoints(5);
            
            return "OH NOOOOO! You have arrived at Floor " + 
                    floor.floorNumber + " . " + 
                    floor.catchphrase + " " + 
                    ". <img src='" + floor.image + "'>" +
                    " You have LOST " + floor.points + " points!";  
    }
} 

function checkWinningCondition() {
    let notDPFloors = myFloors.filter(f => f !== davidPumpkins);

    if (notDPFloors.length > 0) {
        return false;
    }

    return true;
}

function checkLosingCondition() {
    if (firstPlayer.getPoints() <= 0) {
        return true;
    } 

    return false;
}

function checkGameEnd () {
    if (checkWinningCondition()) {
        return YOU_WIN_MESSAGE;
    } else if(checkLosingCondition()) {
        return YOU_LOSE;
    }
}

function addSurpriseRound () {
    if (round >= 20) {
        let surpriseRound = new Floor(666, "Skeletons", -50, skeletons_image, skeletons_catchphrase);
        myFloors.push(surpriseRound);
    }
}


/* ======================
BUTTON ONCLICK FUNCTIONS
=========================*/

newGameButton.onclick = function newGameButtonClick() {
    modal.style.display = "block";
    modalBody.innerHTML = "<h1>Welcome to 100 Floors of Frights!</h1><p>Here are the basic rules</p>";
}

rideButton.onclick = function rideButtonClick() {
    modal.style.display = "block";
    modalBody.innerHTML = floorArrival(); 
    roundContainer.innerText = round++;
}

talkToMarkButton.onclick = function talkToMarkButtonClick() {
    modal.style.display = "block";
    modalBody.innerText = "Mark: " + talkToMark();
}

answerButton.onclick = function getAnswerButtonClick() {
    modal.style.display = "block";
    modalBody.innerHTML = getQuestions(); 
}

// When the user clicks on <span> (x), close the modal
modalCloseSpan.onclick = function modalCloseSpanClick() {
    modal.style.display = "none";
}

// When the user clicks OK, close the modal
closeButton.onclick = function closeButtonClick() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function modalHideOnClick(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/* ======================
ONLOAD
=========================*/

let firstPlayer = new Player("Spooper",10);
let davidPumpkins = new Floor(10, DAVID_PUMPKINS, 5, DAVID_PUMPKINS_IMAGE, DAVID_PUMPKINS_CATCHPHRASE);

populateMyFloors();
populateMyQuestions();


