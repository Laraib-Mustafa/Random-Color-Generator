let button = document.getElementById("btn");
button.addEventListener("click", changeColor);

let colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "black",
    "white"
];

function changeColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomIndex];

/** Change the text color to white when the background becomes black.*/

    if (colors[randomIndex] == "white") {
    document.body.style.color = "black";
}
else if (colors[randomIndex] == "black") {
    document.body.style.color = "white";
}
else {
    document.body.style.color = "black";
}

/**Display the current color name. */

document.getElementById("colorName").innerHTML = colors[randomIndex];

}
