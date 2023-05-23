let currMoleTile;
let currPlantTile;
//let score = 0;
let gameOver = false;

let count = 1;
let playerLives = 3;

const getScore = () => {
    return Number(document.getElementById("score").innerText);
};
  
const addToScore = (score) => {
    const currentScore = getScore();
    const newScore = currentScore + score;
    document.getElementById("score").innerText = newScore.toString();
};
// Initialisation du jeu au chargement de la page
window.onload = function() {
    setGame();
} 
// my quiz functions here
    let scoreBtn = document.getElementById('scoreBtn');
    let quizBtn = document.getElementById('doQuizBtn');
function scoreBtnClicked(){
    addToScore(-10) ;
    document.getElementById('quizOrScore').style.display='none';
    gameOver = false
}
function quizBtnClicked(){
    document.querySelector('.app').style.display='block';
    document.getElementById('body').style.background = 'url("/images/mario-bg-Opacity.jpg")';
    startQuiz();
    document.getElementById('quizOrScore').style.display='none';
    gameOver = false;
}
function QuizOrScore () {
    if (this.id == 'scoreBtn') { // si l'utilisateur a cliqué sur le bouton scoreBtn
      scoreBtnClicked();
    } else if (this.id == 'doQuizBtn') { // si l'utilisateur a cliqué sur le bouton doQuizBtn
      quizBtnClicked();
    }
}
scoreBtn.addEventListener ('click', QuizOrScore);
quizBtn.addEventListener ('click', QuizOrScore);

// Fonction qui crée la grille du jeu dans le HTML
function setGame() {
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
         tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);        
    }
    // Appel des fonctions qui placent les éléments à intervalles réguliers
    setInterval(setMole, 1000); // 1000 miliseconds = 1 second, every 1 second call setMole
    setInterval(setPlant, 2000); // 2000 miliseconds = 2 seconds, every 2 second call setPlant
}

// Fonction qui renvoie un nombre aléatoire entre 0 et Nombre de tuiles du jeu - 1
function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
    /*
    playerLives = 6;
   playerLivesCount.textContent = playerLives
    */
}
// Fonction qui place une taupe sur une tuile aléatoire
function setMole() {
    if (gameOver) {
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "/images/monty-mole.png";

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}
// Fonction qui place une plante sur une tuile aléatoire
function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "/images/piranha-plant.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}
// Fonction qui gère la sélection d'une tuile par le joueur
   function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        //score += 10;
        addToScore(10)
        //document.getElementById("score").innerText = score.toString(); //update score html
    }
    if (this == currPlantTile && playerLives!=0) {
        //score-=20;
        //document.getElementById("score").innerText = "Oops! " + score.toString(); //update score html
        playerLives-=1;
        document.getElementById("playerLives").innerText = playerLives.toString() ; 
        document.getElementById('quizOrScore').style.display='block';
        QuizOrScore();
        gameOver = true;
    }
    if(this == currPlantTile && playerLives==0){
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
        document.getElementById("playerLives").innerText = " You Lost :(   " + playerLives.toString(); 
        //document.querySelector('.app').style.display='block';
    }
    if (score == 20 && playerLives!=0){ // si l'utilisateur à gagnée
        alert("Congratulation !!! your score is 100");
        gameOver = true;
        setInterval(()=>{
            count++;
            location.replace('nextLevel.html')
        },1000)
    }
        
        /* another method */

        /*
        setInterval(()=>{
         count++
         location.replace('/quizz.html')   
        },1000)*/
        
}  



