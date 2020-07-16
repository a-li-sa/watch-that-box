document.getElementById("button1").onclick = grow;

function grow() {
    document.getElementById("box").style.height = "200px";
}

document.getElementById("button2").onclick = blue;

function blue() {
    document.getElementById("box").style.backgroundColor = "blue";
}

document.getElementById("button3").onclick = fade;

function fade() {
    document.getElementById("box").style.opacity = "0.5";
}

document.getElementById("button4").onclick = right;

function right() {
    document.getElementById("box").style.transform = "translateX(50px)";
}

document.getElementById("button5").onclick = reset;

function reset() {
    document.getElementById("box").style="height:150px; width:150px; background-color:orange; margin:25px"
}