var dice_roll_1=Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())+1;
var dice_roll_2=Math.floor(Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random())+1;
var dice_1=document.getElementsByClassName("dice_1")[0];
var dice_2=document.getElementsByClassName("dice_2")[0];
var dice_1_img="images/dice"+dice_roll_1.toString()+".png";
var dice_2_img="images/dice"+dice_roll_2.toString()+".png";
dice_1.setAttribute("src",dice_1_img);
dice_2.setAttribute("src",dice_2_img);
if(dice_roll_1>dice_roll_2)
document.querySelector(".header h1.result").textContent="🚩Player 1 wins!";
else if(dice_roll_1<dice_roll_2)
document.querySelector(".header h1.result").textContent="Player 2 wins!🚩";
else
document.querySelector(".header h1.result").textContent="Draw";