console.log("CONDITIONAL STATEMENT");

var light = "green";

if (light == "red") {
    console.log("Stop");
}
else if (light == "white") {
    console.log("Wait");
}
else if (light == "green") {
    console.log("Go");
}
else {
    console.log("Invalid signal");
}

console.log("the next eg:");
var light = "Green"; 

if (light == "Green") {
    console.log("Go!");
} 
else if (light == "Yellow") {
    console.log("Slow down!");
} 
else if (light == "Red") {
    console.log("Stop!");
} 
else {
    console.log("Invalid traffic light");
}
 console.log("switch condition");
 var signal ="white"
 switch(signal){
    case "green":
        console.log("go");
        break;
    case "yellow":
        console.log("wait");
        break;
    case "red":
        console.log("stop");
        break;
    default :
        console.log("Invalid signal color");
    }

