function buyitembunnyhouse() {
console.log("started function : buyitembunnyhouse")
if (bunnyCount > 19) {
    alert("Upgrade Ready - Click The Bunny To Continue")
    bunnyCount=bunnyCount-20;
    
    BunniesPerClick++;
} else {
alert("upgrade failed - not enough bunnies")}
console.log("reached end of function : buyitembunnyhouse")
}