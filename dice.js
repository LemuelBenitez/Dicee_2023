function switchDice(){
    const randomNumber1 = Math.floor(Math.random() * 6);
    const randomNumber2 = Math.floor(Math.random() * 6);
    const s = [];
    s.push("./images/dice1.png");
    s.push("./images/dice2.png");
    s.push("./images/dice3.png");
    s.push("./images/dice4.png");
    s.push("./images/dice5.png");
    s.push("./images/dice6.png");

    document.querySelector(".img1").src = s[randomNumber1]
    document.querySelector(".img2").src = s[randomNumber2]

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerText = " 🚩 Player 1 Wins!"
    }else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerText = "Player 2 Wins! 🚩"


    }else{
        document.querySelector("h1").innerText = "Draw!"
    }

}