function biggerButton() {
    alert("Hello, world!");
    document.getElementById("textfield").style.fontSize = "2em";
}

function fancyButton() {
    alert("Styles incoming!");
    document.getElementById("textfield").style.fontWeight = "700";
    document.getElementById("textfield").style.color = "blue";
    document.getElementById("textfield").style.textDecoration = "underline";
}

function boringButton() {
    document.getElementById("textfield").style.fontWeight = "400";
    document.getElementById("textfield").style.color = "black";
    document.getElementById("textfield").style.textDecoration = "none";
}

function mooButton() {
    document.getElementById("textfield").value = document.getElementById("textfield").value.toUpperCase();  // Convert text in textarea to UpperCase
    var str = document.getElementById("textfield").value;
    var parts = str.split(".");
    str = parts.join("-Moo.");
    document.getElementById("textfield").value = str;

}
