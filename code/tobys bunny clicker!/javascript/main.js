console.log("main.js sucsessfuly loaded")
var bunnyCount = 0;
var BunniesPerClick = 1;
function bunnyclick(){
    console.log("starting function : bunnyclick")
    bunnyCount=BunniesPerClick+bunnyCount;
    document.getElementById("clickcount").innerHTML = 'Bunnies: ' + bunnyCount;
    document.getElementById("bunniesperclickcount").innerHTML = 'Bunnies/c: ' + BunniesPerClick;
    console.log("Variable bunnyCount Changed New Value : ",bunnyCount)
    console.log("reached end of function : bunnyclick")
    if (bunnyCount > 10000) {
        alert ("You Won!")
    } else {
        
    }
}