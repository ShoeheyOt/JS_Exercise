const Move ={
 Heads:'heads',
 Tails:'tails' 
};
const compMove = computerMove();

function playGame(playerMove) {
  if (compMove === playerMove) {
    console.log(computerMove());
    alert (`You win. computer picked ${compMove}`);
  } else {
    console.log(computerMove());
    alert (`You lose. computer picked ${compMove}`);
  }
};

function computerMove (){
  let randomNum = Math.random();
  if (randomNum > 1 / 2) {
    return Move.Heads;
} else {
  return Move.Tails;
}}



