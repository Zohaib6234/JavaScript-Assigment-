// var p1 = "Zohaib ALi";
// var p2 = "Madiha";
// var toss = Math.random() * 2;
// var convert = Math.floor(toss);

// if (convert==1) {document.write(p1 + "  Wins")

// } else {document.write(p2 + "  Wins")

// }




var num = +prompt("first number");
var opr = prompt("Enter operator (+, -, *, /):");
var by = +prompt("second number");

if ((num) && (by)) {
    var result;

    if (opr === "+") {
        result = num + by;
    } else if (opr === "-") {
        result = num - by
    } else if (opr === "*") {
        result = num * by
    } else if (opr === "/") {
        result = num / by
    } if (by !== 0) { num / by }
    else { console.log("kabhi nhi chalega") }
}else { "abhi bhi nhi chalega" }
    if (result !== undefined) { document.write("Result:  " + result) }
    else { "please sahi number dalen" }
