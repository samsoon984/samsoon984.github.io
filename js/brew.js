function display(num) {
    const brewId = document.getElementById(num).style.display;
    if (brewId == "none") {
        document.getElementById(num).style.display = "inline";
    } else {
        document.getElementById(num).style.display = "none";
    }
}