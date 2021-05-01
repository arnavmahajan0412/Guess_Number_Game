let correct = getRandom();
let guesses = [];

window.onload = function(){

    document.getElementById("submit").addEventListener("click", playgame);
    document.getElementById("restart").addEventListener("click", initgame);
}
function playgame(){
    let number = document.getElementById("number-guess").value;
    display(number);
    //console.log(number);
    history(number);
    displayhistory();
   
}
function display(number){
    if (number > correct){
        showNumberabove();
    }
    else if(number == correct){
        showyouwon();
    }
    else {
        showNumberbelow();
    }
}
function getdialog(type, text){
    let dialog;
    switch(type){
        case "warning":
            dialog = "<div class ='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class ='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>";
    return dialog;
            
}
function getRandom()
{
    let random = Math.floor((Math.random() * 100) + 1);
    return random;
}
function showyouwon(){
    const text = "Awesome job, You got it!"
    let dialog = getdialog('won',text);
    document.getElementById("result").innerHTML = dialog;

}
function showNumberabove(){
    const text = "Your guess is too High!"
    let dialog = getdialog('warning',text);
    document.getElementById("result").innerHTML = dialog;

}
function showNumberbelow(){
    const text = "Your guess is too Low!"
    let dialog = getdialog('warning',text);
    document.getElementById("result").innerHTML = dialog;
}
function history(guess){
    guesses.push(guess);
}
function displayhistory(){
    let index = guesses.length - 1;
    let list = "<ul class='list-group'>";
    while(index >= 0){
        list += "<li class='list-group-item'>" + "You guessed " + guesses[index] + "</li>";
        index--;
    }
    list += '</ul>';
    document.getElementById("history").innerHTML = list;
}
function initgame(){
    correct = getRandom();
    document.getElementById("result").innerHTML = "";
    guesses = [];
    displayhistory();

}






