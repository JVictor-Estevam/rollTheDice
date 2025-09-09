function rollTheDice() {
  var audio = document.getElementById("sound");
  audio.play();
  let min = Math.ceil(1);
  let max = Math.floor(6);

  const dices = new Map([
    [1, "./images/dice1.png"],
    [2, "./images/dice2.png"],
    [3, "./images/dice3.png"],
    [4, "./images/dice4.png"],
    [5, "./images/dice5.png"],
    [6, "./images/dice6.png"],
  ]);
  let num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  let num2 = Math.floor(Math.random() * (max - min + 1)) + min;

  let p1 = dices.get(num1);
  let p2 = dices.get(num2);

  document.getElementById("p1").setAttribute("src", p1);
  document.getElementById("p2").setAttribute("src", p2);

  if (num1 > num2) {
    document.getElementById("winner").textContent = "Player 1 VENCEU";
  } else if (num2 > num1) {
    document.getElementById("winner").textContent = "Player 2 VENCEU";
  } else {
    document.getElementById("winner").textContent = "EMPATE";
  }
}
