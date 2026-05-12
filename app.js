function rollDice (){
    let dice = ['⚀', '⚁', '⚂', '⚃','⚄', '⚅'];
    let player1 = Math.floor(Math.random() *6);
    let player2 = Math.floor(Math.random() *6);

    document.getElementById('player-dice').innerHTML = dice[player1];
    document.getElementById('computer-dice').innerHTML = dice[player2];

    if (player1 > player2){
        document.getElementById("result").innerHTML = "You Win 🥳";
        player-score++;
        document.getElementById("player-score").innerHTML = player-score;
    }
else if(player2 > player1){
    document.getElementById("result").innerHTML = "Computer Win 👻";
    computer-score++;
    document.getElementById("computerscore").innerHTML = computerscore;

}
else{
    document.getElementById("result").innerHTML = "Draw 🤗";
}

}