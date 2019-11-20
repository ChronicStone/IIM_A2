class Point {
    // On définit son constructeur
    constructor(b1, b2, b3, b4, b5, b6, level) {
      this.niveau = [b1, b2, b3, b4, b5, b6];
      this.level = level;
    }

}

/*
const handle = ev => {
    // Cas du bouton Ac
    if (ev.target.textContent === 'C') {
        $input.value = '';
        return;
    }

    if (ev.target.textContent === '=') {
        const operatorPosition = $input.value.search(/[\+\-\/\*]/g);

        const a = Number($input.value.slice(0, operatorPosition));
        const b = Number($input.value.slice(operatorPosition + 1));
        const operator = $input.value[operatorPosition];

        console.log($input.value.search(/[\+\-\/\*]/g)); 
        $input.value = dispatchActions(a, b, operator);       
        return;
    }

    console.log(ev.target.textContent);
    $input.value += ev.target.textContent;
}

*/







// Fonction pour la fermeture de la fenêtre des règles du jeu
function hideRules() {
    document.getElementById('rules').style.cssText = 'display:none;';
}

// Fonction pour afficher la fenêtre des règles
function showRules() {
    document.getElementById('rules').style.cssText = 'display:block;';
}