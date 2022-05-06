alert("To play guess a number correctly from 0-20")
let nums = prompt("Enter your guess");
let soln= Math.floor(Math.random()*20);
document.getElementById('sol').innerHTML=`The guess is: ${soln}`
if(nums == soln){
    document.getElementById('demo').innerHTML="Correct champ!!!";
}else if(nums > 20){
    document.getElementById('res').innerHTML = "You exceeded the guess limit";
}else{
    document.getElementById('val').innerHTML="Keep trying you can do it";
}