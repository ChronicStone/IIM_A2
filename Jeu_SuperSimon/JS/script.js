var gameContainer = {
        arrayGameSession: [],
        arrayPlayerSession: [],
        compteurLevel: 0,
        clickedBtn: 0,
        indexUserPlay: 0
}

// On stock tous les sons dans un array qu'on appelle en fonction du btn
var soundStockage = [new Audio('./Sound/1.mp3'), new Audio('./Sound/2.mp3'), new Audio('./Sound/3.mp3'), new Audio('./Sound/4.mp3'), new Audio('./Sound/5.mp3'), new Audio('./Sound/6.mp3')];

// Fonction qui gère l'animation d'allumage des boutons
function lightButton(idcolor) {
    const activeStyle = 'b' + idcolor + '_active';
    document.getElementById(idcolor).classList.add(activeStyle);
    playAssocSound(idcolor);
    setTimeout(function() {
        document.getElementById(idcolor).classList.remove(activeStyle);                
    }, 500)
}

// On récup et joue le son associé au bouton passé en entrée
function playAssocSound(idcolor) {
    const selected = 'b' + idcolor;
    console.log(selected);
    soundStockage[idcolor - 1].play();
}

// Lit la séquence de couleurs a recopier avant que ca soit au tour du joueur
function startGameSession() {
    var i=0
    var stockSession = setInterval(function() {
        lightButton(gameContainer.arrayGameSession[i]);
        i++;
        if (i > gameContainer.arrayGameSession.length - 1) {
            clearInterval(stockSession);
          }
    }, 700)
}



// On recupere l'ID du bouton cliqué par le joueur
function checkClicked() {
    window.onclick = result => {
        if(result.target.id > 0 && result.target.id <= 6 && gameContainer.indexUserPlay < gameContainer.compteurLevel) {
            gameContainer.clickedBtn = result.target.id;
            lightButton(gameContainer.clickedBtn);
            gameContainer.indexUserPlay++;
        }
    }
}

function checkResultPlay() {
    
}


// On y gère tout le tour du joueur
function playerTurn() {
    checkClicked();
    gameContainer.arrayPlayerSession.push(gameContainer.clickedBtn);
    checkResultPlay();
}

function nextLevel() {
    gameContainer.compteurLevel++; // On passe au niveau suivant, donc on incrémente le compteur de lvl
    document.getElementById('countLvl').innerHTML = gameContainer.compteurLevel;
    console.log()
    gameContainer.arrayGameSession.push(Math.floor(Math.random() * 6) + 1);
    startGameSession();
}

function startGame() {
    nextLevel();
    playerTurn();
    
}